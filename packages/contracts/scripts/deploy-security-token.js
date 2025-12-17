const hre = require("hardhat");
const { ethers } = require("hardhat");

/**
 * SecurityToken 배포 스크립트
 *
 * 사용법:
 * npx hardhat run scripts/deploy-security-token.js --network <네트워크명>
 *
 * 예시:
 * npx hardhat run scripts/deploy-security-token.js --network localhost
 * npx hardhat run scripts/deploy-security-token.js --network pulse
 * npx hardhat run scripts/deploy-security-token.js --network sepolia
 */

async function main() {
  console.log("\n=".repeat(60));
  console.log("SecurityToken 배포 스크립트");
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
  const deployParams = {
    name: process.env.TOKEN_NAME || "Shinhan Capital PF Security Token",
    symbol: process.env.TOKEN_SYMBOL || "SHC-PF",
  };

  console.log("\n⚙️  배포 파라미터:");
  console.log("  Token Name:", deployParams.name);
  console.log("  Token Symbol:", deployParams.symbol);

  // 배포 확인
  console.log("\n⚠️  배포를 진행하시겠습니까?");
  console.log("  (계속하려면 3초 대기...)");
  await new Promise(resolve => setTimeout(resolve, 3000));

  // SecurityToken 컨트랙트 배포
  console.log("\n🚀 SecurityToken 컨트랙트 배포 중...");

  const SecurityToken = await ethers.getContractFactory("SecurityToken");
  const securityToken = await SecurityToken.deploy(
    deployParams.name,
    deployParams.symbol
  );

  const deployTx = securityToken.deploymentTransaction();
  console.log("  트랜잭션 해시:", deployTx.hash);
  console.log("  블록 확인 대기 중...");

  await securityToken.waitForDeployment();

  console.log("\n✅ 배포 완료!");
  console.log("=".repeat(60));
  console.log("\n📝 배포 결과:");
  console.log("  컨트랙트 주소:", await securityToken.getAddress());

  const receipt = await deployTx.wait();
  console.log("  블록 번호:", receipt.blockNumber);

  // 배포된 컨트랙트 정보 확인
  console.log("\n📊 컨트랙트 정보:");
  console.log("  이름:", await securityToken.name());
  console.log("  심볼:", await securityToken.symbol());
  console.log("  Decimals:", await securityToken.decimals());
  console.log("  Issuer:", await securityToken.issuer());

  // 배포 정보 저장
  const contractAddress = await securityToken.getAddress();
  const deploymentInfo = {
    network: network.name,
    chainId: Number(network.chainId),
    contractName: "SecurityToken",
    contractAddress: contractAddress,
    deployerAddress: deployer.address,
    transactionHash: deployTx.hash,
    blockNumber: Number(receipt.blockNumber),
    timestamp: new Date().toISOString(),
    parameters: deployParams,
  };

  const fs = require("fs");
  const deploymentPath = `./deployments/security-token_${network.name}_${Date.now()}.json`;

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
    "${deployParams.name}" \\
    "${deployParams.symbol}"
    `);
  }

  // 다음 단계 안내
  console.log("\n📌 다음 단계:");
  console.log("  1. Tranche 생성:");
  console.log(`     const trancheId = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));`);
  console.log(`     await securityToken.createTranche(trancheId, "Tranche A", 0, 600, maturityDate);`);
  console.log("\n  2. KYC 인증:");
  console.log(`     await securityToken.verifyKYC(investorAddress, true);`);
  console.log("\n  3. 토큰 발행:");
  console.log(`     await securityToken.issueByTranche(trancheId, investorAddress, amount);`);

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
