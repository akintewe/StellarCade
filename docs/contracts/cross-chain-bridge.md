# cross-chain-bridge

## Public Methods

### `init`
```rust
pub fn init(env: Env, admin: Address, validators: Vec<BytesN<32>>, quorum: u32) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `validators` | `Vec<BytesN<32>>` |
| `quorum` | `u32` |

#### Return Type

`Result<(), Error>`

### `set_token_mapping`
```rust
pub fn set_token_mapping(env: Env, symbol: Symbol, asset: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `symbol` | `Symbol` |
| `asset` | `Address` |

#### Return Type

`Result<(), Error>`

### `set_paused`
```rust
pub fn set_paused(env: Env, paused: bool) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `paused` | `bool` |

#### Return Type

`Result<(), Error>`

### `lock`
```rust
pub fn lock(env: Env, from: Address, asset: Address, amount: i128, recipient_chain: Symbol, recipient: String) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `from` | `Address` |
| `asset` | `Address` |
| `amount` | `i128` |
| `recipient_chain` | `Symbol` |
| `recipient` | `String` |

#### Return Type

`Result<(), Error>`

### `mint_wrapped`
```rust
pub fn mint_wrapped(env: Env, asset_symbol: Symbol, amount: i128, recipient: Address, proof: BytesN<32>, signatures: Map<BytesN<32>, BytesN<64>>) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `asset_symbol` | `Symbol` |
| `amount` | `i128` |
| `recipient` | `Address` |
| `proof` | `BytesN<32>` |
| `signatures` | `Map<BytesN<32>` |

#### Return Type

`Result<(), Error>`

### `burn_wrapped`
```rust
pub fn burn_wrapped(env: Env, from: Address, asset: Address, amount: i128, recipient_chain: Symbol, recipient: String) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `from` | `Address` |
| `asset` | `Address` |
| `amount` | `i128` |
| `recipient_chain` | `Symbol` |
| `recipient` | `String` |

#### Return Type

`Result<(), Error>`

### `release`
```rust
pub fn release(env: Env, asset: Address, amount: i128, recipient: Address, proof: BytesN<32>, signatures: Map<BytesN<32>, BytesN<64>>) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `asset` | `Address` |
| `amount` | `i128` |
| `recipient` | `Address` |
| `proof` | `BytesN<32>` |
| `signatures` | `Map<BytesN<32>` |

#### Return Type

`Result<(), Error>`

