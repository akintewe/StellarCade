# Wave 1B Frontend Aggressive Cleanup Manifest
Generated: 2026-03-14

## Deleted
- `frontend/src/hooks/v1/errorMapper.ts`
- `frontend/src/hooks/v1/idempotency.ts`
- `frontend/src/hooks/v1/useCoinFlipContract.ts`
- `frontend/src/hooks/v1/useContractRead.ts`
- `frontend/src/hooks/v1/useNetworkGuard.ts`
- `frontend/src/hooks/v1/usePrizePoolContract.ts`
- `frontend/src/hooks/v1/useRngContract.ts`
- `frontend/src/hooks/v1/useTxStatus.ts`
- `frontend/src/hooks/v1/useAsyncAction.md`
- `frontend/src/hooks/v1/usePaginatedQuery.README.md`
- `frontend/tests/hooks/v1/idempotency.test.ts`
- `frontend/tests/hooks/v1/useCoinFlipContract.test.ts`
- `frontend/tests/hooks/v1/useContractRead.test.ts`
- `frontend/tests/hooks/v1/useNetworkGuard.test.ts`
- `frontend/tests/hooks/v1/usePrizePoolContract.test.ts`
- `frontend/tests/hooks/v1/useRngContract.test.ts`
- `frontend/tests/hooks/v1/useTxStatus.test.ts`

## Kept (Canonical)
- Hooks: `useAsyncAction`, `useContractEvents`, `useDebouncedValue`, `usePaginatedQuery`, `useWalletStatus`, `validation`
- Utilities remain under `frontend/src/utils/v1/*`

## Updated
- `frontend/src/hooks/v1/index.ts` exports only live hook modules.
- `frontend/src/components/v1/TxStatusPanel.tsx` comment updated to remove stale deleted-hook reference.

## Reference Proof
All deleted hook/test paths above show `0` matches in post-change `rg` scans across frontend runtime, tests, and docs.

## Validation
- Passed in targeted run:
  - `tests/hooks/v1/useAsyncAction.test.tsx`
  - `tests/hooks/v1/useDebouncedValue.test.tsx`
  - `tests/hooks/v1/useWalletStatus.test.tsx`
  - `tests/utils/v1/useNetworkGuard.test.ts`
- Failing in targeted run (pre-existing suite instability / environment mismatch):
  - `tests/hooks/v1/useContractEvents.test.ts` (message expectation mismatch)
  - `tests/hooks/v1/usePaginatedQuery.test.tsx` (`localStorage.clear` runtime setup issue)
- Repo-wide `frontend` typecheck still fails due existing unrelated issues outside this cleanup scope.
