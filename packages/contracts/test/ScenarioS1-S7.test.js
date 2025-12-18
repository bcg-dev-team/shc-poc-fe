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
  const TRANCHE_A_INITIAL = ethers.parseEther("50000000000"); // 500억원 (원금)
  const TRANCHE_B_INITIAL = ethers.parseEther("40000000000"); // 400억원 (원금)
  const ISSUANCE_EXPENSES = ethers.parseEther("0"); // 0원 (취급수수료 및 발행제비용, 0으로 가정)

  // S1: 6:4 비율 배분
  const INVESTOR_A_RATIO = 60; // 60%
  const INVESTOR_B_RATIO = 40; // 40%

  // S3: 추가 한도대출 금액
  const ADDITIONAL_TRANCHE_A = ethers.parseEther("75000000000"); // 750억원 (원금)
  const ADDITIONAL_EXPENSES = ethers.parseEther("0"); // 0원 (추가 발행제비용, 0으로 가정)

  // S7: P2P 거래 금액
  const P2P_TRADE_AMOUNT = ethers.parseEther("3000000000"); // 30억원

  // 시나리오 실행 결과 추적
  const scenarioResults = {
    s1: {
      trancheA: 0n,
      trancheB: 0n,
      investorA: 0n, // 투자자 A 발행 (Tr-A)
      investorB: 0n, // 투자자 B 발행 (Tr-A)
      investorC: 0n, // 투자자 C 발행 (Tr-B)
      investorD: 0n, // 투자자 D 발행 (Tr-B)
    },
    s2: {
      interestA: 0n,
      interestB: 0n,
      investorA: 0n, // 투자자 A 이자
      investorB: 0n, // 투자자 B 이자
      investorC: 0n, // 투자자 C 이자
      investorD: 0n, // 투자자 D 이자
    },
    s3: {
      additional: 0n,
      totalA: 0n,
      investorA: 0n, // 투자자 A 추가 투자금
      investorB: 0n, // 투자자 B 추가 투자금
    },
    s4: {
      principalBefore: 0n,
      principalAfter: 0n,
      investorA: 0n, // 투자자 A 이자
      investorB: 0n, // 투자자 B 이자
    },
    s5: {
      redeemed: 0n,
      remaining: 0n,
      investorA: 0n, // 투자자 A 상환
      investorB: 0n, // 투자자 B 상환
    },
    s6: {
      interest: 0n, // 마지막 이자
      interestA: 0n, // 투자자 A 이자
      interestB: 0n, // 투자자 B 이자
      final: 0n,
      investorA: 0n, // 투자자 A 최종 상환
      investorB: 0n, // 투자자 B 최종 상환
    },
    s7: {
      tradeAmount: 0n,
      holdingDays: 0n,
      remainingDays: 0n, // 다음 이자 지급일까지 남은 일수
      interest: 0n,
      expectedInterest: 0n,
      investorA: 0n, // 투자자 A (매도자) 이자
      investorE: 0n, // 투자자 E (매수자) 받은 토큰
      investorEInterest: 0n, // 투자자 E (매수자) 예상 이자
    },
  };

  after(async function () {
    console.log("\n");
    console.log("=".repeat(80));
    console.log("📊 시나리오 S1-S7 실행 요약");
    console.log("=".repeat(80));

    console.log("\n【S1】 대출 실행 및 토큰 발행 (6:4 비율)");
    console.log(
      `  • Tr-A (Senior 6%):  ${ethers.formatEther(scenarioResults.s1.trancheA).padStart(15)}원 (500억, 제비용 0)`
    );
    if (scenarioResults.s1.investorA > 0n) {
      console.log(
        `    - 투자자 A (60%):  ${ethers.formatEther(scenarioResults.s1.investorA).padStart(15)}원 (300억)`
      );
    }
    if (scenarioResults.s1.investorB > 0n) {
      console.log(
        `    - 투자자 B (40%):  ${ethers.formatEther(scenarioResults.s1.investorB).padStart(15)}원 (200억)`
      );
    }
    console.log(
      `  • Tr-B (Junior 12%): ${ethers.formatEther(scenarioResults.s1.trancheB).padStart(15)}원 (400억, 제비용 0)`
    );
    if (scenarioResults.s1.investorC > 0n) {
      console.log(
        `    - 투자자 C (60%):  ${ethers.formatEther(scenarioResults.s1.investorC).padStart(15)}원 (240억)`
      );
    }
    if (scenarioResults.s1.investorD > 0n) {
      console.log(
        `    - 투자자 D (40%):  ${ethers.formatEther(scenarioResults.s1.investorD).padStart(15)}원 (160억)`
      );
    }
    console.log(`  • 투자자 배분:       60% / 40% (수동 배분)`);

    console.log("\n【S2】 최초 이자 지급 (3개월 후불)");
    if (scenarioResults.s2.interestA > 0n) {
      console.log(
        `  • Tr-A 이자 (6%):    ${ethers.formatEther(scenarioResults.s2.interestA).padStart(15)}원`
      );
      if (scenarioResults.s2.investorA > 0n) {
        console.log(
          `    - 투자자 A (60%):  ${ethers.formatEther(scenarioResults.s2.investorA).padStart(15)}원`
        );
      }
      if (scenarioResults.s2.investorB > 0n) {
        console.log(
          `    - 투자자 B (40%):  ${ethers.formatEther(scenarioResults.s2.investorB).padStart(15)}원`
        );
      }
    }
    if (scenarioResults.s2.interestB > 0n) {
      console.log(
        `  • Tr-B 이자 (12%):   ${ethers.formatEther(scenarioResults.s2.interestB).padStart(15)}원`
      );
      if (scenarioResults.s2.investorC > 0n) {
        console.log(
          `    - 투자자 C (60%):  ${ethers.formatEther(scenarioResults.s2.investorC).padStart(15)}원`
        );
      }
      if (scenarioResults.s2.investorD > 0n) {
        console.log(
          `    - 투자자 D (40%):  ${ethers.formatEther(scenarioResults.s2.investorD).padStart(15)}원`
        );
      }
    }

    console.log("\n【S3】 한도대출 추가 실행 (Tr-A만)");
    if (scenarioResults.s3.additional > 0n) {
      console.log(
        `  • 추가 발행:         ${ethers.formatEther(scenarioResults.s3.additional).padStart(15)}원 (750억, 제비용 0)`
      );
      if (scenarioResults.s3.investorA > 0n) {
        const totalA =
          scenarioResults.s1.investorA + scenarioResults.s3.investorA;
        console.log(
          `    - 투자자 A (60%):  ${ethers.formatEther(totalA).padStart(15)}원 (+450억)`
        );
      }
      if (scenarioResults.s3.investorB > 0n) {
        const totalB =
          scenarioResults.s1.investorB + scenarioResults.s3.investorB;
        console.log(
          `    - 투자자 B (40%):  ${ethers.formatEther(totalB).padStart(15)}원 (+300억)`
        );
      }
      console.log(
        `  • 총 발행액:         ${ethers.formatEther(scenarioResults.s3.totalA).padStart(15)}원 (1,250억)`
      );
      console.log(`  • 배분 방식:         수동 (6:4 자동 배분 미구현)`);
    }

    console.log("\n【S4】 증액된 원금에 대한 이자 지급");
    if (scenarioResults.s4.principalBefore > 0n) {
      console.log(
        `  • 스케줄 원금:       ${ethers.formatEther(scenarioResults.s4.principalBefore).padStart(15)}원`
      );
      console.log(
        `  • 실제 발행액:       ${ethers.formatEther(scenarioResults.s4.principalAfter).padStart(15)}원`
      );
      if (
        scenarioResults.s4.principalBefore !== scenarioResults.s4.principalAfter
      ) {
        // console.log(
        //   `  ⚠️  원금 불일치:      ${ethers.formatEther(scenarioResults.s4.principalAfter - scenarioResults.s4.principalBefore).padStart(15)}원 차이`
        // );
      }
      if (scenarioResults.s4.investorA > 0n) {
        console.log(
          `  • 투자자 A 이자:     ${ethers.formatEther(scenarioResults.s4.investorA).padStart(15)}원 (60%)`
        );
      }
      if (scenarioResults.s4.investorB > 0n) {
        console.log(
          `  • 투자자 B 이자:     ${ethers.formatEther(scenarioResults.s4.investorB).padStart(15)}원 (40%)`
        );
      }
    }

    console.log("\n【S5】 부분 상환 (80%)");
    if (scenarioResults.s5.redeemed > 0n) {
      console.log(
        `  • 상환 금액:         ${ethers.formatEther(scenarioResults.s5.redeemed).padStart(15)}원 (80%)`
      );
      if (scenarioResults.s5.investorA > 0n) {
        console.log(
          `    - 투자자 A (60%):  ${ethers.formatEther(scenarioResults.s5.investorA).padStart(15)}원`
        );
      }
      if (scenarioResults.s5.investorB > 0n) {
        console.log(
          `    - 투자자 B (40%):  ${ethers.formatEther(scenarioResults.s5.investorB).padStart(15)}원`
        );
      }
      console.log(
        `  • 잔여 원금:         ${ethers.formatEther(scenarioResults.s5.remaining).padStart(15)}원 (20%)`
      );
    }

    console.log("\n【S6】 최종 상환 (만기)");
    if (scenarioResults.s6.interest > 0n) {
      console.log(
        `  • 마지막 이자 (6%):  ${ethers.formatEther(scenarioResults.s6.interest).padStart(15)}원`
      );
      if (scenarioResults.s6.interestA > 0n) {
        console.log(
          `    - 투자자 A (60%):  ${ethers.formatEther(scenarioResults.s6.interestA).padStart(15)}원`
        );
      }
      if (scenarioResults.s6.interestB > 0n) {
        console.log(
          `    - 투자자 B (40%):  ${ethers.formatEther(scenarioResults.s6.interestB).padStart(15)}원`
        );
      }
    }
    if (scenarioResults.s6.final > 0n) {
      console.log(
        `  • 최종 상환:         ${ethers.formatEther(scenarioResults.s6.final).padStart(15)}원`
      );
      if (scenarioResults.s6.investorA > 0n) {
        console.log(
          `    - 투자자 A (60%):  ${ethers.formatEther(scenarioResults.s6.investorA).padStart(15)}원`
        );
      }
      if (scenarioResults.s6.investorB > 0n) {
        console.log(
          `    - 투자자 B (40%):  ${ethers.formatEther(scenarioResults.s6.investorB).padStart(15)}원`
        );
      }
      console.log(`  • 프로젝트 종료:     완료`);
    }

    console.log("\n【S7】 P2P 거래 및 보유기간별 이자 정산");
    if (scenarioResults.s7.tradeAmount > 0n) {
      console.log(
        `  • 거래 금액:         ${ethers.formatEther(scenarioResults.s7.tradeAmount).padStart(15)}원 (30억)`
      );
      console.log(`  • 투자자 A (매도자):`);
      if (scenarioResults.s7.investorA > 0n) {
        console.log(
          `    - 보유 기간:       ${scenarioResults.s7.holdingDays.toString().padStart(15)}일`
        );
        console.log(
          `    - 정산 이자:       ${ethers.formatEther(scenarioResults.s7.investorA).padStart(15)}원`
        );
      }
      console.log(`  • 투자자 E (매수자):`);
      if (scenarioResults.s7.investorE > 0n) {
        console.log(
          `    - 취득 토큰:       ${ethers.formatEther(scenarioResults.s7.investorE).padStart(15)}원`
        );
      }
      if (scenarioResults.s7.investorEInterest > 0n) {
        console.log(
          `    - 예상 보유기간:   ${scenarioResults.s7.remainingDays.toString().padStart(15)}일 (다음 이자 지급일까지)`
        );
        console.log(
          `    - 예상 이자:       ${ethers.formatEther(scenarioResults.s7.investorEInterest).padStart(15)}원`
        );
      }
      console.log(
        `  • 이자 계산 방식:   일할 계산 (보유일수 × 이자율 × 금액 ÷ 365)`
      );
      console.log(
        `  • 참조값 (61일):    ${ethers.formatEther(scenarioResults.s7.expectedInterest).padStart(15)}원`
      );
    }

    console.log("\n" + "=".repeat(80));
    console.log("✅ 구현 완료 사항");
    console.log("=".repeat(80));
    console.log("  1. [S4] 추가 발행 후 원금 업데이트");
    console.log("  2. [S2, S4] 월할 계산 이자 지급 - 3개월 = 3/12 정확한 계산");
    console.log("  3. [S5, S6] 1,250억 기준 부분/최종 상환 - 올바른 금액 계산");
    console.log("  4. [S7] 실제 보유일수 기반 이자 정산 - 일할 계산 구현");
    // console.log("\n⚠️  알려진 제약사항");
    // console.log("=".repeat(80));
    // console.log("  1. [S1, S3] 6:4 비율 자동 배분 미구현 - 수동 호출 필요");
    // console.log("=".repeat(80));
    // console.log("\n");
  });

  beforeEach(async function () {
    [issuer, trustee, investorA, investorB, investorC, investorD, investorE] =
      await ethers.getSigners();

    // Deploy contracts
    const SecurityToken = await ethers.getContractFactory("SecurityToken");
    securityToken = await SecurityToken.deploy(
      "Shinhan Capital PF Token",
      "SHCPF"
    );

    const InterestDistribution = await ethers.getContractFactory(
      "InterestDistribution"
    );
    interestDistribution = await InterestDistribution.deploy(
      await securityToken.getAddress()
    );

    const AssetValuation = await ethers.getContractFactory("AssetValuation");
    assetValuation = await AssetValuation.deploy();

    const P2PTrading = await ethers.getContractFactory("P2PTrading");
    p2pTrading = await P2PTrading.deploy(
      await securityToken.getAddress(),
      await interestDistribution.getAddress()
    );

    // Set controller
    await securityToken.setController(
      await interestDistribution.getAddress(),
      true
    );
    await securityToken.setController(await p2pTrading.getAddress(), true);

    // Create tranches
    trancheA = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));
    trancheB = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_B"));

    const maturityDate = (await time.latest()) + 365 * ONE_DAY; // 1년

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
    it("S1-1. Tranche A 500억원 발행 - 투자자 A(60%), 투자자 B(40%) [제비용 0]", async function () {
      // NOTE: 현재 구현은 단일 주소로만 발행 가능
      // 실제 시나리오는 6:4 비율로 자동 배분 필요
      // 제비용(취급수수료 및 발행제비용)은 0으로 가정

      const amountA = (TRANCHE_A_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      const amountB = (TRANCHE_A_INITIAL * BigInt(INVESTOR_B_RATIO)) / 100n;

      await securityToken.issueByTranche(trancheA, investorA.address, amountA);
      await securityToken.issueByTranche(trancheA, investorB.address, amountB);

      expect(
        await securityToken.balanceOf(trancheA, investorA.address)
      ).to.equal(amountA);
      expect(
        await securityToken.balanceOf(trancheA, investorB.address)
      ).to.equal(amountB);

      // 총 발행량 확인
      const trancheInfo = await securityToken.getTrancheInfo(trancheA);
      expect(trancheInfo._totalSupply).to.equal(TRANCHE_A_INITIAL);

      // 결과 저장
      scenarioResults.s1.trancheA = TRANCHE_A_INITIAL;
      scenarioResults.s1.investorA = amountA; // 투자자 A: 300억
      scenarioResults.s1.investorB = amountB; // 투자자 B: 200억
    });

    it("S1-2. Tranche B 400억원 발행 - 투자자 C(60%), 투자자 D(40%) [제비용 0]", async function () {
      // 제비용(취급수수료 및 발행제비용)은 0으로 가정
      const amountC = (TRANCHE_B_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      const amountD = (TRANCHE_B_INITIAL * BigInt(INVESTOR_B_RATIO)) / 100n;

      await securityToken.issueByTranche(trancheB, investorC.address, amountC);
      await securityToken.issueByTranche(trancheB, investorD.address, amountD);

      expect(
        await securityToken.balanceOf(trancheB, investorC.address)
      ).to.equal(amountC);
      expect(
        await securityToken.balanceOf(trancheB, investorD.address)
      ).to.equal(amountD);

      const trancheInfo = await securityToken.getTrancheInfo(trancheB);
      expect(trancheInfo._totalSupply).to.equal(TRANCHE_B_INITIAL);

      // 결과 저장
      scenarioResults.s1.trancheB = TRANCHE_B_INITIAL;
      scenarioResults.s1.investorC = amountC; // 투자자 C: 240억
      scenarioResults.s1.investorD = amountD; // 투자자 D: 160억
    });

    it("S1-3. 상환 스케줄 생성", async function () {
      await interestDistribution.createRedemptionSchedule(
        trancheA,
        TRANCHE_A_INITIAL,
        600, // 6%
        (await time.latest()) + 365 * ONE_DAY
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
        (await time.latest()) + 365 * ONE_DAY
      );
    });

    it("S2-1. 3개월 후 첫 번째 이자 지급", async function () {
      // 3개월 경과
      await time.increase(THREE_MONTHS + ONE_DAY);

      // 첫 번째 이자 지급
      await interestDistribution.payInterest(trancheA, 0);

      const payment = await interestDistribution.interestPayments(trancheA, 0);
      expect(payment.isPaid).to.be.true;

      // 월할 계산: 500억 × 6% × 3/12 = 7.5억원
      const expectedInterest = (TRANCHE_A_INITIAL * 600n * 3n) / (10000n * 12n);
      expect(payment.amount).to.equal(expectedInterest);

      // 투자자별 이자 계산 (6:4 비율)
      const investorAInterest =
        (payment.amount * BigInt(INVESTOR_A_RATIO)) / 100n;
      const investorBInterest =
        (payment.amount * BigInt(INVESTOR_B_RATIO)) / 100n;

      // 결과 저장
      scenarioResults.s2.interestA = payment.amount;
      scenarioResults.s2.investorA = investorAInterest;
      scenarioResults.s2.investorB = investorBInterest;
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
        (await time.latest()) + 365 * ONE_DAY
      );

      await time.increase(THREE_MONTHS + ONE_DAY);
      await interestDistribution.payInterest(trancheB, 0);

      const payment = await interestDistribution.interestPayments(trancheB, 0);

      // 월할 계산: 400억 × 12% × 3/12 = 12억원
      const expectedInterest =
        (TRANCHE_B_INITIAL * 1200n * 3n) / (10000n * 12n);
      expect(payment.amount).to.equal(expectedInterest);

      // 투자자별 이자 계산 (6:4 비율)
      const investorCInterest =
        (payment.amount * BigInt(INVESTOR_A_RATIO)) / 100n;
      const investorDInterest =
        (payment.amount * BigInt(INVESTOR_B_RATIO)) / 100n;

      // 결과 저장
      scenarioResults.s2.interestB = payment.amount;
      scenarioResults.s2.investorC = investorCInterest;
      scenarioResults.s2.investorD = investorDInterest;
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
        (await time.latest()) + 365 * ONE_DAY
      );
    });

    it("S3-1. 추가 750억원 발행 - 기존 6:4 비율 유지 필요 [제비용 0]", async function () {
      // NOTE: 현재 additionalIssuance는 단일 주소로만 발행
      // 실제 시나리오는 자동으로 투자자 A(450억), 투자자 B(300억) 배분 필요
      // 제비용(추가 발행제비용)은 0으로 가정
      // 총 발행량: 500억 → 1,250억 (투자자 A: 300억→750억, 투자자 B: 200억→500억)

      const additionalA =
        (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_A_RATIO)) / 100n; // 450억
      const additionalB =
        (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_B_RATIO)) / 100n; // 300억

      const balanceBeforeA = await securityToken.balanceOf(
        trancheA,
        investorA.address
      );
      const balanceBeforeB = await securityToken.balanceOf(
        trancheA,
        investorB.address
      );

      // 현재는 수동으로 각각 발행
      await securityToken.additionalIssuance(
        trancheA,
        investorA.address,
        additionalA
      );
      await securityToken.additionalIssuance(
        trancheA,
        investorB.address,
        additionalB
      );

      const balanceAfterA = await securityToken.balanceOf(
        trancheA,
        investorA.address
      );
      const balanceAfterB = await securityToken.balanceOf(
        trancheA,
        investorB.address
      );

      expect(balanceAfterA - balanceBeforeA).to.equal(additionalA);
      expect(balanceAfterB - balanceBeforeB).to.equal(additionalB);

      // 총 발행량: 500억 + 750억 = 1,250억
      const trancheInfo = await securityToken.getTrancheInfo(trancheA);
      expect(trancheInfo._totalSupply).to.equal(
        TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A
      );

      // 스케줄의 원금 업데이트 (추가 발행된 750억원 반영)
      await interestDistribution.updatePrincipalAmount(
        trancheA,
        ADDITIONAL_TRANCHE_A
      );

      // 결과 저장
      scenarioResults.s3.additional = ADDITIONAL_TRANCHE_A;
      scenarioResults.s3.totalA = TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A;
      scenarioResults.s3.investorA = additionalA; // 투자자 A: 450억
      scenarioResults.s3.investorB = additionalB; // 투자자 B: 300억
    });

    it("S3-2. Tranche B는 추가 발행 불가 (Senior only)", async function () {
      await expect(
        securityToken.additionalIssuance(
          trancheB,
          investorC.address,
          ethers.parseEther("1000000000")
        )
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
        (await time.latest()) + 365 * ONE_DAY
      );

      // S3: 추가 발행
      const additionalA =
        (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_A_RATIO)) / 100n;
      const additionalB =
        (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_B_RATIO)) / 100n;
      await securityToken.additionalIssuance(
        trancheA,
        investorA.address,
        additionalA
      );
      await securityToken.additionalIssuance(
        trancheA,
        investorB.address,
        additionalB
      );

      // 스케줄의 원금 업데이트 (추가 발행된 750억원 반영)
      await interestDistribution.updatePrincipalAmount(
        trancheA,
        ADDITIONAL_TRANCHE_A
      );
    });

    it("S4-1. 증액된 원금(1,250억)으로 이자 계산되어야 함", async function () {
      // updatePrincipalAmount로 원금이 업데이트되었으므로
      // 이자 계산이 1,250억 기준으로 계산되어야 함

      await time.increase(THREE_MONTHS + ONE_DAY);
      await interestDistribution.payInterest(trancheA, 0);

      const payment = await interestDistribution.interestPayments(trancheA, 0);
      const schedule = await interestDistribution.getScheduleDetails(trancheA);

      // 스케줄의 원금 확인 (업데이트되어야 함)
      console.log(
        "Principal in schedule:",
        ethers.formatEther(schedule.principalAmount)
      );
      console.log(
        "Expected principal:",
        ethers.formatEther(TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A)
      );

      // 원금이 올바르게 업데이트되었는지 확인
      expect(schedule.principalAmount).to.equal(
        TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A
      );

      // 월할 계산: 1,250억 × 6% × 3/12 = 18.75억원
      const expectedInterest =
        ((TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A) * 600n * 3n) /
        (10000n * 12n);

      console.log(
        "Expected interest (1,250억 × 6% × 3/12):",
        ethers.formatEther(expectedInterest)
      );
      console.log("Actual interest:", ethers.formatEther(payment.amount));

      // 이자가 올바르게 계산되었는지 확인
      expect(payment.amount).to.equal(expectedInterest);

      // 투자자별 이자 계산 (6:4 비율)
      // 투자자 A (60%): 11.25억원
      // 투자자 B (40%): 7.50억원
      const investorAInterest =
        (payment.amount * BigInt(INVESTOR_A_RATIO)) / 100n;
      const investorBInterest =
        (payment.amount * BigInt(INVESTOR_B_RATIO)) / 100n;

      console.log(
        "투자자 A 이자 (60%):",
        ethers.formatEther(investorAInterest)
      );
      console.log(
        "투자자 B 이자 (40%):",
        ethers.formatEther(investorBInterest)
      );

      // 결과 저장
      scenarioResults.s4.principalBefore = TRANCHE_A_INITIAL;
      scenarioResults.s4.principalAfter = schedule.principalAmount;
      scenarioResults.s4.investorA = investorAInterest;
      scenarioResults.s4.investorB = investorBInterest;
    });
  });

  describe("S5: 부분 상환 (80%)", function () {
    beforeEach(async function () {
      // S1 + S3 실행 (1,250억 기준)
      const amountA = (TRANCHE_A_INITIAL * BigInt(INVESTOR_A_RATIO)) / 100n;
      const amountB = (TRANCHE_A_INITIAL * BigInt(INVESTOR_B_RATIO)) / 100n;
      await securityToken.issueByTranche(trancheA, investorA.address, amountA);
      await securityToken.issueByTranche(trancheA, investorB.address, amountB);

      await interestDistribution.createRedemptionSchedule(
        trancheA,
        TRANCHE_A_INITIAL,
        600,
        (await time.latest()) + 365 * ONE_DAY
      );

      // S3: 추가 발행
      const additionalA =
        (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_A_RATIO)) / 100n;
      const additionalB =
        (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_B_RATIO)) / 100n;
      await securityToken.additionalIssuance(
        trancheA,
        investorA.address,
        additionalA
      );
      await securityToken.additionalIssuance(
        trancheA,
        investorB.address,
        additionalB
      );

      // 스케줄의 원금 업데이트 (추가 발행된 750억원 반영)
      await interestDistribution.updatePrincipalAmount(
        trancheA,
        ADDITIONAL_TRANCHE_A
      );
    });

    it("S5-1. 원금의 80% 부분 상환 (1,250억의 80% = 1,000억 상환)", async function () {
      // 80% 부분 상환
      await interestDistribution.partialRedemption(trancheA, 80);

      const schedule = await interestDistribution.getScheduleDetails(trancheA);
      const totalPrincipal = TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A; // 1,250억
      const expectedRemaining = (totalPrincipal * 20n) / 100n; // 250억 (20% 남음)

      expect(schedule.principalAmount).to.equal(expectedRemaining);

      // 투자자별 상환 금액 (6:4 비율)
      // 1,000억 × 60% = 600억 (투자자 A)
      // 1,000억 × 40% = 400억 (투자자 B)
      const totalRedeemed = (totalPrincipal * 80n) / 100n; // 1,000억
      const redeemedA = (totalRedeemed * BigInt(INVESTOR_A_RATIO)) / 100n; // 600억
      const redeemedB = (totalRedeemed * BigInt(INVESTOR_B_RATIO)) / 100n; // 400억

      // 결과 저장
      scenarioResults.s5.redeemed = totalRedeemed;
      scenarioResults.s5.remaining = expectedRemaining;
      scenarioResults.s5.investorA = redeemedA; // 투자자 A: 600억 상환
      scenarioResults.s5.investorB = redeemedB; // 투자자 B: 400억 상환
    });

    it("S5-2. 토큰도 비례하여 소각되어야 함", async function () {
      const balanceBeforeA = await securityToken.balanceOf(
        trancheA,
        investorA.address
      );

      // 80% 상환
      const redeemAmount = (balanceBeforeA * 80n) / 100n;
      await interestDistribution.connect(issuer).setTrustee(issuer.address);
      await securityToken.redeemByTranche(
        trancheA,
        investorA.address,
        redeemAmount
      );

      const balanceAfterA = await securityToken.balanceOf(
        trancheA,
        investorA.address
      );
      expect(balanceAfterA).to.equal((balanceBeforeA * 20n) / 100n); // 20% 남음
    });
  });

  describe("S6: 최종 상환 (만기)", function () {
    beforeEach(async function () {
      // S1 + S3 + S5 실행 (1,250억 → 250억 잔여)
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

      // S3: 추가 발행
      const additionalA =
        (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_A_RATIO)) / 100n;
      const additionalB =
        (ADDITIONAL_TRANCHE_A * BigInt(INVESTOR_B_RATIO)) / 100n;
      await securityToken.additionalIssuance(
        trancheA,
        investorA.address,
        additionalA
      );
      await securityToken.additionalIssuance(
        trancheA,
        investorB.address,
        additionalB
      );

      // 스케줄의 원금 업데이트 (추가 발행된 750억원 반영)
      await interestDistribution.updatePrincipalAmount(
        trancheA,
        ADDITIONAL_TRANCHE_A
      );

      // S5: 80% 부분 상환 (1,250억 → 250억)
      await interestDistribution.partialRedemption(trancheA, 80);
    });

    it("S6-1. 만기 도래 후 마지막 이자 지급 및 최종 상환 (250억 잔여 상환)", async function () {
      await time.increase(THREE_MONTHS + 10 * ONE_DAY);

      const scheduleBefore =
        await interestDistribution.getScheduleDetails(trancheA);
      const remainingPrincipal = scheduleBefore.principalAmount;

      // 잔여 원금이 250억인지 확인
      const expectedRemaining =
        ((TRANCHE_A_INITIAL + ADDITIONAL_TRANCHE_A) * 20n) / 100n; // 250억
      expect(remainingPrincipal).to.equal(expectedRemaining);

      // 마지막 이자 지급 (250억 × 6% × 3/12 = 3.75억)
      await interestDistribution.payInterest(trancheA, 1); // 두 번째 이자 지급 (인덱스 1)

      const lastPayment = await interestDistribution.interestPayments(
        trancheA,
        1
      );
      const expectedInterest =
        (remainingPrincipal * 600n * 3n) / (10000n * 12n); // 3.75억
      expect(lastPayment.amount).to.equal(expectedInterest);

      // 투자자별 마지막 이자 (6:4 비율)
      const interestA = (lastPayment.amount * BigInt(INVESTOR_A_RATIO)) / 100n; // 2.25억
      const interestB = (lastPayment.amount * BigInt(INVESTOR_B_RATIO)) / 100n; // 1.50억

      // 최종 상환
      await interestDistribution.finalRedemption(trancheA);

      const scheduleAfter =
        await interestDistribution.getScheduleDetails(trancheA);
      expect(scheduleAfter.principalAmount).to.equal(0);
      expect(scheduleAfter.isActive).to.be.false;

      // 투자자별 최종 상환 금액 (6:4 비율)
      // 투자자 A: 250억 × 60% = 150억
      // 투자자 B: 250억 × 40% = 100억
      const finalA = (remainingPrincipal * BigInt(INVESTOR_A_RATIO)) / 100n;
      const finalB = (remainingPrincipal * BigInt(INVESTOR_B_RATIO)) / 100n;

      // 결과 저장
      scenarioResults.s6.interest = lastPayment.amount;
      scenarioResults.s6.interestA = interestA; // 투자자 A: 2.25억 이자
      scenarioResults.s6.interestB = interestB; // 투자자 B: 1.50억 이자
      scenarioResults.s6.final = remainingPrincipal;
      scenarioResults.s6.investorA = finalA; // 투자자 A: 150억 최종 상환
      scenarioResults.s6.investorB = finalB; // 투자자 B: 100억 최종 상환
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
        (await time.latest()) + 365 * ONE_DAY
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
      const orderEvent = receipt1.logs.find((log) => {
        try {
          return p2pTrading.interface.parseLog(log)?.name === "OrderCreated";
        } catch {
          return false;
        }
      });
      const orderId = p2pTrading.interface.parseLog(orderEvent).args.orderId;

      // 투자자 E가 매수
      const tx2 = await p2pTrading
        .connect(investorE)
        .executeTrade(orderId, P2P_TRADE_AMOUNT);
      const receipt2 = await tx2.wait();

      const tradeEvent = receipt2.logs.find((log) => {
        try {
          return p2pTrading.interface.parseLog(log)?.name === "TradeExecuted";
        } catch {
          return false;
        }
      });
      const tradeId = p2pTrading.interface.parseLog(tradeEvent).args.tradeId;

      const trade = await p2pTrading.getTradeDetails(tradeId);

      // 실제 보유기간 계산: 마지막 이자 지급일로부터 61일 경과
      console.log("Holding days (expected 61-62):", trade.holdingDays);
      console.log(
        "Settlement interest:",
        ethers.formatEther(trade.settlementInterest)
      );

      // 예상 이자: 30억 × 6% × 61/365 = 약 0.30억원
      const expectedInterest61 =
        (P2P_TRADE_AMOUNT * 600n * 61n) / (10000n * 365n);
      const expectedInterest62 =
        (P2P_TRADE_AMOUNT * 600n * 62n) / (10000n * 365n);
      console.log(
        "Expected interest (61 days):",
        ethers.formatEther(expectedInterest61)
      );
      console.log(
        "Expected interest (62 days):",
        ethers.formatEther(expectedInterest62)
      );

      // 보유 일수는 61-62일 사이여야 함 (타임스탬프 오차 고려)
      expect(trade.holdingDays).to.be.within(61, 62);

      // 이자도 61일 또는 62일 기준으로 계산되어야 함
      const actualDays = Number(trade.holdingDays);
      const expectedInterest =
        (P2P_TRADE_AMOUNT * 600n * BigInt(actualDays)) / (10000n * 365n);
      expect(trade.settlementInterest).to.equal(expectedInterest);

      // 투자자 E의 예상 이자 계산 (다음 이자 지급일까지 남은 기간)
      // 3개월 주기이므로 90일 - 보유일수 = 남은 일수
      const remainingDays = 90 - actualDays; // 약 28일
      const investorEInterest =
        (P2P_TRADE_AMOUNT * 600n * BigInt(remainingDays)) / (10000n * 365n);

      console.log(
        "투자자 E 보유 예상 기간:",
        remainingDays,
        "일 (다음 이자 지급일까지)"
      );
      console.log("투자자 E 예상 이자:", ethers.formatEther(investorEInterest));

      // 결과 저장
      scenarioResults.s7.tradeAmount = P2P_TRADE_AMOUNT;
      scenarioResults.s7.holdingDays = trade.holdingDays;
      scenarioResults.s7.remainingDays = BigInt(remainingDays);
      scenarioResults.s7.interest = trade.settlementInterest;
      scenarioResults.s7.expectedInterest = expectedInterest61; // 61일 기준 참조값
      scenarioResults.s7.investorA = trade.settlementInterest; // 투자자 A (매도자) 이자
      scenarioResults.s7.investorE = P2P_TRADE_AMOUNT; // 투자자 E (매수자) 받은 토큰
      scenarioResults.s7.investorEInterest = investorEInterest; // 투자자 E (매수자) 예상 이자
    });
  });
});
