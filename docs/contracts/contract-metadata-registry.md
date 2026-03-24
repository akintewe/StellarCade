# contract-metadata-registry

## Public Methods

### `init`
Initialize the metadata registry with an admin.

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

### `register_metadata`
Register initial metadata for a contract.

```rust
pub fn register_metadata(env: Env, contract_id: Address, version: u32, schema_hash: BytesN<32>, docs_uri: String) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `contract_id` | `Address` |
| `version` | `u32` |
| `schema_hash` | `BytesN<32>` |
| `docs_uri` | `String` |

#### Return Type

`Result<(), Error>`

### `update_metadata`
Update metadata for an existing contract (incrementing version).

```rust
pub fn update_metadata(env: Env, contract_id: Address, version: u32, schema_hash: BytesN<32>, docs_uri: String) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `contract_id` | `Address` |
| `version` | `u32` |
| `schema_hash` | `BytesN<32>` |
| `docs_uri` | `String` |

#### Return Type

`Result<(), Error>`

### `metadata_of`
Query current metadata for a contract.

```rust
pub fn metadata_of(env: Env, contract_id: Address) -> Option<MetadataRecord>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `contract_id` | `Address` |

#### Return Type

`Option<MetadataRecord>`

### `history`
Query the complete history of metadata for a contract.

```rust
pub fn history(env: Env, contract_id: Address) -> Vec<MetadataRecord>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `contract_id` | `Address` |

#### Return Type

`Vec<MetadataRecord>`

