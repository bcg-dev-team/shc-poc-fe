// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title AssetValuation
 * @dev 자산 평가 컨트랙트 - 상각후원가법 기준
 */
contract AssetValuation {
    
    struct ValuationData {
        bytes32 trancheId;
        uint256 faceValue;          // 액면가
        uint256 bookValue;           // 장부가액
        uint256 amortizedCost;       // 상각후원가
        uint256 fairValue;           // 공정가치 (참고용)
        uint256 lastUpdateTime;
        bool isActive;
    }
    
    struct AmortizationSchedule {
        uint256 period;              // 기간 (월)
        uint256 principalPayment;    // 원금 상환액
        uint256 interestPayment;     // 이자 지급액
        uint256 remainingBalance;    // 잔여 원금
        bool isPaid;
    }
    
    // State
    mapping(bytes32 => ValuationData) public valuations;
    mapping(bytes32 => mapping(uint256 => AmortizationSchedule)) public amortizationSchedules;
    mapping(bytes32 => uint256) public schedulePeriods;
    
    address public valuationOracle;
    
    // Events
    event ValuationUpdated(bytes32 indexed trancheId, uint256 amortizedCost, uint256 fairValue, uint256 timestamp);
    event AmortizationScheduleCreated(bytes32 indexed trancheId, uint256 periods);
    event PeriodAmortized(bytes32 indexed trancheId, uint256 period, uint256 amount);
    
    modifier onlyOracle() {
        require(msg.sender == valuationOracle, "Only oracle");
        _;
    }
    
    constructor() {
        valuationOracle = msg.sender;
    }
    
    /**
     * @dev 초기 평가 데이터 설정
     */
    function initializeValuation(
        bytes32 _trancheId,
        uint256 _faceValue,
        uint256 _bookValue
    ) external onlyOracle {
        require(!valuations[_trancheId].isActive, "Already initialized");
        
        valuations[_trancheId] = ValuationData({
            trancheId: _trancheId,
            faceValue: _faceValue,
            bookValue: _bookValue,
            amortizedCost: _bookValue, // 초기에는 장부가액과 동일
            fairValue: _bookValue,
            lastUpdateTime: block.timestamp,
            isActive: true
        });
        
        emit ValuationUpdated(_trancheId, _bookValue, _bookValue, block.timestamp);
    }
    
    /**
     * @dev 상각 스케줄 생성
     */
    function createAmortizationSchedule(
        bytes32 _trancheId,
        uint256 _periods,
        uint256 _totalPrincipal,
        uint256 _totalInterest
    ) external onlyOracle {
        require(valuations[_trancheId].isActive, "Valuation not initialized");
        
        uint256 principalPerPeriod = _totalPrincipal / _periods;
        uint256 interestPerPeriod = _totalInterest / _periods;
        uint256 remainingBalance = _totalPrincipal;
        
        for (uint256 i = 0; i < _periods; i++) {
            amortizationSchedules[_trancheId][i] = AmortizationSchedule({
                period: i,
                principalPayment: principalPerPeriod,
                interestPayment: interestPerPeriod,
                remainingBalance: remainingBalance,
                isPaid: false
            });
            
            remainingBalance -= principalPerPeriod;
        }
        
        schedulePeriods[_trancheId] = _periods;
        
        emit AmortizationScheduleCreated(_trancheId, _periods);
    }
    
    /**
     * @dev 상각후원가 계산 및 업데이트 (기본 방법)
     * 원금 - 상환액 + 미수이자
     */
    function updateAmortizedCost(
        bytes32 _trancheId,
        uint256 _principalRedemption,
        uint256 _accruedInterest
    ) external onlyOracle {
        ValuationData storage valuation = valuations[_trancheId];
        require(valuation.isActive, "Valuation not active");
        
        // 상각후원가 = 이전 장부가액 - 원금상환 + 미수이자
        uint256 newAmortizedCost = valuation.amortizedCost - _principalRedemption + _accruedInterest;
        
        valuation.amortizedCost = newAmortizedCost;
        valuation.lastUpdateTime = block.timestamp;
        
        emit ValuationUpdated(_trancheId, newAmortizedCost, valuation.fairValue, block.timestamp);
    }
    
    /**
     * @dev 공정가치 업데이트 (참고용, DCF 등 외부 계산 결과)
     */
    function updateFairValue(
        bytes32 _trancheId,
        uint256 _fairValue
    ) external onlyOracle {
        ValuationData storage valuation = valuations[_trancheId];
        require(valuation.isActive, "Valuation not active");
        
        valuation.fairValue = _fairValue;
        valuation.lastUpdateTime = block.timestamp;
        
        emit ValuationUpdated(_trancheId, valuation.amortizedCost, _fairValue, block.timestamp);
    }
    
    /**
     * @dev 기간별 상각 처리
     */
    function processAmortization(bytes32 _trancheId, uint256 _period) external onlyOracle {
        AmortizationSchedule storage schedule = amortizationSchedules[_trancheId][_period];
        require(!schedule.isPaid, "Already processed");
        
        schedule.isPaid = true;
        
        // 상각후원가 업데이트
        ValuationData storage valuation = valuations[_trancheId];
        valuation.amortizedCost = schedule.remainingBalance;
        valuation.lastUpdateTime = block.timestamp;
        
        emit PeriodAmortized(_trancheId, _period, schedule.principalPayment);
        emit ValuationUpdated(_trancheId, schedule.remainingBalance, valuation.fairValue, block.timestamp);
    }
    
    /**
     * @dev 현재 상각후원가 조회
     */
    function getAmortizedCost(bytes32 _trancheId) external view returns (uint256) {
        return valuations[_trancheId].amortizedCost;
    }
    
    /**
     * @dev 공정가치 조회
     */
    function getFairValue(bytes32 _trancheId) external view returns (uint256) {
        return valuations[_trancheId].fairValue;
    }
    
    /**
     * @dev 전체 평가 데이터 조회
     */
    function getValuationData(bytes32 _trancheId) external view returns (
        uint256 faceValue,
        uint256 bookValue,
        uint256 amortizedCost,
        uint256 fairValue,
        uint256 lastUpdateTime
    ) {
        ValuationData memory valuation = valuations[_trancheId];
        return (
            valuation.faceValue,
            valuation.bookValue,
            valuation.amortizedCost,
            valuation.fairValue,
            valuation.lastUpdateTime
        );
    }
    
    /**
     * @dev 상각 스케줄 조회
     */
    function getAmortizationSchedule(bytes32 _trancheId, uint256 _period) external view returns (
        uint256 principalPayment,
        uint256 interestPayment,
        uint256 remainingBalance,
        bool isPaid
    ) {
        AmortizationSchedule memory schedule = amortizationSchedules[_trancheId][_period];
        return (
            schedule.principalPayment,
            schedule.interestPayment,
            schedule.remainingBalance,
            schedule.isPaid
        );
    }
    
    /**
     * @dev 전체 상각 스케줄 기간 수 조회
     */
    function getTotalPeriods(bytes32 _trancheId) external view returns (uint256) {
        return schedulePeriods[_trancheId];
    }
    
    /**
     * @dev 할인율 적용 현재가치 계산 (DCF 보조 계산)
     */
    function calculatePresentValue(
        uint256 _futureValue,
        uint256 _discountRate, // basis points
        uint256 _periods
    ) public pure returns (uint256) {
        // PV = FV / (1 + r)^n
        // 간단한 계산을 위해 복리 계산 대신 단순화
        uint256 discountFactor = 10000 + (_discountRate * _periods / 12); // 연간 할인율
        return (_futureValue * 10000) / discountFactor;
    }
    
    /**
     * @dev Oracle 권한 변경
     */
    function setOracle(address _newOracle) external onlyOracle {
        valuationOracle = _newOracle;
    }
    
    /**
     * @dev 평가 데이터 비활성화
     */
    function deactivateValuation(bytes32 _trancheId) external onlyOracle {
        valuations[_trancheId].isActive = false;
    }
}
