# governance-token

## Public Methods

### `init`
Initializes the contract with the admin address and token setup. Requires admin authorization to prevent arbitrary initialization.

```rust
pub fn init(env: Env, admin: Address, name: String, symbol: String, decimals: u32) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `name` | `String` |
| `symbol` | `String` |
| `decimals` | `u32` |

#### Return Type

`Result<(), Error>`

### `mint`
Mints new tokens to a recipient. Only admin can call.

```rust
pub fn mint(env: Env, to: Address, amount: i128) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `to` | `Address` |
| `amount` | `i128` |

#### Return Type

`Result<(), Error>`

### `burn`
Burns tokens from an account. Only admin can call.

```rust
pub fn burn(env: Env, from: Address, amount: i128) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `from` | `Address` |
| `amount` | `i128` |

#### Return Type

`Result<(), Error>`

### `transfer`
Transfers tokens between accounts. Requires sender authorization.

```rust
pub fn transfer(env: Env, from: Address, to: Address, amount: i128) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `from` | `Address` |
| `to` | `Address` |
| `amount` | `i128` |

#### Return Type

`Result<(), Error>`

### `balance`
```rust
pub fn balance(env: Env, id: Address) -> i128
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `id` | `Address` |

#### Return Type

`i128`

### `total_supply`
```rust
pub fn total_supply(env: Env) -> i128
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |

#### Return Type

`i128`

### `name`
```rust
pub fn name(env: Env) -> String
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |

#### Return Type

`String`

### `symbol`
```rust
pub fn symbol(env: Env) -> String
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |

#### Return Type

`String`

### `decimals`
```rust
pub fn decimals(env: Env) -> u32
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |

#### Return Type

`u32`

