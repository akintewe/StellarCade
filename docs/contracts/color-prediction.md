# color-prediction

Metadata and accumulated state for one prediction game.

## Public Methods

### `init`
Initialize the contract. May only be called once.  Stores admin, rng_contract, prize_pool_contract, and balance_contract in instance storage. Subsequent calls return `AlreadyInitialized`.

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
Place a color prediction for an open game.  `color` must be one of COLOR_RED (0), COLOR_GREEN (1), COLOR_BLUE (2), COLOR_YELLOW (3). `wager` must be positive. Each player may predict exactly once per game. The game is created implicitly on the first prediction for a given `game_id`.  Emits `PredictionPlaced`.

```rust
pub fn place_prediction(env: Env, player: Address, color: u32, wager: i128, game_id: u64) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `player` | `Address` |
| `color` | `u32` |
| `wager` | `i128` |
| `game_id` | `u64` |

#### Return Type

`Result<(), Error>`

### `resolve_prediction`
Resolve a game by declaring the winning color. Admin only.  `winning_color` must be a valid color value (0–3). Iterates all player predictions (bounded by `MAX_PLAYERS_PER_GAME`) to count winners and transitions the game to `Resolved`.  If there are no winners, the entire pot remains in the contract.  Emits `PredictionResolved`.

```rust
pub fn resolve_prediction(env: Env, game_id: u64, winning_color: u32) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `game_id` | `u64` |
| `winning_color` | `u32` |

#### Return Type

`Result<(), Error>`

### `get_game`
Return the game state, or `None` if the game does not exist.

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

