# 🏦 신한캐피탈 PF 증권화 토큰 PoC

신한캐피탈의 프로젝트 파이낸싱(PF) 대출 증권화를 위한 블록체인 기반 PoC 프로젝트입니다.
ERC-1400 표준 기반의 스마트 컨트랙트와 React 기반의 웹 애플리케이션으로 구성되어 있습니다.

## 🏗️ 프로젝트 구조

```
shc-pf-token-poc/
├── apps/
│   ├── investor/        # 투자자용 웹 애플리케이션 (React)
│   ├── admin/           # 관리자용 웹 애플리케이션 (React)
│   ├── trust/           # 신탁/수탁기관용 웹 애플리케이션 (React)
│   └── custodian/       # 커스터디언용 웹 애플리케이션 (React)
├── packages/
│   ├── contracts/       # PF 증권화 스마트 컨트랙트 (Hardhat, Solidity)
│   └── ui/              # 공통 UI 컴포넌트 라이브러리
└── .cursor/             # Cursor AI 설정
```

## ✨ 주요 기능

### 📜 스마트 컨트랙트 (packages/contracts)

- **증권형 토큰 발행** (SecurityToken.sol)
  - ERC-1400 기반 증권형 토큰
  - Senior/Junior Tranche 구조 (6%/12% 이자율)
  - KYC/AML 인증 시스템
  - 락업 기간 및 양도 제한

- **이자 배분 및 상환** (InterestDistribution.sol)
  - 3개월 후불 방식 이자 지급
  - 부분 상환 (80%) 및 최종 상환 (20%)
  - 한도대출 증액 지원

- **자산 평가** (AssetValuation.sol)
  - K-IFRS 기준 상각후원가법
  - DCF 기반 공정가치 평가
  - 월별 상각 스케줄 관리

- **P2P 거래** (P2PTrading.sol)
  - 기관투자자 간 토큰 거래
  - 보유기간별 이자 정산 (일할 계산)
  - 매도/매수 주문 매칭

### 🖥️ 웹 애플리케이션 (apps/*)

각 참여자별 맞춤형 웹 인터페이스 제공:
- **투자자** (investor): 토큰 보유 현황, P2P 거래, 이자 수령 내역
- **관리자** (admin): 토큰 발행, Tranche 관리, 전체 현황 모니터링
- **신탁** (trust): 이자 지급, 상환 처리, 자산 평가
- **커스터디언** (custodian): 투자자 KYC 인증, 토큰 보관 관리

## 📚 문서

### 📖 가이드

- [스마트 컨트랙트 가이드](./packages/contracts/README.md) - 컨트랙트 구조 및 사용법
- [프로젝트 구조](./packages/contracts/PROJECT_STRUCTURE.md) - 전체 프로젝트 구조
- [시나리오 리뷰](./packages/contracts/SCENARIO_REVIEW.md) - 비즈니스 시나리오 분석

### 📦 Packages

- [@digital-wallet/contracts](./packages/contracts/README.md) - 신한캐피탈 PF 증권화 스마트 컨트랙트 (ERC-1400 기반)
- [@digital-wallet/ui](./packages/ui/README.md) - 공통 UI 컴포넌트 (Button, Card, Input, Badge, Divider)

## 🚀 빠른 시작

### 설치 전 준비사항

