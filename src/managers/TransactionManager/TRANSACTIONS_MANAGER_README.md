# TransactionManager

The `TransactionManager` is a singleton class responsible for sending, tracking, and managing the lifecycle of transactions in the MultiversX dApp ecosystem. It provides a high-level API for handling both single and batch transactions, tracking their status, and integrating with UI feedback mechanisms such as toast notifications.

---

## Features

- **Send Single or Batch Transactions:** Supports sending one or multiple transactions, as well as sequential batches.
- **Track Transaction Status:** Monitors transaction progress using WebSocket or polling, updating the store and UI accordingly.
- **Toast Notifications:** Integrates with the ToastManager to provide user feedback on transaction status.
- **Session Callbacks:** Allows custom callbacks for transaction session success or failure.
- **Error Handling:** Handles errors gracefully and updates the UI/store.

---

## Basic Usage

### 1. Import and Initialize

```typescript
import { Transaction } from '@multiversx/sdk-core';
import { TransactionManager } from '@multiversx/sdk-dapp/out/managers/TransactionManager';
import type { TransactionsDisplayInfoType } from '@multiversx/sdk-dapp/out/types/transactions.types';
```

### 2. Sending and Tracking Transactions

You can use the `sendAndTrackTransactions` helper to send and track transactions in one step:

```typescript
type SendAndTrackTransactionsType = {
  transactions: Transaction[] | Transaction[][];
  options?: {
    disableToasts?: boolean;
    transactionsDisplayInfo?: TransactionsDisplayInfoType;
  };
};

export const sendAndTrackTransactions = async ({
  transactions,
  options
}: SendAndTrackTransactionsType) => {
  const txManager = TransactionManager.getInstance();

  const sentTransactions = await txManager.send(transactions);
  const sessionId = await txManager.track(sentTransactions, options);

  return sessionId;
};
```

- `transactions`: An array of `Transaction` objects (for parallel execution) or an array of arrays (for sequential batch execution).
- `options`:
  - `disableToasts`: If true, disables toast notifications for this session.
  - `transactionsDisplayInfo`: Customizes the messages shown in toasts (success, error, processing).

#### Example

```typescript
const transactions = [tx1, tx2]; // or [[tx1, tx2], [tx3]]
const sessionId = await sendAndTrackTransactions({
  transactions,
  options: {
    transactionsDisplayInfo: {
      processingMessage: 'Processing your transactions...',
      successMessage: 'All transactions successful!',
      errorMessage: 'There was an error.'
    }
  }
});
```

---

## Advanced Usage

### Sending Transactions Directly

You can use the `TransactionManager` directly for more control:

```typescript
const txManager = TransactionManager.getInstance();
const sentTransactions = await txManager.send(transactions);
const sessionId = await txManager.track(sentTransactions, options);
```

### Tracking Server-Side Transactions

If you want to track transactions sent by a server (not by the logged-in user), enable tracking before login:

```typescript
import { trackTransactions } from '@multiversx/sdk-dapp/out/methods/trackTransactions/trackTransactions';

await trackTransactions(); // Enable polling mechanism
await txManager.track([plainTransaction]);
```

---

## Transaction Lifecycle

1. **Create** a `Transaction` object.
2. **Sign** the transaction(s) with the provider.
3. **Send** the signed transaction(s) using `TransactionManager.send()`.
4. **Track** the transaction(s) using `TransactionManager.track()`.
5. **Receive feedback** via toast notifications and session callbacks.

---

## Customizing Toasts and Callbacks

You can customize toast messages and register global callbacks for transaction sessions in your `initApp` configuration:

```typescript
initApp({
  dAppConfig: {
    transactionTracking: {
      successfulToastLifetime: 5000,
      onSuccess: async (sessionId) => { /* ... */ },
      onFail: async (sessionId) => { /* ... */ }
    }
  }
});
```

---

## Registering Per-Instance Callbacks

In addition to global callbacks set via `initApp`, you can register per-instance callbacks for transaction session success or failure using the `setCallbacks` method on the `TransactionManager` instance. This allows you to override or provide custom logic for specific flows or components.

```typescript
const txManager = TransactionManager.getInstance();
txManager.setCallbacks({
  onSuccess: (sessionId) => {
    // Custom logic when a transaction session succeeds
  },
  onFail: (sessionId) => {
    // Custom logic when a transaction session fails
  }
});
```

- `onSuccess(sessionId: string)`: Called when a transaction session completes successfully.
- `onFail(sessionId: string)`: Called when a transaction session fails, is cancelled, times out, or is invalid.

> **Note:** These callbacks will override the global ones set in `initApp` for the current instance of `TransactionManager`.

---

## Inspecting Transaction Status

You can inspect the status of a transaction session using the store selectors:

```typescript
import { getStore } from '@multiversx/sdk-dapp/out/store/store';
import { transactionsSliceSelector } from '@multiversx/sdk-dapp/out/store/selectors/transactionsSelector';

const state = transactionsSliceSelector(getStore());
const currentSession = state[sessionId];
console.log(currentSession.status);
```

---

## API Reference

### `TransactionManager.getInstance()`
Returns the singleton instance of the TransactionManager.

### `send(transactions: Transaction[] | Transaction[][]): Promise<SignedTransactionType[] | SignedTransactionType[][]>`
Sends one or more transactions. Accepts either a flat array (parallel) or an array of arrays (sequential batches).

### `track(sentTransactions, options?): Promise<string>`
Tracks the status of the sent transactions. Returns a `sessionId` for further inspection.

- `options.disableToasts`: Disables toast notifications for this session.
- `options.transactionsDisplayInfo`: Customizes toast messages.

---

## Related Helpers

- `sendAndTrackTransactions`: Helper function to send and track transactions in one step.
- `trackTransactions`: Enables tracking for server-side transactions before login.

---

## See Also

- [TransactionManager.ts source code](TransactionManager.ts)
- [README.md Transactions section](../../README.md#transactions)
- [initApp.ts](../../methods/initApp/initApp.ts)
- [Store actions for transactions](../../store/actions/transactions/transactionsActions.ts)
- [Session callbacks](../../methods/trackTransactions/helpers/checkTransactionStatus/runSessionCallbacks.ts)
