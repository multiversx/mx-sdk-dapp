# Getting Started

This guide will help you get started with `@multiversx/sdk-dapp` and create your first MultiversX dApp.

## Installation

Install the package using npm or yarn:

```bash
npm install @multiversx/sdk-dapp
```

or

```bash
yarn add @multiversx/sdk-dapp
```

### Optional UI Components

If you need only the core behavior without additional UI components, you can skip the optional `@multiversx/sdk-dapp-ui` package:

```bash
# Create a .npmrc file
echo "@multiversx/sdk-dapp:omit-optional=true" > .npmrc

# Install the package
npm install @multiversx/sdk-dapp
```

## Basic Setup

### 1. Initialize the App

Before your application bootstraps, initialize the SDK with your configuration:

```typescript
// index.tsx
import { initApp } from '@multiversx/sdk-dapp/out/methods/initApp/initApp';
import type { InitAppType } from '@multiversx/sdk-dapp/out/methods/initApp/initApp.types';
import { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';

const config: InitAppType = {
  storage: { 
    getStorageCallback: () => sessionStorage // or localStorage
  },
  dAppConfig: {
    environment: EnvironmentsEnum.devnet, // devnet, testnet, or mainnet
    // Optional configurations
    nativeAuth: true, // Enable native authentication
    transactionTracking: {
      successfulToastLifetime: 5000,
      onSuccess: async (sessionId) => {
        console.log('Transaction successful:', sessionId);
      },
      onFail: async (sessionId) => {
        console.log('Transaction failed:', sessionId);
      }
    }
  }
};

// Initialize the app before rendering
initApp(config).then(() => {
  // Render your app here
  ReactDOM.render(<App />, document.getElementById('root'));
});
```

### 2. Create a Login Component

```typescript
// LoginComponent.tsx
import React from 'react';
import { UnlockPanelManager } from '@multiversx/sdk-dapp/out/managers/UnlockPanelManager';
import { useNavigate } from 'react-router-dom';

export const LoginComponent = () => {
  const navigate = useNavigate();

  const unlockPanelManager = UnlockPanelManager.init({
    loginHandler: () => {
      navigate('/dashboard');
    },
    onClose: () => {
      navigate('/');
    }
  });

  const handleConnect = () => {
    unlockPanelManager.openUnlockPanel();
  };

  return (
    <div>
      <h1>Welcome to My dApp</h1>
      <button onClick={handleConnect}>
        Connect Wallet
      </button>
    </div>
  );
};
```

### 3. Display Account Information

```typescript
// Dashboard.tsx
import React from 'react';
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import { getAccountProvider } from '@multiversx/sdk-dapp/out/providers/helpers/accountProvider';

export const Dashboard = () => {
  const account = useGetAccount();
  const { network } = useGetNetworkConfig();

  const handleLogout = async () => {
    const provider = getAccountProvider();
    await provider.logout();
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <p><strong>Address:</strong> {account.address}</p>
        <p><strong>Balance:</strong> {account.balance} {network.egldLabel}</p>
        <p><strong>Nonce:</strong> {account.nonce}</p>
      </div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
```

### 4. Send a Transaction

```typescript
// TransactionExample.tsx
import React from 'react';
import { Address, Transaction, TransactionPayload } from '@multiversx/sdk-core';
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import { getAccountProvider } from '@multiversx/sdk-dapp/out/providers/helpers/accountProvider';
import { TransactionManager } from '@multiversx/sdk-dapp/out/managers/TransactionManager';
import { refreshAccount } from '@multiversx/sdk-dapp/out/utils/account/refreshAccount';
import { GAS_PRICE, GAS_LIMIT } from '@multiversx/sdk-dapp/out/constants/mvx.constants';

export const TransactionExample = () => {
  const account = useGetAccount();
  const { network } = useGetNetworkConfig();

  const sendTransaction = async () => {
    try {
      // Refresh account to get latest nonce
      await refreshAccount();

      // Create transaction
      const transaction = new Transaction({
        value: BigInt('1000000000000000000'), // 1 EGLD
        data: new TransactionPayload('Hello MultiversX!'),
        receiver: Address.newFromBech32('erd1...'), // Replace with actual address
        gasLimit: BigInt(GAS_LIMIT),
        gasPrice: BigInt(GAS_PRICE),
        chainID: network.chainId,
        nonce: BigInt(account.nonce),
        sender: Address.newFromBech32(account.address),
        version: 1
      });

      // Sign transaction
      const provider = getAccountProvider();
      const signedTransactions = await provider.signTransactions([transaction]);

      // Send and track transaction
      const txManager = TransactionManager.getInstance();
      const sentTransactions = await txManager.send(signedTransactions);
      
      const sessionId = await txManager.track(sentTransactions, {
        transactionsDisplayInfo: {
          processingMessage: 'Processing transaction...',
          errorMessage: 'Transaction failed',
          successMessage: 'Transaction successful!'
        }
      });

      console.log('Transaction session ID:', sessionId);
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  return (
    <div>
      <h2>Send Transaction</h2>
      <button onClick={sendTransaction}>
        Send 1 EGLD
      </button>
    </div>
  );
};
```

## Environment Configuration

### Devnet Configuration

```typescript
const config: InitAppType = {
  storage: { getStorageCallback: () => sessionStorage },
  dAppConfig: {
    environment: EnvironmentsEnum.devnet,
    nativeAuth: true
  }
};
```

### Testnet Configuration

```typescript
const config: InitAppType = {
  storage: { getStorageCallback: () => sessionStorage },
  dAppConfig: {
    environment: EnvironmentsEnum.testnet,
    nativeAuth: true
  }
};
```

### Mainnet Configuration

```typescript
const config: InitAppType = {
  storage: { getStorageCallback: () => sessionStorage },
  dAppConfig: {
    environment: EnvironmentsEnum.mainnet,
    nativeAuth: true
  }
};
```

## Custom Network Configuration

You can override specific network parameters:

```typescript
const config: InitAppType = {
  storage: { getStorageCallback: () => sessionStorage },
  dAppConfig: {
    environment: EnvironmentsEnum.devnet,
    network: {
      walletAddress: 'https://devnet-wallet.multiversx.com',
      apiAddress: 'https://devnet-api.multiversx.com',
      explorerAddress: 'https://devnet-explorer.multiversx.com'
    }
  }
};
```

## HTTPS Requirement

⚠️ **Important**: Make sure your app runs on HTTPS, not HTTP, as some providers (like Extension and Ledger) will not work over HTTP.

## Next Steps

- Learn about [Initialization](./initialization.md) options
- Explore [Providers](./providers.md) for different wallet types
- Understand [Transaction Management](./transactions.md)
- Check out [React Hooks](./react-hooks.md) for React integration
- See [Examples](./examples.md) for common use cases