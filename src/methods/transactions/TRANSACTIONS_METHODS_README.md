# Transactions Methods

This folder provides utility functions for inspecting and retrieving transaction session data from the store. These methods allow you to programmatically access the status and details of transactions in your dApp, without relying on React hooks.

## Overview

Each function in this folder returns a specific subset of transaction data, such as all sessions, only pending, failed, or successful transactions, or their corresponding sessions. These methods are useful for non-React environments or for advanced usage where direct store access is needed.

## Available Methods

| Method                                 | Description                                         |
|----------------------------------------|-----------------------------------------------------|
| `getTransactionSessions()`             | Returns all transaction sessions (pending, successful, failed, etc.) as a record keyed by session ID. |
| `getPendingTransactionsSessions()`     | Returns a record of all pending transaction sessions.|
| `getPendingTransactions()`             | Returns an array of all pending transactions.        |
| `getFailedTransactionsSessions()`      | Returns a record of all failed transaction sessions. |
| `getFailedTransactions()`              | Returns an array of all failed transactions.         |
| `getSuccessfulTransactionsSessions()`  | Returns a record of all successful transaction sessions. |
| `getSuccessfulTransactions()`          | Returns an array of all successful transactions.     |

## Usage Example

```typescript
import { 
  getTransactionSessions,
  getPendingTransactions,
  getFailedTransactions,
  getSuccessfulTransactions
} from '@multiversx/sdk-dapp/out/methods/transactions';

// Get all transaction sessions
const allSessions = getTransactionSessions();

// Get only pending transactions
const pendingTxs = getPendingTransactions();

// Get only failed transactions
const failedTxs = getFailedTransactions();

// Get only successful transactions
const successfulTxs = getSuccessfulTransactions();
```

## When to Use

- When you need to access transaction data outside of React components.
- For advanced state management or custom UI implementations.
- When building integrations or tools that require direct access to transaction session data.
