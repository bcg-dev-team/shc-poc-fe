# 신한캐피탈 PF 토큰화 시나리오 검토 결과

## 개요

신한캐피탈 PF 증권형 토큰 컨트랙트를 상세 설계서의 시나리오 S1-S7에 대해 검토한 결과입니다.

검토 일자: 2025-12-17
대상 컨트랙트: SecurityToken.sol, InterestDistribution.sol, P2PTrading.sol, AssetValuation.sol
테스트 파일: test/ScenarioS1-S7.test.js

---

## 시나리오별 검토 결과

### ✅ S1: 대출 실행 및 토큰 발행 (6:4 비율 배분)

**시나리오 요구사항:**
- Tr-A: 500억원 (6% 이자율)
- Tr-B: 400억원 (12% 이자율)
- 투자자 비율: A(60%), B(40%) 자동 배분

**현재 구현:**
```solidity
// SecurityToken.sol:109
function issueByTranche(bytes32 _trancheId, address _to, uint256 _amount)
```

**문제점:**
1. ⚠️ **수동 배분 필요**: `issueByTranche()`는 단일 주소로만 발행 가능
2. ⚠️ **비율 추적 불가**: 투자자 할당 비율(6:4)을 저장/관리하는 메커니즘 없음
3. ⚠️ **자동 배분 미지원**: 여러 투자자에게 비율대로 자동 배분 불가

**현재 동작:**
- 발행자가 수동으로 각 투자자에게 개별 발행 필요
- Investor A: `issueByTranche(trancheA, investorA, 300억)`
- Investor B: `issueByTranche(trancheA, investorB, 200억)`

**영향도:** MEDIUM
**기능 동작:** ⚠️ 수동으로는 가능하나 자동화 안 됨

---

### ✅ S2: 최초 이자 지급 (3개월 후불)

**시나리오 요구사항:**
- 3개월 후불 방식 이자 지급
- Tr-A: 6%, Tr-B: 12% 차등 이자율

**현재 구현:**
```solidity
// InterestDistribution.sol:48
uint256 public constant PAYMENT_INTERVAL = 90 days; // 3개월

// InterestDistribution.sol:124-134
function _calculateInterest(uint256 _principal, uint256 _rate, uint256 _period)
    internal pure returns (uint256) {
    uint256 yearlyInterest = (_principal * _rate) / BASIS_POINTS;
    uint256 periodInterest = (yearlyInterest * _period) / 365 days;
    return periodInterest;
}
```

**검증 결과:**
- ✅ 3개월(90일) 주기 지급 스케줄 자동 생성
- ✅ 이자 계산 공식 정확: `(원금 × 이자율 × 기간) / (10000 × 365)`
- ✅ Tranche별 차등 이자율 적용

**테스트 결과 (test/ScenarioS1-S7.test.js):**
```
✔ S2-1. 3개월 후 첫 번째 이자 지급
✔ S2-2. Tranche B도 12% 이자율로 지급
```

**영향도:** N/A
**기능 동작:** ✅ 정상 동작

---

### ❌ S3: 한도대출 추가 실행 (Tr-A만, 6:4 비율 자동 배분)

**시나리오 요구사항:**
- Tranche A (Senior)에 대해서만 추가 발행
- 기존 투자자 비율(6:4)에 따라 **자동 배분**
- "통합증량 방식" 적용

**현재 구현:**
```solidity
// SecurityToken.sol:126-135
function additionalIssuance(
    bytes32 _trancheId,
    address _to,      // ⚠️ 단일 주소만 지정
    uint256 _amount
) external onlyIssuer {
    require(tranches[_trancheId].trancheType == TrancheType.SENIOR, "Only Senior tranche");
    issueByTranche(_trancheId, _to, _amount);
}
```

**문제점:**
1. ❌ **자동 배분 미구현**: `_to` 파라미터가 단일 주소만 받음
2. ❌ **비율 정보 없음**: 기존 투자자 비율을 조회/저장하는 기능 없음
3. ❌ **수동 다중 호출 필요**: 각 투자자별로 개별 호출 필요

**예상 동작 vs 실제 동작:**

| 구분 | 예상 (시나리오) | 실제 (현재) |
|------|----------------|-------------|
| 추가 발행 100억 | `additionalIssuance(trancheA, 100억)` | `additionalIssuance(trancheA, investorA, 60억)`<br>`additionalIssuance(trancheA, investorB, 40억)` |
| 자동 배분 | ✅ 6:4 비율 자동 적용 | ❌ 수동으로 각각 호출 |

