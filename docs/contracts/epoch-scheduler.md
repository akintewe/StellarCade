# epoch-scheduler

## Public Methods

### `init`
Initialise the epoch scheduler contract.

```rust
pub fn init(env: Env, admin: Address, epoch_duration: u32) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `epoch_duration` | `u32` |

#### Return Type

`Result<(), Error>`

### `current_epoch`
View the current epoch based on ledger sequence.

```rust
pub fn current_epoch(env: Env) -> u64
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |

#### Return Type

`u64`

### `schedule_task`
Schedule a task for a future or current epoch.

```rust
pub fn schedule_task(env: Env, task_id: Symbol, epoch: u64, payload_hash: BytesN<32>) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `task_id` | `Symbol` |
| `epoch` | `u64` |
| `payload_hash` | `BytesN<32>` |

#### Return Type

`Result<(), Error>`

### `mark_executed`
Mark a task as executed. Restricted to Admin.

```rust
pub fn mark_executed(env: Env, task_id: Symbol) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `task_id` | `Symbol` |

#### Return Type

`Result<(), Error>`

### `task_state`
Query the state of a task.

```rust
pub fn task_state(env: Env, task_id: Symbol) -> Option<TaskData>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `task_id` | `Symbol` |

#### Return Type

`Option<TaskData>`

