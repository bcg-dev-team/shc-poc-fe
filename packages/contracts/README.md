# 신한캐피탈 PF 증권화 토큰 (Shinhan Capital PF Security Token)

신한캐피탈의 프로젝트 파이낸싱(PF) 증권화를 위한 블록체인 기반 스마트 컨트랙트 시스템입니다.

## 📋 목차

- [개요](#개요)
- [주요 기능](#주요-기능)
- [컨트랙트 구조](#컨트랙트-구조)
- [설치 및 설정](#설치-및-설정)
- [사용 방법](#사용-방법)
- [배포](#배포)
- [테스트](#테스트)
- [아키텍처](#아키텍처)
- [비즈니스 로직](#비즈니스-로직)

## 개요

이 프로젝트는 신한캐피탈의 PF 대출 증권화를 블록체인 기반으로 구현한 시스템입니다. ERC-1400 표준을 기반으로 하며, Senior/Junior Tranche 구조, 자동 이자 배분, P2P 거래, 상각후원가법 기반 자산 평가 등의 기능을 제공합니다.

### 기술 스택

- **Solidity**: ^0.8.20
- **Hardhat**: 스마트 컨트랙트 개발 및 테스트
- **OpenZeppelin**: 보안 검증된 컨트랙트 라이브러리
- **Ethers.js**: v6 블록체인 인터랙션
- **Chai**: 테스트 프레임워크

### 주요 특징

- ✅ **ERC-1400 기반**: 증권형 토큰 표준 준수
- ✅ **Tranche 구조**: Senior (6%) / Junior (12%) 이원화
- ✅ **자동 이자 배분**: 3개월 후불 방식
- ✅ **P2P 거래**: 기관투자자 간 보유기간별 이자 정산
- ✅ **상각후원가법**: K-IFRS 기준 자산 평가
- ✅ **KYC/AML**: 투자자 인증 시스템
- ✅ **락업 기간**: 토큰 양도 제한
- ✅ **부분/최종 상환**: 80% 부분 → 20% 최종 상환

## 주요 기능

### 1. 증권형 토큰 발행 (SecurityToken.sol)

```solidity
// Tranche 생성 (Senior/Junior)
createTranche(trancheId, "Tranche A", SENIOR, 600, maturityDate)

// KYC 인증
verifyKYC(investorAddress, isAccredited)

// 토큰 발행 (일시대출/한도대출)
issueByTranche(trancheId, investorAddress, amount)

// 한도대출 증액 (Senior 전용)
additionalIssuance(trancheId, investorAddress, additionalAmount)
```

### 2. 이자 배분 및 상환 (InterestDistribution.sol)

```solidity
// 상환 스케줄 생성 (3개월 후불)
createRedemptionSchedule(trancheId, principal, interestRate, maturityDate)

// 이자 지급 (분기별)
payInterest(trancheId, paymentIndex)

// 부분 상환 (80%)
partialRedemption(trancheId, percentage)

// 최종 상환
finalRedemption(trancheId)
```

### 3. 자산 평가 (AssetValuation.sol)

```solidity
// 평가 데이터 초기화
initializeValuation(trancheId, faceValue, bookValue)

// 상각 스케줄 생성
createAmortizationSchedule(trancheId, periods, principal, interest)

// 상각후원가 업데이트
updateAmortizedCost(trancheId, redemption, accruedInterest)

// 공정가치 업데이트 (DCF)
updateFairValue(trancheId, fairValue)
```

### 4. P2P 거래 (P2PTrading.sol)

```solidity
// 매도 주문 생성
createSellOrder(trancheId, amount, price, expirationDays)

// 거래 체결 (보유기간별 이자 정산)
executeTrade(orderId, amount)

// 주문 취소
cancelOrder(orderId)
```

## 컨트랙트 구조

```
contracts/
├── src/
│   ├── SecurityToken.sol          # 증권형 토큰 (ERC-1400 기반)
│   ├── InterestDistribution.sol   # 이자 배분 및 상환
│   ├── AssetValuation.sol         # 상각후원가법 자산 평가
│   ├── P2PTrading.sol             # P2P 거래 플랫폼
│   ├── SKRWToken.sol              # S-KRW 스테이블코인
│   └── PFToken.sol                # PF 토큰 (기존)
├── scripts/
│   ├── deploy-all.js              # 전체 배포 스크립트
│   ├── deploy-security-token.js   # SecurityToken 배포
│   ├── deploy-interest-distribution.js
│   ├── deploy-asset-valuation.js
│   └── deploy-p2p-trading.js
├── test/
│   ├── SecurityToken.test.js      # 47개 테스트
│   ├── InterestDistribution.test.js # 49개 테스트
│   ├── AssetValuation.test.js     # 30개 테스트
│   ├── P2PTrading.test.js         # 39개 테스트
│   └── Integration.test.js        # 3개 통합 시나리오
├── deployments/                   # 배포 기록
├── hardhat.config.js              # Hardhat 설정
└── package.json
```

## 설치 및 설정

### 1. 의존성 설치

```bash
# npm
npm install

# 또는 pnpm
pnpm install
```

### 2. 환경 변수 설정

`.env` 파일을 생성하고 다음 변수를 설정합니다:

```bash
# 배포 계정 개인키
PRIVATE_KEY="0x..."

# RPC URL
PULSE_RPC_URL="https://secuchain.testnet.stopulse.co.kr/"
PULSE_CHAIN_ID=1337

SEPOLIA_RPC_URL="https://sepolia.infura.io/v3/YOUR-PROJECT-ID"
MAINNET_RPC_URL="https://mainnet.infura.io/v3/YOUR-PROJECT-ID"

# Etherscan API Key (검증용)
ETHERSCAN_API_KEY="YOUR-API-KEY"

# Gas Reporter
REPORT_GAS=false
COINMARKETCAP_API_KEY="YOUR-API-KEY"

# 토큰 설정
TOKEN_NAME="Shinhan Capital PF Security Token"
TOKEN_SYMBOL="SHC-PF"
```

### 3. 컴파일

```bash
npm run compile
```

## 사용 방법

### 로컬 개발 네트워크

```bash
# 1. 로컬 노드 시작 (별도 터미널)
npm run node

# 2. 컴파일
npm run compile

# 3. 전체 배포
npm run deploy:all

# 4. 테스트 실행
npm test
```

### 개별 컨트랙트 사용 예시

#### SecurityToken - Tranche 생성 및 토큰 발행

```javascript
const { ethers } = require("hardhat");

async function main() {
  const SecurityToken = await ethers.getContractFactory("SecurityToken");
  const securityToken = await SecurityToken.attach("CONTRACT_ADDRESS");

  // Tranche ID 생성
  const trancheA = ethers.keccak256(ethers.toUtf8Bytes("TRANCHE_A"));

  // Tranche 생성
  const maturityDate = Math.floor(Date.now() / 1000) + (365 * 24 * 60 * 60);
  await securityToken.createTranche(
    trancheA,
    "Tranche A - Senior",
    0, // SENIOR
    600, // 6%
    maturityDate
  );

  // KYC 인증
  await securityToken.verifyKYC(investorAddress, true);

  // 토큰 발행
  const amount = ethers.parseEther("10000000000"); // 100억원
  await securityToken.issueByTranche(trancheA, investorAddress, amount);
}
```

#### InterestDistribution - 이자 지급 및 상환

```javascript
const InterestDistribution = await ethers.getContractFactory("InterestDistribution");
const interestDist = await InterestDistribution.attach("CONTRACT_ADDRESS");

// 상환 스케줄 생성
await interestDist.createRedemptionSchedule(
  trancheA,
  ethers.parseEther("10000000000"), // 100억
  600, // 6%
  maturityDate
);

// 3개월 후 첫 이자 지급
await interestDist.payInterest(trancheA, 0);

// 80% 부분 상환
await interestDist.partialRedemption(trancheA, 80);

// 만기 시 최종 상환
await interestDist.finalRedemption(trancheA);
```

#### P2PTrading - P2P 거래

```javascript
const P2PTrading = await ethers.getContractFactory("P2PTrading");
const p2pTrading = await P2PTrading.attach("CONTRACT_ADDRESS");

// 매도 주문 생성
const tx = await p2pTrading.createSellOrder(
  trancheA,
  ethers.parseEther("1000000000"), // 10억
  ethers.parseEther("1000000000"), // 평가가격
  30 // 30일 만료
);

// 거래 체결
await p2pTrading.connect(buyer).executeTrade(orderId, buyAmount);
```

## 배포

### 전체 배포 (권장)

모든 컨트랙트를 올바른 순서로 배포합니다:

```bash
# Localhost
npm run deploy:all

# Pulse 네트워크
npm run deploy:all:pulse

# Sepolia 테스트넷
npm run deploy:all:sepolia
```

배포 정보는 `deployments/` 폴더에 JSON 형식으로 자동 저장됩니다.

### 개별 배포

의존성이 있는 경우 순서대로 배포해야 합니다:

```bash
# 1. SecurityToken (독립)
npm run deploy:security-token:pulse

# 2. AssetValuation (독립)
npm run deploy:asset-valuation:pulse

# 3. InterestDistribution (SecurityToken 의존)
SECURITY_TOKEN_ADDRESS=0x... npm run deploy:interest-distribution:pulse

# 4. P2PTrading (SecurityToken, InterestDistribution 의존)
SECURITY_TOKEN_ADDRESS=0x... \
INTEREST_DISTRIBUTION_ADDRESS=0x... \
npm run deploy:p2p-trading:pulse
```

### 컨트랙트 검증

배포 후 Etherscan에서 검증:

```bash
# SecurityToken
npx hardhat verify --network sepolia CONTRACT_ADDRESS \
  "Shinhan Capital PF Security Token" \
  "SHC-PF"

# InterestDistribution
npx hardhat verify --network sepolia CONTRACT_ADDRESS \
  "SECURITY_TOKEN_ADDRESS"

# P2PTrading
npx hardhat verify --network sepolia CONTRACT_ADDRESS \
  "SECURITY_TOKEN_ADDRESS" \
  "INTEREST_DISTRIBUTION_ADDRESS"
```

## 테스트

### 전체 테스트 실행

```bash
# 모든 테스트 실행 (173개)
npm test

# 가스 리포트 포함
npm run test:gas

# 커버리지 리포트
npm run test:coverage
```

### 개별 테스트 실행

```bash
# SecurityToken (47개 테스트)
npx hardhat test test/SecurityToken.test.js

# InterestDistribution (49개 테스트)
npx hardhat test test/InterestDistribution.test.js

# AssetValuation (30개 테스트)
npx hardhat test test/AssetValuation.test.js

# P2PTrading (39개 테스트)
npx hardhat test test/P2PTrading.test.js

# Integration (3개 통합 시나리오)
npx hardhat test test/Integration.test.js
```

### 테스트 시나리오

각 테스트 파일은 실제 비즈니스 시나리오를 반영합니다:

**SecurityToken.test.js**
- Tranche 생성 및 관리
- KYC 인증 프로세스
- 토큰 발행 (일시대출/한도대출)
- P2P 거래 및 전송
- 토큰 상환 (부분/최종)
- 락업 기간 관리
- 권한 관리

**InterestDistribution.test.js**
- 상환 스케줄 생성
- 3개월 후불 이자 지급
- 80% 부분 상환
- 최종 상환 처리
- 보유기간별 이자 정산
- 다중 Tranche 관리

**AssetValuation.test.js**
- 평가 데이터 초기화
- 상각 스케줄 생성
- 상각후원가법 적용
- 공정가치 업데이트 (DCF)
- DCF 현재가치 계산
- Oracle 관리

**P2PTrading.test.js**
- 매도 주문 생성/취소
- 거래 체결 프로세스
- 만료된 주문 처리
- 보유기간별 이자 정산
- 다중 거래 시나리오
- 거래 가능 여부 확인

**Integration.test.js**
- 전체 프로세스 (발행 → 이자지급 → P2P거래 → 상환)
- 한도대출 증액 시나리오
- 다중 투자자 복합 거래

## 아키텍처

### 컨트랙트 의존성

```
┌─────────────────────┐
│  SecurityToken      │◄────┐
│  (ERC-1400 기반)    │     │
└─────────────────────┘     │
         ▲                   │
         │                   │
         │ depends on        │
         │                   │
┌────────┴──────────────┐    │
│ InterestDistribution  │    │
│ (이자 배분 및 상환)   │    │
└───────────────────────┘    │
         ▲                   │
         │                   │
         │ depends on        │
         │                   │
┌────────┴──────────────┐    │
│     P2PTrading        │────┘
│  (P2P 거래 플랫폼)    │
└───────────────────────┘

┌───────────────────────┐
│   AssetValuation      │ (독립)
│  (상각후원가법 평가)  │
└───────────────────────┘
```

### 데이터 플로우

```
1. 토큰 발행
   Issuer → SecurityToken.issueByTranche()

2. 이자 배분
   InterestDistribution.createRedemptionSchedule()
   → 3개월마다 payInterest()

3. P2P 거래
   Seller → P2PTrading.createSellOrder()
   Buyer → P2PTrading.executeTrade()
   → 보유기간별 이자 정산

4. 자산 평가
   Oracle → AssetValuation.updateAmortizedCost()
   Oracle → AssetValuation.updateFairValue()

5. 상환
   Trustee → InterestDistribution.partialRedemption(80%)
   Trustee → InterestDistribution.finalRedemption()
   → SecurityToken.redeemByTranche()
```

## 비즈니스 로직

### Tranche 구조

| Tranche | 유형 | 이자율 | 특징 |
|---------|------|--------|------|
| Tranche A | Senior | 6% | 선순위, 한도대출 증액 가능 |
| Tranche B | Junior | 12% | 후순위, 일시대출만 가능 |

### 이자 지급 방식

- **주기**: 3개월 후불 (분기별)
- **계산식**: `(원금 × 연이자율 × 90) / (10000 × 365)`
- **지급 횟수**: 연 4회 (3, 6, 9, 12개월)

### 상환 구조

1. **부분 상환**: 만기 전 원금의 80% 상환
2. **최종 상환**: 만기 시 잔여 20% 상환
3. **조기 상환**: 계약에 따라 가능

### P2P 거래 시 이자 정산

```
일할 계산 방식:
이자 = (거래 금액 × 연이자율 × 보유일수) / (10000 × 365)

예시:
- 거래금액: 15억원
- 이자율: 6% (600 basis points)
- 보유기간: 90일
- 정산이자: 15억 × 600 × 90 / (10000 × 365) ≈ 22,191,780원
```

### 상각후원가법

```
상각후원가 = 이전 장부가액 - 원금상환 + 미수이자

예시:
- 초기 장부가액: 100억
- 원금 상환: 10억
- 미수이자: 1.5억
- 상각후원가: 100억 - 10억 + 1.5억 = 91.5억
```

## 네트워크 설정

### Pulse Blockchain (테스트넷)

- RPC URL: `https://secuchain.testnet.stopulse.co.kr/`
- Chain ID: 1337
- Gas Price: 0 (무료)

### Ethereum Testnet (Sepolia)

- RPC URL: Infura/Alchemy
- Chain ID: 11155111

## 보안 고려사항

### 접근 제어

- **Issuer**: Tranche 생성, 토큰 발행
- **Controller**: KYC 인증, 상환 처리
- **Trustee**: 이자 지급, 상환 스케줄 관리
- **Oracle**: 자산 평가 업데이트

### KYC/AML

- 모든 투자자는 KYC 인증 필수
- 전문투자자 여부 구분
- 락업 기간 설정 가능

### 감사 추적

- 모든 주요 동작에 대한 이벤트 발생
- 거래 내역, 이자 지급 내역 온체인 기록
- 배포 정보 JSON 파일로 저장

## 라이센스

MIT License

## 문의

- **개발사**: Blockchain Global Co., Ltd.
- **프로젝트**: 신한캐피탈 PF 증권화 PoC

---

## 부록: 주요 명령어 요약

```bash
# 설치
npm install

# 컴파일
npm run compile

# 테스트
npm test                    # 전체 테스트
npm run test:gas            # 가스 리포트
npm run test:coverage       # 커버리지

# 배포
npm run deploy:all          # localhost
npm run deploy:all:pulse    # Pulse 네트워크

# 개발
npm run node                # 로컬 노드
npm run clean               # 캐시 정리
npm run size                # 컨트랙트 크기 확인

# 검증
npm run verify              # Etherscan 검증
```
