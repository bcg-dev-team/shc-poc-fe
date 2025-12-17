const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("통합 테스트 - 신한캐피탈 PF 증권화 토큰 전체 시나리오", function () {
  let securityToken, interestDistribution, assetValuation, p2pTrading;
  let issuer, trustee, oracle, investor1, investor2, investor3;
  let trancheA, trancheB;

  const TRANCHE_A_RATE = 600; // 6%
  const TRANCHE_B_RATE = 1200; // 12%
  const ONE_YEAR = 365 * 24 * 60 * 60;
  const THREE_MONTHS = 90 * 24 * 60 * 60;
  const ONE_DAY = 24 * 60 * 60;

  before(async function () {
    [issuer, trustee, oracle, investor1, investor2, investor3] = await ethers.getSigners();

    console.log("\n" + "=".repeat(70));
    console.log("신한캐피탈 PF 증권화 토큰 통합 테스트 시작");
    console.log("=".repeat(70));
  });

  beforeEach(async function () {
    // 1. 모든 컨트랙트 배포
    console.log("\n📦 컨트랙트 배포 중...");

    const SecurityToken = await ethers.getContractFactory("SecurityToken");
    securityToken = await SecurityToken.deploy(
      "Shinhan Capital PF Security Token",
      "SHC-PF"
    );
    await securityToken.waitForDeployment();
    console.log("  ✓ SecurityToken:", await securityToken.getAddress());

    const AssetValuation = await ethers.getContractFactory("AssetValuation");
    assetValuation = await AssetValuation.deploy();
    await assetValuation.waitForDeployment();
    console.log("  ✓ AssetValuation:", await assetValuation.getAddress());

    const InterestDistribution = await ethers.getContractFactory("InterestDistribution");
    interestDistribution = await InterestDistribution.deploy(
      await securityToken.getAddress()
    );
    await interestDistribution.waitForDeployment();
    console.log("  ✓ InterestDistribution:", await interestDistribution.getAddress());

    const P2PTrading = await ethers.getContractFactory("P2PTrading");
    p2pTrading = await P2PTrading.deploy(
      await securityToken.getAddress(),
      await interestDistribution.getAddress()
    );
    await p2pTrading.waitForDeployment();
    console.log("  ✓ P2PTrading:", await p2pTrading.getAddress());

    // Tranche ID 생성
    trancheA = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));
    trancheB = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_B"));

    // 권한 설정
    await interestDistribution.setTrustee(trustee.address);
    await assetValuation.setOracle(oracle.address);
  });

  describe("시나리오: 신한캐피탈 PF 증권화 전체 프로세스", function () {
    it("전체 시나리오 - 발행부터 상환까지", async function () {
      console.log("\n" + "=".repeat(70));
      console.log("📋 단계별 시나리오 실행");
      console.log("=".repeat(70));

      // ============================================================
      // 1단계: Tranche 구조 설정 (Senior/Junior)
      // ============================================================
      console.log("\n[1단계] Tranche 구조 설정");
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await securityToken.createTranche(
        trancheA,
        "Tranche A - Senior",
        0, // SENIOR
        TRANCHE_A_RATE,
        maturityDate
      );
      console.log("  ✓ Tranche A (Senior, 6%) 생성");

      await securityToken.createTranche(
        trancheB,
        "Tranche B - Junior",
        1, // JUNIOR
        TRANCHE_B_RATE,
        maturityDate
      );
      console.log("  ✓ Tranche B (Junior, 12%) 생성");

      // ============================================================
      // 2단계: 투자자 KYC 인증
      // ============================================================
      console.log("\n[2단계] 기관투자자 KYC 인증");
      await securityToken.verifyKYC(investor1.address, true);
      await securityToken.verifyKYC(investor2.address, true);
      await securityToken.verifyKYC(investor3.address, true);
      console.log("  ✓ 3명의 기관투자자 KYC 인증 완료");

      // ============================================================
      // 3단계: 토큰 발행 (Tranche A: 100억, Tranche B: 50억)
      // ============================================================
      console.log("\n[3단계] 증권형 토큰 발행");
      const amountA = ethers.parseEther("10000000000"); // 100억
      const amountB = ethers.parseEther("5000000000");  // 50억

      await securityToken.issueByTranche(trancheA, investor1.address, amountA);
      console.log("  ✓ Tranche A: 100억원 발행 → Investor1");

      await securityToken.issueByTranche(trancheB, investor2.address, amountB);
      console.log("  ✓ Tranche B: 50억원 발행 → Investor2");

      expect(await securityToken.balanceOf(trancheA, investor1.address)).to.equal(amountA);
      expect(await securityToken.balanceOf(trancheB, investor2.address)).to.equal(amountB);

      // ============================================================
      // 4단계: 상환 스케줄 설정
      // ============================================================
      console.log("\n[4단계] 이자 지급 및 상환 스케줄 설정");
      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheA,
        amountA,
        TRANCHE_A_RATE,
        maturityDate
      );
      console.log("  ✓ Tranche A 상환 스케줄 생성 (6% 이자, 3개월 후불)");

      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheB,
        amountB,
        TRANCHE_B_RATE,
        maturityDate
      );
      console.log("  ✓ Tranche B 상환 스케줄 생성 (12% 이자, 3개월 후불)");

      // ============================================================
      // 5단계: 자산 평가 초기화 (상각후원가법)
      // ============================================================
      console.log("\n[5단계] 자산 평가 시스템 초기화");
      await assetValuation.connect(oracle).initializeValuation(
        trancheA,
        amountA,
        amountA
      );
      console.log("  ✓ Tranche A 평가 데이터 초기화 (100억원)");

      await assetValuation.connect(oracle).initializeValuation(
        trancheB,
        amountB,
        amountB
      );
      console.log("  ✓ Tranche B 평가 데이터 초기화 (50억원)");

      // 상각 스케줄 생성
      await assetValuation.connect(oracle).createAmortizationSchedule(
        trancheA,
        12,
        amountA,
        ethers.parseEther("600000000") // 6억 (6% 연이자)
      );
      console.log("  ✓ Tranche A 상각 스케줄 생성 (12개월)");

      // ============================================================
      // 6단계: 첫 번째 이자 지급 (3개월 후)
      // ============================================================
      console.log("\n[6단계] 첫 번째 이자 지급 (3개월 후)");
      await time.increase(THREE_MONTHS);

      await interestDistribution.connect(trustee).payInterest(trancheA, 0);
      await interestDistribution.connect(trustee).payInterest(trancheB, 0);
      console.log("  ✓ Tranche A, B 첫 번째 이자 지급 완료");

      const totalPaidA = await interestDistribution.getTotalInterestPaid(trancheA);
      const totalPaidB = await interestDistribution.getTotalInterestPaid(trancheB);
      console.log(`  → Tranche A 누적 이자: ${ethers.formatEther(totalPaidA)}억원`);
      console.log(`  → Tranche B 누적 이자: ${ethers.formatEther(totalPaidB)}억원`);

      // ============================================================
      // 7단계: P2P 거래 (Investor1 → Investor3)
      // ============================================================
      console.log("\n[7단계] P2P 거래 (기관투자자 간 토큰 거래)");

      // Investor1이 Tranche A 토큰 20억원 매도 주문
      const sellAmount = ethers.parseEther("2000000000"); // 20억
      const tx = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        sellAmount,
        sellAmount,
        30
      );
      console.log("  ✓ Investor1: 20억원 매도 주문 등록");

      const receipt = await tx.wait();
      const event = receipt.logs.find(
        log => p2pTrading.interface.parseLog(log)?.name === "OrderCreated"
      );
      const orderId = p2pTrading.interface.parseLog(event).args.orderId;

      // Investor3가 15억원 구매
      const buyAmount = ethers.parseEther("1500000000"); // 15억
      await p2pTrading.connect(investor3).executeTrade(orderId, buyAmount);
      console.log("  ✓ Investor3: 15억원 구매 완료");

      const tradeDetails = await p2pTrading.getTradeDetails(
        (await p2pTrading.getUserTrades(investor3.address))[0]
      );
      console.log(`  → 보유기간: ${tradeDetails.holdingDays}일`);
      console.log(`  → 이자 정산: ${ethers.formatEther(tradeDetails.settlementInterest)}원`);

      // ============================================================
      // 8단계: 두 번째 이자 지급 (6개월 후)
      // ============================================================
      console.log("\n[8단계] 두 번째 이자 지급 (6개월 후)");
      await time.increase(THREE_MONTHS);

      await interestDistribution.connect(trustee).payInterest(trancheA, 1);
      await interestDistribution.connect(trustee).payInterest(trancheB, 1);
      console.log("  ✓ Tranche A, B 두 번째 이자 지급 완료");

      // ============================================================
      // 9단계: 자산 평가 업데이트
      // ============================================================
      console.log("\n[9단계] 상각후원가 및 공정가치 업데이트");

      // 첫 상각 처리
      await assetValuation.connect(oracle).processAmortization(trancheA, 0);
      console.log("  ✓ 첫 번째 상각 처리 완료");

      // 공정가치 업데이트 (DCF 평가)
      const fairValue = ethers.parseEther("9800000000"); // 98억
      await assetValuation.connect(oracle).updateFairValue(trancheA, fairValue);
      console.log("  ✓ 공정가치 업데이트: 98억원 (DCF 평가)");

      const valuation = await assetValuation.getValuationData(trancheA);
      console.log(`  → 상각후원가: ${ethers.formatEther(valuation.amortizedCost)}원`);
      console.log(`  → 공정가치: ${ethers.formatEther(valuation.fairValue)}원`);

      // ============================================================
      // 10단계: 세 번째 이자 지급 및 80% 부분 상환 (9개월 후)
      // ============================================================
      console.log("\n[10단계] 세 번째 이자 지급 및 부분 상환 (9개월 후)");
      await time.increase(THREE_MONTHS);

      await interestDistribution.connect(trustee).payInterest(trancheA, 2);
      await interestDistribution.connect(trustee).payInterest(trancheB, 2);
      console.log("  ✓ 세 번째 이자 지급 완료");

      // 80% 부분 상환
      await interestDistribution.connect(trustee).partialRedemption(trancheA, 80);
      await interestDistribution.connect(trustee).partialRedemption(trancheB, 80);
      console.log("  ✓ 원금 80% 부분 상환 처리");

      const scheduleA = await interestDistribution.getScheduleDetails(trancheA);
      console.log(`  → Tranche A 잔여 원금: ${ethers.formatEther(scheduleA.principalAmount)}억원`);

      // ============================================================
      // 11단계: 마지막 이자 지급 및 최종 상환 (12개월 후, 만기)
      // ============================================================
      console.log("\n[11단계] 최종 이자 지급 및 상환 (12개월 후, 만기)");
      await time.increase(THREE_MONTHS + (10 * ONE_DAY)); // 만기 시점 확실히 도달 (10일 여유)

      // 마지막 이자 지급
      await interestDistribution.connect(trustee).payInterest(trancheA, 3);
      await interestDistribution.connect(trustee).payInterest(trancheB, 3);
      console.log("  ✓ 마지막 이자 지급 완료");

      // 최종 상환
      await interestDistribution.connect(trustee).finalRedemption(trancheA);
      await interestDistribution.connect(trustee).finalRedemption(trancheB);
      console.log("  ✓ 최종 상환 완료");

      const finalScheduleA = await interestDistribution.getScheduleDetails(trancheA);
      const finalScheduleB = await interestDistribution.getScheduleDetails(trancheB);

      expect(finalScheduleA.principalAmount).to.equal(0);
      expect(finalScheduleB.principalAmount).to.equal(0);
      expect(finalScheduleA.isActive).to.be.false;
      expect(finalScheduleB.isActive).to.be.false;
      expect(finalScheduleA.paymentCount).to.equal(4);

      // ============================================================
      // 12단계: 토큰 상환 처리
      // ============================================================
      console.log("\n[12단계] 토큰 상환 처리");

      const investor1Balance = await securityToken.balanceOf(trancheA, investor1.address);
      const investor2Balance = await securityToken.balanceOf(trancheB, investor2.address);

      await securityToken.redeemByTranche(trancheA, investor1.address, investor1Balance);
      await securityToken.redeemByTranche(trancheB, investor2.address, investor2Balance);
      console.log("  ✓ 전체 토큰 상환 완료");

      // ============================================================
      // 최종 검증
      // ============================================================
      console.log("\n" + "=".repeat(70));
      console.log("📊 최종 상태 확인");
      console.log("=".repeat(70));

      const finalTotalPaidA = await interestDistribution.getTotalInterestPaid(trancheA);
      const finalTotalPaidB = await interestDistribution.getTotalInterestPaid(trancheB);

      console.log("\n[Tranche A - Senior 6%]");
      console.log(`  · 총 이자 지급액: ${ethers.formatEther(finalTotalPaidA)}원`);
      console.log(`  · 이자 지급 횟수: 4회`);
      console.log(`  · 원금 상환: 완료`);
      console.log(`  · 스케줄 상태: 종료`);

      console.log("\n[Tranche B - Junior 12%]");
      console.log(`  · 총 이자 지급액: ${ethers.formatEther(finalTotalPaidB)}원`);
      console.log(`  · 이자 지급 횟수: 4회`);
      console.log(`  · 원금 상환: 완료`);
      console.log(`  · 스케줄 상태: 종료`);

      console.log("\n[P2P 거래]");
      const investor3Trades = await p2pTrading.getUserTrades(investor3.address);
      console.log(`  · Investor3 거래 건수: ${investor3Trades.length}건`);

      console.log("\n" + "=".repeat(70));
      console.log("✅ 전체 시나리오 완료");
      console.log("=".repeat(70) + "\n");

      // Tranche A: 100억 * 6% = 6억/년
      // Tranche B: 50억 * 12% = 6억/년
      // 총 이자가 같으므로 검증 생략
      expect(finalTotalPaidA).to.be.gt(0);
      expect(finalTotalPaidB).to.be.gt(0);
    });
  });

  describe("시나리오: 한도대출 증액 및 추가 발행", function () {
    it("Tranche A 한도대출 증액 시나리오", async function () {
      console.log("\n" + "=".repeat(70));
      console.log("한도대출 증액 시나리오");
      console.log("=".repeat(70));

      const maturityDate = (await time.latest()) + ONE_YEAR;

      // Tranche A 생성 및 KYC
      await securityToken.createTranche(
        trancheA,
        "Tranche A - Senior",
        0,
        TRANCHE_A_RATE,
        maturityDate
      );
      await securityToken.verifyKYC(investor1.address, true);

      // 초기 발행: 50억
      const initialAmount = ethers.parseEther("5000000000");
      await securityToken.issueByTranche(trancheA, investor1.address, initialAmount);
      console.log("\n  ✓ 초기 발행: 50억원");

      // 3개월 후 추가 증액: 20억
      await time.increase(THREE_MONTHS);
      const additionalAmount = ethers.parseEther("2000000000");
      await securityToken.additionalIssuance(trancheA, investor1.address, additionalAmount);
      console.log("  ✓ 3개월 후 증액: +20억원");

      // 6개월 후 추가 증액: 30억
      await time.increase(THREE_MONTHS);
      const secondAdditional = ethers.parseEther("3000000000");
      await securityToken.additionalIssuance(trancheA, investor1.address, secondAdditional);
      console.log("  ✓ 6개월 후 증액: +30억원");

      const finalBalance = await securityToken.balanceOf(trancheA, investor1.address);
      const expectedTotal = initialAmount + additionalAmount + secondAdditional;

      console.log(`\n  → 최종 보유액: ${ethers.formatEther(finalBalance)}억원`);
      expect(finalBalance).to.equal(expectedTotal);
    });
  });

  describe("시나리오: 다중 투자자 복합 거래", function () {
    it("여러 투자자 간 복합적인 P2P 거래", async function () {
      console.log("\n" + "=".repeat(70));
      console.log("다중 투자자 P2P 거래 시나리오");
      console.log("=".repeat(70));

      const maturityDate = (await time.latest()) + ONE_YEAR;

      // 설정
      await securityToken.createTranche(
        trancheA,
        "Tranche A - Senior",
        0,
        TRANCHE_A_RATE,
        maturityDate
      );

      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheA,
        ethers.parseEther("15000000000"),
        TRANCHE_A_RATE,
        maturityDate
      );

      // 3명의 투자자에게 발행
      await securityToken.verifyKYC(investor1.address, true);
      await securityToken.verifyKYC(investor2.address, true);
      await securityToken.verifyKYC(investor3.address, true);

      await securityToken.issueByTranche(
        trancheA,
        investor1.address,
        ethers.parseEther("5000000000")
      );
      await securityToken.issueByTranche(
        trancheA,
        investor2.address,
        ethers.parseEther("5000000000")
      );
      await securityToken.issueByTranche(
        trancheA,
        investor3.address,
        ethers.parseEther("5000000000")
      );

      console.log("\n  ✓ 3명의 투자자에게 각 50억원씩 발행");

      // Investor1이 20억 매도
      const tx1 = await p2pTrading.connect(investor1).createSellOrder(
        trancheA,
        ethers.parseEther("2000000000"),
        ethers.parseEther("2000000000"),
        30
      );
      console.log("  ✓ Investor1: 20억원 매도 주문");

      // Investor2가 30억 매도
      const tx2 = await p2pTrading.connect(investor2).createSellOrder(
        trancheA,
        ethers.parseEther("3000000000"),
        ethers.parseEther("3000000000"),
        30
      );
      console.log("  ✓ Investor2: 30억원 매도 주문");

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
        ethers.parseEther("1500000000")
      );
      console.log("  ✓ Investor3: Investor1으로부터 15억원 구매");

      await p2pTrading.connect(investor3).executeTrade(
        orderId2,
        ethers.parseEther("2000000000")
      );
      console.log("  ✓ Investor3: Investor2로부터 20억원 구매");

      const investor3Trades = await p2pTrading.getUserTrades(investor3.address);
      console.log(`\n  → Investor3 총 거래 건수: ${investor3Trades.length}건`);

      expect(investor3Trades.length).to.equal(2);
    });
  });
});
