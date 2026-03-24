# cross-contract-handler

## Public Methods

### `init`
Initialize with admin and optional registry contract. Call once.

```rust
pub fn init(env: Env, admin: Address, registry_contract: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `registry_contract` | `Address` |

#### Return Type

`Result<(), Error>`

### `register_route`
Register a route: source_contract may dispatch to target_contract via selector. Admin only.

```rust
pub fn register_route(env: Env, admin: Address, source_contract: Address, target_contract: Address, selector: Symbol) -> Result<u32, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `source_contract` | `Address` |
| `target_contract` | `Address` |
| `selector` | `Symbol` |

#### Return Type

`Result<u32, Error>`

### `dispatch`
Dispatch a request along a registered route. Caller must be admin or source_contract for that route.

```rust
pub fn dispatch(env: Env, caller: Address, request_id: Symbol, route_id: u32, payload: Bytes) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `caller` | `Address` |
| `request_id` | `Symbol` |
| `route_id` | `u32` |
| `payload` | `Bytes` |

#### Return Type

`Result<(), Error>`

### `acknowledge`
Acknowledge a pending request with a result. Caller must be admin or target_contract for that request's route.

```rust
pub fn acknowledge(env: Env, caller: Address, request_id: Symbol, result: Bytes) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `caller` | `Address` |
| `request_id` | `Symbol` |
| `result` | `Bytes` |

#### Return Type

`Result<(), Error>`

### `get_route`
Return the route for a given route_id, or None if not found.

```rust
pub fn get_route(env: Env, route_id: u32) -> Result<Route, Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `route_id` | `u32` |

#### Return Type

`Result<Route, Error>`

