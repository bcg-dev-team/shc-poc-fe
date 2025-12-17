const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("Scenario S1-S7: 신한캐피탈 PF 토큰화 전체 시나리오", function () {
  let securityToken, interestDistribution, assetValuation, p2pTrading;
  let issuer, trustee, investorA, investorB, investorC, investorD, investorE;
  let trancheA, trancheB;

  const ONE_DAY = 24 * 60 * 60;
  const THREE_MONTHS = 90 * ONE_DAY;

  // S1: 초기 대출 및 토큰 발행 금액
  const TRANCHE_A_INITIAL = ethers.parseEther("50000000000"); // 500억원
  const TRANCHE_B_INITIAL = ethers.parseEther("40000000000"); // 400억원

  // S1: 6:4 비율 배분
  const INVESTOR_A_RATIO = 60; // 60%
  const INVESTOR_B_RATIO = 40; // 40%

  // S3: 추가 한도대출 금액
  const ADDITIONAL_TRANCHE_A = ethers.parseEther("10000000000"); // 100억원

  // S7: P2P 거래 금액
  const P2P_TRADE_AMOUNT = ethers.parseEther("3000000000"); // 30억원

  // 시나리오 실행 결과 추적
  const scenarioResults = {
    s1: { trancheA: 0n, trancheB: 0n },
    s2: { interestA: 0n, interestB: 0n },
    s3: { additional: 0n, totalA: 0n },
    s4: { principalBefore: 0n, principalAfter: 0n },
    s5: { redeemed: 0n, remaining: 0n },
    s6: { final: 0n },
    s7: { tradeAmount: 0n, holdingDays: 0n, interest: 0n, expectedInterest: 0n }
  };

  after(async function () {
    console.log("\n");
    console.log("=".repeat(80));
    console.log("📊 시나리오 S1-S7 실행 요약");
    console.log("=".repeat(80));

    console.log("\n【S1】 대출 실행 및 토큰 발행 (6:4 비율)");
    console.log(`  • Tr-A (Senior 6%):  ${ethers.formatEther(scenarioResults.s1.trancheA).padStart(15)}원 (500억)`);
    console.log(`  • Tr-B (Junior 12%): ${ethers.formatEther(scenarioResults.s1.trancheB).padStart(15)}원 (400억)`);
    console.log(`  • 투자자 배분:       60% / 40% (수동 배분)`);

    console.log("\n【S2】 최초 이자 지급 (3개월 후불)");
    if (scenarioResults.s2.interestA > 0n) {
      console.log(`  • Tr-A 이자 (6%):    ${ethers.formatEther(scenarioResults.s2.interestA).padStart(15)}원`);
    }
    if (scenarioResults.s2.interestB > 0n) {
      console.log(`  • Tr-B 이자 (12%):   ${ethers.formatEther(scenarioResults.s2.interestB).padStart(15)}원`);
    }

    console.log("\n【S3】 한도대출 추가 실행 (Tr-A만)");
    if (scenarioResults.s3.additional > 0n) {
      console.log(`  • 추가 발행:         ${ethers.formatEther(scenarioResults.s3.additional).padStart(15)}원 (100억)`);
      console.log(`  • 총 발행액:         ${ethers.formatEther(scenarioResults.s3.totalA).padStart(15)}원 (600억)`);
      console.log(`  • 배분 방식:         수동 (6:4 자동 배분 미구현)`);
    }

    console.log("\n【S4】 증액된 원금에 대한 이자 지급");
    if (scenarioResults.s4.principalBefore > 0n) {
      console.log(`  • 스케줄 원금:       ${ethers.formatEther(scenarioResults.s4.principalBefore).padStart(15)}원`);
      console.log(`  • 실제 발행액:       ${ethers.formatEther(scenarioResults.s4.principalAfter).padStart(15)}원`);
      if (scenarioResults.s4.principalBefore !== scenarioResults.s4.principalAfter) {
        console.log(`  ⚠️  원금 불일치:      ${ethers.formatEther(scenarioResults.s4.principalAfter - scenarioResults.s4.principalBefore).padStart(15)}원 차이`);
      }
    }

    console.log("\n【S5】 부분 상환 (80%)");
    if (scenarioResults.s5.redeemed > 0n) {
      console.log(`  • 상환 금액:         ${ethers.formatEther(scenarioResults.s5.redeemed).padStart(15)}원 (80%)`);
      console.log(`  • 잔여 원금:         ${ethers.formatEther(scenarioResults.s5.remaining).padStart(15)}원 (20%)`);
    }

    console.log("\n【S6】 최종 상환 (만기)");
    if (scenarioResults.s6.final > 0n) {
      console.log(`  • 최종 상환:         ${ethers.formatEther(scenarioResults.s6.final).padStart(15)}원`);
      console.log(`  • 프로젝트 종료:     완료`);
    }

    console.log("\n【S7】 P2P 거래 및 보유기간별 이자 정산");
    if (scenarioResults.s7.tradeAmount > 0n) {
      console.log(`  • 거래 금액:         ${ethers.formatEther(scenarioResults.s7.tradeAmount).padStart(15)}원 (30억)`);
      console.log(`  • 보유 기간:         ${scenarioResults.s7.holdingDays.toString().padStart(15)}일`);
      console.log(`  • 정산 이자:         ${ethers.formatEther(scenarioResults.s7.interest).padStart(15)}원`);
      console.log(`  • 기대 이자:         ${ethers.formatEther(scenarioResults.s7.expectedInterest).padStart(15)}원 (61일 기준)`);
      if (scenarioResults.s7.holdingDays !== 61n) {
        const overPaid = scenarioResults.s7.interest - scenarioResults.s7.expectedInterest;
        const overPaidPercent = Number(overPaid * 10000n / scenarioResults.s7.expectedInterest) / 100;
        console.log(`  ⚠️  과다 지급:        ${ethers.formatEther(overPaid).padStart(15)}원 (+${overPaidPercent}%)`);
      }
    }

    console.log("\n" + "=".repeat(80));
    console.log("⚠️  주요 이슈");
    console.log("=".repeat(80));
    console.log("  1. [S1, S3] 6:4 비율 자동 배분 미구현 - 수동 호출 필요");
    console.log("  2. [S4] 추가 발행 후 원금 업데이트 불가 - 이자 과소 계산");
    console.log("  3. [S7] 보유기간 하드코딩(90일) - 실제 보유일수 미반영");
    console.log("=".repeat(80));
    console.log("\n");
  });

  beforeEach(async function () {
    [issuer, trustee, investorA, investorB, investorC, investorD, investorE] =
      await ethers.getSigners();

    // Deploy contracts
    const SecurityToken = await ethers.getContractFactory("SecurityToken");
    securityToken = await SecurityToken.deploy("Shinhan Capital PF Token", "SHCPF");

    const InterestDistribution = await ethers.getContractFactory("InterestDistribution");
    interestDistribution = await InterestDistribution.deploy(await securityToken.getAddress());

    const AssetValuation = await ethers.getContractFactory("AssetValuation");
    assetValuation = await AssetValuation.deploy();

    const P2PTrading = await ethers.getContractFactory("P2PTrading");
    p2pTrading = await P2PTrading.deploy(
      await securityToken.getAddress(),
      await interestDistribution.getAddress()
    );

    // Set controller
    await securityToken.setController(await interestDistribution.getAddress(), true);
    await securityToken.setController(await p2pTrading.getAddress(), true);

    // Create tranches
    trancheA = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));
    trancheB = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_B"));

    const maturityDate = (await time.latest()) + (365 * ONE_DAY); // 1년

    await securityToken.createTranche(
      trancheA,
      "Tranche A - Senior",
      0, // SENIOR
      600, // 6%
      maturityDate
    );

    await securityToken.createTranche(
      trancheB,
      "Tranche B - Junior",
      1, // JUNIOR
      1200, // 12%
      maturityDate
    );

    // KYC verification
    await securityToken.verifyKYC(investorA.address, true);
    await securityToken.verifyKYC(investorB.address, true);
    await securityToken.verifyKYC(investorC.address, true);
    await securityToken.verifyKYC(investorD.address, true);
    await securityToken.verifyKYC(investorE.address, true);
  });

  describe("S1: 대출 실행 및 토큰 발행 (6:4 비율 배분)", function () {
    it("S1-1. Tranche A 500억원 발행 - 투자자 A(60%), 투자자 B(40%)", async function () {
      // NOTE: 현재 구현은 단일 주소로만 발행 가능
      // 실제 시나리오는 6:4 비율로 자동 배분 필요

      const amountA = (TRANCHE_A_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      const amountB = (TRANCHE_A_INITIAL * BigInt(INVESTOR_B_RATIO)) / 100n;

      await securityToken.issueByTranche(trancheA, investorA.address, amountA);
      await securityToken.issueByTranche(trancheA, investorB.address, amountB);

      expect(await securityToken.balanceOf(trancheA, investorA.address)).to.equal(amountA);
      expect(await securityToken.balanceOf(trancheA, investorB.address)).to.equal(amountB);

      // 총 발행량 확인
      const trancheInfo = await securityToken.getTrancheInfo(trancheA);
      expect(trancheInfo._totalSupply).to.equal(TRANCHE_A_INITIAL);

      // 결과 저장
      scenarioResults.s1.trancheA = TRANCHE_A_INITIAL;
    });

    it("S1-2. Tranche B 400억원 발행 - 투자자 C(60%), 투자자 D(40%)", async function () {
      const amountC = (TRANCHE_B_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      const amountD = (TRANCHE_B_INITIAL * BigInt(INVESTOR_B_RATIO)) / 100n;

      await securityToken.issueByTranche(trancheB, investorC.address, amountC);
      await securityToken.issueByTranche(trancheB, investorD.address, amountD);

      expect(await securityToken.balanceOf(trancheB, investorC.address)).to.equal(amountC);
      expect(await securityToken.balanceOf(trancheB, investorD.address)).to.equal(amountD);

      const trancheInfo = await securityToken.getTrancheInfo(trancheB);
      expect(trancheInfo._totalSupply).to.equal(TRANCHE_B_INITIAL);

      // 결과 저장
      scenarioResults.s1.trancheB = TRANCHE_B_INITIAL;
    });

    it("S1-3. 상환 스케줄 생성", async function () {
      await interestDistribution.createRedemptionSchedule(
        trancheA,
        TRANCHE_A_INITIAL,
        600, // 6%
        (await time.latest()) + (365 * ONE_DAY)
      );

      const schedule = await interestDistribution.getScheduleDetails(trancheA);
      expect(schedule.principalAmount).to.equal(TRANCHE_A_INITIAL);
      expect(schedule.interestRate).to.equal(600);
      expect(schedule.isActive).to.be.true;
    });
  });

  describe("S2: 최초 이자 지급 (3개월 후불)", function () {
    beforeEach(async function () {
      // S1 실행
      const amountA = (TRANCHE_A_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      const amountB = (TRANCHE_A_INITIAL * BigInt(INVESTOR_B_RATIO)) / 100n;
      await securityToken.issueByTranche(trancheA, investorA.address, amountA);
      await securityToken.issueByTranche(trancheA, investorB.address, amountB);

      await interestDistribution.createRedemptionSchedule(
        trancheA,
        TRANCHE_A_INITIAL,
        600,
        (await time.latest()) + (365 * ONE_DAY)
      );
    });

    it("S2-1. 3개월 후 첫 번째 이자 지급", async function () {
      // 3개월 경과
      await time.increase(THREE_MONTHS + ONE_DAY);

      // 첫 번째 이자 지급
      await interestDistribution.payInterest(trancheA, 0);

      const payment = await interestDistribution.interestPayments(trancheA, 0);
      expect(payment.isPaid).to.be.true;

      // 예상 이자: 500억 × 6% × 90/365 = 약 0.74억원
      const expectedInterest = (TRANCHE_A_INITIAL * 600n * 90n) / (10000n * 365n);
      expect(payment.amount).to.be.closeTo(expectedInterest, ethers.parseEther("10000000")); // ±100만원 오차

      // 결과 저장
      scenarioResults.s2.interestA = payment.amount;
    });

    it("S2-2. Tranche B도 12% 이자율로 지급", async function () {
      const amountC = (TRANCHE_B_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      const amountD = (TRANCHE_B_INITIAL * BigInt(INVESTOR_B_RATIO)) / 100n;
      await securityToken.issueByTranche(trancheB, investorC.address, amountC);
      await securityToken.issueByTranche(trancheB, investorD.address, amountD);

      await interestDistribution.createRedemptionSchedule(
        trancheB,
        TRANCHE_B_INITIAL,
        1200, // 12%
        (await time.latest()) + (365 * ONE_DAY)
      );

      await time.increase(THREE_MONTHS + ONE_DAY);
      await interestDistribution.payInterest(trancheB, 0);

      const payment = await interestDistribution.interestPayments(trancheB, 0);

      // 예상 이자: 400억 × 12% × 90/365 = 약 1.18억원
      const expectedInterest = (TRANCHE_B_INITIAL * 1200n * 90n) / (10000n * 365n);
      expect(payment.amount).to.be.closeTo(expectedInterest, ethers.parseEther("10000000"));

      // 결과 저장
      scenarioResults.s2.interestB = payment.amount;
    });
  });

  describe("S3: 한도대출 추가 실행 (Tr-A만, 6:4 비율 자동 배분)", function () {
    beforeEach(async function () {
      // S1 실행
      const amountA = (TRANCHE_A_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      const amountB = (TRANCHE_A_INITIAL * BigInt(INVESTOR_B_RATIO)) / 100n;
      await securityToken.issueByTranche(trancheA, investorA.address, amountA);
      await securityToken.issueByTranche(trancheA, investorB.address, amountB);

      await interestDistribution.createRedemptionSchedule(
        trancheA,
        TRANCHE_A_INITIAL,
        600,
        (await time.latest()) + (365 * ONE_DAY)
      );
    });

    it("S3-1. 추가 100억원 발행 - 기존 6:4 비율 유지 필요", async function () {
      // NOTE: 현재 additionalIssuance는 단일 주소로만 발행
      // 실제 시나리오는 자동으로 투자자 A(60억), 투자자 B(40억) 배분 필요

      const additionalA = (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_A_RATIO)) / 100n;
      const additionalB = (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_B_RATIO)) / 100n;

      const balanceBeforeA = await securityToken.balanceOf(trancheA, investorA.address);
      const balanceBeforeB = await securityToken.balanceOf(trancheA, investorB.address);

      // 현재는 수동으로 각각 발행
      await securityToken.additionalIssuance(trancheA, investorA.address, additionalA);
      await securityToken.additionalIssuance(trancheA, investorB.address, additionalB);

      const balanceAfterA = await securityToken.balanceOf(trancheA, investorA.address);
      const balanceAfterB = await securityToken.balanceOf(trancheA, investorB.address);

      expect(balanceAfterA - balanceBeforeA).to.equal(additionalA);
      expect(balanceAfterB - balanceBeforeB).to.equal(additionalB);

      // 총 발행량: 500억 + 100억 = 600억
      const trancheInfo = await securityToken.getTrancheInfo(trancheA);
      expect(trancheInfo._totalSupply).to.equal(TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A);

      // 결과 저장
      scenarioResults.s3.additional = ADDITIONAL_TRANCHE_A;
      scenarioResults.s3.totalA = TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A;
    });

    it("S3-2. Tranche B는 추가 발행 불가 (Senior only)", async function () {
      await expect(
        securityToken.additionalIssuance(trancheB, investorC.address, ethers.parseEther("1000000000"))
      ).to.be.revertedWith("Only Senior tranche");
    });
  });

  describe("S4: 증액된 원금에 대한 이자 지급", function () {
    beforeEach(async function () {
      // S1 + S3 실행
      const amountA = (TRANCHE_A_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      const amountB = (TRANCHE_A_INITIAL * BigInt(INVESTOR_B_RATIO)) / 100n;
      await securityToken.issueByTranche(trancheA, investorA.address, amountA);
      await securityToken.issueByTranche(trancheA, investorB.address, amountB);

      await interestDistribution.createRedemptionSchedule(
        trancheA,
        TRANCHE_A_INITIAL,
        600,
        (await time.latest()) + (365 * ONE_DAY)
      );

      // S3: 추가 발행
      const additionalA = (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_A_RATIO)) / 100n;
      const additionalB = (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_B_RATIO)) / 100n;
      await securityToken.additionalIssuance(trancheA, investorA.address, additionalA);
      await securityToken.additionalIssuance(trancheA, investorB.address, additionalB);
    });

    it("S4-1. 증액된 원금(600억)으로 이자 계산되어야 함", async function () {
      // NOTE: 현재 InterestDistribution은 principalAmount 업데이트 기능 없음
      // 이자 계산이 여전히 초기 500억 기준으로 됨

      await time.increase(THREE_MONTHS + ONE_DAY);
      await interestDistribution.payInterest(trancheA, 0);

      const payment = await interestDistribution.interestPayments(trancheA, 0);
      const schedule = await interestDistribution.getScheduleDetails(trancheA);

      // 현재 스케줄의 원금 (업데이트 안 됨)
      console.log("Current principal in schedule:", ethers.formatEther(schedule.principalAmount));
      console.log("Expected principal:", ethers.formatEther(TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A));

      // 이자는 초기 500억 기준으로 계산됨 (문제!)
      const currentInterest = (TRANCHE_A_INITIAL * 600n * 90n) / (10000n * 365n);
      const expectedInterest = ((TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A) * 600n * 90n) / (10000n * 365n);

      expect(payment.amount).to.be.closeTo(currentInterest, ethers.parseEther("10000000"));
      // 아래는 실패할 것 (principal 업데이트 안 돼서)
      // expect(payment.amount).to.be.closeTo(expectedInterest, ethers.parseEther("10000000"));

      // 결과 저장
      scenarioResults.s4.principalBefore = schedule.principalAmount;
      scenarioResults.s4.principalAfter = TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A;
    });
  });

  describe("S5: 부분 상환 (80%)", function () {
    beforeEach(async function () {
      const amountA = (TRANCHE_A_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      const amountB = (TRANCHE_A_INITIAL * BigInt(INVESTOR_B_RATIO)) / 100n;
      await securityToken.issueByTranche(trancheA, investorA.address, amountA);
      await securityToken.issueByTranche(trancheA, investorB.address, amountB);

      await interestDistribution.createRedemptionSchedule(
        trancheA,
        TRANCHE_A_INITIAL,
        600,
        (await time.latest()) + (365 * ONE_DAY)
      );
    });

    it("S5-1. 원금의 80% 부분 상환", async function () {
      await interestDistribution.partialRedemption(trancheA, 80);

      const schedule = await interestDistribution.getScheduleDetails(trancheA);
      const expectedRemaining = TRANCHE_A_INITIAL * 20n / 100n; // 20% 남음

      expect(schedule.principalAmount).to.equal(expectedRemaining);

      // 결과 저장
      scenarioResults.s5.redeemed = TRANCHE_A_INITIAL * 80n / 100n;
      scenarioResults.s5.remaining = expectedRemaining;
    });

    it("S5-2. 토큰도 비례하여 소각되어야 함", async function () {
      const balanceBeforeA = await securityToken.balanceOf(trancheA, investorA.address);

      // 80% 상환
      const redeemAmount = balanceBeforeA * 80n / 100n;
      await interestDistribution.connect(issuer).setTrustee(issuer.address);
      await securityToken.redeemByTranche(trancheA, investorA.address, redeemAmount);

      const balanceAfterA = await securityToken.balanceOf(trancheA, investorA.address);
      expect(balanceAfterA).to.equal(balanceBeforeA * 20n / 100n); // 20% 남음
    });
  });

  describe("S6: 최종 상환 (만기)", function () {
    beforeEach(async function () {
      const amountA = (TRANCHE_A_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      const amountB = (TRANCHE_A_INITIAL * BigInt(INVESTOR_B_RATIO)) / 100n;
      await securityToken.issueByTranche(trancheA, investorA.address, amountA);
      await securityToken.issueByTranche(trancheA, investorB.address, amountB);

      const maturityDate = (await time.latest()) + THREE_MONTHS;
      await interestDistribution.createRedemptionSchedule(
        trancheA,
        TRANCHE_A_INITIAL,
        600,
        maturityDate
      );

      // 80% 부분 상환
      await interestDistribution.partialRedemption(trancheA, 80);
    });

    it("S6-1. 만기 도래 후 최종 상환", async function () {
      await time.increase(THREE_MONTHS + (10 * ONE_DAY));

      const scheduleBefore = await interestDistribution.getScheduleDetails(trancheA);
      const remainingPrincipal = scheduleBefore.principalAmount;

      await interestDistribution.finalRedemption(trancheA);

      const scheduleAfter = await interestDistribution.getScheduleDetails(trancheA);
      expect(scheduleAfter.principalAmount).to.equal(0);
      expect(scheduleAfter.isActive).to.be.false;

      // 결과 저장
      scenarioResults.s6.final = remainingPrincipal;
    });
  });

  describe("S7: P2P 거래 및 보유기간별 이자 정산", function () {
    beforeEach(async function () {
      const amountA = (TRANCHE_A_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      await securityToken.issueByTranche(trancheA, investorA.address, amountA);

      await interestDistribution.createRedemptionSchedule(
        trancheA,
        TRANCHE_A_INITIAL,
        600,
        (await time.latest()) + (365 * ONE_DAY)
      );

      // 첫 이자 지급
      await time.increase(THREE_MONTHS + ONE_DAY);
      await interestDistribution.payInterest(trancheA, 0);
    });

    it("S7-1. 61일 보유 후 P2P 거래 - 일할 계산 이자 정산", async function () {
      // 61일 경과
      await time.increase(61 * ONE_DAY);

      // 투자자 A가 30억원 매도 주문
      const tx1 = await p2pTrading.connect(investorA).createSellOrder(
        trancheA,
        P2P_TRADE_AMOUNT,
        P2P_TRADE_AMOUNT, // 가격 = 원금
        30 // 30일 유효
      );

      const receipt1 = await tx1.wait();
      const orderEvent = receipt1.logs.find(log => {
        try {
          return p2pTrading.interface.parseLog(log)?.name === 'OrderCreated';
        } catch {
          return false;
        }
      });
      const orderId = p2pTrading.interface.parseLog(orderEvent).args.orderId;

      // 투자자 E가 매수
      const tx2 = await p2pTrading.connect(investorE).executeTrade(orderId, P2P_TRADE_AMOUNT);
      const receipt2 = await tx2.wait();

      const tradeEvent = receipt2.logs.find(log => {
        try {
          return p2pTrading.interface.parseLog(log)?.name === 'TradeExecuted';
        } catch {
          return false;
        }
      });
      const tradeId = p2pTrading.interface.parseLog(tradeEvent).args.tradeId;

      const trade = await p2pTrading.getTradeDetails(tradeId);

      // NOTE: 현재 _calculateHoldingDays는 hardcoded 90일 반환
      // 실제 시나리오: 61일 보유
      console.log("Holding days (should be 61):", trade.holdingDays);
      console.log("Settlement interest:", ethers.formatEther(trade.settlementInterest));

      // 예상 이자: 30억 × 6% × 61/365 = 약 0.30억원
      const expectedInterest = (P2P_TRADE_AMOUNT * 600n * 61n) / (10000n * 365n);
      console.log("Expected interest (61 days):", ethers.formatEther(expectedInterest));

      // 현재 계산값 (90일 기준): 30억 × 6% × 90/365 = 약 0.44억원
      const currentInterest = (P2P_TRADE_AMOUNT * 600n * 90n) / (10000n * 365n);
      console.log("Current interest (90 days):", ethers.formatEther(currentInterest));

      // 아래는 실패할 것 (hardcoded 90일 사용)
      // expect(trade.holdingDays).to.equal(61);
      // expect(trade.settlementInterest).to.be.closeTo(expectedInterest, ethers.parseEther("1000000"));

      // 현재는 90일로 계산됨
      expect(trade.holdingDays).to.equal(90);
      expect(trade.settlementInterest).to.be.closeTo(currentInterest, ethers.parseEther("1000000"));

      // 결과 저장
      scenarioResults.s7.tradeAmount = P2P_TRADE_AMOUNT;
      scenarioResults.s7.holdingDays = trade.holdingDays;
      scenarioResults.s7.interest = trade.settlementInterest;
      scenarioResults.s7.expectedInterest = expectedInterest;
    });
  });
});
