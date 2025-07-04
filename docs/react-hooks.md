# React Hooks

The SDK provides a comprehensive set of React hooks for seamless integration with React applications. These hooks provide reactive access to account data, network information, transaction status, and more.

## Account Hooks

### useGetAccount

Access complete account information:

```typescript
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';

const AccountComponent = () => {
  const account = useGetAccount();

  return (
    <div>
      <p>Address: {account.address}</p>
      <p>Balance: {account.balance}</p>
      <p>Nonce: {account.nonce}</p>
      <p>Shard: {account.shard}</p>
    </div>
  );
};
```

### useGetAccountInfo

Get account information with loading state:

```typescript
import { useGetAccountInfo } from '@multiversx/sdk-dapp/out/react/account/useGetAccountInfo';

const AccountInfo = () => {
  const { account, loading, error } = useGetAccountInfo();

  if (loading) return <div>Loading account...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Account Details</h3>
      <p>Address: {account.address}</p>
      <p>Balance: {account.balance}</p>
    </div>
  );
};
```

### useGetIsLoggedIn

Check if user is logged in:

```typescript
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';

const LoginStatus = () => {
  const isLoggedIn = useGetIsLoggedIn();

  return (
    <div>
      Status: {isLoggedIn ? 'Logged In' : 'Not Logged In'}
    </div>
  );
};
```

### useGetLatestNonce

Get the latest account nonce:

```typescript
import { useGetLatestNonce } from '@multiversx/sdk-dapp/out/react/account/useGetLatestNonce';

const NonceDisplay = () => {
  const latestNonce = useGetLatestNonce();

  return <p>Latest Nonce: {latestNonce}</p>;
};
```

## Network Hooks

### useGetNetworkConfig

Access network configuration:

```typescript
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';

const NetworkInfo = () => {
  const { network } = useGetNetworkConfig();

  return (
    <div>
      <p>Chain ID: {network.chainId}</p>
      <p>Name: {network.name}</p>
      <p>Currency: {network.egldLabel}</p>
      <p>Decimals: {network.decimals}</p>
      <p>API: {network.apiAddress}</p>
      <p>Explorer: {network.explorerAddress}</p>
    </div>
  );
};
```

## Login Information Hooks

### useGetLoginInfo

Access login information and authentication details:

```typescript
import { useGetLoginInfo } from '@multiversx/sdk-dapp/out/react/loginInfo/useGetLoginInfo';

const LoginInfo = () => {
  const {
    isLoggedIn,
    loginMethod,
    expires,
    loginToken,
    signature,
    accessToken
  } = useGetLoginInfo();

  return (
    <div>
      <p>Logged In: {isLoggedIn ? 'Yes' : 'No'}</p>
      {isLoggedIn && (
        <>
          <p>Method: {loginMethod}</p>
          <p>Expires: {new Date(expires * 1000).toLocaleString()}</p>
          <p>Has Token: {loginToken ? 'Yes' : 'No'}</p>
        </>
      )}
    </div>
  );
};
```

## Transaction Hooks

### useGetTransactionSessions

Get all transaction sessions:

```typescript
import { useGetTransactionSessions } from '@multiversx/sdk-dapp/out/react/transactions/useGetTransactionSessions';

const TransactionSessions = () => {
  const sessions = useGetTransactionSessions();

  return (
    <div>
      <h3>Transaction Sessions</h3>
      {Object.entries(sessions).map(([sessionId, session]) => (
        <div key={sessionId}>
          <p>Session: {sessionId}</p>
          <p>Status: {session.status}</p>
          <p>Transactions: {session.transactions.length}</p>
        </div>
      ))}
    </div>
  );
};
```

### useGetPendingTransactions

Get pending transactions:

```typescript
import { useGetPendingTransactions } from '@multiversx/sdk-dapp/out/react/transactions/useGetPendingTransactions';

const PendingTransactions = () => {
  const pendingTransactions = useGetPendingTransactions();

  return (
    <div>
      <h3>Pending Transactions ({pendingTransactions.length})</h3>
      {pendingTransactions.map((tx, index) => (
        <div key={index}>
          <p>Hash: {tx.hash}</p>
          <p>Status: {tx.status}</p>
          <p>Value: {tx.value}</p>
        </div>
      ))}
    </div>
  );
};
```

