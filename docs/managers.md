# Managers

The SDK provides several manager classes that handle complex UI interactions and state management. These managers encapsulate business logic and provide clean APIs for common dApp operations.

## TransactionManager

The `TransactionManager` handles transaction sending, tracking, and status management.

### Basic Usage

```typescript
import { TransactionManager } from '@multiversx/sdk-dapp/out/managers/TransactionManager';

const txManager = TransactionManager.getInstance();

// Send transactions
const sentTransactions = await txManager.send(signedTransactions);

// Track transactions
const sessionId = await txManager.track(sentTransactions, {
  transactionsDisplayInfo: {
    processingMessage: 'Processing transaction...',
    successMessage: 'Transaction successful!',
    errorMessage: 'Transaction failed'
  }
});
```

### Advanced Configuration

```typescript
// Set global callbacks
txManager.setCallbacks({
  onSuccess: async (sessionId: string) => {
    console.log('Transaction session successful:', sessionId);
    await updateUserInterface();
    await logAnalytics('transaction_success', { sessionId });
  },
  onFail: async (sessionId: string) => {
    console.log('Transaction session failed:', sessionId);
    await logAnalytics('transaction_failure', { sessionId });
  }
});

// Send with custom options
const sessionId = await txManager.track(sentTransactions, {
  disableToasts: false,
  transactionsDisplayInfo: {
    processingMessage: 'Swapping tokens...',
    successMessage: 'Swap completed successfully!',
    errorMessage: 'Swap failed. Please try again.',
    transactionDuration: 120000 // 2 minutes
  },
  sessionInformation: {
    type: 'token-swap',
    fromToken: 'EGLD',
    toToken: 'USDC',
    amount: '1.5'
  }
});
```

## UnlockPanelManager

The `UnlockPanelManager` provides a unified interface for wallet connection with all supported providers.

### Basic Setup

```typescript
import { UnlockPanelManager } from '@multiversx/sdk-dapp/out/managers/UnlockPanelManager';

const unlockPanelManager = UnlockPanelManager.init({
  loginHandler: ({ type, anchor }) => {
    console.log('Logged in with provider:', type);
    navigate('/dashboard');
  },
  onClose: () => {
    console.log('Unlock panel closed');
  }
});

// Open the unlock panel
const handleConnect = () => {
  unlockPanelManager.openUnlockPanel();
};
```

### Advanced Configuration

```typescript
const unlockPanelManager = UnlockPanelManager.init({
  loginHandler: async ({ type, anchor }) => {
    console.log('Login initiated with:', type);
    
    // Custom logic based on provider type
    switch (type) {
      case 'extension':
        await handleExtensionLogin();
        break;
      case 'walletConnect':
        await handleWalletConnectLogin();
        break;
      case 'ledger':
        await handleLedgerLogin(anchor);
        break;
      default:
        console.log('Unknown provider type:', type);
    }
    
    // Navigate after successful login
    navigate('/dashboard');
  },
  onClose: () => {
    // Track analytics
    analytics.track('wallet_connection_cancelled');
  },
  // Custom provider configuration
  customProviders: [
    {
      name: 'My Custom Wallet',
      type: 'custom',
      iconUrl: '/custom-wallet-icon.svg',
      constructor: async (options) => new CustomWalletProvider(options)
    }
  ]
});
```

## LogoutManager

The `LogoutManager` handles automatic logout functionality, particularly for native authentication token expiration.

### Basic Usage

```typescript
import { LogoutManager } from '@multiversx/sdk-dapp/out/managers/LogoutManager/LogoutManager';

// Initialize (usually done automatically in initApp)
const logoutManager = LogoutManager.getInstance();
logoutManager.init();

// Stop automatic logout
logoutManager.stop();

// Manual logout
const handleLogout = async () => {
  const provider = getAccountProvider();
  await provider.logout();
  
  // Optional: Stop the logout manager
  logoutManager.stop();
};
```

### Configuration

```typescript
// Configure in initApp
const config: InitAppType = {
  // ... other config
  dAppConfig: {
    environment: EnvironmentsEnum.devnet,
    nativeAuth: {
      expirySeconds: 3600, // 1 hour
      tokenExpirationToastWarningSeconds: 300 // 5 minutes warning
    }
  }
};

// The LogoutManager will automatically show warning toasts
// and perform logout when the token expires
```

## NotificationsFeedManager

The `NotificationsFeedManager` handles the notifications feed UI for displaying transaction history.

### Basic Usage

```typescript
import { NotificationsFeedManager } from '@multiversx/sdk-dapp/out/managers/NotificationsFeedManager';

const notificationManager = NotificationsFeedManager.getInstance();

// Open notifications feed
const showNotifications = async () => {
  await notificationManager.openNotificationsFeed();
};

// Close notifications feed
const hideNotifications = () => {
  notificationManager.closeNotificationsFeed();
};
```

### Integration with Transaction Tracking

```typescript
// The notifications feed automatically displays tracked transactions
const sendTransactionWithNotifications = async () => {
  const txManager = TransactionManager.getInstance();
  
  // Send and track transaction
  const sentTx = await txManager.send(signedTransactions);
  const sessionId = await txManager.track(sentTx);
  
  // Transaction will automatically appear in notifications feed
  console.log('Transaction tracked with session ID:', sessionId);
  
  // Optionally open notifications feed to show progress
  await notificationManager.openNotificationsFeed();
};
```

## Internal Managers

The SDK includes several internal managers that handle specific functionality:

### ToastManager

Handles toast notifications throughout the application:

