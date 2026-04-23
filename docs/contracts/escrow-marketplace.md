# Escrow Marketplace

## Overview
`escrow-marketplace` models marketplace-style escrows with read-only accessors that summarize escrow health and release readiness in one call.

## Public Interface
- `init(admin)`
- `create_escrow(buyer, seller, amount, expiry)`
- `raise_dispute(caller, escrow_id)`
- `release_escrow(caller, escrow_id)`
- `expire_escrow(escrow_id)`
- `escrow_status_snapshot(escrow_id)`
- `release_readiness(escrow_id)`

## Snapshot Accessor
- `escrow_status_snapshot` returns buyer/seller identifiers, expiry, dispute state, and a normalized `state`.
- Missing escrows return `exists=false` and `state=Missing`.

## Release Readiness
- `release_readiness` is read-only and does not perform settlement transitions.
- `ready=true` only when the escrow is locked, undisputed, and past expiry.
- `blocker` identifies the first reason a release cannot proceed: `missing`, `not_expired`, `disputed`, `released`, or `expired`.
