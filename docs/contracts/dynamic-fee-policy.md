# dynamic-fee-policy

## Public Methods

### `init`
Initialise the contract.

```rust
pub fn init(env: Env, admin: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |

#### Return Type

`Result<(), Error>`

### `set_fee_rule`
Set a fee rule for a game.

```rust
pub fn set_fee_rule(env: Env, game_id: Symbol, rule_config: FeeRuleConfig) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `game_id` | `Symbol` |
| `rule_config` | `FeeRuleConfig` |

#### Return Type

`Result<(), Error>`

### `compute_fee`
Compute the fee for a given amount and context.

```rust
pub fn compute_fee(env: Env, game_id: Symbol, amount: i128, context: FeeContext) -> Result<i128, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `game_id` | `Symbol` |
| `amount` | `i128` |
| `context` | `FeeContext` |

#### Return Type

`Result<i128, Error>`

### `enable_rule`
Enable a fee rule.

```rust
pub fn enable_rule(env: Env, game_id: Symbol) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `game_id` | `Symbol` |

#### Return Type

`Result<(), Error>`

### `disable_rule`
Disable a fee rule.

```rust
pub fn disable_rule(env: Env, game_id: Symbol) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `game_id` | `Symbol` |

#### Return Type

`Result<(), Error>`

### `fee_rule_state`
Query the state of a fee rule.

```rust
pub fn fee_rule_state(env: Env, game_id: Symbol) -> Option<FeeRuleConfig>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `game_id` | `Symbol` |

#### Return Type

`Option<FeeRuleConfig>`

