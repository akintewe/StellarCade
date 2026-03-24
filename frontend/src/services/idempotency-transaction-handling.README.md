# Idempotency Transaction Handling

Production-grade idempotency handling for repeat transaction requests in the StellarCade frontend.

## Components

1. **Types** (`types/idempotency.ts`)
2. **Service** (`services/idempotency-transaction-handling.ts`)

The service exposes key generation, duplicate detection, lifecycle state transitions, storage strategy selection, and cleanup operations.

## Usage

```ts
import { getIdempotencyService } from '@/services/idempotency-transaction-handling';
import { StorageStrategy } from '@/types/idempotency';

const service = getIdempotencyService({
  strategy: StorageStrategy.SESSION,
  ttl: 30 * 60 * 1000,
});

const key = service.generateKey({ operation: 'coinFlip', userContext: 'wallet:G...' });
const duplicate = service.checkDuplicate(key);

if (!duplicate.isDuplicate) {
  service.registerRequest(key, 'coinFlip', { gameId: 'game_123' });
  service.updateState(key, 'IN_FLIGHT');
  // execute transaction
  service.updateState(key, 'COMPLETED', { txHash: 'abc', ledger: 12345 });
}
```

## Notes

- Terminal states: `COMPLETED`, `FAILED`.
- Recoverable state: `UNKNOWN`.
- Expiration only applies to terminal requests.
- The module is UI-agnostic and can be wrapped by framework-specific adapters.
