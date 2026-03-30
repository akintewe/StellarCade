# tournament-system

Tournament consumers benefit from a direct view of remaining match counts and
each participant's elimination-path context without reconstructing the full
bracket off-chain.

## Missing-entity behavior

- `remaining_match_count` returns `Err(TournamentNotFound)` when the tournament
  does not exist.
- `elimination_path` returns `Err(TournamentNotFound)` when the tournament does
  not exist, and `Err(PlayerNotJoined)` when the participant never joined.

## Public Methods

### `init`
Initialize the tournament system. May only be called once.

```rust
pub fn init(env: Env, admin: Address, fee_contract: Address, reward_contract: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `fee_contract` | `Address` |
| `reward_contract` | `Address` |

#### Return Type

`Result<(), Error>`

### `create_tournament`
Create a new tournament. Admin only.

```rust
pub fn create_tournament(env: Env, admin: Address, id: u64, rules_hash: BytesN<32>, entry_fee: i128) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `id` | `u64` |
| `rules_hash` | `BytesN<32>` |
| `entry_fee` | `i128` |

#### Return Type

`Result<(), Error>`

### `join_tournament`
Join an active tournament. Player pays entry fee.

```rust
pub fn join_tournament(env: Env, player: Address, id: u64) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `player` | `Address` |
| `id` | `u64` |

#### Return Type

`Result<(), Error>`

### `record_result`
Record a score for a player in a tournament. Admin/Authorized only.

```rust
pub fn record_result(env: Env, admin: Address, id: u64, player: Address, score: u64) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `id` | `u64` |
| `player` | `Address` |
| `score` | `u64` |

#### Return Type

`Result<(), Error>`

### `finalize_tournament`
Finalize a tournament. Admin only. Prevents further joins or result recording.

```rust
pub fn finalize_tournament(env: Env, admin: Address, id: u64) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `id` | `u64` |

#### Return Type

`Result<(), Error>`

### `get_tournament`
```rust
pub fn get_tournament(env: Env, id: u64) -> Option<TournamentData>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `id` | `u64` |

#### Return Type

`Option<TournamentData>`

### `get_score`
```rust
pub fn get_score(env: Env, id: u64, player: Address) -> Option<u64>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `id` | `u64` |
| `player` | `Address` |

#### Return Type

`Option<u64>`

### `is_joined`
```rust
pub fn is_joined(env: Env, id: u64, player: Address) -> bool
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `id` | `u64` |
| `player` | `Address` |

#### Return Type

`bool`

### `get_bracket_summary`
```rust
pub fn get_bracket_summary(env: Env, id: u64) -> Result<BracketSummary, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `id` | `u64` |

#### Return Type

`Result<BracketSummary, Error>`

### `get_next_matches`
```rust
pub fn get_next_matches(env: Env, id: u64) -> Result<soroban_sdk::Vec<Matchup>, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `id` | `u64` |

#### Return Type

`Result<soroban_sdk::Vec<Matchup>, Error>`

### `advance_round`
```rust
pub fn advance_round(env: Env, admin: Address, id: u64) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `id` | `u64` |

#### Return Type

`Result<(), Error>`


### `remaining_match_count`
Returns the number of matches remaining in the current round.
Each match pairs two participants; an odd participant receives a bye and counts
as one match (ceiling division). This accessor is deterministic and does not
require the caller to reconstruct the bracket.

```rust
pub fn remaining_match_count(env: Env, id: u64) -> Result<u32, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `id` | `u64` |

#### Return Type

`Result<u32, Error>` — count of matches, or `Err(TournamentNotFound)`

### `elimination_path`
Returns a compact summary of a participant's journey through the bracket.
Walks every round from 1 to the current round, checking whether the participant
appeared in `RoundParticipants` for each. The result is UI-friendly and does
not require reconstructing the full bracket off-chain.

```rust
pub fn elimination_path(env: Env, id: u64, player: Address) -> Result<EliminationPath, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `id` | `u64` |
| `player` | `Address` |

#### Return Type

`Result<EliminationPath, Error>`

| Field | Type | Description |
|-------|------|-------------|
| `rounds_played` | `u32` | Total rounds the participant appeared in |
| `last_round_active` | `u32` | Highest round the participant was still active |
| `is_active` | `bool` | `true` when participant is in the current round |