### useGetSuccessfulTransactions

Get successful transactions:

```typescript
import { useGetSuccessfulTransactions } from '@multiversx/sdk-dapp/out/react/transactions/useGetSuccessfulTransactions';

const SuccessfulTransactions = () => {
  const successfulTransactions = useGetSuccessfulTransactions();

  return (
    <div>
      <h3>Successful Transactions ({successfulTransactions.length})</h3>
      {successfulTransactions.map((tx, index) => (
        <div key={index} className="success">
          <p>Hash: {tx.hash}</p>
          <p>Value: {tx.value}</p>
        </div>
      ))}
    </div>
  );
};
```

### useGetFailedTransactions

Get failed transactions:

```typescript
import { useGetFailedTransactions } from '@multiversx/sdk-dapp/out/react/transactions/useGetFailedTransactions';

const FailedTransactions = () => {
  const failedTransactions = useGetFailedTransactions();

  return (
    <div>
      <h3>Failed Transactions ({failedTransactions.length})</h3>
      {failedTransactions.map((tx, index) => (
        <div key={index} className="error">
          <p>Hash: {tx.hash}</p>
          <p>Status: {tx.status}</p>
        </div>
      ))}
    </div>
  );
};
```

### Transaction Session Hooks

Get specific transaction session types:

```typescript
import { useGetPendingTransactionsSessions } from '@multiversx/sdk-dapp/out/react/transactions/useGetPendingTransactionsSessions';
import { useGetSuccessfulTransactionsSessions } from '@multiversx/sdk-dapp/out/react/transactions/useGetSuccessfulTransactionsSessions';
import { useGetFailedTransactionsSessions } from '@multiversx/sdk-dapp/out/react/transactions/useGetFailedTransactionsSessions';

const TransactionSessionsOverview = () => {
  const pendingSessions = useGetPendingTransactionsSessions();
  const successfulSessions = useGetSuccessfulTransactionsSessions();
  const failedSessions = useGetFailedTransactionsSessions();

  return (
    <div>
      <h3>Transaction Sessions Overview</h3>
      <p>Pending Sessions: {Object.keys(pendingSessions).length}</p>
      <p>Successful Sessions: {Object.keys(successfulSessions).length}</p>
      <p>Failed Sessions: {Object.keys(failedSessions).length}</p>
    </div>
  );
};
```

## Store Hook

### useSelector

Access any part of the store using selectors:

```typescript
import { useSelector } from '@multiversx/sdk-dapp/out/react/store/useSelector';
import { accountSelector, networkSelector } from '@multiversx/sdk-dapp/out/store/selectors';

const CustomStoreAccess = () => {
  const account = useSelector(accountSelector);
  const network = useSelector(networkSelector);

  return (
    <div>
      <p>Custom Account Access: {account.address}</p>
      <p>Custom Network Access: {network.chainId}</p>
    </div>
  );
};
```

## Custom Hooks

### Creating Custom Hooks

You can create custom hooks that combine multiple SDK hooks:

```typescript
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';

// Custom hook for formatted balance
export const useFormattedBalance = () => {
  const account = useGetAccount();
  const { network } = useGetNetworkConfig();
  const isLoggedIn = useGetIsLoggedIn();

  if (!isLoggedIn) return '0';

  const balance = parseFloat(account.balance) / Math.pow(10, network.decimals);
  return `${balance.toFixed(4)} ${network.egldLabel}`;
};

// Custom hook for account status
export const useAccountStatus = () => {
  const account = useGetAccount();
  const isLoggedIn = useGetIsLoggedIn();
  const { loginMethod, expires } = useGetLoginInfo();

  return {
    isLoggedIn,
    hasBalance: parseFloat(account.balance) > 0,
    loginMethod,
    isTokenExpiring: expires && (expires - Date.now() / 1000) < 300, // 5 minutes
    accountReady: isLoggedIn && account.address
  };
};

// Custom hook for transaction monitoring
export const useTransactionMonitor = () => {
  const pendingTxs = useGetPendingTransactions();
  const successfulTxs = useGetSuccessfulTransactions();
  const failedTxs = useGetFailedTransactions();

  return {
    hasPendingTransactions: pendingTxs.length > 0,
    totalTransactions: pendingTxs.length + successfulTxs.length + failedTxs.length,
    successRate: successfulTxs.length / (successfulTxs.length + failedTxs.length) || 0,
    stats: {
      pending: pendingTxs.length,
      successful: successfulTxs.length,
      failed: failedTxs.length
    }
  };
};
```

