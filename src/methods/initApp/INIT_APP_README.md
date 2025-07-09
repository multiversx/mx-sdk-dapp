# `initApp` Documentation

## Overview

`initApp` is the main initialization function for the MultiversX Front-End SDK (`sdk-dapp`). It sets up the core configuration for your dApp, including storage, network, providers, and transaction tracking. This function should be called before rendering your application to ensure all SDK features are properly initialized.

## When to Use

Call `initApp` at the very start of your application (e.g., in your main entry file such as `index.tsx` or `main.ts`). This ensures that all internal logic, providers, and store mechanisms are ready before any user interaction.

## Import

```typescript
import { initApp } from '@multiversx/sdk-dapp/out/methods/initApp/initApp';
import type { InitAppType } from '@multiversx/sdk-dapp/out/methods/initApp/initApp.types';
```

## Configuration

The `initApp` function accepts a configuration object of type `InitAppType`. The main configuration options are:

- **storage**: (required) How to persist session data (e.g., `sessionStorage`, `localStorage`).
- **dAppConfig**: (required) Main dApp settings, including environment, network, and transaction tracking.
- **customProviders**: (optional) Array of custom provider instances.
- **nativeAuth**: (optional) Native authentication settings.
- **other advanced options**: See the type definition for all available options.

### Example Configuration

```typescript
const config: InitAppType = {
  storage: { getStorageCallback: () => sessionStorage },
  dAppConfig: {
    environment: EnvironmentsEnum.devnet,
    // Optionally override network parameters
    // network: { walletAddress: 'https://devnet-wallet.multiversx.com' }
    // transactionTracking: { ... }
  },
  // customProviders: [myCustomProvider], // optional
  // nativeAuth: true // optional, or a config object
};
```

### Transaction Tracking Options

The `transactionTracking` property allows you to customize how transaction sessions are tracked and how users are notified of their status. It is part of the `dAppConfig` object.

**Type:**
```typescript
type TransactionTrackingConfigType = {
  successfulToastLifetime?: number; // Duration (ms) for which a successful transaction toast is shown
  onSuccess?: (sessionId: string) => Promise<void>; // Callback when a transaction session is successful
  onFail?: (sessionId: string) => Promise<void>;    // Callback when a transaction session fails
};
```

#### Example Usage

```typescript
const config: InitAppType = {
  // ...other config
  dAppConfig: {
    // ...other dAppConfig
    transactionTracking: {
      successfulToastLifetime: 5000, // Show success toast for 5 seconds
      onSuccess: async (sessionId) => {
        console.log('Transaction session successful', sessionId);
      },
      onFail: async (sessionId) => {
        console.log('Transaction session failed', sessionId);
      }
    }
  }
};
```

#### Description of Options

- **successfulToastLifetime**:  
  *(optional, number)*  
  The duration (in milliseconds) for which a successful transaction toast notification is displayed.

- **onSuccess**:  
  *(optional, function)*  
  A callback function that is called when a transaction session completes successfully. Receives the `sessionId` as an argument.

- **onFail**:  
  *(optional, function)*  
  A callback function that is called when a transaction session fails. Receives the `sessionId` as an argument.

## Usage Example

```typescript
import { initApp } from '@multiversx/sdk-dapp/out/methods/initApp/initApp';
import { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';
import { App } from './App';

const config = {
  storage: { getStorageCallback: () => sessionStorage },
  dAppConfig: {
    environment: EnvironmentsEnum.devnet
  }
};

initApp(config).then(() => {
  render(() => <App />, root!);
});
```

## Advanced Usage

- **Custom Providers**: Add your own provider implementations to the `customProviders` array.
- **Native Auth**: Enable and configure native authentication with the `nativeAuth` property.
- **Transaction Tracking**: Customize transaction tracking behavior via the `transactionTracking` property in `dAppConfig`.

## Notes

- Always call `initApp` before rendering your app or using any SDK features.
- The function returns a promise; ensure your app waits for initialization to complete.
- For more advanced configuration, refer to the `InitAppType` definition in `initApp.types.ts`.

## Type Definitions

See [`initApp.types.ts`](./initApp.types.ts) for the full configuration schema and advanced options.
