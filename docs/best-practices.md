# Best Practices

This guide outlines recommended patterns and practices for building robust MultiversX dApps with the SDK.

## Project Structure

### Recommended File Organization

```
src/
├── components/           # Reusable UI components
│   ├── transactions/    # Transaction-related components
│   ├── account/         # Account-related components
│   └── common/          # Shared components
├── pages/               # Page components
├── hooks/               # Custom hooks
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── constants/           # App-specific constants
└── services/            # Business logic services
```

## Initialization Best Practices

### 1. Proper App Initialization

```typescript
// ✅ Good: Initialize once at app startup
useEffect(() => {
  const initializeApp = async () => {
    try {
      await initApp(config);
      setIsInitialized(true);
    } catch (error) {
      console.error('Failed to initialize app:', error);
      setError(error.message);
    }
  };
  
  initializeApp();
}, []); // Empty dependency array

// ❌ Bad: Multiple initializations
useEffect(() => {
  initApp(config);
}, [config]); // Will reinitialize on config changes
```

### 2. Environment Configuration

```typescript
// ✅ Good: Use environment variables
const config: InitAppType = {
  dAppConfig: {
    environment: process.env.REACT_APP_ENVIRONMENT as EnvironmentsEnum,
    providers: {
      walletConnect: {
        walletConnectV2ProjectId: process.env.REACT_APP_WALLET_CONNECT_ID!
      }
    }
  }
};

// ❌ Bad: Hardcoded values
const config: InitAppType = {
  dAppConfig: {
    environment: EnvironmentsEnum.mainnet,
    providers: {
      walletConnect: {
        walletConnectV2ProjectId: 'hardcoded-project-id'
      }
    }
  }
};
```

## State Management

### 1. Use Proper Hooks

```typescript
// ✅ Good: Use specific hooks
const account = useGetAccount();
const isLoggedIn = useGetIsLoggedIn();
const { network } = useGetNetworkConfig();

// ❌ Bad: Direct store access in components
const store = getStore();
const account = store.getState().account;
```

### 2. Handle Loading States

```typescript
// ✅ Good: Handle all states
const AccountBalance = () => {
  const account = useGetAccount();
  const isLoggedIn = useGetIsLoggedIn();
  const [loading, setLoading] = useState(false);

  if (!isLoggedIn) {
    return <div>Please log in</div>;
  }

  if (!account.address) {
    return <div>Loading account...</div>;
  }

  return <div>Balance: {account.balance}</div>;
};

// ❌ Bad: No loading states
const AccountBalance = () => {
  const account = useGetAccount();
  return <div>Balance: {account.balance}</div>; // May show undefined
};
```

## Transaction Management

### 1. Always Refresh Account Before Transactions

```typescript
// ✅ Good: Refresh before transaction
const sendTransaction = async () => {
  try {
    await refreshAccount(); // Get latest nonce
    
    const transaction = new Transaction({
      nonce: BigInt(account.nonce),
      // ... other properties
    });
    
    // Sign and send transaction
  } catch (error) {
    console.error('Transaction failed:', error);
  }
};

// ❌ Bad: Use stale nonce
const sendTransaction = async () => {
  const transaction = new Transaction({
    nonce: BigInt(account.nonce), // May be outdated
    // ... other properties
  });
};
```

### 2. Proper Error Handling

```typescript
// ✅ Good: Comprehensive error handling
const sendTransaction = async () => {
  try {
    await refreshAccount();
    const signedTx = await provider.signTransactions([transaction]);
    const sentTx = await txManager.send(signedTx);
    const sessionId = await txManager.track(sentTx);
    return sessionId;
  } catch (error: any) {
    if (error.message?.includes('insufficient funds')) {
      throw new Error('Insufficient balance for transaction');
    } else if (error.message?.includes('nonce')) {
      throw new Error('Transaction nonce error. Please try again.');
    } else {
      throw new Error('Transaction failed. Please try again.');
    }
  }
};

// ❌ Bad: Generic error handling
const sendTransaction = async () => {
  try {
    // transaction logic
  } catch (error) {
    console.log('Error:', error); // Not helpful to users
  }
};
```

## Provider Management

### 1. Singleton Pattern for Managers

```typescript
// ✅ Good: Use getInstance()
const txManager = TransactionManager.getInstance();
const logoutManager = LogoutManager.getInstance();

// ❌ Bad: Creating new instances
const txManager = new TransactionManager(); // Don't do this
```

### 2. Proper Cleanup

```typescript
// ✅ Good: Cleanup in useEffect
useEffect(() => {
  const logoutManager = LogoutManager.getInstance();
  logoutManager.init();
  
  return () => {
    logoutManager.stop(); // Cleanup
  };
}, []);

// ❌ Bad: No cleanup
useEffect(() => {
  LogoutManager.getInstance().init();
}, []); // Memory leak
```

## Security Best Practices

### 1. Input Validation

