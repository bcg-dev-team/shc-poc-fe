// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SecurityToken.sol";

/**
 * @title InterestDistribution
 * @dev 자동 이자 배분 및 상환 처리 컨트랙트
 * - 3개월 후불 방식
 * - 원금 80% 부분상환 후 최종 상환
 */
contract InterestDistribution {
    SecurityToken public securityToken;
    address public trustee; // 신탁사
    
    struct InterestPayment {
        uint256 paymentDate;
        uint256 amount;
        bool isPaid;
    }
    
    struct RedemptionSchedule {
        bytes32 trancheId;
        uint256 principalAmount;
        uint256 interestRate;
        uint256 startDate;
        uint256 maturityDate;
        uint256 nextPaymentDate;
        uint256 paymentCount;
        bool isActive;
    }
    
    // 상환 스케줄
    mapping(bytes32 => RedemptionSchedule) public schedules;
    mapping(bytes32 => mapping(uint256 => InterestPayment)) public interestPayments;
    mapping(bytes32 => uint256) public totalInterestPaid;
    
    // 보유기간별 이자 정산 (P2P 거래용)
    struct HoldingPeriod {
        address holder;
        uint256 startDate;
        uint256 endDate;
        uint256 amount;
    }
    
    mapping(bytes32 => mapping(address => HoldingPeriod[])) public holdingHistory;
    
    uint256 public constant PAYMENT_INTERVAL = 90 days; // 3개월
    uint256 public constant BASIS_POINTS = 10000;
    
    event InterestScheduled(bytes32 indexed trancheId, uint256 paymentDate, uint256 amount);
    event InterestPaid(bytes32 indexed trancheId, uint256 indexed paymentIndex, uint256 amount);
    event PartialRedemption(bytes32 indexed trancheId, uint256 amount, uint256 percentage);
    event FinalRedemption(bytes32 indexed trancheId, uint256 amount);
    event HoldingPeriodRecorded(bytes32 indexed trancheId, address indexed holder, uint256 startDate);
    
    modifier onlyTrustee() {
        require(msg.sender == trustee, "Only trustee");
        _;
    }
    
    constructor(address _securityToken) {
        securityToken = SecurityToken(_securityToken);
        trustee = msg.sender;
    }
    
    /**
     * @dev 상환 스케줄 생성
     */
    function createRedemptionSchedule(
        bytes32 _trancheId,
        uint256 _principalAmount,
        uint256 _interestRate,
        uint256 _maturityDate
    ) external onlyTrustee {
        require(!schedules[_trancheId].isActive, "Schedule already exists");
        
        schedules[_trancheId] = RedemptionSchedule({
            trancheId: _trancheId,
            principalAmount: _principalAmount,
            interestRate: _interestRate,
            startDate: block.timestamp,
            maturityDate: _maturityDate,
            nextPaymentDate: block.timestamp + PAYMENT_INTERVAL,
            paymentCount: 0,
            isActive: true
        });
        
        // 이자 지급 스케줄 자동 생성
        _scheduleInterestPayments(_trancheId);
    }
    
    /**
     * @dev 이자 지급 스케줄 자동 생성
     */
    function _scheduleInterestPayments(bytes32 _trancheId) internal {
        RedemptionSchedule storage schedule = schedules[_trancheId];
        uint256 paymentDate = schedule.nextPaymentDate;
        uint256 index = 0;
        
        while (paymentDate <= schedule.maturityDate) {
            uint256 interestAmount = _calculateInterest(
                schedule.principalAmount,
                schedule.interestRate,
                PAYMENT_INTERVAL
            );
            
            interestPayments[_trancheId][index] = InterestPayment({
                paymentDate: paymentDate,
                amount: interestAmount,
                isPaid: false
            });
            
            emit InterestScheduled(_trancheId, paymentDate, interestAmount);
            
            paymentDate += PAYMENT_INTERVAL;
            index++;
        }
    }
    
    /**
     * @dev 이자 계산 (3개월 기준)
     */
    function _calculateInterest(
        uint256 _principal,
        uint256 _rate,
        uint256 _period
    ) internal pure returns (uint256) {
        // 연 이자율을 기간에 맞게 계산
        // _rate는 basis points (예: 600 = 6%)
        uint256 yearlyInterest = (_principal * _rate) / BASIS_POINTS;
        uint256 periodInterest = (yearlyInterest * _period) / 365 days;
        return periodInterest;
    }
    
    /**
     * @dev 이자 지급 처리 (3개월 후불)
     */
    function payInterest(bytes32 _trancheId, uint256 _paymentIndex) external onlyTrustee {
        InterestPayment storage payment = interestPayments[_trancheId][_paymentIndex];
        require(!payment.isPaid, "Already paid");
        require(block.timestamp >= payment.paymentDate, "Not yet due");
        
        payment.isPaid = true;
        totalInterestPaid[_trancheId] += payment.amount;
        
        // 실제 자금 이체는 off-chain에서 처리하고 기록만 온체인에 저장
        emit InterestPaid(_trancheId, _paymentIndex, payment.amount);
        
        schedules[_trancheId].paymentCount++;
    }
    
    /**
     * @dev 부분 상환 처리 (80%)
     */
    function partialRedemption(bytes32 _trancheId, uint256 _percentage) external onlyTrustee {
        require(_percentage <= 100, "Invalid percentage");
        RedemptionSchedule storage schedule = schedules[_trancheId];
        require(schedule.isActive, "Schedule not active");
        
        uint256 redemptionAmount = (schedule.principalAmount * _percentage) / 100;
        
        // 원금 비례 감소
        schedule.principalAmount -= redemptionAmount;
        
        emit PartialRedemption(_trancheId, redemptionAmount, _percentage);
    }
    
    /**
     * @dev 최종 상환 처리
     */
    function finalRedemption(bytes32 _trancheId) external onlyTrustee {
        RedemptionSchedule storage schedule = schedules[_trancheId];
        require(schedule.isActive, "Schedule not active");
        require(block.timestamp >= schedule.maturityDate, "Not yet matured");
        
        uint256 finalAmount = schedule.principalAmount;
        schedule.principalAmount = 0;
        schedule.isActive = false;
        
        emit FinalRedemption(_trancheId, finalAmount);
    }
    
    /**
     * @dev P2P 거래 시 보유기간 기록
     */
    function recordHoldingPeriod(
        bytes32 _trancheId,
        address _holder,
        uint256 _amount,
        uint256 _startDate
    ) external {
        require(msg.sender == address(securityToken), "Only token contract");
        
        holdingHistory[_trancheId][_holder].push(HoldingPeriod({
            holder: _holder,
            startDate: _startDate,
            endDate: block.timestamp,
            amount: _amount
        }));
        
        emit HoldingPeriodRecorded(_trancheId, _holder, _startDate);
    }
    
    /**
     * @dev 보유기간별 이자 정산 계산
     */
    function calculateProRataInterest(
        bytes32 _trancheId,
        address _holder
    ) external view returns (uint256) {
        HoldingPeriod[] memory periods = holdingHistory[_trancheId][_holder];
        uint256 totalInterest = 0;
        
        RedemptionSchedule memory schedule = schedules[_trancheId];
        
        for (uint256 i = 0; i < periods.length; i++) {
            uint256 holdingDays = (periods[i].endDate - periods[i].startDate) / 1 days;
            uint256 periodInterest = _calculateInterest(
                periods[i].amount,
                schedule.interestRate,
                holdingDays * 1 days
            );
            totalInterest += periodInterest;
        }
        
        return totalInterest;
    }
    
    /**
     * @dev 다음 이자 지급일 조회
     */
    function getNextPaymentDate(bytes32 _trancheId) external view returns (uint256) {
        RedemptionSchedule memory schedule = schedules[_trancheId];
        uint256 nextIndex = schedule.paymentCount;
        
        if (interestPayments[_trancheId][nextIndex].paymentDate == 0) {
            return 0;
        }
        
        return interestPayments[_trancheId][nextIndex].paymentDate;
    }
    
    /**
     * @dev 누적 이자 지급액 조회
     */
    function getTotalInterestPaid(bytes32 _trancheId) external view returns (uint256) {
        return totalInterestPaid[_trancheId];
    }
    
    /**
     * @dev 상환 스케줄 상세 조회
     */
    function getScheduleDetails(bytes32 _trancheId) external view returns (
        uint256 principalAmount,
        uint256 interestRate,
        uint256 nextPaymentDate,
        uint256 paymentCount,
        bool isActive
    ) {
        RedemptionSchedule memory schedule = schedules[_trancheId];
        return (
            schedule.principalAmount,
            schedule.interestRate,
            schedule.nextPaymentDate,
            schedule.paymentCount,
            schedule.isActive
        );
    }
    
    /**
     * @dev 신탁사 변경
     */
    function setTrustee(address _newTrustee) external onlyTrustee {
        trustee = _newTrustee;
    }
}