## Hook Usage Patterns

### Conditional Rendering Based on Login State

```typescript
const ConditionalContent = () => {
  const isLoggedIn = useGetIsLoggedIn();
  const account = useGetAccount();

  if (!isLoggedIn) {
    return <LoginComponent />;
  }

  if (!account.address) {
    return <div>Loading account...</div>;
  }

  return <DashboardComponent />;
};
```

### Real-time Balance Updates

```typescript
const BalanceTracker = () => {
  const account = useGetAccount();
  const [previousBalance, setPreviousBalance] = useState(account.balance);

  useEffect(() => {
    if (account.balance !== previousBalance) {
      console.log('Balance changed:', {
        from: previousBalance,
        to: account.balance
      });
      setPreviousBalance(account.balance);
    }
  }, [account.balance, previousBalance]);

  return (
    <div>
      <p>Current Balance: {account.balance}</p>
      <p>Previous Balance: {previousBalance}</p>
    </div>
  );
};
```

### Transaction Status Indicator

```typescript
const TransactionStatusIndicator = () => {
  const pendingTxs = useGetPendingTransactions();
  const [showDetails, setShowDetails] = useState(false);

  if (pendingTxs.length === 0) {
    return null;
  }

  return (
    <div className="transaction-indicator">
      <button onClick={() => setShowDetails(!showDetails)}>
        {pendingTxs.length} Pending Transaction{pendingTxs.length > 1 ? 's' : ''}
      </button>
      
      {showDetails && (
        <div className="transaction-details">
          {pendingTxs.map((tx, index) => (
            <div key={index}>
              <p>Hash: {tx.hash.substring(0, 10)}...</p>
              <p>Status: {tx.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
```

## Hook Dependencies and Performance

### Optimizing Hook Usage

```typescript
import { useMemo } from 'react';

const OptimizedComponent = () => {
  const account = useGetAccount();
  const { network } = useGetNetworkConfig();

  // Memoize expensive calculations
  const formattedBalance = useMemo(() => {
    return formatAmount({
      input: account.balance,
      decimals: network.decimals,
      digits: 4
    });
  }, [account.balance, network.decimals]);

  const accountSummary = useMemo(() => ({
    shortAddress: shortenAddress(account.address),
    hasBalance: parseFloat(account.balance) > 0,
    formattedBalance
  }), [account.address, account.balance, formattedBalance]);

  return (
    <div>
      <p>Address: {accountSummary.shortAddress}</p>
      <p>Balance: {accountSummary.formattedBalance}</p>
      <p>Has Balance: {accountSummary.hasBalance ? 'Yes' : 'No'}</p>
    </div>
  );
};
```

## Error Handling with Hooks

```typescript
const SafeAccountComponent = () => {
  const isLoggedIn = useGetIsLoggedIn();
  const account = useGetAccount();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoggedIn && !account.address) {
      setError('Failed to load account information');
    } else {
      setError(null);
    }
  }, [isLoggedIn, account.address]);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!isLoggedIn) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <p>Address: {account.address}</p>
      <p>Balance: {account.balance}</p>
    </div>
  );
};
```

## Best Practices

1. **Use Appropriate Hooks**: Choose the most specific hook for your needs
2. **Handle Loading States**: Account data may not be immediately available
3. **Memoize Expensive Operations**: Use `useMemo` for complex calculations
4. **Error Boundaries**: Implement error handling for hook failures
5. **Conditional Logic**: Always check login state before accessing account data
6. **Performance**: Avoid unnecessary re-renders by optimizing dependencies
7. **Custom Hooks**: Create reusable custom hooks for common patterns

## Common Anti-patterns to Avoid

1. **Don't access account data without checking login state**
2. **Don't assume hooks return data immediately**
3. **Don't create multiple instances of the same hook unnecessarily**
4. **Don't ignore loading and error states**
5. **Don't perform side effects directly in render functions**