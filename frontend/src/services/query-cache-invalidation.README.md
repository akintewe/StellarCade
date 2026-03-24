# Query Cache & Invalidation (frontend)

## Purpose

Provide a production-grade, UI-agnostic query/cache layer for the StellarCade frontend.

## Canonical Query Keys

Defined in `src/services/query-cache-invalidation.ts` via `QueryKeys`.

Namespaces:

- balances
- games
- rewards
- profile

## Invalidation Rules

`QueryCacheInvalidator.applyRules()` invalidates keys based on tx/mutation outcomes.

Current defaults:

- address-affecting txs invalidate `balances.account(address)`
- coinFlip txs invalidate game and recent-game keys
- achievementBadge txs invalidate rewards/profile keys

## Error Handling

- Fetch operations return `{ data } | { error }`.
- Preconditions are validated with `validatePreconditions()` and surfaced as `QueryCacheInvalidationError`.

## Integration

This module is UI-agnostic and can be integrated from any application layer.
