# SHC Trust Manager App

신탁관리자용 웹 애플리케이션입니다.

## 개발 시작

```bash
# 루트에서 실행
pnpm --filter @shc/trust dev

# 또는 apps/trust에서 직접 실행
cd apps/trust
pnpm dev
```

개발 서버가 시작되면 `http://localhost:3300`에서 확인할 수 있습니다.

## 빌드

```bash
pnpm --filter @shc/trust build
```

## 참고

- 레퍼런스: `/Users/yg/Downloads/shc-trust`
- 추후 `apps/custodian` 앱과 분리될 예정입니다.

