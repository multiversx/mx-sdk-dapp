# Initialization

The `initApp` function is the entry point for configuring your MultiversX dApp. It must be called before your application renders to ensure proper setup of storage, network, providers, and other core functionality.

## Basic Initialization

```typescript
import { initApp } from '@multiversx/sdk-dapp/out/methods/initApp/initApp';
import type { InitAppType } from '@multiversx/sdk-dapp/out/methods/initApp/initApp.types';
import { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';

const config: InitAppType = {
  storage: { 
    getStorageCallback: () => sessionStorage 
  },
  dAppConfig: {
    environment: EnvironmentsEnum.devnet
  }
};

initApp(config).then(() => {
  // Your app is ready to render
});
```

## Configuration Options

### Storage Configuration

Configure how the SDK stores data locally:

```typescript
// Use sessionStorage (default)
storage: { 
  getStorageCallback: () => sessionStorage 
}

// Use localStorage for persistent storage
storage: { 
  getStorageCallback: () => localStorage 
}

// Use custom storage implementation
storage: { 
  getStorageCallback: () => myCustomStorage 
}
```

### Environment Configuration

Set the network environment for your dApp:

```typescript
// Devnet (for development)
dAppConfig: {
  environment: EnvironmentsEnum.devnet
}

// Testnet (for testing)
dAppConfig: {
  environment: EnvironmentsEnum.testnet
}

// Mainnet (for production)
dAppConfig: {
  environment: EnvironmentsEnum.mainnet
}
```

### Custom Network Configuration

Override specific network parameters:

```typescript
dAppConfig: {
  environment: EnvironmentsEnum.devnet,
  network: {
    walletAddress: 'https://devnet-wallet.multiversx.com',
    apiAddress: 'https://devnet-api.multiversx.com',
    explorerAddress: 'https://devnet-explorer.multiversx.com',
    chainId: '1',
    name: 'Devnet',
    egldLabel: 'xEGLD',
    decimals: 18,
    gasPerDataByte: 1500,
    walletConnectDeepLink: 'https://maiar.page.link/?...'
  }
}
```

For sovereign shards, you must provide the `apiAddress`:

```typescript
dAppConfig: {
  network: {
    apiAddress: 'https://my-sovereign-api.com', // Required
    chainId: 'sovereign-1',
    name: 'My Sovereign Chain',
    egldLabel: 'SOV',
    // ... other custom properties
  }
  // Note: environment is not used with custom network
}
```

## Native Authentication

Enable native authentication for enhanced security:

```typescript
// Enable with default configuration
dAppConfig: {
  environment: EnvironmentsEnum.devnet,
  nativeAuth: true
}

// Custom native auth configuration
dAppConfig: {
  environment: EnvironmentsEnum.devnet,
  nativeAuth: {
    expirySeconds: 3600, // 1 hour
    tokenExpirationToastWarningSeconds: 300, // 5 minutes warning
    origin: 'https://my-dapp.com'
  }
}

// Disable native auth
dAppConfig: {
  environment: EnvironmentsEnum.devnet,
  nativeAuth: false
}
```

## Provider Configuration

Configure wallet providers:

### WalletConnect Configuration

```typescript
dAppConfig: {
  environment: EnvironmentsEnum.devnet,
  providers: {
    walletConnect: {
      walletConnectV2ProjectId: 'your-project-id',
      walletConnectV2RelayAddress: 'wss://relay.walletconnect.com',
      metadata: {
        name: 'My dApp',
        description: 'My awesome dApp',
        url: 'https://my-dapp.com',
        icons: ['https://my-dapp.com/icon.png']
      }
    }
  }
}
```

### Cross-Window Configuration

```typescript
dAppConfig: {
  environment: EnvironmentsEnum.devnet,
  providers: {
    crossWindow: {
      walletUrl: 'https://wallet.multiversx.com',
      shouldUseWebViewProvider: false
    }
  }
}
```

## Transaction Tracking

Configure transaction tracking and callbacks:

```typescript
dAppConfig: {
  environment: EnvironmentsEnum.devnet,
  transactionTracking: {
    // Toast lifetime in milliseconds
    successfulToastLifetime: 5000,
    
    // Callback when transaction session succeeds
    onSuccess: async (sessionId: string) => {
      console.log('Transaction successful:', sessionId);
      // Add your success logic here
      await logTransactionSuccess(sessionId);
    },
    
    // Callback when transaction session fails
    onFail: async (sessionId: string) => {
      console.log('Transaction failed:', sessionId);
      // Add your failure logic here
      await logTransactionFailure(sessionId);
    }
  }
}
```

