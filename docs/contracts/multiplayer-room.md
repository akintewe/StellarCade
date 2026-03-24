# multiplayer-room

## Public Methods

### `init`
```rust
pub fn init(env: Env, admin: Address, fee_contract: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `fee_contract` | `Address` |

#### Return Type

`Result<(), Error>`

### `create_room`
```rust
pub fn create_room(env: Env, room_id: u64, config_hash: BytesN<32>) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `room_id` | `u64` |
| `config_hash` | `BytesN<32>` |

#### Return Type

`Result<(), Error>`

### `join_room`
```rust
pub fn join_room(env: Env, room_id: u64, player: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `room_id` | `u64` |
| `player` | `Address` |

#### Return Type

`Result<(), Error>`

### `start_match`
```rust
pub fn start_match(env: Env, room_id: u64) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `room_id` | `u64` |

#### Return Type

`Result<(), Error>`

### `close_room`
```rust
pub fn close_room(env: Env, room_id: u64) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `room_id` | `u64` |

#### Return Type

`Result<(), Error>`

### `get_room`
```rust
pub fn get_room(env: Env, room_id: u64) -> Result<RoomData, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `room_id` | `u64` |

#### Return Type

`Result<RoomData, Error>`

### `get_players`
```rust
pub fn get_players(env: Env, room_id: u64) -> Result<Vec<Address>, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `room_id` | `u64` |

#### Return Type

`Result<Vec<Address>, Error>`

### `get_fee_contract`
```rust
pub fn get_fee_contract(env: Env) -> Result<Address, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |

#### Return Type

`Result<Address, Error>`

