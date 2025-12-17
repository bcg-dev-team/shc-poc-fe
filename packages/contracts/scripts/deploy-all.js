const hre = require("hardhat");
const { ethers } = require("hardhat");
const fs = require("fs");

/**
 * 전체 컨트랙트 배포 스크립트
 *
 * 배포 순서:
 * 1. SecurityToken (독립)
 * 2. AssetValuation (독립)
 * 3. InterestDistribution (SecurityToken 의존)
 * 4. P2PTrading (SecurityToken, InterestDistribution 의존)
 *
 * 사용법:
 * npx hardhat run scripts/deploy-all.js --network <네트워크명>
 *
 * 예시:
 * npx hardhat run scripts/deploy-all.js --network localhost
 * npx hardhat run scripts/deploy-all.js --network pulse
 * npx hardhat run scripts/deploy-all.js --network sepolia
 */

async function main() {
  console.log("\n" + "=".repeat(70));
  console.log("신한캐피탈 PF 스마트컨트랙트 전체 배포");
  console.log("=".repeat(70));

  // 배포자 계정 정보
  const [deployer] = await ethers.getSigners();
  console.log("\n📋 배포 정보:");
  console.log("  배포 계정:", deployer.address);

  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("  계정 잔액:", ethers.formatEther(balance), "ETH");

  // 네트워크 정보
  const network = await ethers.provider.getNetwork();
  console.log("  네트워크:", network.name);
  console.log("  Chain ID:", network.chainId);

  // 배포 확인
  console.log("\n⚠️  전체 컨트랙트 배포를 진행하시겠습니까?");
  console.log("  (계속하려면 3초 대기...)");
  await new Promise(resolve => setTimeout(resolve, 3000));

  const deployedContracts = {};
  const startTime = Date.now();

  try {
    // 1. SecurityToken 배포
    console.log("\n" + "=".repeat(70));
    console.log("1/4: SecurityToken 배포 중...");
    console.log("=".repeat(70));

    const SecurityToken = await ethers.getContractFactory("SecurityToken");
    const securityToken = await SecurityToken.deploy(
      "Shinhan Capital PF Security Token",
      "SHC-PF"
    );
    await securityToken.waitForDeployment();
    const securityTokenAddress = await securityToken.getAddress();

    deployedContracts.securityToken = {
      name: "SecurityToken",
      address: securityTokenAddress,
      transactionHash: securityToken.deploymentTransaction().hash,
    };

    console.log("✅ SecurityToken 배포 완료:", securityTokenAddress);

    // 2. AssetValuation 배포
    console.log("\n" + "=".repeat(70));
    console.log("2/4: AssetValuation 배포 중...");
    console.log("=".repeat(70));

    const AssetValuation = await ethers.getContractFactory("AssetValuation");
    const assetValuation = await AssetValuation.deploy();
    await assetValuation.waitForDeployment();
    const assetValuationAddress = await assetValuation.getAddress();

    deployedContracts.assetValuation = {
      name: "AssetValuation",
      address: assetValuationAddress,
      transactionHash: assetValuation.deploymentTransaction().hash,
    };

    console.log("✅ AssetValuation 배포 완료:", assetValuationAddress);

    // 3. InterestDistribution 배포
    console.log("\n" + "=".repeat(70));
    console.log("3/4: InterestDistribution 배포 중...");
    console.log("=".repeat(70));

    const InterestDistribution = await ethers.getContractFactory("InterestDistribution");
    const interestDistribution = await InterestDistribution.deploy(securityTokenAddress);
    await interestDistribution.waitForDeployment();
    const interestDistributionAddress = await interestDistribution.getAddress();

    deployedContracts.interestDistribution = {
      name: "InterestDistribution",
      address: interestDistributionAddress,
      transactionHash: interestDistribution.deploymentTransaction().hash,
      dependencies: {
        securityToken: securityTokenAddress,
      },
    };

    console.log("✅ InterestDistribution 배포 완료:", interestDistributionAddress);

    // 4. P2PTrading 배포
    console.log("\n" + "=".repeat(70));
    console.log("4/4: P2PTrading 배포 중...");
    console.log("=".repeat(70));

    const P2PTrading = await ethers.getContractFactory("P2PTrading");
    const p2pTrading = await P2PTrading.deploy(
      securityTokenAddress,
      interestDistributionAddress
    );
    await p2pTrading.waitForDeployment();
    const p2pTradingAddress = await p2pTrading.getAddress();

    deployedContracts.p2pTrading = {
      name: "P2PTrading",
      address: p2pTradingAddress,
      transactionHash: p2pTrading.deploymentTransaction().hash,
      dependencies: {
        securityToken: securityTokenAddress,
        interestDistribution: interestDistributionAddress,
      },
    };

    console.log("✅ P2PTrading 배포 완료:", p2pTradingAddress);

    // 배포 완료 요약
    console.log("\n" + "=".repeat(70));
    console.log("✅ 전체 배포 완료!");
    console.log("=".repeat(70));

    const endTime = Date.now();
    const deploymentTime = ((endTime - startTime) / 1000).toFixed(2);

    console.log("\n📊 배포 요약:");
    console.log("  소요 시간:", deploymentTime, "초");
    console.log("\n📝 배포된 컨트랙트:");
    console.log("  1. SecurityToken:", deployedContracts.securityToken.address);
    console.log("  2. AssetValuation:", deployedContracts.assetValuation.address);
    console.log("  3. InterestDistribution:", deployedContracts.interestDistribution.address);
    console.log("  4. P2PTrading:", deployedContracts.p2pTrading.address);

    // 배포 정보를 JSON 파일로 저장
    const deploymentInfo = {
      network: network.name,
      chainId: Number(network.chainId),
      deployer: deployer.address,
      timestamp: new Date().toISOString(),
      deploymentTime: deploymentTime + " seconds",
      contracts: deployedContracts,
    };

    const deploymentPath = `./deployments/deployment-all_${network.name}_${startTime}.json`;

    if (!fs.existsSync("./deployments")) {
      fs.mkdirSync("./deployments");
    }

    fs.writeFileSync(
      deploymentPath,
      JSON.stringify(deploymentInfo, null, 2)
    );

    console.log("\n💾 배포 정보 저장:");
    console.log("  파일 경로:", deploymentPath);

    // 컨트랙트 검증 명령어 출력
    if (network.name !== "hardhat" && network.name !== "localhost") {
      console.log("\n🔍 컨트랙트 검증 명령어 (Etherscan):");
      console.log("\n# SecurityToken");
      console.log(`npx hardhat verify --network ${network.name} ${deployedContracts.securityToken.address} "Shinhan Capital PF Security Token" "SHC-PF"`);

      console.log("\n# AssetValuation");
      console.log(`npx hardhat verify --network ${network.name} ${deployedContracts.assetValuation.address}`);

      console.log("\n# InterestDistribution");
      console.log(`npx hardhat verify --network ${network.name} ${deployedContracts.interestDistribution.address} "${securityTokenAddress}"`);

      console.log("\n# P2PTrading");
      console.log(`npx hardhat verify --network ${network.name} ${deployedContracts.p2pTrading.address} "${securityTokenAddress}" "${interestDistributionAddress}"`);
    }

    // 다음 단계 안내
    console.log("\n📌 다음 단계:");
    console.log("\n1. Tranche 생성 (SecurityToken):");
    console.log(`   const trancheA = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));`);
    console.log(`   const trancheB = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_B"));`);
    console.log(`   await securityToken.createTranche(trancheA, "Tranche A - Senior", 0, 600, maturityDate);`);
    console.log(`   await securityToken.createTranche(trancheB, "Tranche B - Junior", 1, 1200, maturityDate);`);

    console.log("\n2. 투자자 KYC 인증:");
    console.log(`   await securityToken.verifyKYC(investorAddress, true);`);

    console.log("\n3. 토큰 발행:");
    console.log(`   await securityToken.issueByTranche(trancheA, investorAddress, amount);`);

    console.log("\n4. 상환 스케줄 설정:");
    console.log(`   await interestDistribution.createRedemptionSchedule(trancheA, principal, rate, maturity);`);

    console.log("\n5. 자산 평가 초기화:");
    console.log(`   await assetValuation.initializeValuation(trancheA, faceValue, bookValue);`);

    console.log("\n" + "=".repeat(70));
    console.log("전체 배포 완료!");
    console.log("=".repeat(70) + "\n");

    return deployedContracts;

  } catch (error) {
    console.error("\n❌ 배포 실패:");
    console.error(error);

    // 실패 시에도 이미 배포된 컨트랙트 정보 저장
    if (Object.keys(deployedContracts).length > 0) {
      const failedDeploymentInfo = {
        network: network.name,
        chainId: Number(network.chainId),
        deployer: deployer.address,
        timestamp: new Date().toISOString(),
        status: "FAILED",
        error: error.message,
        partiallyDeployedContracts: deployedContracts,
      };

      const failedDeploymentPath = `./deployments/deployment-failed_${network.name}_${startTime}.json`;

      if (!fs.existsSync("./deployments")) {
        fs.mkdirSync("./deployments");
      }

      fs.writeFileSync(
        failedDeploymentPath,
        JSON.stringify(failedDeploymentInfo, null, 2)
      );

      console.log("\n💾 부분 배포 정보 저장:");
      console.log("  파일 경로:", failedDeploymentPath);
      console.log("\n⚠️  이미 배포된 컨트랙트:");
      Object.entries(deployedContracts).forEach(([key, value]) => {
        console.log(`  - ${value.name}: ${value.address}`);
      });
    }

    throw error;
  }
}

// 에러 처리
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n프로세스 종료 중...");
    process.exit(1);
  });
