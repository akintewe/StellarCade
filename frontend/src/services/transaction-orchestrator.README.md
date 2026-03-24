# Transaction Orchestrator

`TransactionOrchestrator` is a UI-agnostic service that coordinates transaction execution across wallet/backend/RPC layers.

## Responsibilities

- Deterministic lifecycle transitions.
- Precondition and input validation before side effects.
- Submission retry policy for retryable failures.
- Confirmation polling with timeout handling.
- Correlation IDs for traceability.
- Duplicate in-flight prevention.

## Usage

```ts
import { TransactionOrchestrator } from '../services/transaction-orchestrator';
import { ConfirmationStatus } from '../types/transaction-orchestrator';

const orchestrator = new TransactionOrchestrator();

const result = await orchestrator.execute({
  operation: 'coinFlip.play',
  input: { wager: 100n },
  validatePreconditions: () => null,
  validateInput: () => null,
  submit: async (_input, ctx) => ({ txHash: `tx-${ctx.correlationId}`, data: { ok: true } }),
  confirm: async () => ({ status: ConfirmationStatus.CONFIRMED, confirmations: 1 }),
});
```

## Notes

- `submit` and `confirm` are dependency-injected for testability.
- Retry decisions are driven by mapped error severity.
