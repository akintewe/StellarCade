# Identity Registry

## Overview
`identity-registry` stores a public player profile and exposes two read-only accessors for frontend completion and verification UX.

## Public Interface
- `init(admin)`
- `register_identity(identity, display_name, country_code, bio, avatar_uri)`
- `set_verification_state(identity, email_verified, phone_verified, government_id_verified, wallet_linked)`
- `profile_completeness(identity)`
- `verification_summary(identity)`

## Accessor Notes
- `profile_completeness` returns named fields instead of tuples.
- The completeness score uses four profile fields: `display_name`, `country_code`, `bio`, and `avatar_uri`.
- Each populated field contributes `2500` basis points to `score_bps`.
- Unknown identities return an explicit empty-state payload with `exists=false`.

## Verification Summary
- Reports completed dimensions for email, phone, government ID, and wallet link.
- Includes a `pending_requirements` list for direct frontend badge and CTA rendering.
