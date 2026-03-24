# nft-reward

## Public Methods

### `init`
Initialize the contract.

```rust
pub fn init(env: Env, admin: Address, nft_contract: Address, reward_contract: Address) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `admin` | `Address` |
| `nft_contract` | `Address` |
| `reward_contract` | `Address` |

#### Return Type

`Result<(), Error>`

### `define_nft_reward`
Define a new NFT reward campaign. Admin only.

```rust
pub fn define_nft_reward(env: Env, campaign_id: u32, metadata_uri: String, supply: u32) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `campaign_id` | `u32` |
| `metadata_uri` | `String` |
| `supply` | `u32` |

#### Return Type

`Result<(), Error>`

### `mint_reward`
Mark a reward as "minted" (awarded) for a user. Admin only.

```rust
pub fn mint_reward(env: Env, user: Address, campaign_id: u32) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `user` | `Address` |
| `campaign_id` | `u32` |

#### Return Type

`Result<(), Error>`

### `claim_nft`
Claim the pending NFT reward. User only.

```rust
pub fn claim_nft(env: Env, user: Address, campaign_id: u32) -> Result<(), Error>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `user` | `Address` |
| `campaign_id` | `u32` |

#### Return Type

`Result<(), Error>`

### `nft_reward_state`
View campaign state.

```rust
pub fn nft_reward_state(env: Env, campaign_id: u32) -> Option<CampaignData>
```

#### Parameters

| Name | Type |
|------|------|
| `env` | `Env` |
| `campaign_id` | `u32` |

#### Return Type

`Option<CampaignData>`