```typescript
// ✅ Good: Validate all inputs
const validateTransactionInputs = (recipient: string, amount: string) => {
  if (!isValidAddress(recipient)) {
    throw new Error('Invalid recipient address');
  }
  
  if (!amount || parseFloat(amount) <= 0) {
    throw new Error('Amount must be greater than 0');
  }
  
  if (parseFloat(amount) > parseFloat(account.balance)) {
    throw new Error('Insufficient balance');
  }
};

// ❌ Bad: No validation
const sendTransaction = (recipient: string, amount: string) => {
  // Directly use inputs without validation
};
```

### 2. HTTPS Requirement

```typescript
// ✅ Good: Check for HTTPS
useEffect(() => {
  if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    console.warn('dApp should be served over HTTPS');
  }
}, []);
```

## Performance Optimization

### 1. Memoization

```typescript
// ✅ Good: Memoize expensive calculations
const formattedBalance = useMemo(() => {
  return formatAmount({
    input: account.balance,
    decimals: network.decimals,
    digits: 4
  });
}, [account.balance, network.decimals]);

// ❌ Bad: Recalculate on every render
const formattedBalance = formatAmount({
  input: account.balance,
  decimals: network.decimals,
  digits: 4
});
```

### 2. Conditional Rendering

```typescript
// ✅ Good: Early returns
const AccountInfo = () => {
  const isLoggedIn = useGetIsLoggedIn();
  
  if (!isLoggedIn) {
    return <LoginPrompt />;
  }
  
  return <AccountDetails />;
};

// ❌ Bad: Nested conditionals
const AccountInfo = () => {
  const isLoggedIn = useGetIsLoggedIn();
  
  return (
    <div>
      {isLoggedIn ? (
        <AccountDetails />
      ) : (
        <LoginPrompt />
      )}
    </div>
  );
};
```

## Error Handling

### 1. Error Boundaries

```typescript
// ✅ Good: Use error boundaries
<ErrorBoundary>
  <App />
</ErrorBoundary>

// ❌ Bad: No error boundaries
<App /> // Unhandled errors crash the app
```

### 2. User-Friendly Messages

```typescript
// ✅ Good: User-friendly error messages
const getErrorMessage = (error: any) => {
  if (error.message?.includes('User denied')) {
    return 'Transaction was cancelled by user';
  }
  if (error.message?.includes('insufficient funds')) {
    return 'Insufficient balance for this transaction';
  }
  return 'Transaction failed. Please try again.';
};

// ❌ Bad: Technical error messages
const getErrorMessage = (error: any) => {
  return error.message; // May be confusing to users
};
```

## Testing

### 1. Mock SDK Dependencies

```typescript
// ✅ Good: Mock SDK hooks for testing
jest.mock('@multiversx/sdk-dapp/out/react/account/useGetAccount', () => ({
  useGetAccount: () => mockAccountData
}));

// ❌ Bad: Test with real SDK
// Tests become flaky and dependent on network
```

### 2. Test Error States

```typescript
// ✅ Good: Test error scenarios
test('handles transaction failure', async () => {
  mockProvider.signTransactions.mockRejectedValue(new Error('User denied'));
  
  render(<TransactionForm />);
  // Test error handling
});

// ❌ Bad: Only test happy path
test('sends transaction successfully', async () => {
  // Only test success case
});
```

## Code Organization

### 1. Custom Hooks

```typescript
// ✅ Good: Create reusable hooks
export const useFormattedBalance = () => {
  const account = useGetAccount();
  const { network } = useGetNetworkConfig();
  
  return useMemo(() => {
    return formatAmount({
      input: account.balance,
      decimals: network.decimals
    });
  }, [account.balance, network.decimals]);
};

// ❌ Bad: Duplicate logic in components
```

### 2. Type Safety

```typescript
// ✅ Good: Use proper types
interface TransactionFormProps {
  onSubmit: (data: TransactionData) => Promise<void>;
  loading: boolean;
  error?: string;
}

// ❌ Bad: Use any types
interface TransactionFormProps {
  onSubmit: (data: any) => any;
  loading: any;
  error?: any;
}
```

## Deployment

### 1. Environment Configuration

```typescript
// ✅ Good: Environment-specific configs
const getConfig = (): InitAppType => {
  const environment = process.env.REACT_APP_ENVIRONMENT as EnvironmentsEnum;
  
  return {
    dAppConfig: {
      environment,
      nativeAuth: environment !== EnvironmentsEnum.devnet,
      // ... other environment-specific settings
    }
  };
};

// ❌ Bad: Same config for all environments
```

### 2. Build Optimization

```typescript
// ✅ Good: Code splitting
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const TransactionPage = lazy(() => import('./pages/TransactionPage'));

// ❌ Bad: Import everything upfront
import { DashboardPage } from './pages/DashboardPage';
import { TransactionPage } from './pages/TransactionPage';
```

## Common Pitfalls to Avoid

1. **Don't call initApp multiple times**
2. **Don't ignore loading states**
3. **Don't use outdated nonces for transactions**
4. **Don't hardcode network-specific values**
5. **Don't forget to handle provider errors**
6. **Don't skip input validation**
7. **Don't create manager instances directly**
8. **Don't forget cleanup in useEffect**

Following these best practices will help you build more reliable, maintainable, and user-friendly MultiversX dApps.