1. **Node.js 설치**

   a. **Vercel 설치 스크립트 사용 (권장)**

   ```bash
   curl -sfLS install-node.vercel.app/v20 | bash
   ```

   b. **공식 웹사이트 통한 설치**
   - [Node.js 공식 웹사이트](https://nodejs.org/)에서 20.0.0 이상 버전 다운로드 및 설치

   - **Node.js 버전 확인**

   ```bash
   node --version
   ```

2. **PNPM 설치**
   - **PNPM 설치 (Node.js 16.13+ 필요)**

   ```bash
   npm install -g pnpm
   ```

   - **PNPM 버전 확인**

   ```bash
   pnpm --version
   ```

3. **Git 설치 및 설정**
   - **Git 설치 (Ubuntu/Debian)**

   ```bash
   sudo apt-get install git
   ```

   - **Git 설정 (필수)**

   ```bash
   # 대소문자 구분 설정 (모든 개발자가 실행해야 함)
   git config core.ignorecase false

   # 줄바꿈 문자 설정 (운영체제별로 다름)
   # Windows 사용자
   git config --global core.autocrlf true

   # Mac/Linux 사용자
   git config --global core.autocrlf input
   ```

### 설치 방법

1. **저장소 클론**

   ```bash
   git clone <repository-url>
   cd shc-poc-fe
   ```

2. **의존성 설치**

   ```bash
   # PNPM을 사용하여 의존성 설치
   pnpm install
   ```

3. **스마트 컨트랙트 설정 (선택사항)**

   ```bash
   cd packages/contracts
   cp .env.example .env
   # .env 파일 편집하여 네트워크 설정
   ```

4. **개발 서버 실행**

   ```bash
   # 투자자 앱 개발 서버
   pnpm dev
   # 또는
   pnpm dev:investor

   # 관리자 앱 개발 서버
   pnpm dev:admin

   # 신탁 앱 개발 서버
   pnpm dev:trust

   # 커스터디언 앱 개발 서버
   pnpm dev:custodian
   ```

## 🛠️ 개발 도구

### 스크립트 명령어

```bash
# 개발
pnpm dev:investor         # 투자자 앱 개발 서버
pnpm dev:admin            # 관리자 앱 개발 서버
pnpm dev:trust            # 신탁 앱 개발 서버
pnpm dev:custodian        # 커스터디언 앱 개발 서버

# 빌드
pnpm build:investor       # 투자자 앱 빌드
pnpm build:admin          # 관리자 앱 빌드
pnpm build:trust          # 신탁 앱 빌드
pnpm build:custodian      # 커스터디언 앱 빌드

# 스마트 컨트랙트
cd packages/contracts
npm test                  # 컨트랙트 테스트 실행
npm run deploy            # 컨트랙트 배포
npm run verify            # 컨트랙트 검증

# 코드 품질
pnpm lint                 # ESLint 검사 및 수정
pnpm format               # Prettier 포맷팅
pnpm type-check           # TypeScript 타입 검사
```

## 🧪 테스트

### 스마트 컨트랙트 테스트

```bash
cd packages/contracts
npm test
```

**테스트 커버리지:**
- AssetValuation: 상각후원가법 자산 평가 (30 tests)
- InterestDistribution: 이자 배분 및 상환 처리 (45 tests)
- P2PTrading: 기관투자자 간 P2P 거래 (30 tests)
- SecurityToken: 증권형 토큰 발행 및 관리 (35 tests)
- 통합 시나리오: 전체 프로세스 검증 (45 tests)

**총 185개 테스트 통과**

## 🎯 비즈니스 시나리오

### 시나리오 1-7: 전체 프로세스

1. **[S1] 초기 발행**: Tranche A/B 생성 및 투자자에게 발행
2. **[S2] 최초 이자 지급**: 3개월 후불 방식 이자 지급
3. **[S3] 한도대출 추가 실행**: Tranche A 증액 (750억)
4. **[S4] 증액된 원금 이자 지급**: 1,250억 기준 이자 계산
5. **[S5] 부분 상환**: 원금의 80% 상환
6. **[S6] 최종 상환**: 잔여 20% 상환 및 만기 처리
7. **[S7] P2P 거래**: 보유기간별 이자 정산 (일할 계산)

자세한 내용은 [SCENARIO_REVIEW.md](./packages/contracts/SCENARIO_REVIEW.md) 참조

## 📊 아키텍처

### 시스템 구성

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   투자자 앱      │     │   관리자 앱      │     │   신탁 앱        │
│   (investor)    │     │    (admin)      │     │    (trust)      │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │   스마트 컨트랙트        │
                    │  (Ethereum Network)     │
                    ├─────────────────────────┤
                    │  SecurityToken.sol      │
                    │  InterestDistribution   │
                    │  AssetValuation.sol     │
                    │  P2PTrading.sol         │
                    └─────────────────────────┘
```

### 기술 스택

| Category    | Name/Version                                                                                                                             | Description                                         | License    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ---------- |
| 핵심 기술   | [![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)                           | 사용자 인터페이스 구축을 위한 JavaScript 라이브러리 | MIT        |
|             | [![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-339933?logo=node.js&logoColor=white)](https://nodejs.org/)                | JavaScript 런타임 환경                              | MIT        |
|             | [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  | JavaScript의 타입이 있는 상위 집합                  | Apache-2.0 |
| 빌드 도구   | [![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)                               | 차세대 프론트엔드 빌드 도구                         | MIT        |
|             | [![PNPM](https://img.shields.io/badge/PNPM-%3E%3D8.0.0-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)                             | 빠르고 효율적인 패키지 매니저                       | MIT        |
| UI/스타일링 | [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)     | 유틸리티 우선 CSS 프레임워크                        | MIT        |
| 블록체인    | [![Solidity](https://img.shields.io/badge/Solidity-0.8.20-363636?logo=solidity&logoColor=white)](https://soliditylang.org/)             | 스마트 컨트랙트 개발 언어                           | GPL-3.0    |
|             | [![Hardhat](https://img.shields.io/badge/Hardhat-2.22.19-FFF04D?logo=hardhat&logoColor=black)](https://hardhat.org/)                    | 이더리움 개발 환경                                  | MIT        |
|             | [![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-5.2.0-4E5EE4?logo=openzeppelin&logoColor=white)](https://openzeppelin.com/)  | 스마트 컨트랙트 보안 라이브러리                     | MIT        |
|             | [![Ethers.js](https://img.shields.io/badge/Ethers.js-6.13.4-2535A0?logo=ethereum&logoColor=white)](https://docs.ethers.org/)            | 블록체인 인터랙션 라이브러리                        | MIT        |
| 개발 도구   | [![ESLint](https://img.shields.io/badge/ESLint-9.32.0-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)                         | JavaScript 린터                                     | MIT        |
|             | [![Prettier](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?logo=prettier&logoColor=black)](https://prettier.io/)                   | 코드 포맷터                                         | MIT        |
| 테스트      | [![Chai](https://img.shields.io/badge/Chai-5.1.2-A30701?logo=chai&logoColor=white)](https://chaijs.com/)                                | 테스트 프레임워크                                   | MIT        |

## 🔐 보안 고려사항

- ✅ OpenZeppelin 검증된 컨트랙트 라이브러리 사용
- ✅ KYC/AML 인증 시스템
- ✅ 역할 기반 접근 제어 (RBAC)
- ✅ 락업 기간 및 양도 제한
- ✅ 재진입 공격 방지
- ✅ 정수 오버플로우 방지 (Solidity 0.8+)

## 📖 추가 문서

- [스마트 컨트랙트 상세 가이드](./packages/contracts/README.md)
- [프로젝트 구조](./packages/contracts/PROJECT_STRUCTURE.md)
- [시나리오 리뷰](./packages/contracts/SCENARIO_REVIEW.md)

## 📝 라이선스

이 프로젝트는 PoC(Proof of Concept) 목적으로 개발되었습니다.

---

**Note:** 이 프로젝트는 디지털 월렛 소스를 재활용하여 개발되었으며, PF 토큰 증권화 PoC를 위한 화면과 컨트랙트로 구성되어 있습니다.
