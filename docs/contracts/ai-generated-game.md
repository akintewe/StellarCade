# ai-generated-game

## Public Methods

### `init`
Initialize the contract with the admin, AI model oracle address, and reward system address.

```rust
pub fn init(env: Env, admin: Address, model_oracle: Address, reward_contract: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `model_oracle` | `Address` |
| `reward_contract` | `Address` |

#### Return Type

`Result<(), Error>`

### `create_ai_game`
Setup a new AI-generated game layout.

```rust
pub fn create_ai_game(env: Env, admin: Address, game_id: u64, config_hash: BytesN<32>) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `game_id` | `u64` |
| `config_hash` | `BytesN<32>` |

#### Return Type

`Result<(), Error>`

### `submit_ai_move`
Player submitting a move towards an active AI game.

```rust
pub fn submit_ai_move(env: Env, player: Address, game_id: u64, move_payload: String) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `player` | `Address` |
| `game_id` | `u64` |
| `move_payload` | `String` |

#### Return Type

`Result<(), Error>`

### `resolve_ai_game`
Oracle node resolves the game securely mapping outputs and winners systematically.

```rust
pub fn resolve_ai_game(env: Env, oracle: Address, game_id: u64, result_payload: String, winner: Option<Address>) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `oracle` | `Address` |
| `game_id` | `u64` |
| `result_payload` | `String` |
| `winner` | `Option<Address>` |

#### Return Type

`Result<(), Error>`

### `claim_ai_reward`
Authorizes player to claim rewards mapped after oracle validation finishes.

```rust
pub fn claim_ai_reward(env: Env, player: Address, game_id: u64) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `player` | `Address` |
| `game_id` | `u64` |

#### Return Type

`Result<(), Error>`

