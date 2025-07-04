# Transactions

The SDK provides comprehensive transaction management through the `TransactionManager` class, handling everything from signing to tracking transaction status.

## Basic Transaction Flow

1. **Create** a transaction using `@multiversx/sdk-core`
2. **Sign** the transaction with a provider
3. **Send** the transaction using `TransactionManager`
4. **Track** the transaction status

## Creating Transactions

```typescript
import { Address, Transaction, TransactionPayload } from '@multiversx/sdk-core';
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import { GAS_PRICE, GAS_LIMIT } from '@multiversx/sdk-dapp/out/constants/mvx.constants';

const account = useGetAccount();
const { network } = useGetNetworkConfig();

// Simple EGLD transfer
const transaction = new Transaction({
  value: BigInt('1000000000000000000'), // 1 EGLD in wei
  data: new TransactionPayload(''),
  receiver: Address.newFromBech32('erd1...'),
  gasLimit: BigInt(GAS_LIMIT),
  gasPrice: BigInt(GAS_PRICE),
  chainID: network.chainId,
  nonce: BigInt(account.nonce),
  sender: Address.newFromBech32(account.address),
  version: 1
});

// Transaction with data
const transactionWithData = new Transaction({
  value: BigInt(0),
  data: new TransactionPayload('Hello MultiversX!'),
  receiver: Address.newFromBech32('erd1...'),
  gasLimit: BigInt(100000),
  gasPrice: BigInt(GAS_PRICE),
  chainID: network.chainId,
  nonce: BigInt(account.nonce),
  sender: Address.newFromBech32(account.address),
  version: 1
});
```

## Signing Transactions

```typescript
import { getAccountProvider } from '@multiversx/sdk-dapp/out/providers/helpers/accountProvider';
import { refreshAccount } from '@multiversx/sdk-dapp/out/utils/account/refreshAccount';

const signTransactions = async (transactions: Transaction[]) => {
  try {
    // Refresh account to get latest nonce
    await refreshAccount();
    
    // Get the current provider
    const provider = getAccountProvider();
    
    // Sign the transactions
    const signedTransactions = await provider.signTransactions(transactions);
    
    return signedTransactions;
  } catch (error) {
    console.error('Failed to sign transactions:', error);
    throw error;
  }
};
```

## Sending and Tracking Transactions

### Using TransactionManager

```typescript
import { TransactionManager } from '@multiversx/sdk-dapp/out/managers/TransactionManager';

const sendTransaction = async () => {
  try {
    const txManager = TransactionManager.getInstance();
    
    // Create and sign transactions
    const transactions = [/* your transactions */];
    const signedTransactions = await signTransactions(transactions);
    
    // Send transactions
    const sentTransactions = await txManager.send(signedTransactions);
    
    // Track transactions with custom display info
    const sessionId = await txManager.track(sentTransactions, {
      transactionsDisplayInfo: {
        processingMessage: 'Processing your transaction...',
        errorMessage: 'Transaction failed. Please try again.',
        successMessage: 'Transaction completed successfully!',
        submittedMessage: 'Transaction submitted to network',
        timedOutMessage: 'Transaction timed out',
        invalidMessage: 'Invalid transaction',
        receivedMessage: 'Transaction received'
      },
      sessionInformation: {
        customData: 'any custom data you want to store'
      }
    });
    
    console.log('Transaction session ID:', sessionId);
    return sessionId;
  } catch (error) {
    console.error('Transaction failed:', error);
    throw error;
  }
};
```

### Batch Transactions

Send multiple transaction groups:

```typescript
const sendBatchTransactions = async () => {
  const txManager = TransactionManager.getInstance();
  
  // Create grouped transactions
  const batchTransactions = [
    [transaction1, transaction2], // Group 1
    [transaction3, transaction4]  // Group 2
  ];
  
  const signedBatches = await provider.signTransactions(batchTransactions);
  const sentTransactions = await txManager.send(signedBatches);
  
  const sessionId = await txManager.track(sentTransactions, {
    transactionsDisplayInfo: {
      processingMessage: 'Processing batch transactions...',
      successMessage: 'All transactions completed!'
    }
  });
  
  return sessionId;
};
```

## Transaction Tracking Options

### Disable Toast Notifications

```typescript
const sessionId = await txManager.track(sentTransactions, {
  disableToasts: true // No toast notifications will be shown
});
```

### Custom Session Information

```typescript
const sessionId = await txManager.track(sentTransactions, {
  sessionInformation: {
    userId: 'user123',
    transactionType: 'token-transfer',
    metadata: {
      amount: '1.5 EGLD',
      recipient: 'erd1...'
    }
  }
});
```

