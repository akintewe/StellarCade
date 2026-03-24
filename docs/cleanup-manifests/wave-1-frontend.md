# Wave 1 Frontend Cleanup Manifest
Generated: 2026-03-14

## Deleted
- `frontend/src/hooks/useAchievementBadge.ts` (legacy top-level hook, no runtime consumers)
- `frontend/src/hooks/useGlobalState.ts` (legacy top-level hook, no runtime consumers)
- `frontend/src/hooks/useIdempotency.ts` (legacy hook-only surface; tied docs/tests removed)
- `frontend/src/hooks/useNetworkGuardMiddleware.ts` (legacy top-level hook, no runtime consumers)
- `frontend/src/hooks/usePrizePool.ts` (legacy top-level hook, no runtime consumers)
- `frontend/src/hooks/useQueryCache.ts` (legacy top-level hook-only integration layer)
- `frontend/src/hooks/useSorobanClient.tsx` (legacy provider/hook used only by removed legacy hooks)
- `frontend/src/hooks/useTransactionOrchestrator.ts` (legacy hook-only surface; tied tests removed)
- `frontend/src/hooks/useWalletSession.ts` (legacy top-level hook, no runtime consumers)
- `frontend/tests/integration/idempotency-integration.test.ts` (only covered removed legacy hook)
- `frontend/tests/integration/transaction-orchestrator.integration.test.ts` (only covered removed legacy hook)

## Moved
- None.

## Kept
- `frontend/src/hooks/v1/*` as canonical hook namespace.
- `frontend/src/utils/v1/*` as canonical utility namespace.
- In-source docs tied to live modules were retained and updated.

## Updated
- `frontend/src/hooks/v1/index.ts` (removed cross-layer utility re-exports)
- `frontend/src/utils/v1/index.ts` (removed duplicate export)
- `frontend/src/services/idempotency-transaction-handling.README.md` (removed deleted-hook references)
- `frontend/src/services/transaction-orchestrator.README.md` (removed deleted-hook references)
- `frontend/src/services/query-cache-invalidation.README.md` (removed deleted-hook references)

## Reference Proof
Post-change path-reference scan (`rg`) counts:
- `src/hooks/useAchievementBadge.ts`: 0
- `src/hooks/useGlobalState.ts`: 0
- `src/hooks/useIdempotency.ts`: 0
- `src/hooks/useNetworkGuardMiddleware.ts`: 0
- `src/hooks/usePrizePool.ts`: 0
- `src/hooks/useQueryCache.ts`: 0
- `src/hooks/useSorobanClient.tsx`: 0
- `src/hooks/useTransactionOrchestrator.ts`: 0
- `src/hooks/useWalletSession.ts`: 0
- `tests/integration/idempotency-integration.test.ts`: 0
- `tests/integration/transaction-orchestrator.integration.test.ts`: 0

## Ambiguous / Deferred
- No additional safe frontend deletions were applied where references or ownership intent were unclear.
