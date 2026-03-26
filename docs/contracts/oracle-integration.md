# oracle-integration

## Public Methods

### `init`
```rust
pub fn init(env: Env, admin: Address, oracle_sources_config: Vec<Address>) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `oracle_sources_config` | `Vec<Address>` |

#### Return Type

`Result<(), Error>`

### `request_data`
```rust
pub fn request_data(env: Env, caller: Address, feed_id: BytesN<32>, request_id: BytesN<32>) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `caller` | `Address` |
| `feed_id` | `BytesN<32>` |
| `request_id` | `BytesN<32>` |

#### Return Type

`Result<(), Error>`

### `fulfill_data`
```rust
pub fn fulfill_data(env: Env, caller: Address, request_id: BytesN<32>, payload: Bytes, _proof: Bytes) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `caller` | `Address` |
| `request_id` | `BytesN<32>` |
| `payload` | `Bytes` |
| `_proof` | `Bytes` |

#### Return Type

`Result<(), Error>`

### `latest`
```rust
pub fn latest(env: Env, feed_id: BytesN<32>) -> Option<Bytes>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `feed_id` | `BytesN<32>` |

#### Return Type

`Option<Bytes>`

### `get_request`
```rust
pub fn get_request(env: Env, request_id: BytesN<32>) -> Option<OracleRequest>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `request_id` | `BytesN<32>` |

#### Return Type

`Option<OracleRequest>`

### `last_price_freshness`
Return the last known payload together with the ledger sequence it was updated at, the current ledger sequence, the computed age, and stale-read guard metadata. Missing price state resolves deterministically with `has_price = false`, an empty payload, and `is_stale = true`.

```rust
pub fn last_price_freshness(env: Env, feed_id: BytesN<32>) -> PriceFreshness
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `feed_id` | `BytesN<32>` |

#### Return Type

`PriceFreshness`

Consumers should gate price-dependent flows on `has_price` and `is_stale`. The accessor is read-only and side-effect free, while the existing `latest` accessor remains available for payload-only reads.