```typescript
import { ToastManager } from '@multiversx/sdk-dapp/out/managers/internal/ToastManager/ToastManager';

const toastManager = ToastManager.getInstance();

// Initialize with custom settings
await toastManager.init({
  successfulToastLifetime: 5000 // 5 seconds
});

// Show custom toasts
toastManager.showToast({
  type: 'success',
  message: 'Operation completed successfully!',
  duration: 3000
});

toastManager.showToast({
  type: 'error',
  message: 'Something went wrong',
  duration: 5000
});
```

### WalletConnectManager

Manages WalletConnect state and connections:

```typescript
import { WalletConnectManager } from '@multiversx/sdk-dapp/out/managers/internal/WalletConnectStateManager/WalletConnectStateManager';

const wcManager = WalletConnectManager.getInstance();

// Check connection status
const isConnected = wcManager.isConnected();

// Get session information
const session = wcManager.getSession();

// Disconnect
await wcManager.disconnect();
```

### PendingTransactionsStateManager

Manages pending transaction state:

```typescript
import { PendingTransactionsStateManager } from '@multiversx/sdk-dapp/out/managers/internal/PendingTransactionsStateManager/PendingTransactionsStateManager';

const pendingTxManager = PendingTransactionsStateManager.getInstance();

// Add pending transaction
pendingTxManager.addPendingTransaction(transaction);

// Remove pending transaction
pendingTxManager.removePendingTransaction(transactionHash);

// Get all pending transactions
const pendingTxs = pendingTxManager.getPendingTransactions();
```

## Manager Patterns

### Singleton Pattern

All managers follow the singleton pattern for consistent state management:

```typescript
// Always use getInstance() to get the manager instance
const txManager = TransactionManager.getInstance();
const logoutManager = LogoutManager.getInstance();
const notificationManager = NotificationsFeedManager.getInstance();

// Don't create new instances directly
// const txManager = new TransactionManager(); // ❌ Don't do this
```

### Initialization Pattern

Some managers require initialization:

```typescript
// Managers that require init()
const logoutManager = LogoutManager.getInstance();
logoutManager.init(); // Required for proper functionality

const toastManager = ToastManager.getInstance();
await toastManager.init({ successfulToastLifetime: 5000 });

// Managers that don't require init()
const txManager = TransactionManager.getInstance(); // Ready to use
const notificationManager = NotificationsFeedManager.getInstance(); // Ready to use
```

### Cleanup Pattern

Properly clean up managers when needed:

```typescript
// Component cleanup
useEffect(() => {
  const logoutManager = LogoutManager.getInstance();
  logoutManager.init();
  
  return () => {
    // Stop automatic logout when component unmounts
    logoutManager.stop();
  };
}, []);

// App cleanup
const cleanupManagers = () => {
  LogoutManager.getInstance().stop();
  // Other cleanup as needed
};
```

## Custom Manager Implementation

You can create custom managers following the same patterns:

```typescript
class CustomManager {
  private static instance: CustomManager | null = null;
  private isInitialized = false;

  public static getInstance(): CustomManager {
    if (!CustomManager.instance) {
      CustomManager.instance = new CustomManager();
    }
    return CustomManager.instance;
  }

  private constructor() {
    // Private constructor for singleton
  }

  public async init(config?: any): Promise<void> {
    if (this.isInitialized) return;
    
    // Initialization logic
    console.log('Initializing CustomManager with config:', config);
    
    this.isInitialized = true;
  }

  public stop(): void {
    if (!this.isInitialized) return;
    
    // Cleanup logic
    console.log('Stopping CustomManager');
    
    this.isInitialized = false;
  }

  public performAction(data: any): void {
    if (!this.isInitialized) {
      throw new Error('CustomManager not initialized');
    }
    
    // Manager logic
    console.log('Performing action with data:', data);
  }
}

// Usage
const customManager = CustomManager.getInstance();
await customManager.init({ setting: 'value' });
customManager.performAction({ data: 'example' });
```

## Manager Integration

### Complete dApp Setup

```typescript
// App initialization with all managers
const initializeApp = async () => {
  // Initialize SDK
  await initApp(config);
  
  // Setup managers
  const txManager = TransactionManager.getInstance();
  txManager.setCallbacks({
    onSuccess: handleTransactionSuccess,
    onFail: handleTransactionFailure
  });
  
  const logoutManager = LogoutManager.getInstance();
  logoutManager.init();
  
  const toastManager = ToastManager.getInstance();
  await toastManager.init({
    successfulToastLifetime: 5000
  });
  
  console.log('App initialized with all managers');
};

// Component integration
const App = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    initializeApp().then(() => {
      setIsInitialized(true);
    });
    
    return () => {
      // Cleanup on app unmount
      LogoutManager.getInstance().stop();
    };
  }, []);
  
  if (!isInitialized) {
    return <div>Initializing...</div>;
  }
  
  return <MainApp />;
};
```

## Best Practices

1. **Use Singletons**: Always use `getInstance()` to get manager instances
2. **Initialize Properly**: Call `init()` methods where required
3. **Clean Up**: Stop managers when they're no longer needed
4. **Error Handling**: Implement proper error handling for manager operations
5. **State Management**: Use managers for complex state that spans multiple components
6. **Separation of Concerns**: Keep business logic in managers, UI logic in components
7. **Testing**: Mock managers in tests for isolated component testing

## Troubleshooting

### Common Issues

**Manager not working:**
- Ensure `getInstance()` is used instead of direct instantiation
- Check if `init()` was called for managers that require it
- Verify the SDK was properly initialized with `initApp()`

**State not updating:**
- Managers may need to be initialized before use
- Check if proper cleanup is being performed
- Ensure React components are subscribed to state changes

**Memory leaks:**
- Always call `stop()` methods in cleanup functions
- Remove event listeners and subscriptions
- Clear intervals and timeouts in manager cleanup