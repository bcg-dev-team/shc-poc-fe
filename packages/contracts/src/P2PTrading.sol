// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SecurityToken.sol";
import "./InterestDistribution.sol";

/**
 * @title P2PTrading
 * @dev 기관투자자 간 P2P 거래 및 보유기간별 이자 정산
 */
contract P2PTrading {
    SecurityToken public securityToken;
    InterestDistribution public interestDistribution;
    
    struct Order {
        bytes32 orderId;
        bytes32 trancheId;
        address seller;
        uint256 amount;
        uint256 price; // 평가 가격 (상각후원가법 기준)
        uint256 createdAt;
        uint256 expiresAt;
        bool isActive;
        OrderType orderType;
    }
    
    enum OrderType { SELL, BUY }
    
    struct Trade {
        bytes32 tradeId;
        bytes32 orderId;
        bytes32 trancheId;
        address seller;
        address buyer;
        uint256 amount;
        uint256 price;
        uint256 holdingDays;
        uint256 settlementInterest;
        uint256 executedAt;
    }
    
    // State
    mapping(bytes32 => Order) public orders;
    mapping(bytes32 => Trade) public trades;
    mapping(address => bytes32[]) public userOrders;
    mapping(address => bytes32[]) public userTrades;
    
    bytes32[] public activeOrders;
    bytes32[] public completedTrades;
    
    uint256 public orderNonce;
    uint256 public tradeNonce;
    
    // Events
    event OrderCreated(bytes32 indexed orderId, bytes32 indexed trancheId, address indexed seller, uint256 amount, uint256 price);
    event OrderCancelled(bytes32 indexed orderId);
    event TradeExecuted(
        bytes32 indexed tradeId,
        bytes32 indexed orderId,
        address indexed seller,
        address buyer,
        uint256 amount,
        uint256 price,
        uint256 settlementInterest
    );
    event InterestSettled(bytes32 indexed tradeId, address indexed seller, uint256 amount);
    
    modifier onlyTokenHolder(bytes32 _trancheId) {
        require(securityToken.balanceOf(_trancheId, msg.sender) > 0, "Not a token holder");
        _;
    }
    
    constructor(address _securityToken, address _interestDistribution) {
        securityToken = SecurityToken(_securityToken);
        interestDistribution = InterestDistribution(_interestDistribution);
    }
    
    /**
     * @dev 매도 주문 생성
     */
    function createSellOrder(
        bytes32 _trancheId,
        uint256 _amount,
        uint256 _price,
        uint256 _expirationDays
    ) external onlyTokenHolder(_trancheId) returns (bytes32) {
        require(securityToken.balanceOf(_trancheId, msg.sender) >= _amount, "Insufficient balance");
        
        bytes32 orderId = keccak256(abi.encodePacked(msg.sender, orderNonce++, block.timestamp));
        
        orders[orderId] = Order({
            orderId: orderId,
            trancheId: _trancheId,
            seller: msg.sender,
            amount: _amount,
            price: _price,
            createdAt: block.timestamp,
            expiresAt: block.timestamp + (_expirationDays * 1 days),
            isActive: true,
            orderType: OrderType.SELL
        });
        
        activeOrders.push(orderId);
        userOrders[msg.sender].push(orderId);
        
        emit OrderCreated(orderId, _trancheId, msg.sender, _amount, _price);
        
        return orderId;
    }
    
    /**
     * @dev 주문 취소
     */
    function cancelOrder(bytes32 _orderId) external {
        Order storage order = orders[_orderId];
        require(order.seller == msg.sender, "Not order owner");
        require(order.isActive, "Order not active");
        
        order.isActive = false;
        
        emit OrderCancelled(_orderId);
    }
    
    /**
     * @dev 거래 체결 및 보유기간별 이자 정산
     * 단순 일할 계산 방식 적용
     */
    function executeTrade(bytes32 _orderId, uint256 _amount) external returns (bytes32) {
        Order storage order = orders[_orderId];
        require(order.isActive, "Order not active");
        require(order.amount >= _amount, "Amount exceeds order");
        require(block.timestamp <= order.expiresAt, "Order expired");
        require(msg.sender != order.seller, "Cannot buy own order");
        
        // 보유기간 계산
        uint256 holdingDays = _calculateHoldingDays(order.trancheId, order.seller);
        
        // 보유기간별 이자 정산 (단순 일할 계산)
        uint256 settlementInterest = _calculateSettlementInterest(
            order.trancheId,
            order.seller,
            _amount,
            holdingDays
        );
        
        // 거래 ID 생성
        bytes32 tradeId = keccak256(abi.encodePacked(_orderId, msg.sender, tradeNonce++, block.timestamp));
        
        // 거래 기록
        trades[tradeId] = Trade({
            tradeId: tradeId,
            orderId: _orderId,
            trancheId: order.trancheId,
            seller: order.seller,
            buyer: msg.sender,
            amount: _amount,
            price: order.price,
            holdingDays: holdingDays,
            settlementInterest: settlementInterest,
            executedAt: block.timestamp
        });
        
        // 주문 수량 감소
        order.amount -= _amount;
        if (order.amount == 0) {
            order.isActive = false;
        }
        
        // 토큰 전송 (실제로는 SecurityToken 컨트랙트를 통해 처리)
        // 여기서는 개념 확인을 위한 이벤트만 발행
        
        completedTrades.push(tradeId);
        userTrades[order.seller].push(tradeId);
        userTrades[msg.sender].push(tradeId);
        
        emit TradeExecuted(
            tradeId,
            _orderId,
            order.seller,
            msg.sender,
            _amount,
            order.price,
            settlementInterest
        );
        
        // 이자 정산 처리
        if (settlementInterest > 0) {
            emit InterestSettled(tradeId, order.seller, settlementInterest);
        }
        
        return tradeId;
    }
    
    /**
     * @dev 보유기간 계산 (일할 계산)
     * - 이자 지급 이력이 있으면: 마지막 이자 지급일로부터 현재까지의 경과 일수 계산
     * - 이자 지급 이력이 없으면: 스케줄 시작일로부터 현재까지의 경과 일수 계산
     */
    function _calculateHoldingDays(bytes32 _trancheId, address /* _holder */) internal view returns (uint256) {
        // 스케줄 정보 가져오기
        (
            ,
            ,
            ,
            uint256 paymentCount,

        ) = interestDistribution.getScheduleDetails(_trancheId);

        // 마지막 이자 지급 정보 가져오기
        if (paymentCount > 0) {
            uint256 lastPaymentIndex = paymentCount - 1;
            (
                uint256 paymentDate,
                ,
                bool isPaid
            ) = interestDistribution.interestPayments(_trancheId, lastPaymentIndex);

            if (isPaid && paymentDate > 0) {
                // 마지막 이자 지급일부터 현재까지의 일수
                uint256 holdingDays = (block.timestamp - paymentDate) / 1 days;
                return holdingDays;
            }
        }

        // 이자 지급이 없으면 스케줄 시작일부터 계산
        (
            ,
            ,
            ,
            uint256 startDate,
            ,
            ,
            ,

        ) = interestDistribution.schedules(_trancheId);

        if (startDate > 0) {
            uint256 holdingDays = (block.timestamp - startDate) / 1 days;
            return holdingDays;
        }

        return 0;
    }
    
    /**
     * @dev 보유기간별 이자 정산 계산 (단순 일할 계산)
     */
    function _calculateSettlementInterest(
        bytes32 _trancheId,
        address /* _seller */,
        uint256 _amount,
        uint256 _holdingDays
    ) internal view returns (uint256) {
        // InterestDistribution에서 이자율 정보 가져오기
        (
            uint256 principalAmount,
            uint256 interestRate,
            ,
            ,
            
        ) = interestDistribution.getScheduleDetails(_trancheId);
        
        if (principalAmount == 0) {
            return 0;
        }
        
        // 일할 계산
        // (원금 * 연이자율 * 보유일수) / (10000 * 365)
        uint256 dailyInterest = (_amount * interestRate * _holdingDays) / (10000 * 365);
        
        return dailyInterest;
    }
    
    /**
     * @dev 활성 주문 목록 조회
     */
    function getActiveOrders(bytes32 _trancheId) external view returns (bytes32[] memory) {
        uint256 count = 0;
        
        // 활성 주문 개수 세기
        for (uint256 i = 0; i < activeOrders.length; i++) {
            Order memory order = orders[activeOrders[i]];
            if (order.isActive && order.trancheId == _trancheId && block.timestamp <= order.expiresAt) {
                count++;
            }
        }
        
        // 결과 배열 생성
        bytes32[] memory result = new bytes32[](count);
        uint256 index = 0;
        
        for (uint256 i = 0; i < activeOrders.length; i++) {
            Order memory order = orders[activeOrders[i]];
            if (order.isActive && order.trancheId == _trancheId && block.timestamp <= order.expiresAt) {
                result[index] = activeOrders[i];
                index++;
            }
        }
        
        return result;
    }
    
    /**
     * @dev 사용자의 거래 내역 조회
     */
    function getUserTrades(address _user) external view returns (bytes32[] memory) {
        return userTrades[_user];
    }
    
    /**
     * @dev 거래 상세 정보 조회
     */
    function getTradeDetails(bytes32 _tradeId) external view returns (
        bytes32 trancheId,
        address seller,
        address buyer,
        uint256 amount,
        uint256 price,
        uint256 holdingDays,
        uint256 settlementInterest,
        uint256 executedAt
    ) {
        Trade memory trade = trades[_tradeId];
        return (
            trade.trancheId,
            trade.seller,
            trade.buyer,
            trade.amount,
            trade.price,
            trade.holdingDays,
            trade.settlementInterest,
            trade.executedAt
        );
    }
    
    /**
     * @dev 주문 상세 정보 조회
     */
    function getOrderDetails(bytes32 _orderId) external view returns (
        bytes32 trancheId,
        address seller,
        uint256 amount,
        uint256 price,
        uint256 createdAt,
        uint256 expiresAt,
        bool isActive
    ) {
        Order memory order = orders[_orderId];
        return (
            order.trancheId,
            order.seller,
            order.amount,
            order.price,
            order.createdAt,
            order.expiresAt,
            order.isActive
        );
    }
    
    /**
     * @dev 거래 가능 여부 확인
     */
    function canTrade(bytes32 _orderId, address _buyer, uint256 _amount) external view returns (bool) {
        Order memory order = orders[_orderId];
        
        if (!order.isActive) return false;
        if (order.amount < _amount) return false;
        if (block.timestamp > order.expiresAt) return false;
        if (_buyer == order.seller) return false;
        
        return true;
    }
}