## Monitoring Transaction Status

### Using React Hooks

```typescript
import { useGetTransactionSessions } from '@multiversx/sdk-dapp/out/react/transactions/useGetTransactionSessions';
import { useGetPendingTransactions } from '@multiversx/sdk-dapp/out/react/transactions/useGetPendingTransactions';
import { useGetSuccessfulTransactions } from '@multiversx/sdk-dapp/out/react/transactions/useGetSuccessfulTransactions';
import { useGetFailedTransactions } from '@multiversx/sdk-dapp/out/react/transactions/useGetFailedTransactions';

const TransactionStatus = () => {
  const allSessions = useGetTransactionSessions();
  const pendingTransactions = useGetPendingTransactions();
  const successfulTransactions = useGetSuccessfulTransactions();
  const failedTransactions = useGetFailedTransactions();

  return (
    <div>
      <h3>Transaction Status</h3>
      <p>Total Sessions: {Object.keys(allSessions).length}</p>
      <p>Pending: {pendingTransactions.length}</p>
      <p>Successful: {successfulTransactions.length}</p>
      <p>Failed: {failedTransactions.length}</p>
    </div>
  );
};
```

### Using Methods (Non-React)

```typescript
import { getTransactionSessions } from '@multiversx/sdk-dapp/out/methods/transactions/getTransactionSessions';
import { getPendingTransactions } from '@multiversx/sdk-dapp/out/methods/transactions/getPendingTransactions';

const checkTransactionStatus = () => {
  const allSessions = getTransactionSessions();
  const pendingTxs = getPendingTransactions();
  
  console.log('All sessions:', allSessions);
  console.log('Pending transactions:', pendingTxs);
};
```

## Transaction Session Callbacks

Set global callbacks for transaction success/failure:

```typescript
import { TransactionManager } from '@multiversx/sdk-dapp/out/managers/TransactionManager';

const txManager = TransactionManager.getInstance();

txManager.setCallbacks({
  onSuccess: async (sessionId: string) => {
    console.log('Transaction session successful:', sessionId);
    
    // Get session details
    const sessions = getTransactionSessions();
    const session = sessions[sessionId];
    
    // Perform custom actions
    await updateUserBalance();
    await logTransactionSuccess(sessionId, session);
    await showSuccessNotification();
  },
  onFail: async (sessionId: string) => {
    console.log('Transaction session failed:', sessionId);
    
    // Handle failure
    await logTransactionFailure(sessionId);
    await showErrorNotification();
  }
});
```

## Smart Contract Interactions

### Contract Calls

```typescript
import { ContractFunction, Address } from '@multiversx/sdk-core';

const callSmartContract = async () => {
  const contractAddress = 'erd1qqqqqqqqqqqqqpgq...';
  const functionName = 'myFunction';
  const args = ['arg1', 'arg2'];
  
  const transaction = new Transaction({
    value: BigInt(0),
    data: new TransactionPayload(
      `${functionName}@${Buffer.from(args[0]).toString('hex')}@${Buffer.from(args[1]).toString('hex')}`
    ),
    receiver: Address.newFromBech32(contractAddress),
    gasLimit: BigInt(5000000),
    gasPrice: BigInt(GAS_PRICE),
    chainID: network.chainId,
    nonce: BigInt(account.nonce),
    sender: Address.newFromBech32(account.address),
    version: 1
  });
  
  const signedTx = await signTransactions([transaction]);
  const txManager = TransactionManager.getInstance();
  const sentTx = await txManager.send(signedTx);
  
  return await txManager.track(sentTx, {
    transactionsDisplayInfo: {
      processingMessage: 'Calling smart contract...',
      successMessage: 'Smart contract call successful!'
    }
  });
};
```

### ESDT Token Transfers

```typescript
const transferTokens = async () => {
  const tokenId = 'MYTOKEN-123456';
  const amount = '1000000000000000000'; // 1 token (18 decimals)
  const receiver = 'erd1...';
  
  const data = `ESDTTransfer@${Buffer.from(tokenId).toString('hex')}@${Buffer.from(amount, 10).toString('hex')}`;
  
  const transaction = new Transaction({
    value: BigInt(0),
    data: new TransactionPayload(data),
    receiver: Address.newFromBech32(receiver),
    gasLimit: BigInt(500000),
    gasPrice: BigInt(GAS_PRICE),
    chainID: network.chainId,
    nonce: BigInt(account.nonce),
    sender: Address.newFromBech32(account.address),
    version: 1
  });
  
  // Sign and send as before
};
```

## Transaction Status Monitoring

### Inspect Specific Session