**권장 개선사항:**
```solidity
// 제안: 투자자 비율 저장 구조
struct AllocationRatio {
    address[] investors;
    uint256[] ratios; // basis points (6000, 4000)
}
mapping(bytes32 => AllocationRatio) public trancheAllocations;

// 제안: 자동 배분 함수
function additionalIssuance(
    bytes32 _trancheId,
    uint256 _totalAmount
) external onlyIssuer {
    require(tranches[_trancheId].trancheType == TrancheType.SENIOR);

    AllocationRatio memory allocation = trancheAllocations[_trancheId];
    for (uint i = 0; i < allocation.investors.length; i++) {
        uint256 amount = (_totalAmount * allocation.ratios[i]) / 10000;
        issueByTranche(_trancheId, allocation.investors[i], amount);
    }
}
```

**영향도:** HIGH
**기능 동작:** ⚠️ 수동 처리로 우회 가능하나 시나리오와 불일치

---

### ❌ S4: 증액된 원금에 대한 이자 지급

**시나리오 요구사항:**
- S3 추가 발행 후 원금: 500억 → 600억
- 이후 이자는 **증액된 600억 기준**으로 계산

**현재 구현:**
```solidity
// InterestDistribution.sol:70-91
function createRedemptionSchedule(
    bytes32 _trancheId,
    uint256 _principalAmount,  // ⚠️ 초기 설정만 가능
    ...
) external onlyTrustee {
    schedules[_trancheId] = RedemptionSchedule({
        principalAmount: _principalAmount,
        ...
    });
}
```

**문제점:**
1. ❌ **원금 업데이트 불가**: `createRedemptionSchedule()`은 최초 1회만 호출
2. ❌ **증액 반영 안 됨**: S3 추가 발행 시 `principalAmount` 업데이트 기능 없음
3. ❌ **이자 과소 계산**: 증액 후에도 초기 원금(500억) 기준으로 이자 계산

**실제 테스트 결과:**
```
S4-1. 증액된 원금(600억)으로 이자 계산되어야 함
Current principal in schedule: 50000000000.0  (500억 - 잘못됨)
Expected principal:            60000000000.0  (600억 - 기대값)
```

**영향도:** CRITICAL
**재무 영향:**
- 추가 발행 100억원에 대한 이자 미지급
- 연 이자 손실: 100억 × 6% = 6억원

**권장 개선사항:**
```solidity
// 제안: 원금 업데이트 함수 추가
function updatePrincipalAmount(
    bytes32 _trancheId,
    uint256 _newPrincipalAmount
) external onlyTrustee {
    require(schedules[_trancheId].isActive, "Schedule not active");

    uint256 oldPrincipal = schedules[_trancheId].principalAmount;
    schedules[_trancheId].principalAmount = _newPrincipalAmount;

    // 향후 이자 스케줄 재계산
    _rescheduleInterestPayments(_trancheId);

    emit PrincipalUpdated(_trancheId, oldPrincipal, _newPrincipalAmount);
}
```

**기능 동작:** ❌ 미구현

---

### ✅ S5: 부분 상환 (80%)

**시나리오 요구사항:**
- 원금의 80% 부분 상환
- 토큰 비례 소각

**현재 구현:**
```solidity
// InterestDistribution.sol:156-167
function partialRedemption(bytes32 _trancheId, uint256 _percentage)
    external onlyTrustee {
    uint256 redemptionAmount = (schedule.principalAmount * _percentage) / 100;
    schedule.principalAmount -= redemptionAmount;
    emit PartialRedemption(_trancheId, redemptionAmount, _percentage);
}

// SecurityToken.sol:157-169
function redeemByTranche(bytes32 _trancheId, address _from, uint256 _amount)
    external onlyController {
    balanceOfByTranche[_trancheId][_from] -= _amount;
    tranches[_trancheId].totalSupply -= _amount;
}
```

**검증 결과:**
- ✅ 원금 비율 감소 정상 동작
- ✅ 토큰 소각 정상 동작

**테스트 결과:**
```
✔ S5-1. 원금의 80% 부분 상환
✔ S5-2. 토큰도 비례하여 소각되어야 함
```

**영향도:** N/A
**기능 동작:** ✅ 정상 동작

---

### ✅ S6: 최종 상환 (만기)

**시나리오 요구사항:**
- 만기일 도래 후 잔여 20% 상환
- 프로젝트 종료

**현재 구현:**
```solidity
// InterestDistribution.sol:172-182
function finalRedemption(bytes32 _trancheId) external onlyTrustee {
    require(block.timestamp >= schedule.maturityDate, "Not yet matured");

    uint256 finalAmount = schedule.principalAmount;
    schedule.principalAmount = 0;
    schedule.isActive = false;

    emit FinalRedemption(_trancheId, finalAmount);
}
```

