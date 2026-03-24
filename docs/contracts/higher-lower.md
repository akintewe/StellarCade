# higher-lower

## Public Methods

### `init`
```rust
pub fn init(env: Env, admin: Address, rng_contract: Address, prize_pool_contract: Address, balance_contract: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `rng_contract` | `Address` |
| `prize_pool_contract` | `Address` |
| `balance_contract` | `Address` |

#### Return Type

`Result<(), Error>`

### `place_prediction`
```rust
pub fn place_prediction(env: Env, player: Address, prediction: u32, wager: i128, game_id: u64) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `player` | `Address` |
| `prediction` | `u32` |
| `wager` | `i128` |
| `game_id` | `u64` |

#### Return Type

`Result<(), Error>`

### `resolve_game`
```rust
pub fn resolve_game(env: Env, game_id: u64) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `game_id` | `u64` |

#### Return Type

`Result<(), Error>`

### `get_game`
```rust
pub fn get_game(env: Env, game_id: u64) -> Option<GameData>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `game_id` | `u64` |

#### Return Type

`Option<GameData>`

### `set_result`
```rust
pub fn set_result(env: Env, game_id: u64, result: u32)
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `game_id` | `u64` |
| `result` | `u32` |

### `is_ready`
```rust
pub fn is_ready(env: Env, game_id: u64) -> bool
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `game_id` | `u64` |

#### Return Type

`bool`

### `get_result`
```rust
pub fn get_result(env: Env, game_id: u64) -> u32
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `game_id` | `u64` |

#### Return Type

`u32`

