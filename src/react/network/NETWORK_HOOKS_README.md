# Network Hooks

This document describes the React hooks available in the `src/react/network` folder. These hooks provide reactive access to network configuration data for your dApp.

## Overview

The network hooks are React-specific implementations that provide reactive access to network configuration data stored in the sdk-dapp store. They are built on top of the `useSelector` hook and provide convenient access to network-related information such as chain ID, explorer address, EGLD label, and complete network configuration.

## Available Hooks

### useGetNetworkConfig

**Description:**
Returns the complete network configuration object from the store. This is the primary hook for accessing network data and is used by other network hooks internally.

**Usage:**
```typescript
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';

const MyComponent = () => {
  const networkConfig = useGetNetworkConfig();
  
  return (
    <div>
      <p>Network: {networkConfig.network.name}</p>
      <p>Chain ID: {networkConfig.network.chainId}</p>
      <p>API Address: {networkConfig.network.apiAddress}</p>
    </div>
  );
};
```

**Returns:** `NetworkSliceType`

**Structure:**
```typescript
interface NetworkSliceType {
  network: NetworkType;
}

interface NetworkType {
  id: string;                    // Network identifier (e.g., "mainnet", "devnet")
  chainId: string;               // Chain ID (e.g., "1" for mainnet, "D" for devnet)
  name: string;                  // Human-readable network name
  egldLabel: string;             // Native token label (e.g., "EGLD", "xEGLD")
  decimals: string;              // Token decimals
  digits: string;                // Display digits
  gasPerDataByte: string;        // Gas per data byte
  walletAddress: string;         // Wallet URL
  apiAddress: string;            // API endpoint URL
  explorerAddress: string;       // Explorer URL
  apiTimeout: string;            // API timeout in milliseconds
  xAliasAddress?: string;        // xAlias service URL
  roundDuration: number;         // Block round duration
  iframeWalletAddress?: string;  // Iframe wallet URL
  websocketUrl?: string;         // WebSocket URL
  gasStationMetadata?: Record<   // Gas station metadata
    number,
    { lastBlock?: number; fast: number; faster: number }
  >;
}
```

---

### useGetEgldLabel

**Description:**
Returns the label for the native token of the current network (e.g., "EGLD" for mainnet, "xEGLD" for devnet/testnet).

**Usage:**
```typescript
import { useGetEgldLabel } from '@multiversx/sdk-dapp/out/react/network/useGetEgldLabel';

const MyComponent = () => {
  const egldLabel = useGetEgldLabel();
  
  return (
    <div>
      <p>Balance: 100 {egldLabel}</p>
    </div>
  );
};
```

**Returns:** `string`

**Example Values:**
- Mainnet: `"EGLD"`
- Devnet/Testnet: `"xEGLD"`

---

### useGetExplorerAddress

**Description:**
Returns the base URL for the network explorer, which can be used to construct links to addresses, transactions, blocks, and other blockchain data.

**Usage:**
```typescript
import { useGetExplorerAddress } from '@multiversx/sdk-dapp/out/react/network/useGetExplorerAddress';

const MyComponent = () => {
  const explorerAddress = useGetExplorerAddress();
  
  const getTransactionUrl = (txHash: string) => {
    return `${explorerAddress}/transactions/${txHash}`;
  };
  
  return (
    <div>
      <a href={getTransactionUrl('abc123')}>
        View Transaction
      </a>
    </div>
  );
};
```

**Returns:** `string`

**Example Values:**
- Mainnet: `"https://explorer.multiversx.com"`
- Devnet: `"http://devnet-explorer.multiversx.com"`
- Testnet: `"http://testnet-explorer.multiversx.com"`

---


## Best Practices

1. **Use specific hooks when possible**: Instead of using `useGetNetworkConfig` and accessing properties, use the specific hooks like `useGetEgldLabel` for better performance and cleaner code.

2. **Handle loading states**: The hooks will return default values before the network is configured. Consider checking if the network is properly initialized:

```typescript
const networkConfig = useGetNetworkConfig();
const isConfigured = networkConfig.network.id !== 'not-configured';
```

3. **Memoize derived values**: If you need to compute values based on network data, consider using `useMemo`:

```typescript
import { useMemo } from 'react';
import { useGetExplorerAddress } from '@multiversx/sdk-dapp/out/react/network/useGetExplorerAddress';

const MyComponent = () => {
  const explorerAddress = useGetExplorerAddress();
  
  const transactionUrl = useMemo(() => {
    return `${explorerAddress}/transactions/${txHash}`;
  }, [explorerAddress, txHash]);
  
  return <a href={transactionUrl}>View Transaction</a>;
};
```


