const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("P2PTrading - 기관투자자 간 P2P 거래", function () {
  let securityToken, interestDistribution, p2pTrading;
  let issuer, trustee, investor1, investor2, investor3;
  let trancheA;

  const TRANCHE_A_RATE = 600; // 6%
  const ONE_YEAR = 365 * 24 * 60 * 60;
  const ONE_DAY = 24 * 60 * 60;

  beforeEach(async function () {
    [issuer, trustee, investor1, investor2, investor3] = await ethers.getSigners();

    // SecurityToken 배포
    const SecurityToken = await ethers.getContractFactory("SecurityToken");
    securityToken = await SecurityToken.deploy(
      "Shinhan Capital PF Security Token",
      "SHC-PF"
    );
    await securityToken.waitForDeployment();

    // InterestDistribution 배포
    const InterestDistribution = await ethers.getContractFactory("InterestDistribution");
    interestDistribution = await InterestDistribution.deploy(
      await securityToken.getAddress()
    );
    await interestDistribution.waitForDeployment();

    // P2PTrading 배포
    const P2PTrading = await ethers.getContractFactory("P2PTrading");
    p2pTrading = await P2PTrading.deploy(
      await securityToken.getAddress(),
      await interestDistribution.getAddress()
    );
    await p2pTrading.waitForDeployment();

    // Tranche 설정
    trancheA = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));
    const maturityDate = (await time.latest()) + ONE_YEAR;

    await securityToken.createTranche(
      trancheA,
      "Tranche A - Senior",
      0,
      TRANCHE_A_RATE,
      maturityDate
    );

    // 상환 스케줄 생성
    await interestDistribution.setTrustee(trustee.address);
    await interestDistribution.connect(trustee).createRedemptionSchedule(
      trancheA,
      ethers.parseEther("10000000000"),
      TRANCHE_A_RATE,
      maturityDate
    );

    // 투자자 KYC 인증 및 토큰 발행
    await securityToken.verifyKYC(investor1.address, true);
    await securityToken.verifyKYC(investor2.address, true);
    await securityToken.verifyKYC(investor3.address, true);

    const amount = ethers.parseEther("5000000000"); // 50억
    await securityToken.issueByTranche(trancheA, investor1.address, amount);
  });

  describe("시나리오 1: 매도 주문 생성", function () {
    it("1-1. 매도 주문 생성 성공", async function () {
      const sellAmount = ethers.parseEther("1000000000"); // 10억
      const price = ethers.parseEther("1000000000"); // 10억 (평가가격)
      const expirationDays = 30;

      await expect(
        p2pTrading.connect(investor1).createSellOrder(
          trancheA,
          sellAmount,
          price,
          expirationDays
        )
      ).to.emit(p2pTrading, "OrderCreated");

      const activeOrders = await p2pTrading.getActiveOrders(trancheA);
      expect(activeOrders.length).to.equal(1);
    });

    it("1-2. 매도 주문 상세 정보 확인", async function () {
      const sellAmount = ethers.parseEther("1000000000");
      const price = ethers.parseEther("1000000000");
      const expirationDays = 30;

      const tx = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        sellAmount,
        price,
        expirationDays
      );

      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      const orderId = p2pTrading.interface.parseLog(event).args.orderId;

      const orderDetails = await p2pTrading.getOrderDetails(orderId);
      expect(orderDetails.trancheId).to.equal(trancheA);
      expect(orderDetails.seller).to.equal(investor1.address);
      expect(orderDetails.amount).to.equal(sellAmount);
      expect(orderDetails.price).to.equal(price);
      expect(orderDetails.isActive).to.be.true;
    });

    it("1-3. 잔액 부족 시 주문 생성 실패", async function () {
      const balance = await securityToken.balanceOf(trancheA, investor1.address);
      const excessAmount = balance + ethers.parseEther("1000000000");

      await expect(
        p2pTrading.connect(investor1).createSellOrder(
          trancheA,
          excessAmount,
          ethers.parseEther("1000000000"),
          30
        )
      ).to.be.revertedWith("Insufficient balance");
    });

    it("1-4. 토큰 미보유자 주문 생성 실패", async function () {
      const [, , , , nonHolder] = await ethers.getSigners();
      await securityToken.verifyKYC(nonHolder.address, true);

      await expect(
        p2pTrading.connect(nonHolder).createSellOrder(
          trancheA,
          ethers.parseEther("1000000000"),
          ethers.parseEther("1000000000"),
          30
        )
      ).to.be.revertedWith("Not a token holder");
    });

    it("1-5. 여러 매도 주문 생성", async function () {
      const amount1 = ethers.parseEther("500000000");
      const amount2 = ethers.parseEther("300000000");
      const amount3 = ethers.parseEther("200000000");

      await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        amount1,
        ethers.parseEther("500000000"),
        30
      );

      await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        amount2,
        ethers.parseEther("300000000"),
        30
      );

      await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        amount3,
        ethers.parseEther("200000000"),
        30
      );

      const activeOrders = await p2pTrading.getActiveOrders(trancheA);
      expect(activeOrders.length).to.equal(3);
    });
  });

  describe("시나리오 2: 주문 취소", function () {
    let orderId;

    beforeEach(async function () {
      const tx = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        ethers.parseEther("1000000000"),
        ethers.parseEther("1000000000"),
        30
      );

      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      orderId = p2pTrading.interface.parseLog(event).args.orderId;
    });

    it("2-1. 주문 취소 성공", async function () {
      await expect(
        p2pTrading.connect(investor1).cancelOrder(orderId)
      ).to.emit(p2pTrading, "OrderCancelled")
        .withArgs(orderId);

      const orderDetails = await p2pTrading.getOrderDetails(orderId);
      expect(orderDetails.isActive).to.be.false;
    });

    it("2-2. 주문 소유자가 아닌 경우 취소 실패", async function () {
      await expect(
        p2pTrading.connect(investor2).cancelOrder(orderId)
      ).to.be.revertedWith("Not order owner");
    });

    it("2-3. 이미 취소된 주문 재취소 실패", async function () {
      await p2pTrading.connect(investor1).cancelOrder(orderId);

      await expect(
        p2pTrading.connect(investor1).cancelOrder(orderId)
      ).to.be.revertedWith("Order not active");
    });
  });

  describe("시나리오 3: 거래 체결", function () {
    let orderId;
    const sellAmount = ethers.parseEther("1000000000");
    const price = ethers.parseEther("1000000000");

    beforeEach(async function () {
      const tx = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        sellAmount,
        price,
        30
      );

      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      orderId = p2pTrading.interface.parseLog(event).args.orderId;
    });

    it("3-1. 거래 체결 성공", async function () {
      const buyAmount = ethers.parseEther("500000000"); // 5억 구매

      await expect(
        p2pTrading.connect(investor2).executeTrade(orderId, buyAmount)
      ).to.emit(p2pTrading, "TradeExecuted");

      const userTrades = await p2pTrading.getUserTrades(investor2.address);
      expect(userTrades.length).to.equal(1);
    });

    it("3-2. 전체 수량 거래 체결", async function () {
      await p2pTrading.connect(investor2).executeTrade(orderId, sellAmount);

      const orderDetails = await p2pTrading.getOrderDetails(orderId);
      expect(orderDetails.amount).to.equal(0);
      expect(orderDetails.isActive).to.be.false;
    });

    it("3-3. 부분 거래 후 잔여 주문 유지", async function () {
      const buyAmount = ethers.parseEther("400000000");

      await p2pTrading.connect(investor2).executeTrade(orderId, buyAmount);

      const orderDetails = await p2pTrading.getOrderDetails(orderId);
      expect(orderDetails.amount).to.equal(sellAmount - buyAmount);
      expect(orderDetails.isActive).to.be.true;
    });

    it("3-4. 주문 수량 초과 거래 실패", async function () {
      const excessAmount = sellAmount + ethers.parseEther("100000000");

      await expect(
        p2pTrading.connect(investor2).executeTrade(orderId, excessAmount)
      ).to.be.revertedWith("Amount exceeds order");
    });

    it("3-5. 자신의 주문 구매 실패", async function () {
      await expect(
        p2pTrading.connect(investor1).executeTrade(orderId, ethers.parseEther("100000000"))
      ).to.be.revertedWith("Cannot buy own order");
    });

    it("3-6. 거래 상세 정보 조회", async function () {
      const buyAmount = ethers.parseEther("500000000");

      // 시간 경과 후 거래 (보유기간 발생)
      await time.increase(10 * ONE_DAY);

      const tx = await p2pTrading.connect(investor2).executeTrade(orderId, buyAmount);
      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "TradeExecuted"
      );
      const tradeId = p2pTrading.interface.parseLog(event).args.tradeId;

      const tradeDetails = await p2pTrading.getTradeDetails(tradeId);
      expect(tradeDetails.trancheId).to.equal(trancheA);
      expect(tradeDetails.seller).to.equal(investor1.address);
      expect(tradeDetails.buyer).to.equal(investor2.address);
      expect(tradeDetails.amount).to.equal(buyAmount);
      expect(tradeDetails.price).to.equal(price);
      expect(tradeDetails.settlementInterest).to.be.gt(0);
      expect(tradeDetails.holdingDays).to.be.gte(10); // 최소 10일 보유
    });
  });

  describe("시나리오 4: 만료된 주문 처리", function () {
    it("4-1. 만료된 주문 거래 실패", async function () {
      const expirationDays = 1;

      const tx = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        ethers.parseEther("1000000000"),
        ethers.parseEther("1000000000"),
        expirationDays
      );

      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      const orderId = p2pTrading.interface.parseLog(event).args.orderId;

      // 2일 경과 (만료)
      await time.increase(2 * ONE_DAY);

      await expect(
        p2pTrading.connect(investor2).executeTrade(orderId, ethers.parseEther("100000000"))
      ).to.be.revertedWith("Order expired");
    });

    it("4-2. 만료 직전 거래 성공", async function () {
      const expirationDays = 1;

      const tx = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        ethers.parseEther("1000000000"),
        ethers.parseEther("1000000000"),
        expirationDays
      );

      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      const orderId = p2pTrading.interface.parseLog(event).args.orderId;

      // 23시간 경과 (아직 만료 안됨)
      await time.increase(23 * 60 * 60);

      await expect(
        p2pTrading.connect(investor2).executeTrade(orderId, ethers.parseEther("100000000"))
      ).to.emit(p2pTrading, "TradeExecuted");
    });

    it("4-3. 만료된 주문은 활성 주문 목록에서 제외", async function () {
      const expirationDays = 1;

      await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        ethers.parseEther("1000000000"),
        ethers.parseEther("1000000000"),
        expirationDays
      );

      // 생성 직후
      let activeOrders = await p2pTrading.getActiveOrders(trancheA);
      expect(activeOrders.length).to.equal(1);

      // 2일 경과
      await time.increase(2 * ONE_DAY);

      activeOrders = await p2pTrading.getActiveOrders(trancheA);
      expect(activeOrders.length).to.equal(0);
    });
  });

  describe("시나리오 5: 보유기간별 이자 정산", function () {
    let orderId;

    beforeEach(async function () {
      // 첫 번째 이자 지급 처리 (3개월 후)
      await time.increase(90 * ONE_DAY);
      await interestDistribution.connect(trustee).payInterest(trancheA, 0);

      const tx = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        ethers.parseEther("1000000000"),
        ethers.parseEther("1000000000"),
        30
      );

      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      orderId = p2pTrading.interface.parseLog(event).args.orderId;
    });

    it("5-1. 거래 시 이자 정산 발생", async function () {
      const buyAmount = ethers.parseEther("500000000");

      // 이자 지급 후 시간 경과 (예: 30일)
      await time.increase(30 * ONE_DAY);

      const tx = await p2pTrading.connect(investor2).executeTrade(orderId, buyAmount);
      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "TradeExecuted"
      );
      const tradeId = p2pTrading.interface.parseLog(event).args.tradeId;

      const tradeDetails = await p2pTrading.getTradeDetails(tradeId);

      // 보유기간별 이자 정산액이 계산됨
      expect(tradeDetails.settlementInterest).to.be.gt(0);
      expect(tradeDetails.holdingDays).to.be.gt(0); // 최소 30일 이상 보유
    });

    it("5-2. 이자 정산 이벤트 확인", async function () {
      const buyAmount = ethers.parseEther("500000000");

      // 이자 지급 후 시간 경과 (예: 30일)
      await time.increase(30 * ONE_DAY);

      await expect(
        p2pTrading.connect(investor2).executeTrade(orderId, buyAmount)
      ).to.emit(p2pTrading, "InterestSettled");
    });
  });

  describe("시나리오 6: 다중 거래 시나리오", function () {
    it("6-1. 한 주문에 대한 여러 구매자", async function () {
      const sellAmount = ethers.parseEther("3000000000"); // 30억
      const tx = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        sellAmount,
        ethers.parseEther("3000000000"),
        30
      );

      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      const orderId = p2pTrading.interface.parseLog(event).args.orderId;

      // Investor2가 10억 구매
      await p2pTrading.connect(investor2).executeTrade(
        orderId,
        ethers.parseEther("1000000000")
      );

      // Investor3가 15억 구매
      await p2pTrading.connect(investor3).executeTrade(
        orderId,
        ethers.parseEther("1500000000")
      );

      // 나머지 5억 확인
      const orderDetails = await p2pTrading.getOrderDetails(orderId);
      expect(orderDetails.amount).to.equal(ethers.parseEther("500000000"));
      expect(orderDetails.isActive).to.be.true;
    });

    it("6-2. 여러 매도자의 주문에서 순차 구매", async function () {
      // Investor2도 토큰 발행
      await securityToken.issueByTranche(
        trancheA,
        investor2.address,
        ethers.parseEther("2000000000")
      );

      // Investor1 주문
      const tx1 = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        ethers.parseEther("1000000000"),
        ethers.parseEther("1000000000"),
        30
      );

      // Investor2 주문
      const tx2 = await p2pTrading.connect(investor2).createSellOrder(
        trancheA,
        ethers.parseEther("1500000000"),
        ethers.parseEther("1500000000"),
        30
      );

      const receipt1 = await tx1.wait();
      const event1 = receipt1.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      const orderId1 = p2pTrading.interface.parseLog(event1).args.orderId;

      const receipt2 = await tx2.wait();
      const event2 = receipt2.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      const orderId2 = p2pTrading.interface.parseLog(event2).args.orderId;

      // Investor3가 두 주문에서 구매
      await p2pTrading.connect(investor3).executeTrade(
        orderId1,
        ethers.parseEther("500000000")
      );

      await p2pTrading.connect(investor3).executeTrade(
        orderId2,
        ethers.parseEther("800000000")
      );

      const trades = await p2pTrading.getUserTrades(investor3.address);
      expect(trades.length).to.equal(2);
    });
  });

  describe("시나리오 7: 거래 가능 여부 확인", function () {
    let orderId;

    beforeEach(async function () {
      const tx = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        ethers.parseEther("1000000000"),
        ethers.parseEther("1000000000"),
        30
      );

      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      orderId = p2pTrading.interface.parseLog(event).args.orderId;
    });

    it("7-1. 정상 주문 거래 가능", async function () {
      const canTrade = await p2pTrading.canTrade(
        orderId,
        investor2.address,
        ethers.parseEther("500000000")
      );
      expect(canTrade).to.be.true;
    });

    it("7-2. 주문 수량 초과 시 거래 불가", async function () {
      const canTrade = await p2pTrading.canTrade(
        orderId,
        investor2.address,
        ethers.parseEther("2000000000")
      );
      expect(canTrade).to.be.false;
    });

    it("7-3. 만료된 주문 거래 불가", async function () {
      await time.increase(31 * ONE_DAY);

      const canTrade = await p2pTrading.canTrade(
        orderId,
        investor2.address,
        ethers.parseEther("500000000")
      );
      expect(canTrade).to.be.false;
    });

    it("7-4. 자신의 주문 구매 불가", async function () {
      const canTrade = await p2pTrading.canTrade(
        orderId,
        investor1.address,
        ethers.parseEther("500000000")
      );
      expect(canTrade).to.be.false;
    });

    it("7-5. 취소된 주문 거래 불가", async function () {
      await p2pTrading.connect(investor1).cancelOrder(orderId);

      const canTrade = await p2pTrading.canTrade(
        orderId,
        investor2.address,
        ethers.parseEther("500000000")
      );
      expect(canTrade).to.be.false;
    });
  });

  describe("시나리오 8: 조회 기능", function () {
    beforeEach(async function () {
      // 여러 주문 생성
      await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        ethers.parseEther("500000000"),
        ethers.parseEther("500000000"),
        30
      );

      await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        ethers.parseEther("300000000"),
        ethers.parseEther("300000000"),
        30
      );
    });

    it("8-1. 활성 주문 목록 조회", async function () {
      const activeOrders = await p2pTrading.getActiveOrders(trancheA);
      expect(activeOrders.length).to.equal(2);
    });

    it("8-2. 사용자별 거래 내역 조회", async function () {
      const activeOrders = await p2pTrading.getActiveOrders(trancheA);

      // Investor2가 첫 주문 구매
      await p2pTrading.connect(investor2).executeTrade(
        activeOrders[0],
        ethers.parseEther("200000000")
      );

      // Investor2가 두 번째 주문 구매
      await p2pTrading.connect(investor2).executeTrade(
        activeOrders[1],
        ethers.parseEther("100000000")
      );

      const trades = await p2pTrading.getUserTrades(investor2.address);
      expect(trades.length).to.equal(2);
    });

    it("8-3. 주문 상세 정보 조회", async function () {
      const activeOrders = await p2pTrading.getActiveOrders(trancheA);
      const orderDetails = await p2pTrading.getOrderDetails(activeOrders[0]);

      expect(orderDetails.seller).to.equal(investor1.address);
      expect(orderDetails.amount).to.equal(ethers.parseEther("500000000"));
      expect(orderDetails.isActive).to.be.true;
    });
  });

  describe("시나리오 9: 실제 P2P 거래 플로우", function () {
    it("9-1. 완전한 P2P 거래 시나리오", async function () {
      // 1. Investor1이 30억 매도 주문 등록
      const tx = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        ethers.parseEther("3000000000"),
        ethers.parseEther("3000000000"),
        30
      );

      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      const orderId = p2pTrading.interface.parseLog(event).args.orderId;

      // 2. Investor2가 거래 가능 여부 확인
      let canTrade = await p2pTrading.canTrade(
        orderId,
        investor2.address,
        ethers.parseEther("1000000000")
      );
      expect(canTrade).to.be.true;

      // 시간 경과 후 거래 (보유기간 발생)
      await time.increase(15 * ONE_DAY);

      // 3. Investor2가 10억 구매
      await p2pTrading.connect(investor2).executeTrade(
        orderId,
        ethers.parseEther("1000000000")
      );

      // 4. Investor3가 15억 구매
      await p2pTrading.connect(investor3).executeTrade(
        orderId,
        ethers.parseEther("1500000000")
      );

      // 5. 주문 상태 확인 (잔여 5억)
      const orderDetails = await p2pTrading.getOrderDetails(orderId);
      expect(orderDetails.amount).to.equal(ethers.parseEther("500000000"));
      expect(orderDetails.isActive).to.be.true;

      // 6. Investor1의 거래 내역 확인 (매도자)
      const sellerTrades = await p2pTrading.getUserTrades(investor1.address);
      expect(sellerTrades.length).to.equal(2);

      // 7. Investor2의 거래 내역 확인 (구매자)
      const buyerTrades = await p2pTrading.getUserTrades(investor2.address);
      expect(buyerTrades.length).to.equal(1);

      // 8. 거래 상세 정보 확인
      const tradeDetails = await p2pTrading.getTradeDetails(sellerTrades[0]);
      expect(tradeDetails.seller).to.equal(investor1.address);
      expect(tradeDetails.settlementInterest).to.be.gt(0);
      expect(tradeDetails.holdingDays).to.be.gte(15); // 최소 15일 보유
    });
  });
});
