const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("InterestDistribution - 이자 배분 및 상환 처리", function () {
  let securityToken, interestDistribution;
  let issuer, trustee, investor1, investor2;
  let trancheA, trancheB;

  const TRANCHE_A_RATE = 600; // 6% (basis points)
  const TRANCHE_B_RATE = 1200; // 12%
  const ONE_YEAR = 365 * 24 * 60 * 60;
  const THREE_MONTHS = 90 * 24 * 60 * 60;
  const ONE_DAY = 24 * 60 * 60;

  beforeEach(async function () {
    [issuer, trustee, investor1, investor2] = await ethers.getSigners();

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

    // Tranche 설정
    trancheA = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));
    trancheB = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_B"));

    const maturityDate = (await time.latest()) + ONE_YEAR;
    await securityToken.createTranche(
      trancheA,
      "Tranche A - Senior",
      0,
      TRANCHE_A_RATE,
      maturityDate
    );
    await securityToken.createTranche(
      trancheB,
      "Tranche B - Junior",
      1,
      TRANCHE_B_RATE,
      maturityDate
    );

    // Trustee 변경
    await interestDistribution.setTrustee(trustee.address);
  });

  describe("시나리오 1: 상환 스케줄 생성", function () {
    it("1-1. Tranche A 상환 스케줄 생성 (100억원, 6%, 1년)", async function () {
      const principalAmount = ethers.parseEther("10000000000"); // 100억원
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await expect(
        interestDistribution.connect(trustee).createRedemptionSchedule(
          trancheA,
          principalAmount,
          TRANCHE_A_RATE,
          maturityDate
        )
      ).to.emit(interestDistribution, "InterestScheduled");

      const schedule = await interestDistribution.getScheduleDetails(trancheA);
      expect(schedule.principalAmount).to.equal(principalAmount);
      expect(schedule.interestRate).to.equal(TRANCHE_A_RATE);
      expect(schedule.isActive).to.be.true;
    });

    it("1-2. Tranche B 상환 스케줄 생성 (50억원, 12%, 1년)", async function () {
      const principalAmount = ethers.parseEther("5000000000"); // 50억원
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheB,
        principalAmount,
        TRANCHE_B_RATE,
        maturityDate
      );

      const schedule = await interestDistribution.getScheduleDetails(trancheB);
      expect(schedule.principalAmount).to.equal(principalAmount);
      expect(schedule.interestRate).to.equal(TRANCHE_B_RATE);
    });

    it("1-3. 중복 스케줄 생성 실패", async function () {
      const principalAmount = ethers.parseEther("10000000000");
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheA,
        principalAmount,
        TRANCHE_A_RATE,
        maturityDate
      );

      await expect(
        interestDistribution.connect(trustee).createRedemptionSchedule(
          trancheA,
          principalAmount,
          TRANCHE_A_RATE,
          maturityDate
        )
      ).to.be.revertedWith("Schedule already exists");
    });

    it("1-4. Trustee가 아닌 계정의 스케줄 생성 실패", async function () {
      const principalAmount = ethers.parseEther("10000000000");
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await expect(
        interestDistribution.connect(investor1).createRedemptionSchedule(
          trancheA,
          principalAmount,
          TRANCHE_A_RATE,
          maturityDate
        )
      ).to.be.revertedWith("Only trustee");
    });
  });

  describe("시나리오 2: 이자 지급 처리 (3개월 후불)", function () {
    beforeEach(async function () {
      const principalAmount = ethers.parseEther("10000000000"); // 100억원
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheA,
        principalAmount,
        TRANCHE_A_RATE,
        maturityDate
      );
    });

    it("2-1. 첫 번째 이자 지급 (3개월 후)", async function () {
      // 3개월 경과
      await time.increase(THREE_MONTHS);

      const nextPaymentDate = await interestDistribution.getNextPaymentDate(trancheA);
      expect(nextPaymentDate).to.be.gt(0);

      await expect(
        interestDistribution.connect(trustee).payInterest(trancheA, 0)
      ).to.emit(interestDistribution, "InterestPaid");

      const totalPaid = await interestDistribution.getTotalInterestPaid(trancheA);
      expect(totalPaid).to.be.gt(0);
    });

    it("2-2. 두 번째 이자 지급 (6개월 후)", async function () {
      // 6개월 경과
      await time.increase(THREE_MONTHS * 2);

      // 첫 번째 지급
      await interestDistribution.connect(trustee).payInterest(trancheA, 0);

      // 두 번째 지급
      await interestDistribution.connect(trustee).payInterest(trancheA, 1);

      const schedule = await interestDistribution.getScheduleDetails(trancheA);
      expect(schedule.paymentCount).to.equal(2);
    });

    it("2-3. 지급일 이전 이자 지급 실패", async function () {
      // 시간 경과 없이 즉시 지급 시도
      await expect(
        interestDistribution.connect(trustee).payInterest(trancheA, 0)
      ).to.be.revertedWith("Not yet due");
    });

    it("2-4. 중복 이자 지급 실패", async function () {
      await time.increase(THREE_MONTHS);

      await interestDistribution.connect(trustee).payInterest(trancheA, 0);

      await expect(
        interestDistribution.connect(trustee).payInterest(trancheA, 0)
      ).to.be.revertedWith("Already paid");
    });

    it("2-5. 연속 이자 지급 (4회 - 1년)", async function () {
      // 첫 3개월
      await time.increase(THREE_MONTHS);
      await interestDistribution.connect(trustee).payInterest(trancheA, 0);

      // 두 번째 3개월
      await time.increase(THREE_MONTHS);
      await interestDistribution.connect(trustee).payInterest(trancheA, 1);

      // 세 번째 3개월
      await time.increase(THREE_MONTHS);
      await interestDistribution.connect(trustee).payInterest(trancheA, 2);

      // 네 번째 3개월
      await time.increase(THREE_MONTHS);
      await interestDistribution.connect(trustee).payInterest(trancheA, 3);

      const schedule = await interestDistribution.getScheduleDetails(trancheA);
      expect(schedule.paymentCount).to.equal(4);

      const totalPaid = await interestDistribution.getTotalInterestPaid(trancheA);
      expect(totalPaid).to.be.gt(0);
    });
  });

  describe("시나리오 3: 부분 상환 (80%)", function () {
    beforeEach(async function () {
      const principalAmount = ethers.parseEther("10000000000"); // 100억원
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheA,
        principalAmount,
        TRANCHE_A_RATE,
        maturityDate
      );
    });

    it("3-1. 원금 80% 부분 상환", async function () {
      const initialSchedule = await interestDistribution.getScheduleDetails(trancheA);
      const initialPrincipal = initialSchedule.principalAmount;

      await expect(
        interestDistribution.connect(trustee).partialRedemption(trancheA, 80)
      ).to.emit(interestDistribution, "PartialRedemption")
        .withArgs(trancheA, (initialPrincipal * 80n) / 100n, 80);

      const updatedSchedule = await interestDistribution.getScheduleDetails(trancheA);
      expect(updatedSchedule.principalAmount).to.equal((initialPrincipal * 20n) / 100n);
    });

    it("3-2. 여러 차례 부분 상환", async function () {
      const initialSchedule = await interestDistribution.getScheduleDetails(trancheA);
      const initialPrincipal = initialSchedule.principalAmount;

      // 50% 상환
      await interestDistribution.connect(trustee).partialRedemption(trancheA, 50);

      let schedule = await interestDistribution.getScheduleDetails(trancheA);
      const afterFirst = (initialPrincipal * 50n) / 100n;
      expect(schedule.principalAmount).to.equal(afterFirst);

      // 추가 30% 상환 (현재 잔여 원금의 30%)
      await interestDistribution.connect(trustee).partialRedemption(trancheA, 30);

      schedule = await interestDistribution.getScheduleDetails(trancheA);
      // 50억의 30% = 15억 상환 → 50억 - 15억 = 35억
      const expectedFinal = afterFirst - (afterFirst * 30n) / 100n;
      expect(schedule.principalAmount).to.equal(expectedFinal);
    });

    it("3-3. 100% 초과 상환 실패", async function () {
      await expect(
        interestDistribution.connect(trustee).partialRedemption(trancheA, 101)
      ).to.be.revertedWith("Invalid percentage");
    });

    it("3-4. Trustee가 아닌 계정의 상환 실패", async function () {
      await expect(
        interestDistribution.connect(investor1).partialRedemption(trancheA, 80)
      ).to.be.revertedWith("Only trustee");
    });
  });

  describe("시나리오 4: 최종 상환", function () {
    beforeEach(async function () {
      const principalAmount = ethers.parseEther("10000000000");
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheA,
        principalAmount,
        TRANCHE_A_RATE,
        maturityDate
      );
    });

    it("4-1. 만기 시 최종 상환", async function () {
      // 80% 부분 상환
      await interestDistribution.connect(trustee).partialRedemption(trancheA, 80);

      // 1년 경과 (만기 도달)
      await time.increase(ONE_YEAR);

      const scheduleBefore = await interestDistribution.getScheduleDetails(trancheA);
      const remainingPrincipal = scheduleBefore.principalAmount;

      await expect(
        interestDistribution.connect(trustee).finalRedemption(trancheA)
      ).to.emit(interestDistribution, "FinalRedemption")
        .withArgs(trancheA, remainingPrincipal);

      const scheduleAfter = await interestDistribution.getScheduleDetails(trancheA);
      expect(scheduleAfter.principalAmount).to.equal(0);
      expect(scheduleAfter.isActive).to.be.false;
    });

    it("4-2. 만기 전 최종 상환 실패", async function () {
      await expect(
        interestDistribution.connect(trustee).finalRedemption(trancheA)
      ).to.be.revertedWith("Not yet matured");
    });

    it("4-3. 비활성 스케줄 최종 상환 실패", async function () {
      // 만기 도달
      await time.increase(ONE_YEAR);

      // 최초 상환
      await interestDistribution.connect(trustee).finalRedemption(trancheA);

      // 중복 상환 시도
      await expect(
        interestDistribution.connect(trustee).finalRedemption(trancheA)
      ).to.be.revertedWith("Schedule not active");
    });
  });

  describe("시나리오 5: 완전한 상환 시나리오 (부분 → 최종)", function () {
    it("5-1. 전체 상환 프로세스 (이자 지급 + 부분 상환 + 최종 상환)", async function () {
      const principalAmount = ethers.parseEther("10000000000"); // 100억원
      const maturityDate = (await time.latest()) + ONE_YEAR;

      // 상환 스케줄 생성
      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheA,
        principalAmount,
        TRANCHE_A_RATE,
        maturityDate
      );

      // 3개월 후 첫 이자 지급
      await time.increase(THREE_MONTHS);
      await interestDistribution.connect(trustee).payInterest(trancheA, 0);

      // 6개월 후 두 번째 이자 지급
      await time.increase(THREE_MONTHS);
      await interestDistribution.connect(trustee).payInterest(trancheA, 1);

      // 9개월 후 세 번째 이자 지급 + 80% 부분 상환
      await time.increase(THREE_MONTHS);
      await interestDistribution.connect(trustee).payInterest(trancheA, 2);
      await interestDistribution.connect(trustee).partialRedemption(trancheA, 80);

      let schedule = await interestDistribution.getScheduleDetails(trancheA);
      expect(schedule.principalAmount).to.equal((principalAmount * 20n) / 100n);

      // 12개월 후 마지막 이자 지급 + 최종 상환
      await time.increase(THREE_MONTHS + (10 * ONE_DAY)); // 만기 시점 확실히 도달 (10일 여유)
      await interestDistribution.connect(trustee).payInterest(trancheA, 3);
      await interestDistribution.connect(trustee).finalRedemption(trancheA);

      schedule = await interestDistribution.getScheduleDetails(trancheA);
      expect(schedule.principalAmount).to.equal(0);
      expect(schedule.isActive).to.be.false;
      expect(schedule.paymentCount).to.equal(4);
    });
  });

  describe("시나리오 6: 보유기간 기록 (P2P 거래용)", function () {
    beforeEach(async function () {
      const principalAmount = ethers.parseEther("10000000000");
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheA,
        principalAmount,
        TRANCHE_A_RATE,
        maturityDate
      );

      // SecurityToken 컨트랙트에 권한 부여 (실제로는 SecurityToken에서 호출)
      await securityToken.setController(await interestDistribution.getAddress(), true);
    });

    it("6-1. 보유기간 기록", async function () {
      const amount = ethers.parseEther("1000000000");
      const startDate = await time.latest();

      // SecurityToken 컨트랙트 주소로 변경하여 호출
      // 실제로는 SecurityToken에서만 호출 가능
      await expect(
        interestDistribution.recordHoldingPeriod(
          trancheA,
          investor1.address,
          amount,
          startDate
        )
      ).to.be.revertedWith("Only token contract");
    });

    it("6-2. 보유기간별 이자 정산 계산", async function () {
      // 보유 기간이 기록된 후 이자 계산
      // 실제 구현에서는 SecurityToken과 통합 테스트 필요
      const calculatedInterest = await interestDistribution.calculateProRataInterest(
        trancheA,
        investor1.address
      );

      // 초기에는 보유 기록이 없으므로 0
      expect(calculatedInterest).to.equal(0);
    });
  });

  describe("시나리오 7: 조회 기능", function () {
    beforeEach(async function () {
      const principalAmount = ethers.parseEther("10000000000");
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheA,
        principalAmount,
        TRANCHE_A_RATE,
        maturityDate
      );
    });

    it("7-1. 다음 이자 지급일 조회", async function () {
      const nextPaymentDate = await interestDistribution.getNextPaymentDate(trancheA);
      expect(nextPaymentDate).to.be.gt(0);
    });

    it("7-2. 누적 이자 지급액 조회", async function () {
      await time.increase(THREE_MONTHS);
      await interestDistribution.connect(trustee).payInterest(trancheA, 0);

      const totalPaid = await interestDistribution.getTotalInterestPaid(trancheA);
      expect(totalPaid).to.be.gt(0);
    });

    it("7-3. 상환 스케줄 상세 조회", async function () {
      const schedule = await interestDistribution.getScheduleDetails(trancheA);
      expect(schedule.principalAmount).to.equal(ethers.parseEther("10000000000"));
      expect(schedule.interestRate).to.equal(TRANCHE_A_RATE);
      expect(schedule.isActive).to.be.true;
      expect(schedule.paymentCount).to.equal(0);
    });
  });

  describe("시나리오 8: Trustee 관리", function () {
    it("8-1. Trustee 변경", async function () {
      await interestDistribution.connect(trustee).setTrustee(investor1.address);
      expect(await interestDistribution.trustee()).to.equal(investor1.address);
    });

    it("8-2. Trustee가 아닌 계정의 Trustee 변경 실패", async function () {
      await expect(
        interestDistribution.connect(investor1).setTrustee(investor2.address)
      ).to.be.revertedWith("Only trustee");
    });
  });

  describe("시나리오 9: 다중 Tranche 관리", function () {
    it("9-1. Tranche A, B 동시 관리", async function () {
      const principalA = ethers.parseEther("10000000000"); // 100억
      const principalB = ethers.parseEther("5000000000");  // 50억
      const maturityDate = (await time.latest()) + ONE_YEAR;

      // Tranche A 스케줄
      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheA,
        principalA,
        TRANCHE_A_RATE,
        maturityDate
      );

      // Tranche B 스케줄
      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheB,
        principalB,
        TRANCHE_B_RATE,
        maturityDate
      );

      // 각각 다른 이자율 확인
      const scheduleA = await interestDistribution.getScheduleDetails(trancheA);
      const scheduleB = await interestDistribution.getScheduleDetails(trancheB);

      expect(scheduleA.interestRate).to.equal(TRANCHE_A_RATE);
      expect(scheduleB.interestRate).to.equal(TRANCHE_B_RATE);
      expect(scheduleA.principalAmount).to.equal(principalA);
      expect(scheduleB.principalAmount).to.equal(principalB);
    });

    it("9-2. Tranche A, B 개별 이자 지급", async function () {
      const principalA = ethers.parseEther("10000000000"); // 100억
      const principalB = ethers.parseEther("10000000000"); // 100억 (같은 원금으로 변경)
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheA,
        principalA,
        TRANCHE_A_RATE,
        maturityDate
      );
      await interestDistribution.connect(trustee).createRedemptionSchedule(
        trancheB,
        principalB,
        TRANCHE_B_RATE,
        maturityDate
      );

      // 3개월 후
      await time.increase(THREE_MONTHS);

      // Tranche A 이자 지급
      await interestDistribution.connect(trustee).payInterest(trancheA, 0);

      // Tranche B 이자 지급
      await interestDistribution.connect(trustee).payInterest(trancheB, 0);

      // 각각의 이자 지급 확인
      const totalPaidA = await interestDistribution.getTotalInterestPaid(trancheA);
      const totalPaidB = await interestDistribution.getTotalInterestPaid(trancheB);

      expect(totalPaidA).to.be.gt(0);
      expect(totalPaidB).to.be.gt(0);
      // 같은 원금, Tranche B가 이자율이 2배 높으므로 더 많은 이자
      expect(totalPaidB).to.be.gt(totalPaidA);
    });
  });
});
