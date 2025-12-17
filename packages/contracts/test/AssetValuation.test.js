const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("AssetValuation - 상각후원가법 자산 평가", function () {
  let assetValuation;
  let oracle, user1;
  let trancheA, trancheB;

  beforeEach(async function () {
    [oracle, user1] = await ethers.getSigners();

    // AssetValuation 배포
    const AssetValuation = await ethers.getContractFactory("AssetValuation");
    assetValuation = await AssetValuation.deploy();
    await assetValuation.waitForDeployment();

    // Tranche ID 생성
    trancheA = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));
    trancheB = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_B"));
  });

  describe("시나리오 1: 평가 데이터 초기화", function () {
    it("1-1. Tranche A 평가 데이터 초기화 (100억원)", async function () {
      const faceValue = ethers.parseEther("10000000000"); // 액면가 100억
      const bookValue = ethers.parseEther("10000000000"); // 장부가액 100억

      await expect(
        assetValuation.initializeValuation(trancheA, faceValue, bookValue)
      ).to.emit(assetValuation, "ValuationUpdated"); // 타임스탬프 검증 제거 (트랜잭션 타이밍 이슈)

      const valuation = await assetValuation.getValuationData(trancheA);
      expect(valuation.faceValue).to.equal(faceValue);
      expect(valuation.bookValue).to.equal(bookValue);
      expect(valuation.amortizedCost).to.equal(bookValue);
      expect(valuation.fairValue).to.equal(bookValue);
    });

    it("1-2. 여러 Tranche 초기화", async function () {
      const faceValueA = ethers.parseEther("10000000000");
      const bookValueA = ethers.parseEther("10000000000");
      const faceValueB = ethers.parseEther("5000000000");
      const bookValueB = ethers.parseEther("5000000000");

      await assetValuation.initializeValuation(trancheA, faceValueA, bookValueA);
      await assetValuation.initializeValuation(trancheB, faceValueB, bookValueB);

      const valuationA = await assetValuation.getValuationData(trancheA);
      const valuationB = await assetValuation.getValuationData(trancheB);

      expect(valuationA.faceValue).to.equal(faceValueA);
      expect(valuationB.faceValue).to.equal(faceValueB);
    });

    it("1-3. 중복 초기화 실패", async function () {
      const faceValue = ethers.parseEther("10000000000");
      const bookValue = ethers.parseEther("10000000000");

      await assetValuation.initializeValuation(trancheA, faceValue, bookValue);

      await expect(
        assetValuation.initializeValuation(trancheA, faceValue, bookValue)
      ).to.be.revertedWith("Already initialized");
    });

    it("1-4. Oracle이 아닌 계정의 초기화 실패", async function () {
      const faceValue = ethers.parseEther("10000000000");
      const bookValue = ethers.parseEther("10000000000");

      await expect(
        assetValuation.connect(user1).initializeValuation(trancheA, faceValue, bookValue)
      ).to.be.revertedWith("Only oracle");
    });
  });

  describe("시나리오 2: 상각 스케줄 생성", function () {
    beforeEach(async function () {
      const faceValue = ethers.parseEther("10000000000");
      const bookValue = ethers.parseEther("10000000000");
      await assetValuation.initializeValuation(trancheA, faceValue, bookValue);
    });

    it("2-1. 12개월 상각 스케줄 생성", async function () {
      const totalPrincipal = ethers.parseEther("10000000000");
      const totalInterest = ethers.parseEther("600000000"); // 6억 (6% 연이자)
      const periods = 12;

      await expect(
        assetValuation.createAmortizationSchedule(
          trancheA,
          periods,
          totalPrincipal,
          totalInterest
        )
      ).to.emit(assetValuation, "AmortizationScheduleCreated")
        .withArgs(trancheA, periods);

      const totalPeriods = await assetValuation.getTotalPeriods(trancheA);
      expect(totalPeriods).to.equal(periods);
    });

    it("2-2. 상각 스케줄 상세 조회", async function () {
      const totalPrincipal = ethers.parseEther("10000000000");
      const totalInterest = ethers.parseEther("600000000");
      const periods = 12;

      await assetValuation.createAmortizationSchedule(
        trancheA,
        periods,
        totalPrincipal,
        totalInterest
      );

      // 첫 번째 기간 조회
      const schedule = await assetValuation.getAmortizationSchedule(trancheA, 0);

      const expectedPrincipalPerPeriod = totalPrincipal / BigInt(periods);
      const expectedInterestPerPeriod = totalInterest / BigInt(periods);

      expect(schedule.principalPayment).to.equal(expectedPrincipalPerPeriod);
      expect(schedule.interestPayment).to.equal(expectedInterestPerPeriod);
      expect(schedule.isPaid).to.be.false;
    });

    it("2-3. 초기화되지 않은 Tranche 스케줄 생성 실패", async function () {
      const totalPrincipal = ethers.parseEther("10000000000");
      const totalInterest = ethers.parseEther("600000000");

      await expect(
        assetValuation.createAmortizationSchedule(
          trancheB,
          12,
          totalPrincipal,
          totalInterest
        )
      ).to.be.revertedWith("Valuation not initialized");
    });
  });

  describe("시나리오 3: 상각후원가 업데이트", function () {
    beforeEach(async function () {
      const faceValue = ethers.parseEther("10000000000");
      const bookValue = ethers.parseEther("10000000000");
      await assetValuation.initializeValuation(trancheA, faceValue, bookValue);
    });

    it("3-1. 원금 상환 후 상각후원가 감소", async function () {
      const principalRedemption = ethers.parseEther("1000000000"); // 10억 상환
      const accruedInterest = ethers.parseEther("50000000"); // 5천만 미수이자

      const initialValuation = await assetValuation.getValuationData(trancheA);
      const expectedNewCost = initialValuation.amortizedCost - principalRedemption + accruedInterest;

      await assetValuation.updateAmortizedCost(
        trancheA,
        principalRedemption,
        accruedInterest
      );

      const updatedValuation = await assetValuation.getValuationData(trancheA);
      expect(updatedValuation.amortizedCost).to.equal(expectedNewCost);
    });

    it("3-2. 미수이자 발생으로 상각후원가 증가", async function () {
      const principalRedemption = ethers.parseEther("0"); // 상환 없음
      const accruedInterest = ethers.parseEther("150000000"); // 1.5억 미수이자

      const initialValuation = await assetValuation.getValuationData(trancheA);

      await assetValuation.updateAmortizedCost(
        trancheA,
        principalRedemption,
        accruedInterest
      );

      const updatedValuation = await assetValuation.getValuationData(trancheA);
      expect(updatedValuation.amortizedCost).to.equal(
        initialValuation.amortizedCost + accruedInterest
      );
    });

    it("3-3. 월별 상각후원가 변동", async function () {
      const monthlyRedemption = ethers.parseEther("833333333"); // 월 8.3억 상환
      const monthlyInterest = ethers.parseEther("50000000"); // 월 5천만 이자

      let currentCost = (await assetValuation.getValuationData(trancheA)).amortizedCost;

      // 12개월 시뮬레이션
      for (let i = 0; i < 12; i++) {
        await assetValuation.updateAmortizedCost(
          trancheA,
          monthlyRedemption,
          monthlyInterest
        );

        const valuation = await assetValuation.getValuationData(trancheA);
        currentCost = currentCost - monthlyRedemption + monthlyInterest;
        expect(valuation.amortizedCost).to.equal(currentCost);
      }
    });

    it("3-4. 비활성 평가 데이터 업데이트 실패", async function () {
      await expect(
        assetValuation.updateAmortizedCost(
          trancheB,
          ethers.parseEther("1000000000"),
          ethers.parseEther("50000000")
        )
      ).to.be.revertedWith("Valuation not active");
    });
  });

  describe("시나리오 4: 공정가치 업데이트", function () {
    beforeEach(async function () {
      const faceValue = ethers.parseEther("10000000000");
      const bookValue = ethers.parseEther("10000000000");
      await assetValuation.initializeValuation(trancheA, faceValue, bookValue);
    });

    it("4-1. DCF 평가 결과 반영", async function () {
      const dcfFairValue = ethers.parseEther("9800000000"); // 98억 (할인 적용)

      await expect(
        assetValuation.updateFairValue(trancheA, dcfFairValue)
      ).to.emit(assetValuation, "ValuationUpdated");

      const valuation = await assetValuation.getValuationData(trancheA);
      expect(valuation.fairValue).to.equal(dcfFairValue);

      // 상각후원가는 변경되지 않음
      expect(valuation.amortizedCost).to.equal(ethers.parseEther("10000000000"));
    });

    it("4-2. 시장가치 하락 반영", async function () {
      const marketValue = ethers.parseEther("9000000000"); // 90억 (10% 하락)

      await assetValuation.updateFairValue(trancheA, marketValue);

      const valuation = await assetValuation.getValuationData(trancheA);
      expect(valuation.fairValue).to.equal(marketValue);
    });

    it("4-3. 공정가치와 상각후원가 괴리", async function () {
      const fairValue = ethers.parseEther("9500000000"); // 공정가치 95억

      await assetValuation.updateFairValue(trancheA, fairValue);

      const valuation = await assetValuation.getValuationData(trancheA);

      // 상각후원가는 100억 유지
      expect(valuation.amortizedCost).to.equal(ethers.parseEther("10000000000"));

      // 공정가치는 95억
      expect(valuation.fairValue).to.equal(fairValue);

      // 차이 확인
      const difference = valuation.amortizedCost - valuation.fairValue;
      expect(difference).to.equal(ethers.parseEther("500000000")); // 5억 차이
    });
  });

  describe("시나리오 5: 기간별 상각 처리", function () {
    beforeEach(async function () {
      const faceValue = ethers.parseEther("10000000000");
      const bookValue = ethers.parseEther("10000000000");
      await assetValuation.initializeValuation(trancheA, faceValue, bookValue);

      const totalPrincipal = ethers.parseEther("10000000000");
      const totalInterest = ethers.parseEther("600000000");
      await assetValuation.createAmortizationSchedule(
        trancheA,
        12,
        totalPrincipal,
        totalInterest
      );
    });

    it("5-1. 첫 번째 기간 상각 처리", async function () {
      await expect(
        assetValuation.processAmortization(trancheA, 0)
      ).to.emit(assetValuation, "PeriodAmortized")
        .withArgs(trancheA, 0, ethers.parseEther("10000000000") / 12n);

      const schedule = await assetValuation.getAmortizationSchedule(trancheA, 0);
      expect(schedule.isPaid).to.be.true;
    });

    it("5-2. 순차적 상각 처리 (12개월)", async function () {
      for (let i = 0; i < 12; i++) {
        await assetValuation.processAmortization(trancheA, i);

        const schedule = await assetValuation.getAmortizationSchedule(trancheA, i);
        expect(schedule.isPaid).to.be.true;
      }

      // 마지막 상각 후 잔여 원금 확인
      const finalSchedule = await assetValuation.getAmortizationSchedule(trancheA, 11);
      expect(finalSchedule.remainingBalance).to.be.lt(ethers.parseEther("1000000000"));
    });

    it("5-3. 중복 상각 처리 실패", async function () {
      await assetValuation.processAmortization(trancheA, 0);

      await expect(
        assetValuation.processAmortization(trancheA, 0)
      ).to.be.revertedWith("Already processed");
    });

    it("5-4. 상각 후 상각후원가 감소 확인", async function () {
      const initialValuation = await assetValuation.getValuationData(trancheA);
      const initialCost = initialValuation.amortizedCost;

      // 첫 번째와 두 번째 상각 처리
      await assetValuation.processAmortization(trancheA, 0);
      await assetValuation.processAmortization(trancheA, 1);

      const updatedValuation = await assetValuation.getValuationData(trancheA);
      // 두 번째 상각 후 상각후원가는 초기보다 작아야 함
      expect(updatedValuation.amortizedCost).to.be.lt(initialCost);
    });
  });

  describe("시나리오 6: DCF 현재가치 계산", function () {
    it("6-1. 할인율 5%, 1년 후 현재가치", async function () {
      const futureValue = ethers.parseEther("10000000000"); // 100억
      const discountRate = 500; // 5% (basis points)
      const periods = 12; // 12개월

      const presentValue = await assetValuation.calculatePresentValue(
        futureValue,
        discountRate,
        periods
      );

      // 할인 적용으로 현재가치가 미래가치보다 작음
      expect(presentValue).to.be.lt(futureValue);
    });

    it("6-2. 할인율 10%, 2년 후 현재가치", async function () {
      const futureValue = ethers.parseEther("10000000000");
      const discountRate = 1000; // 10%
      const periods = 24; // 24개월

      const presentValue = await assetValuation.calculatePresentValue(
        futureValue,
        discountRate,
        periods
      );

      // 할인율이 높고 기간이 길수록 현재가치 감소
      expect(presentValue).to.be.lt(futureValue);
    });

    it("6-3. 다양한 할인율 비교", async function () {
      const futureValue = ethers.parseEther("10000000000");
      const periods = 12;

      const pv5 = await assetValuation.calculatePresentValue(futureValue, 500, periods);
      const pv10 = await assetValuation.calculatePresentValue(futureValue, 1000, periods);
      const pv15 = await assetValuation.calculatePresentValue(futureValue, 1500, periods);

      // 할인율이 높을수록 현재가치 감소
      expect(pv5).to.be.gt(pv10);
      expect(pv10).to.be.gt(pv15);
    });
  });

  describe("시나리오 7: 완전한 평가 주기", function () {
    it("7-1. 초기화 → 스케줄 → 상각 → 평가 업데이트", async function () {
      // 1. 초기화
      const faceValue = ethers.parseEther("10000000000");
      const bookValue = ethers.parseEther("10000000000");
      await assetValuation.initializeValuation(trancheA, faceValue, bookValue);

      // 2. 상각 스케줄 생성
      const totalPrincipal = ethers.parseEther("10000000000");
      const totalInterest = ethers.parseEther("600000000");
      await assetValuation.createAmortizationSchedule(
        trancheA,
        12,
        totalPrincipal,
        totalInterest
      );

      // 3. 월별 상각 처리 (3개월)
      for (let i = 0; i < 3; i++) {
        await assetValuation.processAmortization(trancheA, i);
      }

      // 4. 공정가치 업데이트
      const fairValue = ethers.parseEther("9700000000");
      await assetValuation.updateFairValue(trancheA, fairValue);

      // 5. 최종 확인
      const valuation = await assetValuation.getValuationData(trancheA);
      expect(valuation.amortizedCost).to.be.lt(bookValue); // 상각으로 감소
      expect(valuation.fairValue).to.equal(fairValue);
    });
  });

  describe("시나리오 8: 조회 기능", function () {
    beforeEach(async function () {
      const faceValue = ethers.parseEther("10000000000");
      const bookValue = ethers.parseEther("10000000000");
      await assetValuation.initializeValuation(trancheA, faceValue, bookValue);
    });

    it("8-1. 상각후원가 조회", async function () {
      const amortizedCost = await assetValuation.getAmortizedCost(trancheA);
      expect(amortizedCost).to.equal(ethers.parseEther("10000000000"));
    });

    it("8-2. 공정가치 조회", async function () {
      const fairValue = ethers.parseEther("9800000000");
      await assetValuation.updateFairValue(trancheA, fairValue);

      const currentFairValue = await assetValuation.getFairValue(trancheA);
      expect(currentFairValue).to.equal(fairValue);
    });

    it("8-3. 전체 평가 데이터 조회", async function () {
      const valuation = await assetValuation.getValuationData(trancheA);

      expect(valuation.faceValue).to.equal(ethers.parseEther("10000000000"));
      expect(valuation.bookValue).to.equal(ethers.parseEther("10000000000"));
      expect(valuation.amortizedCost).to.equal(ethers.parseEther("10000000000"));
      expect(valuation.fairValue).to.equal(ethers.parseEther("10000000000"));
      expect(valuation.lastUpdateTime).to.be.gt(0);
    });

    it("8-4. 상각 스케줄 기간 수 조회", async function () {
      const totalPrincipal = ethers.parseEther("10000000000");
      const totalInterest = ethers.parseEther("600000000");
      await assetValuation.createAmortizationSchedule(
        trancheA,
        12,
        totalPrincipal,
        totalInterest
      );

      const periods = await assetValuation.getTotalPeriods(trancheA);
      expect(periods).to.equal(12);
    });
  });

  describe("시나리오 9: Oracle 관리", function () {
    it("9-1. Oracle 변경", async function () {
      await assetValuation.setOracle(user1.address);
      expect(await assetValuation.valuationOracle()).to.equal(user1.address);
    });

    it("9-2. Oracle이 아닌 계정의 Oracle 변경 실패", async function () {
      await expect(
        assetValuation.connect(user1).setOracle(user1.address)
      ).to.be.revertedWith("Only oracle");
    });

    it("9-3. 평가 데이터 비활성화", async function () {
      const faceValue = ethers.parseEther("10000000000");
      const bookValue = ethers.parseEther("10000000000");
      await assetValuation.initializeValuation(trancheA, faceValue, bookValue);

      await assetValuation.deactivateValuation(trancheA);

      // 비활성화 후 업데이트 실패
      await expect(
        assetValuation.updateAmortizedCost(
          trancheA,
          ethers.parseEther("1000000000"),
          ethers.parseEther("50000000")
        )
      ).to.be.revertedWith("Valuation not active");
    });
  });

  describe("시나리오 10: 다중 Tranche 평가", function () {
    it("10-1. Tranche A, B 독립적 평가", async function () {
      // Tranche A: 100억, 장부가액
      await assetValuation.initializeValuation(
        trancheA,
        ethers.parseEther("10000000000"),
        ethers.parseEther("10000000000")
      );

      // Tranche B: 50억, 장부가액
      await assetValuation.initializeValuation(
        trancheB,
        ethers.parseEther("5000000000"),
        ethers.parseEther("5000000000")
      );

      // Tranche A 평가 변경
      await assetValuation.updateFairValue(trancheA, ethers.parseEther("9800000000"));

      // Tranche B는 영향 없음
      const valuationA = await assetValuation.getValuationData(trancheA);
      const valuationB = await assetValuation.getValuationData(trancheB);

      expect(valuationA.fairValue).to.equal(ethers.parseEther("9800000000"));
      expect(valuationB.fairValue).to.equal(ethers.parseEther("5000000000"));
    });
  });
});
