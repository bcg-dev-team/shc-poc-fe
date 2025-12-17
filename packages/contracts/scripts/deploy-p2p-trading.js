const hre = require("hardhat");
const { ethers } = require("hardhat");

/**
 * P2PTrading 배포 스크립트
 *
 * 사용법:
 * npx hardhat run scripts/deploy-p2p-trading.js --network <네트워크명>
 *
 * 환경변수:
 * SECURITY_TOKEN_ADDRESS - SecurityToken 컨트랙트 주소 (필수)
 * INTEREST_DISTRIBUTION_ADDRESS - InterestDistribution 컨트랙트 주소 (필수)
 *
 * 예시:
 * SECURITY_TOKEN_ADDRESS=0x... INTEREST_DISTRIBUTION_ADDRESS=0x... npx hardhat run scripts/deploy-p2p-trading.js --network localhost
 * SECURITY_TOKEN_ADDRESS=0x... INTEREST_DISTRIBUTION_ADDRESS=0x... npx hardhat run scripts/deploy-p2p-trading.js --network pulse
 */

async function main() {
  console.log("\n=".repeat(60));
  console.log("P2PTrading 배포 스크립트");
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

  // 배포 파라미터 설정
  const securityTokenAddress = process.env.SECURITY_TOKEN_ADDRESS;
  const interestDistributionAddress = process.env.INTEREST_DISTRIBUTION_ADDRESS;

  if (!securityTokenAddress || !interestDistributionAddress) {
    console.error("\n❌ 오류: 필수 환경변수가 설정되지 않았습니다.");
    console.log("\n사용법:");
    console.log("  SECURITY_TOKEN_ADDRESS=0x... INTEREST_DISTRIBUTION_ADDRESS=0x... \\");
    console.log("  npx hardhat run scripts/deploy-p2p-trading.js --network <네트워크>");
    process.exit(1);
  }

  console.log("\n⚙️  배포 파라미터:");
  console.log("  SecurityToken Address:", securityTokenAddress);
  console.log("  InterestDistribution Address:", interestDistributionAddress);

  // 배포 확인
  console.log("\n⚠️  배포를 진행하시겠습니까?");
  console.log("  (계속하려면 3초 대기...)");
  await new Promise(resolve => setTimeout(resolve, 3000));

  // P2PTrading 컨트랙트 배포
  console.log("\n🚀 P2PTrading 컨트랙트 배포 중...");

  const P2PTrading = await ethers.getContractFactory("P2PTrading");
  const p2pTrading = await P2PTrading.deploy(
    securityTokenAddress,
    interestDistributionAddress
  );

  const deployTx = p2pTrading.deploymentTransaction();
  console.log("  트랜잭션 해시:", deployTx.hash);
  console.log("  블록 확인 대기 중...");

  await p2pTrading.waitForDeployment();

  console.log("\n✅ 배포 완료!");
  console.log("=".repeat(60));
  console.log("\n📝 배포 결과:");
  console.log("  컨트랙트 주소:", await p2pTrading.getAddress());

  const receipt = await deployTx.wait();
  console.log("  블록 번호:", receipt.blockNumber);

  // 배포된 컨트랙트 정보 확인
  console.log("\n📊 컨트랙트 정보:");
  console.log("  SecurityToken:", await p2pTrading.securityToken());
  console.log("  InterestDistribution:", await p2pTrading.interestDistribution());

  // 배포 정보 저장
  const contractAddress = await p2pTrading.getAddress();
  const deploymentInfo = {
    network: network.name,
    chainId: Number(network.chainId),
    contractName: "P2PTrading",
    contractAddress: contractAddress,
    deployerAddress: deployer.address,
    transactionHash: deployTx.hash,
    blockNumber: Number(receipt.blockNumber),
    timestamp: new Date().toISOString(),
    parameters: {
      securityTokenAddress: securityTokenAddress,
      interestDistributionAddress: interestDistributionAddress,
    },
  };

  const fs = require("fs");
  const deploymentPath = `./deployments/p2p-trading_${network.name}_${Date.now()}.json`;

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
  npx hardhat verify --network ${network.name} ${contractAddress} \\
    "${securityTokenAddress}" \\
    "${interestDistributionAddress}"
    `);
  }

  // 다음 단계 안내
  console.log("\n📌 다음 단계:");
  console.log("  1. 매도 주문 생성:");
  console.log(`     const trancheId = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));`);
  console.log(`     await p2pTrading.createSellOrder(trancheId, amount, price, expirationDays);`);
  console.log("\n  2. 거래 체결:");
  console.log(`     await p2pTrading.executeTrade(orderId, amount);`);
  console.log("\n  3. 주문 취소:");
  console.log(`     await p2pTrading.cancelOrder(orderId);`);

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
