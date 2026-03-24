# comprehensive-test-suite

## Public Methods

### `init`
```rust
pub fn init(env: Env, admin: Address, reporter: Address, coverage_target_bps: u32) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `reporter` | `Address` |
| `coverage_target_bps` | `u32` |

#### Return Type

`Result<(), Error>`

### `pause`
```rust
pub fn pause(env: Env, admin: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |

#### Return Type

`Result<(), Error>`

### `unpause`
```rust
pub fn unpause(env: Env, admin: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |

#### Return Type

`Result<(), Error>`

### `trigger_kill_switch`
```rust
pub fn trigger_kill_switch(env: Env, admin: Address, reason_hash: BytesN<32>) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `reason_hash` | `BytesN<32>` |

#### Return Type

`Result<(), Error>`

### `set_reporter`
```rust
pub fn set_reporter(env: Env, admin: Address, reporter: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `reporter` | `Address` |

#### Return Type

`Result<(), Error>`

### `register_suite`
```rust
pub fn register_suite(env: Env, admin: Address, suite: Symbol, min_cases: u32, requires_integration: bool, requires_property: bool) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `suite` | `Symbol` |
| `min_cases` | `u32` |
| `requires_integration` | `bool` |
| `requires_property` | `bool` |

#### Return Type

`Result<(), Error>`

### `update_suite`
```rust
pub fn update_suite(env: Env, admin: Address, suite: Symbol, min_cases: u32, requires_integration: bool, requires_property: bool, active: bool) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `suite` | `Symbol` |
| `min_cases` | `u32` |
| `requires_integration` | `bool` |
| `requires_property` | `bool` |
| `active` | `bool` |

#### Return Type

`Result<(), Error>`

### `record_run`
```rust
pub fn record_run(env: Env, reporter: Address, suite: Symbol, build_id: BytesN<32>, passed_cases: u32, failed_cases: u32, coverage_bps: u32, includes_integration: bool, includes_property: bool) -> Result<bool, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `reporter` | `Address` |
| `suite` | `Symbol` |
| `build_id` | `BytesN<32>` |
| `passed_cases` | `u32` |
| `failed_cases` | `u32` |
| `coverage_bps` | `u32` |
| `includes_integration` | `bool` |
| `includes_property` | `bool` |

#### Return Type

`Result<bool, Error>`

### `is_release_ready`
```rust
pub fn is_release_ready(env: Env, suite: Symbol) -> Result<bool, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `suite` | `Symbol` |

#### Return Type

`Result<bool, Error>`

### `get_suite`
```rust
pub fn get_suite(env: Env, suite: Symbol) -> Result<Option<SuiteConfig>, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `suite` | `Symbol` |

#### Return Type

`Result<Option<SuiteConfig>, Error>`

### `get_run`
```rust
pub fn get_run(env: Env, suite: Symbol, build_id: BytesN<32>) -> Result<Option<RunRecord>, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `suite` | `Symbol` |
| `build_id` | `BytesN<32>` |

#### Return Type

`Result<Option<RunRecord>, Error>`

### `state`
```rust
pub fn state(env: Env) -> Result<SuiteState, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |

#### Return Type

`Result<SuiteState, Error>`

