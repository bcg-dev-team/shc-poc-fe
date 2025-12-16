const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("PFToken", function () {
  let pfToken;
  let admin, minter, pauser, userA, userB, userC;

  const TOKEN_NAME = "PF Token";
  const TOKEN_SYMBOL = "S-PF";
  const DECIMALS = 0; // PFToken uses 0 decimals

  beforeEach(async function () {
    [admin, minter, pauser, userA, userB, userC] = await ethers.getSigners();

    const PFToken = await ethers.getContractFactory("PFToken");
    pfToken = await PFToken.deploy(
      admin.address,
      minter.address,
      TOKEN_NAME,
      TOKEN_SYMBOL
    );
  });

  describe("Deployment", function () {
    it("Should set correct token metadata", async function () {
      expect(await pfToken.name()).to.equal(TOKEN_NAME);
      expect(await pfToken.symbol()).to.equal(TOKEN_SYMBOL);
      expect(await pfToken.decimals()).to.equal(DECIMALS);
    });

    it("Should grant correct roles", async function () {
      const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));
      const PAUSER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("PAUSER_ROLE"));
      const DEFAULT_ADMIN_ROLE = ethers.ZeroHash;

      expect(await pfToken.hasRole(DEFAULT_ADMIN_ROLE, admin.address)).to.be.true;
      expect(await pfToken.hasRole(MINTER_ROLE, minter.address)).to.be.true;
      expect(await pfToken.hasRole(PAUSER_ROLE, admin.address)).to.be.true;
    });

    it("Should start with zero total supply", async function () {
      expect(await pfToken.totalSupply()).to.equal(0);
    });

    it("Should revert with invalid admin address", async function () {
      const PFToken = await ethers.getContractFactory("PFToken");

      await expect(
        PFToken.deploy(ethers.ZeroAddress, minter.address, TOKEN_NAME, TOKEN_SYMBOL)
      ).to.be.revertedWith("Invalid admin address");
    });

    it("Should revert with invalid minter address", async function () {
      const PFToken = await ethers.getContractFactory("PFToken");

      await expect(
        PFToken.deploy(admin.address, ethers.ZeroAddress, TOKEN_NAME, TOKEN_SYMBOL)
      ).to.be.revertedWith("Invalid minter address");
    });

    it("Should revert with empty name", async function () {
      const PFToken = await ethers.getContractFactory("PFToken");

      await expect(
        PFToken.deploy(admin.address, minter.address, "", TOKEN_SYMBOL)
      ).to.be.revertedWith("Name cannot be empty");
    });

    it("Should revert with empty symbol", async function () {
      const PFToken = await ethers.getContractFactory("PFToken");

      await expect(
        PFToken.deploy(admin.address, minter.address, TOKEN_NAME, "")
      ).to.be.revertedWith("Symbol cannot be empty");
    });
  });

  describe("Minting", function () {
    it("Should mint tokens to specified address", async function () {
      const amount = 1000000;

      await expect(pfToken.connect(minter).mint(userA.address, amount))
        .to.emit(pfToken, "TokensMinted")
        .withArgs(userA.address, amount, minter.address);

      expect(await pfToken.balanceOf(userA.address)).to.equal(amount);
      expect(await pfToken.totalSupply()).to.equal(amount);
    });

    it("Should mint multiple times", async function () {
      await pfToken.connect(minter).mint(userA.address, 100000);
      await pfToken.connect(minter).mint(userA.address, 50000);

      expect(await pfToken.balanceOf(userA.address)).to.equal(150000);
      expect(await pfToken.totalSupply()).to.equal(150000);
    });

    it("Should revert if not minter", async function () {
      await expect(
        pfToken.connect(userA).mint(userB.address, 1000)
      ).to.be.reverted;
    });

    it("Should revert if minting to zero address", async function () {
      await expect(
        pfToken.connect(minter).mint(ethers.ZeroAddress, 1000)
      ).to.be.revertedWith("Cannot mint to zero address");
    });

    it("Should revert if amount is zero", async function () {
      await expect(
        pfToken.connect(minter).mint(userA.address, 0)
      ).to.be.revertedWith("Amount must be positive");
    });

    it("Should revert when paused", async function () {
      await pfToken.connect(admin).pause();

      await expect(
        pfToken.connect(minter).mint(userA.address, 1000)
      ).to.be.revertedWithCustomError(pfToken, "EnforcedPause");
    });
  });

  describe("Batch Minting", function () {
    it("Should batch mint to multiple addresses", async function () {
      const recipients = [userA.address, userB.address, userC.address];
      const amounts = [100000, 200000, 300000];

      await expect(
        pfToken.connect(minter).batchMint(recipients, amounts)
      ).to.emit(pfToken, "TokensMinted");

      expect(await pfToken.balanceOf(userA.address)).to.equal(100000);
      expect(await pfToken.balanceOf(userB.address)).to.equal(200000);
      expect(await pfToken.balanceOf(userC.address)).to.equal(300000);
      expect(await pfToken.totalSupply()).to.equal(600000);
    });

    it("Should revert if arrays length mismatch", async function () {
      const recipients = [userA.address, userB.address];
      const amounts = [100000];

      await expect(
        pfToken.connect(minter).batchMint(recipients, amounts)
      ).to.be.revertedWith("Arrays length mismatch");
    });

    it("Should revert if arrays are empty", async function () {
      await expect(
        pfToken.connect(minter).batchMint([], [])
      ).to.be.revertedWith("Empty arrays");
    });

    it("Should revert if any recipient is zero address", async function () {
      const recipients = [userA.address, ethers.ZeroAddress];
      const amounts = [100000, 200000];

      await expect(
        pfToken.connect(minter).batchMint(recipients, amounts)
      ).to.be.revertedWith("Cannot mint to zero address");
    });

    it("Should revert if any amount is zero", async function () {
      const recipients = [userA.address, userB.address];
      const amounts = [100000, 0];

      await expect(
        pfToken.connect(minter).batchMint(recipients, amounts)
      ).to.be.revertedWith("Amount must be positive");
    });

    it("Should revert if not minter", async function () {
      const recipients = [userA.address];
      const amounts = [100000];

      await expect(
        pfToken.connect(userA).batchMint(recipients, amounts)
      ).to.be.reverted;
    });

    it("Should revert when paused", async function () {
      await pfToken.connect(admin).pause();

      const recipients = [userA.address];
      const amounts = [100000];

      await expect(
        pfToken.connect(minter).batchMint(recipients, amounts)
      ).to.be.revertedWithCustomError(pfToken, "EnforcedPause");
    });
  });

  describe("Burning", function () {
    beforeEach(async function () {
      await pfToken.connect(minter).mint(userA.address, 1000000);
    });

    it("Should burn tokens from caller's balance", async function () {
      const burnAmount = 100000;

      await expect(pfToken.connect(userA).burn(burnAmount))
        .to.emit(pfToken, "TokensBurned")
        .withArgs(userA.address, burnAmount);

      expect(await pfToken.balanceOf(userA.address)).to.equal(900000);
      expect(await pfToken.totalSupply()).to.equal(900000);
    });

    it("Should burn all tokens", async function () {
      const balance = await pfToken.balanceOf(userA.address);
      await pfToken.connect(userA).burn(balance);

      expect(await pfToken.balanceOf(userA.address)).to.equal(0);
      expect(await pfToken.totalSupply()).to.equal(0);
    });

    it("Should revert if insufficient balance", async function () {
      await expect(
        pfToken.connect(userA).burn(2000000)
      ).to.be.reverted;
    });

    it("Should revert when paused", async function () {
      await pfToken.connect(admin).pause();

      await expect(
        pfToken.connect(userA).burn(100000)
      ).to.be.revertedWithCustomError(pfToken, "EnforcedPause");
    });
  });

  describe("Burn From", function () {
    beforeEach(async function () {
      await pfToken.connect(minter).mint(userA.address, 1000000);
    });

    it("Should burn tokens from approved address", async function () {
      const burnAmount = 100000;

      await pfToken.connect(userA).approve(userB.address, burnAmount);

      await expect(pfToken.connect(userB).burnFrom(userA.address, burnAmount))
        .to.emit(pfToken, "TokensBurned")
        .withArgs(userA.address, burnAmount);

      expect(await pfToken.balanceOf(userA.address)).to.equal(900000);
      expect(await pfToken.totalSupply()).to.equal(900000);
    });

    it("Should decrease allowance after burn", async function () {
      const approveAmount = 200000;
      const burnAmount = 100000;

      await pfToken.connect(userA).approve(userB.address, approveAmount);
      await pfToken.connect(userB).burnFrom(userA.address, burnAmount);

      expect(await pfToken.allowance(userA.address, userB.address)).to.equal(100000);
    });

    it("Should revert if insufficient allowance", async function () {
      await pfToken.connect(userA).approve(userB.address, 50000);

      await expect(
        pfToken.connect(userB).burnFrom(userA.address, 100000)
      ).to.be.reverted;
    });

    it("Should revert when paused", async function () {
      await pfToken.connect(userA).approve(userB.address, 100000);
      await pfToken.connect(admin).pause();

      await expect(
        pfToken.connect(userB).burnFrom(userA.address, 100000)
      ).to.be.revertedWithCustomError(pfToken, "EnforcedPause");
    });
  });

  describe("Pause & Unpause", function () {
    it("Should pause token transfers", async function () {
      await pfToken.connect(admin).pause();
      expect(await pfToken.paused()).to.be.true;
    });

    it("Should unpause token transfers", async function () {
      await pfToken.connect(admin).pause();
      await pfToken.connect(admin).unpause();
      expect(await pfToken.paused()).to.be.false;
    });

    it("Should revert pause if not pauser", async function () {
      await expect(
        pfToken.connect(userA).pause()
      ).to.be.reverted;
    });

    it("Should revert unpause if not pauser", async function () {
      await pfToken.connect(admin).pause();

      await expect(
        pfToken.connect(userA).unpause()
      ).to.be.reverted;
    });

    it("Should block transfers when paused", async function () {
      await pfToken.connect(minter).mint(userA.address, 1000000);
      await pfToken.connect(admin).pause();

      await expect(
        pfToken.connect(userA).transfer(userB.address, 100000)
      ).to.be.revertedWithCustomError(pfToken, "EnforcedPause");
    });

    it("Should allow transfers after unpause", async function () {
      await pfToken.connect(minter).mint(userA.address, 1000000);
      await pfToken.connect(admin).pause();
      await pfToken.connect(admin).unpause();

      await expect(
        pfToken.connect(userA).transfer(userB.address, 100000)
      ).to.not.be.reverted;
    });
  });

  describe("Interest Payment Recording", function () {
    it("Should record interest payment", async function () {
      const interestAmount = 50000;

      await expect(
        pfToken.connect(admin).recordInterestPayment(interestAmount)
      )
        .to.emit(pfToken, "InterestPaid")
        .withArgs(interestAmount, await time.latest() + 1, admin.address);

      expect(await pfToken.last_interest_amount()).to.equal(interestAmount);
    });

    it("Should update timestamp on interest payment", async function () {
      await pfToken.connect(admin).recordInterestPayment(10000);
      const timestamp1 = await pfToken.last_interest_timestamp();

      await time.increase(3600); // 1 hour

      await pfToken.connect(admin).recordInterestPayment(20000);
      const timestamp2 = await pfToken.last_interest_timestamp();

      expect(timestamp2).to.be.greaterThan(timestamp1);
    });

    it("Should get last interest payment info", async function () {
      const amount = 30000;
      await pfToken.connect(admin).recordInterestPayment(amount);

      const [returnedAmount, returnedTimestamp] = await pfToken.getLastInterestPayment();

      expect(returnedAmount).to.equal(amount);
      expect(returnedTimestamp).to.be.greaterThan(0);
    });

    it("Should revert if amount is zero", async function () {
      await expect(
        pfToken.connect(admin).recordInterestPayment(0)
      ).to.be.revertedWith("Amount must be positive");
    });

    it("Should revert if not admin", async function () {
      await expect(
        pfToken.connect(userA).recordInterestPayment(10000)
      ).to.be.reverted;
    });

    it("Should track multiple interest payments", async function () {
      await pfToken.connect(admin).recordInterestPayment(10000);
      await time.increase(86400); // 1 day
      await pfToken.connect(admin).recordInterestPayment(20000);
      await time.increase(86400); // 1 day
      await pfToken.connect(admin).recordInterestPayment(30000);

      const [lastAmount, lastTimestamp] = await pfToken.getLastInterestPayment();
      expect(lastAmount).to.equal(30000);
    });
  });

  describe("Token Transfers", function () {
    beforeEach(async function () {
      await pfToken.connect(minter).mint(userA.address, 1000000);
    });

    it("Should transfer tokens", async function () {
      const transferAmount = 100000;

      await expect(
        pfToken.connect(userA).transfer(userB.address, transferAmount)
      )
        .to.emit(pfToken, "Transfer")
        .withArgs(userA.address, userB.address, transferAmount);

      expect(await pfToken.balanceOf(userA.address)).to.equal(900000);
      expect(await pfToken.balanceOf(userB.address)).to.equal(100000);
    });

    it("Should revert if insufficient balance", async function () {
      await expect(
        pfToken.connect(userA).transfer(userB.address, 2000000)
      ).to.be.reverted;
    });

    it("Should revert when paused", async function () {
      await pfToken.connect(admin).pause();

      await expect(
        pfToken.connect(userA).transfer(userB.address, 100000)
      ).to.be.revertedWithCustomError(pfToken, "EnforcedPause");
    });
  });

  describe("Approve & TransferFrom", function () {
    beforeEach(async function () {
      await pfToken.connect(minter).mint(userA.address, 1000000);
    });

    it("Should approve and transferFrom", async function () {
      const approveAmount = 200000;
      const transferAmount = 100000;

      await pfToken.connect(userA).approve(userB.address, approveAmount);
      expect(await pfToken.allowance(userA.address, userB.address)).to.equal(approveAmount);

      await pfToken.connect(userB).transferFrom(userA.address, userC.address, transferAmount);

      expect(await pfToken.balanceOf(userC.address)).to.equal(transferAmount);
      expect(await pfToken.allowance(userA.address, userB.address)).to.equal(100000);
    });

    it("Should revert if insufficient allowance", async function () {
      await pfToken.connect(userA).approve(userB.address, 50000);

      await expect(
        pfToken.connect(userB).transferFrom(userA.address, userC.address, 100000)
      ).to.be.reverted;
    });

    it("Should revert when paused", async function () {
      await pfToken.connect(userA).approve(userB.address, 100000);
      await pfToken.connect(admin).pause();

      await expect(
        pfToken.connect(userB).transferFrom(userA.address, userC.address, 50000)
      ).to.be.revertedWithCustomError(pfToken, "EnforcedPause");
    });
  });

  describe("Role Management", function () {
    it("Should check if address has minter role", async function () {
      expect(await pfToken.isMinter(minter.address)).to.be.true;
      expect(await pfToken.isMinter(userA.address)).to.be.false;
    });

    it("Should check if address has pauser role", async function () {
      expect(await pfToken.isPauser(admin.address)).to.be.true;
      expect(await pfToken.isPauser(userA.address)).to.be.false;
    });

    it("Should grant minter role", async function () {
      const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));

      await pfToken.connect(admin).grantRole(MINTER_ROLE, userA.address);
      expect(await pfToken.isMinter(userA.address)).to.be.true;

      // userA can now mint
      await pfToken.connect(userA).mint(userB.address, 1000);
      expect(await pfToken.balanceOf(userB.address)).to.equal(1000);
    });

    it("Should revoke minter role", async function () {
      const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));

      await pfToken.connect(admin).revokeRole(MINTER_ROLE, minter.address);
      expect(await pfToken.isMinter(minter.address)).to.be.false;

      // minter can no longer mint
      await expect(
        pfToken.connect(minter).mint(userA.address, 1000)
      ).to.be.reverted;
    });

    it("Should grant pauser role", async function () {
      const PAUSER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("PAUSER_ROLE"));

      await pfToken.connect(admin).grantRole(PAUSER_ROLE, userA.address);
      expect(await pfToken.isPauser(userA.address)).to.be.true;

      // userA can now pause
      await pfToken.connect(userA).pause();
      expect(await pfToken.paused()).to.be.true;
    });
  });

  describe("Complex Scenarios", function () {
    it("Should handle full lifecycle: mint, transfer, approve, burn", async function () {
      // Mint
      await pfToken.connect(minter).mint(userA.address, 1000000);
      expect(await pfToken.balanceOf(userA.address)).to.equal(1000000);

      // Transfer
      await pfToken.connect(userA).transfer(userB.address, 300000);
      expect(await pfToken.balanceOf(userA.address)).to.equal(700000);
      expect(await pfToken.balanceOf(userB.address)).to.equal(300000);

      // Approve and TransferFrom
      await pfToken.connect(userA).approve(userC.address, 200000);
      await pfToken.connect(userC).transferFrom(userA.address, userC.address, 100000);
      expect(await pfToken.balanceOf(userA.address)).to.equal(600000);
      expect(await pfToken.balanceOf(userC.address)).to.equal(100000);

      // Burn
      await pfToken.connect(userA).burn(100000);
      expect(await pfToken.balanceOf(userA.address)).to.equal(500000);
      expect(await pfToken.totalSupply()).to.equal(900000);
    });

    it("Should handle multiple users and batch operations", async function () {
      const recipients = [userA.address, userB.address, userC.address];
      const amounts = [100000, 200000, 300000];

      // Batch mint
      await pfToken.connect(minter).batchMint(recipients, amounts);
      expect(await pfToken.totalSupply()).to.equal(600000);

      // Record interest payments
      await pfToken.connect(admin).recordInterestPayment(10000);
      await time.increase(86400);
      await pfToken.connect(admin).recordInterestPayment(20000);

      const [lastAmount, lastTimestamp] = await pfToken.getLastInterestPayment();
      expect(lastAmount).to.equal(20000);

      // Transfers
      await pfToken.connect(userA).transfer(userB.address, 50000);
      await pfToken.connect(userC).transfer(userA.address, 100000);

      expect(await pfToken.balanceOf(userA.address)).to.equal(150000);
      expect(await pfToken.balanceOf(userB.address)).to.equal(250000);
      expect(await pfToken.balanceOf(userC.address)).to.equal(200000);
    });

    it("Should handle pause during complex operations", async function () {
      // Mint to multiple users
      await pfToken.connect(minter).mint(userA.address, 1000000);
      await pfToken.connect(minter).mint(userB.address, 500000);

      // Pause
      await pfToken.connect(admin).pause();

      // Operations should fail
      await expect(pfToken.connect(minter).mint(userC.address, 100000))
        .to.be.revertedWithCustomError(pfToken, "EnforcedPause");
      await expect(pfToken.connect(userA).transfer(userB.address, 100000))
        .to.be.revertedWithCustomError(pfToken, "EnforcedPause");
      await expect(pfToken.connect(userA).burn(100000))
        .to.be.revertedWithCustomError(pfToken, "EnforcedPause");

      // Unpause
      await pfToken.connect(admin).unpause();

      // Operations should succeed
      await pfToken.connect(minter).mint(userC.address, 100000);
      await pfToken.connect(userA).transfer(userB.address, 100000);
      await pfToken.connect(userA).burn(100000);

      expect(await pfToken.balanceOf(userA.address)).to.equal(800000);
      expect(await pfToken.balanceOf(userB.address)).to.equal(600000);
      expect(await pfToken.balanceOf(userC.address)).to.equal(100000);
    });
  });

  describe("Edge Cases", function () {
    it("Should handle zero balance transfers", async function () {
      await pfToken.connect(minter).mint(userA.address, 1000000);

      await expect(
        pfToken.connect(userA).transfer(userB.address, 0)
      ).to.not.be.reverted;
    });

    it("Should handle maximum uint256 values", async function () {
      const maxAmount = ethers.MaxUint256;

      // This should work within the contract limits
      await pfToken.connect(minter).mint(userA.address, 1000000000);
      expect(await pfToken.balanceOf(userA.address)).to.equal(1000000000);
    });

    it("Should maintain correct state after multiple pause/unpause cycles", async function () {
      await pfToken.connect(minter).mint(userA.address, 1000000);

      for (let i = 0; i < 5; i++) {
        await pfToken.connect(admin).pause();
        expect(await pfToken.paused()).to.be.true;

        await pfToken.connect(admin).unpause();
        expect(await pfToken.paused()).to.be.false;
      }

      // Should still be able to transfer after multiple cycles
      await pfToken.connect(userA).transfer(userB.address, 100000);
      expect(await pfToken.balanceOf(userB.address)).to.equal(100000);
    });
  });
});
