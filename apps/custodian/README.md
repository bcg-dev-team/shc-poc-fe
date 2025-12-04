# SHC Custodian Bank App

대리은행용 웹 애플리케이션입니다.

## 개발 시작

```bash
# 루트에서 실행
pnpm --filter @shc/custodian dev

# 또는 apps/custodian에서 직접 실행
cd apps/custodian
pnpm dev
```

개발 서버가 시작되면 `http://localhost:3400`에서 확인할 수 있습니다.

## 빌드

```bash
pnpm --filter @shc/custodian build
```

## 참고

- 추후 `apps/trust` 앱에서 분리될 예정입니다.
- 현재는 기본 구조만 제공됩니다.