**검증 결과:**
- ✅ 만기일 체크 정상
- ✅ 스케줄 종료 처리 정상

**테스트 결과:**
```
✔ S6-1. 만기 도래 후 최종 상환
```

**영향도:** N/A
**기능 동작:** ✅ 정상 동작

---

### ❌ S7: P2P 거래 및 보유기간별 이자 정산

**시나리오 요구사항:**
- P2P 거래 시 **실제 보유기간**에 따른 일할 계산 이자 정산
- 예시: 61일 보유 시 → `30억 × 6% × (61/365) = 0.30억원`

**현재 구현:**
```solidity
// P2PTrading.sol:197-204
function _calculateHoldingDays(bytes32 _trancheId, address _holder)
    internal view returns (uint256) {
    // 실제로는 InterestDistribution 컨트랙트에서 보유 시작일을 가져와야 함
    // 여기서는 개념적으로만 구현

    return 90; // 예시: 3개월 보유 ⚠️ HARDCODED
}

// P2PTrading.sol:209-233
function _calculateSettlementInterest(
    bytes32 _trancheId,
    address _seller,
    uint256 _amount,
    uint256 _holdingDays
) internal view returns (uint256) {
    // 일할 계산
    // (원금 * 연이자율 * 보유일수) / (10000 * 365)
    uint256 dailyInterest = (_amount * interestRate * _holdingDays) / (10000 * 365);
    return dailyInterest;
}
```

**문제점:**
1. ❌ **하드코딩된 보유기간**: `_calculateHoldingDays()`가 항상 90일 반환
2. ❌ **타임스탬프 추적 없음**: 토큰 취득 시점 기록 안 됨
3. ❌ **과다 이자 지급**: 실제 보유기간과 무관하게 항상 90일 기준 계산

**실제 테스트 결과 (61일 보유 시나리오):**
```
Holding days (should be 61): 90                          ❌ 잘못됨
Settlement interest:         44,383,561원 (0.44억원)    ❌ 90일 기준
Expected interest:           30,082,191원 (0.30억원)    ✅ 61일 기준
Current interest:            44,383,561원 (0.44억원)    ❌ 과다 지급
```

**과다 지급률:**
```
(0.44억 - 0.30억) / 0.30억 = 47% 초과 지급
```

**영향도:** CRITICAL
**재무 영향:**
- 거래마다 보유기간 차이만큼 과다/과소 이자 정산
- 61일 보유자가 90일분 이자 수령 (47% 과다)
- 30일 보유자도 90일분 이자 수령 (200% 과다)

**권장 개선사항:**

1. **타임스탬프 추적 구조 추가:**
```solidity
// SecurityToken.sol에 추가
struct TokenHolding {
    uint256 acquisitionDate;  // 토큰 취득일
    uint256 lastSettlementDate; // 마지막 이자 정산일
}
mapping(bytes32 => mapping(address => TokenHolding)) public holdings;

// 토큰 발행/이전 시 타임스탬프 기록
function issueByTranche(...) {
    holdings[_trancheId][_to].acquisitionDate = block.timestamp;
    holdings[_trancheId][_to].lastSettlementDate = block.timestamp;
}
```

2. **실제 보유일수 계산:**
```solidity
// P2PTrading.sol 수정
function _calculateHoldingDays(bytes32 _trancheId, address _holder)
    internal view returns (uint256) {
    TokenHolding memory holding = securityToken.holdings(_trancheId, _holder);

    // 마지막 정산일부터 현재까지의 일수
    uint256 holdingDays = (block.timestamp - holding.lastSettlementDate) / 1 days;

    return holdingDays;
}
```

3. **InterestDistribution의 holdingHistory 활용:**
```solidity
// InterestDistribution.sol에 이미 구조는 있으나 사용 안 함
struct HoldingPeriod {
    address holder;
    uint256 startDate;
    uint256 endDate;
    uint256 amount;
}
mapping(bytes32 => mapping(address => HoldingPeriod[])) public holdingHistory;

// P2PTrading에서 이 정보를 조회하도록 수정
function _calculateHoldingDays(...) internal view returns (uint256) {
    HoldingPeriod[] memory periods = interestDistribution.holdingHistory(_trancheId, _holder);
    // 최신 기간 조회하여 실제 보유일수 계산
}
```

**기능 동작:** ❌ 미구현 (개념 증명 수준)

---

## 종합 요약

