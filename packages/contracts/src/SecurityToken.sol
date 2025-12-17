// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title SecurityToken (ERC-1400 기반)
 * @dev 신한캐피탈 PF 증권형 토큰 - Tranche A/B 구조
 */
contract SecurityToken {
    string public name;
    string public symbol;
    uint8 public decimals = 18;
    
    // Tranche 구조
    enum TrancheType { SENIOR, JUNIOR }
    
    struct Tranche {
        bytes32 trancheId;
        string name;
        TrancheType trancheType;
        uint256 totalSupply;
        uint256 interestRate; // basis points (e.g., 600 = 6%)
        uint256 maturityDate;
        bool isActive;
    }
    
    // 토큰 홀더 정보
    struct Holder {
        bool isKYCVerified;
        bool isAccredited;
        uint256 lockupEnd;
    }
    
    // State variables
    mapping(bytes32 => Tranche) public tranches;
    mapping(bytes32 => mapping(address => uint256)) public balanceOfByTranche;
    mapping(address => Holder) public holders;
    mapping(address => bool) public isController;
    
    address public issuer;
    bytes32[] public trancheIds;
    
    // Events
    event TrancheCreated(bytes32 indexed trancheId, string name, TrancheType trancheType, uint256 interestRate);
    event TokensIssued(bytes32 indexed trancheId, address indexed to, uint256 amount);
    event TokensRedeemed(bytes32 indexed trancheId, address indexed from, uint256 amount);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event TransferByTranche(bytes32 indexed trancheId, address indexed from, address indexed to, uint256 value);
    
    modifier onlyIssuer() {
        require(msg.sender == issuer, "Only issuer");
        _;
    }
    
    modifier onlyController() {
        require(isController[msg.sender], "Only controller");
        _;
    }
    
    modifier isKYCVerified(address _investor) {
        require(holders[_investor].isKYCVerified, "KYC not verified");
        _;
    }
    
    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
        issuer = msg.sender;
        isController[msg.sender] = true;
    }
    
    /**
     * @dev Tranche 생성 (Tr-A: Senior 6%, Tr-B: Junior 12%)
     */
    function createTranche(
        bytes32 _trancheId,
        string memory _name,
        TrancheType _trancheType,
        uint256 _interestRate,
        uint256 _maturityDate
    ) external onlyIssuer {
        require(tranches[_trancheId].trancheId == bytes32(0), "Tranche already exists");
        
        tranches[_trancheId] = Tranche({
            trancheId: _trancheId,
            name: _name,
            trancheType: _trancheType,
            totalSupply: 0,
            interestRate: _interestRate,
            maturityDate: _maturityDate,
            isActive: true
        });
        
        trancheIds.push(_trancheId);
        
        emit TrancheCreated(_trancheId, _name, _trancheType, _interestRate);
    }
    
    /**
     * @dev KYC 인증
     */
    function verifyKYC(address _investor, bool _isAccredited) external onlyController {
        holders[_investor].isKYCVerified = true;
        holders[_investor].isAccredited = _isAccredited;
    }
    
    /**
     * @dev 토큰 발행 (일시대출 또는 한도대출)
     */
    function issueByTranche(
        bytes32 _trancheId,
        address _to,
        uint256 _amount
    ) public onlyIssuer isKYCVerified(_to) {
        require(tranches[_trancheId].isActive, "Tranche not active");
        
        tranches[_trancheId].totalSupply += _amount;
        balanceOfByTranche[_trancheId][_to] += _amount;
        
        emit TokensIssued(_trancheId, _to, _amount);
        emit TransferByTranche(_trancheId, address(0), _to, _amount);
    }
    
    /**
     * @dev 한도대출 추가 증액 (Tr-A만 해당)
     */
    function additionalIssuance(
        bytes32 _trancheId,
        address _to,
        uint256 _amount
    ) external onlyIssuer {
        require(tranches[_trancheId].trancheType == TrancheType.SENIOR, "Only Senior tranche");
        require(tranches[_trancheId].isActive, "Tranche not active");
        
        issueByTranche(_trancheId, _to, _amount);
    }
    
    /**
     * @dev P2P 거래 (보유기간별 이자 정산 포함)
     */
    function transferByTranche(
        bytes32 _trancheId,
        address _to,
        uint256 _amount
    ) external isKYCVerified(msg.sender) isKYCVerified(_to) {
        require(balanceOfByTranche[_trancheId][msg.sender] >= _amount, "Insufficient balance");
        require(block.timestamp >= holders[msg.sender].lockupEnd, "Tokens locked");
        
        balanceOfByTranche[_trancheId][msg.sender] -= _amount;
        balanceOfByTranche[_trancheId][_to] += _amount;
        
        emit TransferByTranche(_trancheId, msg.sender, _to, _amount);
    }
    
    /**
     * @dev 토큰 상환 (부분/전체)
     */
    function redeemByTranche(
        bytes32 _trancheId,
        address _from,
        uint256 _amount
    ) external onlyController {
        require(balanceOfByTranche[_trancheId][_from] >= _amount, "Insufficient balance");
        
        balanceOfByTranche[_trancheId][_from] -= _amount;
        tranches[_trancheId].totalSupply -= _amount;
        
        emit TokensRedeemed(_trancheId, _from, _amount);
        emit TransferByTranche(_trancheId, _from, address(0), _amount);
    }
    
    /**
     * @dev 트랜치 정보 조회
     */
    function getTrancheInfo(bytes32 _trancheId) external view returns (
        string memory _name,
        TrancheType _type,
        uint256 _totalSupply,
        uint256 _interestRate,
        uint256 _maturityDate
    ) {
        Tranche memory t = tranches[_trancheId];
        return (t.name, t.trancheType, t.totalSupply, t.interestRate, t.maturityDate);
    }
    
    /**
     * @dev 보유자의 트랜치별 잔액 조회
     */
    function balanceOf(bytes32 _trancheId, address _holder) external view returns (uint256) {
        return balanceOfByTranche[_trancheId][_holder];
    }
    
    /**
     * @dev 전체 트랜치 ID 목록
     */
    function getAllTranches() external view returns (bytes32[] memory) {
        return trancheIds;
    }
    
    /**
     * @dev Controller 권한 설정
     */
    function setController(address _controller, bool _status) external onlyIssuer {
        isController[_controller] = _status;
    }
    
    /**
     * @dev 락업 기간 설정
     */
    function setLockup(address _holder, uint256 _lockupEnd) external onlyController {
        holders[_holder].lockupEnd = _lockupEnd;
    }
}