```typescript
import { transactionsSliceSelector } from '@multiversx/sdk-dapp/out/store/selectors/transactionsSelector';
import { getStore } from '@multiversx/sdk-dapp/out/store/store';

const inspectSession = (sessionId: string) => {
  const store = getStore();
  const allSessions = transactionsSliceSelector(store.getState());
  const session = allSessions[sessionId];
  
  if (session) {
    console.log('Session status:', session.status);
    console.log('Transactions:', session.transactions);
    console.log('Error message:', session.errorMessage);
    console.log('Display info:', session.transactionsDisplayInfo);
  }
};
```

### Real-time Status Updates

```typescript
import { getStore } from '@multiversx/sdk-dapp/out/store/store';

const subscribeToTransactionUpdates = () => {
  const store = getStore();
  
  const unsubscribe = store.subscribe((state) => {
    const sessions = transactionsSliceSelector(state);
    
    // Handle state changes
    Object.entries(sessions).forEach(([sessionId, session]) => {
      console.log(`Session ${sessionId} status:`, session.status);
    });
  });
  
  // Call unsubscribe() when you want to stop listening
  return unsubscribe;
};
```

## Notifications Feed

The SDK includes a notifications feed for displaying transaction history:

```typescript
import { NotificationsFeedManager } from '@multiversx/sdk-dapp/out/managers/NotificationsFeedManager';

const showNotificationsFeed = async () => {
  const notificationManager = NotificationsFeedManager.getInstance();
  await notificationManager.openNotificationsFeed();
};
```

## Error Handling

### Transaction Errors

```typescript
const handleTransactionErrors = async () => {
  try {
    const txManager = TransactionManager.getInstance();
    const sentTx = await txManager.send(signedTransactions);
    const sessionId = await txManager.track(sentTx);
    
    return sessionId;
  } catch (error) {
    if (error.message.includes('insufficient funds')) {
      console.error('Insufficient balance for transaction');
    } else if (error.message.includes('nonce')) {
      console.error('Nonce error - try refreshing account');
      await refreshAccount();
    } else if (error.message.includes('gas')) {
      console.error('Gas limit too low');
    } else {
      console.error('Transaction failed:', error.message);
    }
    
    throw error;
  }
};
```

### Network Errors

```typescript
const handleNetworkErrors = async () => {
  try {
    // Transaction code
  } catch (error) {
    if (error.code === 'NETWORK_ERROR') {
      console.error('Network connection failed');
    } else if (error.code === 'TIMEOUT') {
      console.error('Transaction timed out');
    }
  }
};
```

## Best Practices

1. **Always Refresh Account**: Call `refreshAccount()` before creating transactions to get the latest nonce
2. **Gas Estimation**: Properly estimate gas limits for your transactions
3. **Error Handling**: Implement comprehensive error handling for all transaction operations
4. **Status Monitoring**: Monitor transaction status and provide user feedback
5. **Batch Operations**: Use batch transactions for multiple related operations
6. **Custom Messages**: Provide meaningful success/error messages for better UX

## Common Transaction Patterns

### Token Swap Pattern

```typescript
const performTokenSwap = async () => {
  const transactions = [
    // Approve token spending
    createApproveTransaction(),
    // Perform swap
    createSwapTransaction()
  ];
  
  const signedTxs = await signTransactions(transactions);
  const txManager = TransactionManager.getInstance();
  const sentTxs = await txManager.send(signedTxs);
  
  return await txManager.track(sentTxs, {
    transactionsDisplayInfo: {
      processingMessage: 'Swapping tokens...',
      successMessage: 'Token swap completed!',
      errorMessage: 'Token swap failed'
    }
  });
};
```

### Multi-step Process Pattern

```typescript
const performMultiStepProcess = async () => {
  try {
    // Step 1: Initial transaction
    const step1SessionId = await sendTransaction(step1Transaction);
    
    // Wait for step 1 to complete
    await waitForTransactionCompletion(step1SessionId);
    
    // Step 2: Follow-up transaction
    const step2SessionId = await sendTransaction(step2Transaction);
    
    return step2SessionId;
  } catch (error) {
    console.error('Multi-step process failed:', error);
    throw error;
  }
};
```

## Troubleshooting

### Common Issues

**Nonce errors:**
- Always call `refreshAccount()` before creating transactions
- Don't send multiple transactions simultaneously without proper nonce management

**Gas limit errors:**
- Increase gas limit for complex operations
- Test transactions on devnet first

**Transaction not appearing:**
- Check network connectivity
- Verify transaction was properly signed and sent
- Check if websocket connections are working

**Status not updating:**
- Ensure websocket listeners are properly initialized
- Check if transaction tracking is enabled in `initApp`