## Theme Configuration

Set the default theme for your dApp:

```typescript
import { ThemesEnum } from '@multiversx/sdk-dapp/out/types/theme.types';

dAppConfig: {
  environment: EnvironmentsEnum.devnet,
  theme: ThemesEnum.dark // or ThemesEnum.light
}
```

## Custom Providers

Add custom wallet providers:

```typescript
import { ICustomProvider } from '@multiversx/sdk-dapp/out/providers/types/providerFactory.types';

const myCustomProvider: ICustomProvider = {
  name: 'My Custom Wallet',
  type: 'custom-wallet',
  iconUrl: '/custom-wallet-icon.svg',
  constructor: async (options) => {
    // Return your custom provider implementation
    return new MyCustomWalletProvider(options);
  }
};

const config: InitAppType = {
  storage: { getStorageCallback: () => sessionStorage },
  dAppConfig: {
    environment: EnvironmentsEnum.devnet
  },
  customProviders: [myCustomProvider]
};
```

## Complete Configuration Example

Here's a comprehensive configuration example:

```typescript
import { initApp } from '@multiversx/sdk-dapp/out/methods/initApp/initApp';
import type { InitAppType } from '@multiversx/sdk-dapp/out/methods/initApp/initApp.types';
import { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';
import { ThemesEnum } from '@multiversx/sdk-dapp/out/types/theme.types';

const config: InitAppType = {
  storage: { 
    getStorageCallback: () => localStorage 
  },
  dAppConfig: {
    environment: EnvironmentsEnum.mainnet,
    theme: ThemesEnum.dark,
    nativeAuth: {
      expirySeconds: 3600,
      tokenExpirationToastWarningSeconds: 300
    },
    providers: {
      walletConnect: {
        walletConnectV2ProjectId: 'your-project-id',
        metadata: {
          name: 'My dApp',
          description: 'Awesome MultiversX dApp',
          url: 'https://my-dapp.com',
          icons: ['https://my-dapp.com/icon.png']
        }
      },
      crossWindow: {
        walletUrl: 'https://wallet.multiversx.com'
      }
    },
    network: {
      walletAddress: 'https://wallet.multiversx.com',
      explorerAddress: 'https://explorer.multiversx.com'
    },
    transactionTracking: {
      successfulToastLifetime: 10000,
      onSuccess: async (sessionId) => {
        console.log('Transaction successful:', sessionId);
        await analytics.track('transaction_success', { sessionId });
      },
      onFail: async (sessionId) => {
        console.log('Transaction failed:', sessionId);
        await analytics.track('transaction_failure', { sessionId });
      }
    }
  },
  customProviders: [
    // Your custom providers here
  ]
};

// Initialize the app
initApp(config).then(() => {
  console.log('dApp initialized successfully');
  // Render your app
}).catch((error) => {
  console.error('Failed to initialize dApp:', error);
});
```

## Initialization Flow

When `initApp` is called, the following happens:

1. **Theme Setup**: Applies the specified theme
2. **Store Initialization**: Sets up the Zustand store with the provided storage
3. **Network Configuration**: Configures the network based on environment or custom settings
4. **Native Auth Setup**: Configures native authentication if enabled
5. **Provider Configuration**: Sets up wallet provider configurations
6. **Toast Manager**: Initializes the toast notification system
7. **Custom Providers**: Registers any custom providers
8. **Session Restoration**: Restores previous login session if available
9. **Websocket Setup**: Sets up websocket listeners for logged-in users
10. **Transaction Tracking**: Enables transaction monitoring
11. **Logout Manager**: Initializes automatic logout for native auth expiration

## Best Practices

1. **Call Early**: Always call `initApp` before rendering your application
2. **Single Initialization**: Only call `initApp` once during your app's lifecycle
3. **Error Handling**: Always handle initialization errors appropriately
4. **Environment Variables**: Use environment variables for sensitive configuration like project IDs
5. **Storage Choice**: Use `localStorage` for persistent sessions, `sessionStorage` for temporary sessions

## Troubleshooting

### Common Issues

**App not connecting to wallet:**
- Ensure HTTPS is used (required for Extension and Ledger providers)
- Check that the correct environment is configured
- Verify WalletConnect project ID is valid

**Transactions not tracking:**
- Ensure `transactionTracking` is configured in `dAppConfig`
- Check that websocket connections are not blocked
- Verify network connectivity

**Custom providers not working:**
- Ensure custom provider implements the `IProvider` interface
- Check that the provider type is unique
- Verify the constructor returns a valid provider instance