### 정상 동작 항목 ✅
- S2: 3개월 후불 이자 지급
- S5: 80% 부분 상환
- S6: 최종 상환 (만기)

### 수동 처리 가능 ⚠️
- S1: 토큰 발행 (6:4 자동 배분 없음)
- S3: 추가 발행 (자동 배분 없음)

### 미구현/오류 ❌
- S4: 증액된 원금 반영 안 됨 (CRITICAL - 이자 과소 계산)
- S7: 보유기간 하드코딩 (CRITICAL - 이자 오정산)

---

## 우선순위별 개선 권장사항

### P0 (Critical - 재무 영향 직접적)

#### 1. S4: 원금 업데이트 기능 추가
**파일:** `src/InterestDistribution.sol`

**추가 필요 함수:**
```solidity
function updatePrincipalAmount(bytes32 _trancheId, uint256 _newPrincipalAmount) external onlyTrustee
function _rescheduleInterestPayments(bytes32 _trancheId) internal
```

**영향:** 추가 발행 시 이자 계산 오류 방지

#### 2. S7: 실제 보유기간 계산
**파일:** `src/P2PTrading.sol`, `src/SecurityToken.sol`

**수정 필요:**
- `SecurityToken`: 토큰 취득 타임스탬프 추적 구조 추가
- `P2PTrading._calculateHoldingDays()`: 하드코딩(90일) 제거, 실제 타임스탬프 기반 계산

**영향:** P2P 거래 시 이자 정산 정확성 확보

---

### P1 (High - 시나리오 자동화)

#### 3. S1/S3: 비율 기반 자동 배분
**파일:** `src/SecurityToken.sol`

**추가 필요:**
- `AllocationRatio` 구조체
- `setAllocationRatio()` 함수
- `additionalIssuance()` 함수 시그니처 변경 (단일 주소 → 자동 배분)

**영향:** 수동 처리 제거, 운영 효율성 향상

---

### P2 (Medium - 아키텍처 개선)

#### 4. 컨트랙트 간 연동 강화
- SecurityToken ↔ InterestDistribution 양방향 연동
- P2PTrading에서 holdingHistory 실제 활용
- 이벤트 기반 상태 동기화

---

## 테스트 커버리지

### 신규 테스트 파일
- `test/ScenarioS1-S7.test.js`: 전체 시나리오 통합 테스트 (12 tests)

### 테스트 실행 결과
```bash
$ pnpm test test/ScenarioS1-S7.test.js

  Scenario S1-S7: 신한캐피탈 PF 토큰화 전체 시나리오
    S1: ✔ 3 passing
    S2: ✔ 2 passing
    S3: ✔ 2 passing
    S4: ✔ 1 passing (원금 불일치 확인됨)
    S5: ✔ 2 passing
    S6: ✔ 1 passing
    S7: ✔ 1 passing (보유기간 불일치 확인됨)

  12 passing (668ms)
```

### 기존 테스트 현황
```bash
$ pnpm test

  173 passing
  0 failing
```

---

## 파일별 수정 필요 사항

### SecurityToken.sol
- [ ] 투자자 할당 비율 저장 구조 추가
- [ ] 토큰 취득 타임스탬프 추적
- [ ] `additionalIssuance()` 자동 배분 로직

### InterestDistribution.sol
- [ ] `updatePrincipalAmount()` 함수 추가
- [ ] 이자 스케줄 재계산 로직
- [ ] holdingHistory 실제 활용 (현재 미사용)

### P2PTrading.sol
- [ ] `_calculateHoldingDays()` 실제 계산 로직
- [ ] SecurityToken과 연동하여 타임스탬프 조회

### AssetValuation.sol
- [ ] (현재 검토 대상 아님 - S1-S7 범위 외)

---

## 결론

현재 구현은 **핵심 기능은 동작**하나, **시나리오 S4, S7에서 재무적 정확성에 심각한 문제**가 있습니다.

**즉시 조치 필요:**
1. S4: 추가 발행 시 원금 업데이트 기능 구현
2. S7: P2P 거래 시 실제 보유기간 기반 이자 정산 구현

**권장 조치:**
1. S1/S3: 자동 배분 기능으로 운영 효율성 향상

**현재 상태로는 프로덕션 배포 불가**, 상기 P0 이슈 해결 후 재검토 필요.

---

## 참고 문서

- 상세 설계서: `03.신한캐피탈_PoC_상세설계서_20251130_v1.1.txt`
- 시나리오 테스트: `test/ScenarioS1-S7.test.js`
- README: `README.md`

검토자: Claude Code
검토 일자: 2025-12-17
