const hre = require("hardhat");
const { ethers } = require("hardhat");

/**
 * AssetValuation 배포 스크립트
 *
 * 사용법:
 * npx hardhat run scripts/deploy-asset-valuation.js --network <네트워크명>
 *
 * 예시:
 * npx hardhat run scripts/deploy-asset-valuation.js --network localhost
 * npx hardhat run scripts/deploy-asset-valuation.js --network pulse
 * npx hardhat run scripts/deploy-asset-valuation.js --network sepolia
 */

async function main() {
  console.log("\n=".repeat(60));
  console.log("AssetValuation 배포 스크립트");
  console.log("=".repeat(60));

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
  console.log("\n⚠️  배포를 진행하시겠습니까?");
  console.log("  (계속하려면 3초 대기...)");
  await new Promise(resolve => setTimeout(resolve, 3000));

  // AssetValuation 컨트랙트 배포
  console.log("\n🚀 AssetValuation 컨트랙트 배포 중...");

  const AssetValuation = await ethers.getContractFactory("AssetValuation");
  const assetValuation = await AssetValuation.deploy();

  const deployTx = assetValuation.deploymentTransaction();
  console.log("  트랜잭션 해시:", deployTx.hash);
  console.log("  블록 확인 대기 중...");

  await assetValuation.waitForDeployment();

  console.log("\n✅ 배포 완료!");
  console.log("=".repeat(60));
  console.log("\n📝 배포 결과:");
  console.log("  컨트랙트 주소:", await assetValuation.getAddress());

  const receipt = await deployTx.wait();
  console.log("  블록 번호:", receipt.blockNumber);

  // 배포된 컨트랙트 정보 확인
  console.log("\n📊 컨트랙트 정보:");
  console.log("  Valuation Oracle:", await assetValuation.valuationOracle());

  // 배포 정보 저장
  const contractAddress = await assetValuation.getAddress();
  const deploymentInfo = {
    network: network.name,
    chainId: Number(network.chainId),
    contractName: "AssetValuation",
    contractAddress: contractAddress,
    deployerAddress: deployer.address,
    transactionHash: deployTx.hash,
    blockNumber: Number(receipt.blockNumber),
    timestamp: new Date().toISOString(),
    parameters: {},
  };

  const fs = require("fs");
  const deploymentPath = `./deployments/asset-valuation_${network.name}_${Date.now()}.json`;

  if (!fs.existsSync("./deployments")) {
    fs.mkdirSync("./deployments");
  }

  fs.writeFileSync(
    deploymentPath,
    JSON.stringify(deploymentInfo, null, 2)
  );

  console.log("\n💾 배포 정보 저장:");
  console.log("  파일 경로:", deploymentPath);

  // 검증 명령어 출력
  if (network.name !== "hardhat" && network.name !== "localhost") {
    console.log("\n🔍 컨트랙트 검증 (Etherscan):");
    console.log(`
  npx hardhat verify --network ${network.name} ${contractAddress}
    `);
  }

  // 다음 단계 안내
  console.log("\n📌 다음 단계:");
  console.log("  1. 평가 데이터 초기화:");
  console.log(`     const trancheId = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));`);
  console.log(`     await assetValuation.initializeValuation(trancheId, faceValue, bookValue);`);
  console.log("\n  2. 상각 스케줄 생성:");
  console.log(`     await assetValuation.createAmortizationSchedule(trancheId, periods, principal, interest);`);
  console.log("\n  3. 상각후원가 업데이트:");
  console.log(`     await assetValuation.updateAmortizedCost(trancheId, redemption, accruedInterest);`);

  console.log("\n" + "=".repeat(60));
  console.log("배포 완료!");
  console.log("=".repeat(60) + "\n");
}

// 에러 처리
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ 배포 실패:");
    console.error(error);
    process.exit(1);
  });
