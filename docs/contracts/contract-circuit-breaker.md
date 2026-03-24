# contract-circuit-breaker

## Public Methods

### `init`
Initialise the circuit breaker contract.

```rust
pub fn init(env: Env, admin: Address, threshold: u32) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `threshold` | `u32` |

#### Return Type

`Result<(), Error>`

### `record_failure`
Record a failure for a specific contract. In production, this would likely be restricted to authorized callers (monitors).

```rust
pub fn record_failure(env: Env, contract_id: Address, _code: u32) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `contract_id` | `Address` |
| `_code` | `u32` |

#### Return Type

`Result<(), Error>`

### `trip`
Manually trip the circuit breaker for a contract.

```rust
pub fn trip(env: Env, contract_id: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `contract_id` | `Address` |

#### Return Type

`Result<(), Error>`

### `reset`
Reset the circuit breaker for a contract to Closed state.

```rust
pub fn reset(env: Env, contract_id: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `contract_id` | `Address` |

#### Return Type

`Result<(), Error>`

### `breaker_state`
Query the current state of a circuit breaker.

```rust
pub fn breaker_state(env: Env, contract_id: Address) -> Option<BreakerData>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `contract_id` | `Address` |

#### Return Type

`Option<BreakerData>`

