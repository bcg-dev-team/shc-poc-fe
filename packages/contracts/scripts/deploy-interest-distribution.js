const hre = require("hardhat");
const { ethers } = require("hardhat");

/**
 * InterestDistribution 배포 스크립트
 *
 * 사용법:
 * npx hardhat run scripts/deploy-interest-distribution.js --network <네트워크명>
 *
 * 환경변수:
 * SECURITY_TOKEN_ADDRESS - SecurityToken 컨트랙트 주소 (필수)
 *
 * 예시:
 * SECURITY_TOKEN_ADDRESS=0x... npx hardhat run scripts/deploy-interest-distribution.js --network localhost
 * SECURITY_TOKEN_ADDRESS=0x... npx hardhat run scripts/deploy-interest-distribution.js --network pulse
 */

async function main() {
  console.log("\n=".repeat(60));
  console.log("InterestDistribution 배포 스크립트");
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

  if (!securityTokenAddress) {
    console.error("\n❌ 오류: SECURITY_TOKEN_ADDRESS 환경변수가 설정되지 않았습니다.");
    console.log("\n사용법:");
    console.log("  SECURITY_TOKEN_ADDRESS=0x... npx hardhat run scripts/deploy-interest-distribution.js --network <네트워크>");
    process.exit(1);
  }

  console.log("\n⚙️  배포 파라미터:");
  console.log("  SecurityToken Address:", securityTokenAddress);

  // 배포 확인
  console.log("\n⚠️  배포를 진행하시겠습니까?");
  console.log("  (계속하려면 3초 대기...)");
  await new Promise(resolve => setTimeout(resolve, 3000));

  // InterestDistribution 컨트랙트 배포
  console.log("\n🚀 InterestDistribution 컨트랙트 배포 중...");

  const InterestDistribution = await ethers.getContractFactory("InterestDistribution");
  const interestDistribution = await InterestDistribution.deploy(securityTokenAddress);

  const deployTx = interestDistribution.deploymentTransaction();
  console.log("  트랜잭션 해시:", deployTx.hash);
  console.log("  블록 확인 대기 중...");

  await interestDistribution.waitForDeployment();

  console.log("\n✅ 배포 완료!");
  console.log("=".repeat(60));
  console.log("\n📝 배포 결과:");
  console.log("  컨트랙트 주소:", await interestDistribution.getAddress());

  const receipt = await deployTx.wait();
  console.log("  블록 번호:", receipt.blockNumber);

  // 배포된 컨트랙트 정보 확인
  console.log("\n📊 컨트랙트 정보:");
  console.log("  SecurityToken:", await interestDistribution.securityToken());
  console.log("  Trustee:", await interestDistribution.trustee());
  console.log("  Payment Interval:", await interestDistribution.PAYMENT_INTERVAL(), "seconds (90 days)");

  // 배포 정보 저장
  const contractAddress = await interestDistribution.getAddress();
  const deploymentInfo = {
    network: network.name,
    chainId: Number(network.chainId),
    contractName: "InterestDistribution",
    contractAddress: contractAddress,
    deployerAddress: deployer.address,
    transactionHash: deployTx.hash,
    blockNumber: Number(receipt.blockNumber),
    timestamp: new Date().toISOString(),
    parameters: {
      securityTokenAddress: securityTokenAddress,
    },
  };

  const fs = require("fs");
  const deploymentPath = `./deployments/interest-distribution_${network.name}_${Date.now()}.json`;

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
    "${securityTokenAddress}"
    `);
  }

  // 다음 단계 안내
  console.log("\n📌 다음 단계:");
  console.log("  1. 상환 스케줄 생성:");
  console.log(`     const trancheId = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));`);
  console.log(`     await interestDistribution.createRedemptionSchedule(trancheId, principal, rate, maturity);`);
  console.log("\n  2. 이자 지급 처리:");
  console.log(`     await interestDistribution.payInterest(trancheId, paymentIndex);`);
  console.log("\n  3. 부분 상환:");
  console.log(`     await interestDistribution.partialRedemption(trancheId, 80); // 80%`);

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
