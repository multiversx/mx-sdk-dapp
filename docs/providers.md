# Providers

Providers are the bridge between your dApp and various wallet solutions. The SDK supports multiple provider types, each offering different authentication methods and user experiences.

## Available Providers

### Extension Provider
For browser extension wallets (MultiversX DeFi Wallet):

```typescript
import { ProviderFactory } from '@multiversx/sdk-dapp/out/providers/ProviderFactory';
import { ProviderTypeEnum } from '@multiversx/sdk-dapp/out/providers/types/providerFactory.types';

const provider = await ProviderFactory.create({
  type: ProviderTypeEnum.extension
});
await provider.login();
```

### WalletConnect Provider
For mobile wallets using WalletConnect protocol:

```typescript
const provider = await ProviderFactory.create({
  type: ProviderTypeEnum.walletConnect,
  anchor: document.getElementById('qr-container') // Optional QR code container
});
await provider.login();
```

### Ledger Provider
For Ledger hardware wallets:

```typescript
const provider = await ProviderFactory.create({
  type: ProviderTypeEnum.ledger,
  anchor: document.getElementById('ledger-container') // Optional UI container
});
await provider.login();
```

### Cross-Window Provider
For web wallet integration:

```typescript
const provider = await ProviderFactory.create({
  type: ProviderTypeEnum.crossWindow
});
await provider.login();
```

### Metamask Provider
For Metamask Snap integration:

```typescript
const provider = await ProviderFactory.create({
  type: ProviderTypeEnum.metamask
});
await provider.login();
```

### Passkey Provider
For WebAuthn/Passkey authentication:

```typescript
const provider = await ProviderFactory.create({
  type: ProviderTypeEnum.passkey
});
await provider.login();
```

### Webview Provider
For mobile app webview integration:

```typescript
const provider = await ProviderFactory.create({
  type: ProviderTypeEnum.webview
});
await provider.login();
```

## Using UnlockPanelManager

The easiest way to handle multiple providers is using the `UnlockPanelManager`:

```typescript
import { UnlockPanelManager } from '@multiversx/sdk-dapp/out/managers/UnlockPanelManager';
import { useNavigate } from 'react-router-dom';

export const LoginComponent = () => {
  const navigate = useNavigate();

  const unlockPanelManager = UnlockPanelManager.init({
    loginHandler: ({ type, anchor }) => {
      console.log('Logged in with provider:', type);
      navigate('/dashboard');
    },
    onClose: () => {
      console.log('Login panel closed');
    }
  });

  return (
    <button onClick={() => unlockPanelManager.openUnlockPanel()}>
      Connect Wallet
    </button>
  );
};
```

## Advanced Login Handling

For custom login flows, you can handle the provider creation and login manually:

```typescript
import { ProviderFactory } from '@multiversx/sdk-dapp/out/providers/ProviderFactory';
import { ProviderTypeEnum } from '@multiversx/sdk-dapp/out/providers/types/providerFactory.types';

export const AdvancedLogin = () => {
  const handleExtensionLogin = async () => {
    try {
      const provider = await ProviderFactory.create({
        type: ProviderTypeEnum.extension
      });
      
      const { address, signature } = await provider.login();
      console.log('Logged in:', address, signature);
      
      // Handle successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleWalletConnectLogin = async () => {
    try {
      const provider = await ProviderFactory.create({
        type: ProviderTypeEnum.walletConnect
      });
      
      const { address, signature } = await provider.login();
      console.log('Logged in:', address, signature);
      
      navigate('/dashboard');
    } catch (error) {
      console.error('WalletConnect login failed:', error);
    }
  };

  return (
    <div>
      <button onClick={handleExtensionLogin}>
        Connect Extension
      </button>
      <button onClick={handleWalletConnectLogin}>
        Connect Mobile Wallet
      </button>
    </div>
  );
};
```

## Provider Methods

All providers implement the `IProvider` interface with these methods:

### `login(options?)`
Initiates the login process:

```typescript
const loginResult = await provider.login({
  callbackUrl: 'https://my-dapp.com/callback', // Optional
  token: 'custom-token' // Optional
});

// Returns: { address, signature, multisig?, impersonate?, ... }
```

### `logout()`
Logs out the user:

```typescript
await provider.logout();
```

### `signTransactions(transactions)`
Signs one or more transactions:

```typescript
import { Transaction } from '@multiversx/sdk-core';

const transactions = [/* your transactions */];
const signedTransactions = await provider.signTransactions(transactions);
```

### `signMessage(message)`
Signs a custom message:

```typescript
const message = 'Hello MultiversX!';
const signature = await provider.signMessage(message);
```

### `getAddress()`
Gets the current user's address:

```typescript
const address = await provider.getAddress();
```

## Provider-Specific Features

### Ledger Provider Features

The Ledger provider has additional methods for hardware wallet management:

```typescript
import { LedgerProviderStrategy } from '@multiversx/sdk-dapp/out/providers/strategies';

// Get Ledger app configuration
const config = await ledgerProvider.getAppConfiguration();

// Get multiple addresses (for address selection)
const addresses = await ledgerProvider.getAddresses(0, 5); // Start index, count

// Set address by index
await ledgerProvider.setAddressByIndex(0);
```

### WalletConnect Provider Features

```typescript
// Get session information
const session = await walletConnectProvider.getSession();

// Disconnect session
await walletConnectProvider.disconnect();
```

## Getting Current Provider

To get the currently active provider:

```typescript
import { getAccountProvider } from '@multiversx/sdk-dapp/out/providers/helpers/accountProvider';

const currentProvider = getAccountProvider();
if (currentProvider) {
  const address = await currentProvider.getAddress();
  console.log('Current user address:', address);
}
```

## Provider State Management

Check login state and provider type:

```typescript
import { useGetLoginInfo } from '@multiversx/sdk-dapp/out/react/loginInfo/useGetLoginInfo';

const LoginStatus = () => {
  const { isLoggedIn, loginMethod } = useGetLoginInfo();

  return (
    <div>
      <p>Logged in: {isLoggedIn ? 'Yes' : 'No'}</p>
      {isLoggedIn && <p>Provider: {loginMethod}</p>}
    </div>
  );
};
```

## Custom Providers

Create custom providers by implementing the `IProvider` interface:

```typescript
import { IProvider, ProviderType } from '@multiversx/sdk-dapp/out/providers/types/providerFactory.types';

class MyCustomProvider implements IProvider {
  private type: ProviderType = 'my-custom-provider';

  async init(): Promise<boolean> {
    // Initialize your provider
    return true;
  }

  async login(options?: { callbackUrl?: string; token?: string }) {
    // Implement login logic
    return {
      address: 'erd1...',
      signature: 'signature...'
    };
  }

  async logout(): Promise<boolean> {
    // Implement logout logic
    return true;
  }

  async signTransactions(transactions: Transaction[]) {
    // Implement transaction signing
    return signedTransactions;
  }

  async signMessage(message: string) {
    // Implement message signing
    return signature;
  }

  getType(): ProviderType {
    return this.type;
  }

  async getAddress(): Promise<string | undefined> {
    // Return current address
    return 'erd1...';
  }
}

// Register the custom provider
const customProvider = {
  name: 'My Custom Wallet',
  type: 'my-custom-provider',
  iconUrl: '/custom-wallet-icon.svg',
  constructor: async (options) => new MyCustomProvider()
};

// Use in initApp
initApp({
  // ... other config
  customProviders: [customProvider]
});
```

## Provider Configuration

### WalletConnect Configuration

Configure WalletConnect in your `initApp`:

```typescript
dAppConfig: {
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
  providers: {
    crossWindow: {
      walletUrl: 'https://wallet.multiversx.com',
      shouldUseWebViewProvider: false
    }
  }
}
```

## Error Handling

Handle provider-specific errors:

```typescript
import { WalletConnectV2Error } from '@multiversx/sdk-dapp/out/providers/strategies';

try {
  const provider = await ProviderFactory.create({
    type: ProviderTypeEnum.walletConnect
  });
  await provider.login();
} catch (error) {
  if (error.message === WalletConnectV2Error.invalidConfig) {
    console.error('WalletConnect configuration is invalid');
  } else if (error.message === 'Unable to create provider') {
    console.error('Provider creation failed');
  } else {
    console.error('Login failed:', error);
  }
}
```

## Provider Lifecycle

Understanding the provider lifecycle:

1. **Creation**: Provider is created using `ProviderFactory.create()`
2. **Initialization**: Provider's `init()` method is called
3. **Login**: User authenticates through the provider
4. **Active State**: Provider is set as the active account provider
5. **Usage**: Provider can sign transactions and messages
6. **Logout**: Provider is cleared and user is logged out

## Best Practices

1. **Error Handling**: Always wrap provider operations in try-catch blocks
2. **HTTPS Required**: Extension and Ledger providers require HTTPS
3. **User Experience**: Provide clear feedback during login processes
4. **Provider Detection**: Check if required providers are available before offering them
5. **Graceful Degradation**: Handle cases where providers are not available
6. **Session Management**: Properly handle login/logout state changes

## Troubleshooting

### Common Issues

**Extension not connecting:**
- Ensure MultiversX DeFi Wallet extension is installed
- Check that the website is running on HTTPS
- Verify the extension is unlocked

**WalletConnect not working:**
- Ensure valid project ID is configured
- Check that metadata is properly set
- Verify relay server is accessible

**Ledger connection issues:**
- Ensure Ledger device is unlocked
- Check that MultiversX app is open on the device
- Verify USB connection and permissions

**Provider not found:**
- Check that the provider type is correct
- Ensure custom providers are properly registered
- Verify provider dependencies are installed