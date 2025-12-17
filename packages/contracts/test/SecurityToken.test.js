const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("SecurityToken - 신한캐피탈 PF 증권형 토큰", function () {
  let securityToken;
  let issuer, investor1, investor2, investor3;
  let trancheA, trancheB;

  const TRANCHE_A_RATE = 600; // 6% (basis points)
  const TRANCHE_B_RATE = 1200; // 12%
  const ONE_YEAR = 365 * 24 * 60 * 60;

  beforeEach(async function () {
    [issuer, investor1, investor2, investor3] = await ethers.getSigners();

    // SecurityToken 배포
    const SecurityToken = await ethers.getContractFactory("SecurityToken");
    securityToken = await SecurityToken.deploy(
      "Shinhan Capital PF Security Token",
      "SHC-PF"
    );
    await securityToken.waitForDeployment();

    // Tranche ID 생성
    trancheA = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));
    trancheB = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_B"));
  });

  describe("시나리오 1: 토큰 발행 및 기본 기능", function () {
    it("1-1. Tranche A (Senior, 6%) 생성", async function () {
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await expect(
        securityToken.createTranche(
          trancheA,
          "Tranche A - Senior",
          0, // SENIOR
          TRANCHE_A_RATE,
          maturityDate
        )
      ).to.emit(securityToken, "TrancheCreated")
        .withArgs(trancheA, "Tranche A - Senior", 0, TRANCHE_A_RATE);

      const trancheInfo = await securityToken.getTrancheInfo(trancheA);
      expect(trancheInfo._name).to.equal("Tranche A - Senior");
      expect(trancheInfo._interestRate).to.equal(TRANCHE_A_RATE);
    });

    it("1-2. Tranche B (Junior, 12%) 생성", async function () {
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await securityToken.createTranche(
        trancheB,
        "Tranche B - Junior",
        1, // JUNIOR
        TRANCHE_B_RATE,
        maturityDate
      );

      const trancheInfo = await securityToken.getTrancheInfo(trancheB);
      expect(trancheInfo._name).to.equal("Tranche B - Junior");
      expect(trancheInfo._interestRate).to.equal(TRANCHE_B_RATE);
    });

    it("1-3. 중복 Tranche 생성 실패", async function () {
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await securityToken.createTranche(
        trancheA,
        "Tranche A - Senior",
        0,
        TRANCHE_A_RATE,
        maturityDate
      );

      await expect(
        securityToken.createTranche(
          trancheA,
          "Duplicate",
          0,
          TRANCHE_A_RATE,
          maturityDate
        )
      ).to.be.revertedWith("Tranche already exists");
    });

    it("1-4. Issuer가 아닌 계정의 Tranche 생성 실패", async function () {
      const maturityDate = (await time.latest()) + ONE_YEAR;

      await expect(
        securityToken.connect(investor1).createTranche(
          trancheA,
          "Tranche A",
          0,
          TRANCHE_A_RATE,
          maturityDate
        )
      ).to.be.revertedWith("Only issuer");
    });
  });

  describe("시나리오 2: KYC 인증", function () {
    it("2-1. 기관투자자 KYC 인증 (전문투자자)", async function () {
      await securityToken.verifyKYC(investor1.address, true);

      const holder = await securityToken.holders(investor1.address);
      expect(holder.isKYCVerified).to.be.true;
      expect(holder.isAccredited).to.be.true;
    });

    it("2-2. 일반 투자자 KYC 인증", async function () {
      await securityToken.verifyKYC(investor2.address, false);

      const holder = await securityToken.holders(investor2.address);
      expect(holder.isKYCVerified).to.be.true;
      expect(holder.isAccredited).to.be.false;
    });

    it("2-3. Controller 권한 부여 및 KYC 인증", async function () {
      await securityToken.setController(investor1.address, true);
      await securityToken.connect(investor1).verifyKYC(investor2.address, true);

      const holder = await securityToken.holders(investor2.address);
      expect(holder.isKYCVerified).to.be.true;
    });
  });

  describe("시나리오 3: 토큰 발행 (일시대출)", function () {
    beforeEach(async function () {
      const maturityDate = (await time.latest()) + ONE_YEAR;
      await securityToken.createTranche(
        trancheA,
        "Tranche A - Senior",
        0,
        TRANCHE_A_RATE,
        maturityDate
      );
      await securityToken.verifyKYC(investor1.address, true);
    });

    it("3-1. Tranche A 토큰 발행 (100억원)", async function () {
      const amount = ethers.parseEther("10000000000"); // 100억원

      await expect(
        securityToken.issueByTranche(trancheA, investor1.address, amount)
      ).to.emit(securityToken, "TokensIssued")
        .withArgs(trancheA, investor1.address, amount);

      const balance = await securityToken.balanceOf(trancheA, investor1.address);
      expect(balance).to.equal(amount);

      const trancheInfo = await securityToken.getTrancheInfo(trancheA);
      expect(trancheInfo._totalSupply).to.equal(amount);
    });

    it("3-2. KYC 미인증 투자자에게 발행 실패", async function () {
      const amount = ethers.parseEther("1000000");

      await expect(
        securityToken.issueByTranche(trancheA, investor2.address, amount)
      ).to.be.revertedWith("KYC not verified");
    });

    it("3-3. 비활성 Tranche에 발행 실패", async function () {
      const fakeTrancheId = ethers.keccak256(ethers.toUtf8Bytes("FAKE"));
      const amount = ethers.parseEther("1000000");

      await expect(
        securityToken.issueByTranche(fakeTrancheId, investor1.address, amount)
      ).to.be.revertedWith("Tranche not active");
    });
  });

  describe("시나리오 4: 한도대출 증액 (Tranche A 전용)", function () {
    beforeEach(async function () {
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
      await securityToken.verifyKYC(investor1.address, true);
    });

    it("4-1. Tranche A 한도대출 추가 증액", async function () {
      const initialAmount = ethers.parseEther("5000000000");
      const additionalAmount = ethers.parseEther("2000000000");

      // 초기 발행
      await securityToken.issueByTranche(trancheA, investor1.address, initialAmount);

      // 추가 증액
      await securityToken.additionalIssuance(trancheA, investor1.address, additionalAmount);

      const balance = await securityToken.balanceOf(trancheA, investor1.address);
      expect(balance).to.equal(initialAmount + additionalAmount);
    });

    it("4-2. Tranche B (Junior)는 추가 증액 불가", async function () {
      await securityToken.verifyKYC(investor1.address, true);
      const amount = ethers.parseEther("1000000");

      await expect(
        securityToken.additionalIssuance(trancheB, investor1.address, amount)
      ).to.be.revertedWith("Only Senior tranche");
    });
  });

  describe("시나리오 5: P2P 거래 (투자자 간 전송)", function () {
    beforeEach(async function () {
      const maturityDate = (await time.latest()) + ONE_YEAR;
      await securityToken.createTranche(
        trancheA,
        "Tranche A - Senior",
        0,
        TRANCHE_A_RATE,
        maturityDate
      );
      await securityToken.verifyKYC(investor1.address, true);
      await securityToken.verifyKYC(investor2.address, true);

      const amount = ethers.parseEther("10000000000");
      await securityToken.issueByTranche(trancheA, investor1.address, amount);
    });

    it("5-1. 투자자 간 토큰 전송 성공", async function () {
      const transferAmount = ethers.parseEther("1000000000");

      await expect(
        securityToken.connect(investor1).transferByTranche(
          trancheA,
          investor2.address,
          transferAmount
        )
      ).to.emit(securityToken, "TransferByTranche")
        .withArgs(trancheA, investor1.address, investor2.address, transferAmount);

      expect(await securityToken.balanceOf(trancheA, investor1.address))
        .to.equal(ethers.parseEther("9000000000"));
      expect(await securityToken.balanceOf(trancheA, investor2.address))
        .to.equal(transferAmount);
    });

    it("5-2. 잔액 부족 시 전송 실패", async function () {
      const transferAmount = ethers.parseEther("20000000000");

      await expect(
        securityToken.connect(investor1).transferByTranche(
          trancheA,
          investor2.address,
          transferAmount
        )
      ).to.be.revertedWith("Insufficient balance");
    });

    it("5-3. KYC 미인증 수신자에게 전송 실패", async function () {
      const transferAmount = ethers.parseEther("1000000000");

      await expect(
        securityToken.connect(investor1).transferByTranche(
          trancheA,
          investor3.address,
          transferAmount
        )
      ).to.be.revertedWith("KYC not verified");
    });

    it("5-4. 락업 기간 중 전송 실패", async function () {
      const lockupEnd = (await time.latest()) + (30 * 24 * 60 * 60); // 30일
      await securityToken.setLockup(investor1.address, lockupEnd);

      const transferAmount = ethers.parseEther("1000000000");

      await expect(
        securityToken.connect(investor1).transferByTranche(
          trancheA,
          investor2.address,
          transferAmount
        )
      ).to.be.revertedWith("Tokens locked");
    });

    it("5-5. 락업 기간 만료 후 전송 성공", async function () {
      const lockupEnd = (await time.latest()) + (30 * 24 * 60 * 60);
      await securityToken.setLockup(investor1.address, lockupEnd);

      // 락업 기간 경과
      await time.increase(31 * 24 * 60 * 60);

      const transferAmount = ethers.parseEther("1000000000");
      await securityToken.connect(investor1).transferByTranche(
        trancheA,
        investor2.address,
        transferAmount
      );

      expect(await securityToken.balanceOf(trancheA, investor2.address))
        .to.equal(transferAmount);
    });
  });

  describe("시나리오 6: 토큰 상환", function () {
    beforeEach(async function () {
      const maturityDate = (await time.latest()) + ONE_YEAR;
      await securityToken.createTranche(
        trancheA,
        "Tranche A - Senior",
        0,
        TRANCHE_A_RATE,
        maturityDate
      );
      await securityToken.verifyKYC(investor1.address, true);

      const amount = ethers.parseEther("10000000000");
      await securityToken.issueByTranche(trancheA, investor1.address, amount);
    });

    it("6-1. 부분 상환 (80%)", async function () {
      const balance = await securityToken.balanceOf(trancheA, investor1.address);
      const redeemAmount = (balance * 80n) / 100n;

      await expect(
        securityToken.redeemByTranche(trancheA, investor1.address, redeemAmount)
      ).to.emit(securityToken, "TokensRedeemed")
        .withArgs(trancheA, investor1.address, redeemAmount);

      const remainingBalance = await securityToken.balanceOf(trancheA, investor1.address);
      expect(remainingBalance).to.equal((balance * 20n) / 100n);
    });

    it("6-2. 최종 상환 (잔여 20%)", async function () {
      const balance = await securityToken.balanceOf(trancheA, investor1.address);
      const firstRedemption = (balance * 80n) / 100n;

      // 80% 상환
      await securityToken.redeemByTranche(trancheA, investor1.address, firstRedemption);

      // 잔여 20% 상환
      const remainingBalance = await securityToken.balanceOf(trancheA, investor1.address);
      await securityToken.redeemByTranche(trancheA, investor1.address, remainingBalance);

      expect(await securityToken.balanceOf(trancheA, investor1.address)).to.equal(0);
    });

    it("6-3. 잔액 초과 상환 실패", async function () {
      const balance = await securityToken.balanceOf(trancheA, investor1.address);
      const excessAmount = balance + ethers.parseEther("1000000");

      await expect(
        securityToken.redeemByTranche(trancheA, investor1.address, excessAmount)
      ).to.be.revertedWith("Insufficient balance");
    });

    it("6-4. Controller가 아닌 계정의 상환 실패", async function () {
      const redeemAmount = ethers.parseEther("1000000");

      await expect(
        securityToken.connect(investor1).redeemByTranche(
          trancheA,
          investor1.address,
          redeemAmount
        )
      ).to.be.revertedWith("Only controller");
    });
  });

  describe("시나리오 7: 조회 기능", function () {
    beforeEach(async function () {
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
    });

    it("7-1. 전체 Tranche 목록 조회", async function () {
      const tranches = await securityToken.getAllTranches();
      expect(tranches.length).to.equal(2);
      expect(tranches[0]).to.equal(trancheA);
      expect(tranches[1]).to.equal(trancheB);
    });

    it("7-2. Tranche 상세 정보 조회", async function () {
      const info = await securityToken.getTrancheInfo(trancheA);
      expect(info._name).to.equal("Tranche A - Senior");
      expect(info._type).to.equal(0); // SENIOR
      expect(info._interestRate).to.equal(TRANCHE_A_RATE);
    });

    it("7-3. 투자자 잔액 조회", async function () {
      await securityToken.verifyKYC(investor1.address, true);
      const amount = ethers.parseEther("5000000000");
      await securityToken.issueByTranche(trancheA, investor1.address, amount);

      const balance = await securityToken.balanceOf(trancheA, investor1.address);
      expect(balance).to.equal(amount);
    });
  });

  describe("시나리오 8: 권한 관리", function () {
    it("8-1. Controller 권한 부여", async function () {
      await securityToken.setController(investor1.address, true);
      expect(await securityToken.isController(investor1.address)).to.be.true;
    });

    it("8-2. Controller 권한 제거", async function () {
      await securityToken.setController(investor1.address, true);
      await securityToken.setController(investor1.address, false);
      expect(await securityToken.isController(investor1.address)).to.be.false;
    });

    it("8-3. Issuer가 아닌 계정의 Controller 설정 실패", async function () {
      await expect(
        securityToken.connect(investor1).setController(investor2.address, true)
      ).to.be.revertedWith("Only issuer");
    });
  });
});
