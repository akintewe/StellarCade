# oracle-integration

Oracle consumers need a stable read surface for source configuration and update
policy details, not just latest-value freshness. The two accessor methods below
(`source_config_snapshot` and `update_policy_summary`) provide exactly that.

## Missing-source behavior

- `source_config_snapshot` returns `None` when the contract has not been
  initialized. Callers should treat a `None` result as "no sources configured"
  and must not attempt data requests until a non-`None` snapshot is available.
- `update_policy_summary` is always safe to call — it returns a compile-time
  constant summary regardless of initialization state.

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


### `source_config_snapshot`
Returns a snapshot of the configured oracle source addresses.
Returns `None` when the contract has not been initialized (see **Missing-source behavior** above).
The snapshot is safe to expose in client tooling — it contains only whitelisted
`Address` values and a convenience count field.

```rust
pub fn source_config_snapshot(env: Env) -> Option<OracleSourceSnapshot>
```

#### Return Type

`Option<OracleSourceSnapshot>`

| Field | Type | Description |
|-------|------|-------------|
| `sources` | `Vec<Address>` | Whitelisted oracle addresses |
| `source_count` | `u32` | Number of configured sources |

### `update_policy_summary`
Returns a deterministic summary of the staleness and update cadence policy.
The result is identical on every call and safe to cache by clients.

```rust
pub fn update_policy_summary(env: Env) -> UpdatePolicySummary
```

#### Return Type

`UpdatePolicySummary`

| Field | Type | Description |
|-------|------|-------------|
| `stale_threshold_ledgers` | `u32` | Ledgers after which a price is stale |
| `cadence` | `Symbol` | `"on_request"` — data is fetched per-request |
