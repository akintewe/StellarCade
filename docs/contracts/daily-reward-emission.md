# daily-reward-emission

## Public Methods

### `init`
Initialize with admin and reward pool address.

```rust
pub fn init(env: Env, admin: Address, reward_pool_contract: Address)
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `reward_pool_contract` | `Address` |

### `configure_emission`
Configure or update an emission schedule. Admin-only.

```rust
pub fn configure_emission(env: Env, schedule_id: Symbol, config: EmissionConfig)
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `schedule_id` | `Symbol` |
| `config` | `EmissionConfig` |

### `emit_for_epoch`
Finalize the current epoch and advance to the next. Admin-only. Emits rewards from the reward pool into the contract for distribution.

```rust
pub fn emit_for_epoch(env: Env, schedule_id: Symbol) -> u64
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `schedule_id` | `Symbol` |

#### Return Type

`u64`

### `claim_daily_reward`
Claim a daily reward for a specific epoch. User must not have claimed before.

```rust
pub fn claim_daily_reward(env: Env, user: Address, schedule_id: Symbol, epoch_id: u64, reward_amount: i128)
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `user` | `Address` |
| `schedule_id` | `Symbol` |
| `epoch_id` | `u64` |
| `reward_amount` | `i128` |

### `emission_state`
Read the current emission state for a schedule.

```rust
pub fn emission_state(env: Env, epoch_id: Symbol) -> EmissionEpochState
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `epoch_id` | `Symbol` |

#### Return Type

`EmissionEpochState`

