# Network Methods

This document describes the utility functions available in the `src/methods/network` folder. Each method provides access to network-specific configuration or data for your dApp.

---

## getEgldLabel.ts

**Description:**
Returns the label for the native token of the current network (e.g., "EGLD").

**Usage:**
```typescript
import { getEgldLabel } from '@multiversx/sdk-dapp/out/methods/network/getEgldLabel';

const egldLabel = getEgldLabel();
```

**Returns:** `string`

**Example:**
```typescript
console.log(getEgldLabel()); // "EGLD"
```

---

## getExplorerAddress.ts

**Description:**
Returns the base URL for the network explorer, which can be used to construct links to addresses, transactions, etc.

**Usage:**
```typescript
import { getExplorerAddress } from '@multiversx/sdk-dapp/out/methods/network/getExplorerAddress';

const explorerUrl = getExplorerAddress();
```

**Returns:** `string`

**Example:**
```typescript
console.log(getExplorerAddress()); // "https://explorer.multiversx.com"
```

---

## getNetworkConfig.ts

**Description:**
Returns the current network configuration object, containing details such as chain ID, explorer address, and more.

**Usage:**
```typescript
import { getNetworkConfig } from '@multiversx/sdk-dapp/out/methods/network/getNetworkConfig';

const networkConfig = getNetworkConfig();
```

**Returns:** `NetworkConfigType`

**Example:**
```typescript
const config = getNetworkConfig();
console.log(config.chainId); // e.g., "1" for mainnet
```

---
