# Constants

The SDK provides a comprehensive set of constants for various blockchain operations, network configurations, and UI elements.

## MultiversX Constants

### Gas and Transaction Constants

```typescript
import {
  GAS_LIMIT,
  GAS_PRICE,
  GAS_PER_DATA_BYTE,
  GAS_PRICE_MODIFIER,
  MIN_GAS_LIMIT,
  ADDITIONAL_GAS_FOR_ESDT_TRANSFER,
  ADDITIONAL_GAS_FOR_ESDT_NFT_TRANSFER
} from '@multiversx/sdk-dapp/out/constants/mvx.constants';

// Example usage
const transaction = new Transaction({
  gasLimit: BigInt(GAS_LIMIT),
  gasPrice: BigInt(GAS_PRICE),
  // ... other properties
});

// For ESDT transfers, add additional gas
const esdtGasLimit = GAS_LIMIT + ADDITIONAL_GAS_FOR_ESDT_TRANSFER;

// For NFT transfers
const nftGasLimit = GAS_LIMIT + ADDITIONAL_GAS_FOR_ESDT_NFT_TRANSFER;
```

### Available Gas Constants

- `GAS_LIMIT`: Default gas limit for transactions (50,000)
- `GAS_PRICE`: Default gas price (1,000,000,000)
- `GAS_PER_DATA_BYTE`: Gas cost per data byte (1,500)
- `GAS_PRICE_MODIFIER`: Gas price modifier (0.01)
- `MIN_GAS_LIMIT`: Minimum gas limit (50,000)
- `ADDITIONAL_GAS_FOR_ESDT_TRANSFER`: Extra gas for ESDT transfers
- `ADDITIONAL_GAS_FOR_ESDT_NFT_TRANSFER`: Extra gas for NFT transfers

## Network Constants

### Network Configuration

```typescript
import {
  MAINNET_CONFIG,
  TESTNET_CONFIG,
  DEVNET_CONFIG
} from '@multiversx/sdk-dapp/out/constants/network.constants';

// Access network-specific configurations
console.log('Mainnet API:', MAINNET_CONFIG.apiAddress);
console.log('Testnet API:', TESTNET_CONFIG.apiAddress);
console.log('Devnet API:', DEVNET_CONFIG.apiAddress);
```

### Network Properties

Each network config contains:

- `id`: Network identifier
- `name`: Human-readable network name
- `egldLabel`: Token label (EGLD, xEGLD, etc.)
- `walletAddress`: Web wallet URL
- `apiAddress`: API endpoint URL
- `explorerAddress`: Explorer URL
- `chainId`: Chain identifier
- `decimals`: Token decimals (18)
- `gasPerDataByte`: Gas cost per data byte
- `walletConnectDeepLink`: WalletConnect deep link

## Ledger Constants

### Ledger Error Codes

```typescript
import {
  LEDGER_ERROR_CODES,
  LEDGER_APP_NAME,
  LEDGER_DERIVATION_PATH
} from '@multiversx/sdk-dapp/out/constants/ledger.constants';

// Handle Ledger errors
const handleLedgerError = (error: any) => {
  switch (error.statusCode) {
    case LEDGER_ERROR_CODES.USER_REJECTED:
      console.log('User rejected the transaction');
      break;
    case LEDGER_ERROR_CODES.APP_NOT_OPEN:
      console.log('MultiversX app not open on Ledger');
      break;
    case LEDGER_ERROR_CODES.DEVICE_LOCKED:
      console.log('Ledger device is locked');
      break;
    default:
      console.log('Unknown Ledger error:', error);
  }
};
```

### Ledger Error Codes List

- `USER_REJECTED`: User rejected the operation (0x6985)
- `APP_NOT_OPEN`: MultiversX app not open (0x6e00)
- `DEVICE_LOCKED`: Device is locked (0x5515)
- `WRONG_P1P2`: Wrong P1/P2 parameters (0x6b00)
- `WRONG_DATA_LENGTH`: Wrong data length (0x6c00)
- `INS_NOT_SUPPORTED`: Instruction not supported (0x6d00)
- `CLA_NOT_SUPPORTED`: Class not supported (0x6e00)
- `UNKNOWN_ERROR`: Unknown error (0x6f00)

## Provider Factory Constants

### Provider Types

```typescript
import {
  PROVIDER_TYPES,
  DEFAULT_PROVIDERS
} from '@multiversx/sdk-dapp/out/constants/providerFactory.constants';

// Available provider types
console.log('Available providers:', PROVIDER_TYPES);

// Default provider configuration
console.log('Default providers:', DEFAULT_PROVIDERS);
```

### Provider Type Enum

```typescript
import { ProviderTypeEnum } from '@multiversx/sdk-dapp/out/providers/types/providerFactory.types';

// All available provider types
const providerTypes = {
  EXTENSION: ProviderTypeEnum.extension,
  WALLET_CONNECT: ProviderTypeEnum.walletConnect,
  LEDGER: ProviderTypeEnum.ledger,
  CROSS_WINDOW: ProviderTypeEnum.crossWindow,
  METAMASK: ProviderTypeEnum.metamask,
  PASSKEY: ProviderTypeEnum.passkey,
  WEBVIEW: ProviderTypeEnum.webview,
  NONE: ProviderTypeEnum.none
};
```

## Storage Constants

### Storage Keys and Configuration

```typescript
import {
  STORAGE_KEYS,
  DEFAULT_STORAGE_CONFIG
} from '@multiversx/sdk-dapp/out/constants/storage.constants';

// Storage keys used by the SDK
console.log('Account key:', STORAGE_KEYS.account);
console.log('Login info key:', STORAGE_KEYS.loginInfo);
console.log('Network key:', STORAGE_KEYS.network);
console.log('Transactions key:', STORAGE_KEYS.transactions);
```

### Available Storage Keys

- `ACCOUNT`: Key for account data storage
- `LOGIN_INFO`: Key for login information storage
- `NETWORK`: Key for network configuration storage
- `TRANSACTIONS`: Key for transaction sessions storage
- `TOAST`: Key for toast notifications storage
- `CACHE`: Key for cached data storage

## Transaction Constants

### Transaction Status and Types

```typescript
import {
  TRANSACTION_STATUS,
  TRANSACTION_BATCH_ID_SEPARATOR,
  DEFAULT_TRANSACTION_TIMEOUT
} from '@multiversx/sdk-dapp/out/constants/transactions.constants';

// Transaction statuses
console.log('Pending status:', TRANSACTION_STATUS.PENDING);
console.log('Success status:', TRANSACTION_STATUS.SUCCESS);
console.log('Failed status:', TRANSACTION_STATUS.FAILED);

// Batch transaction separator
const batchId = `${sessionId}${TRANSACTION_BATCH_ID_SEPARATOR}${address}`;

// Default timeout for transactions (2 minutes)
const timeout = DEFAULT_TRANSACTION_TIMEOUT;
```

## WebSocket Constants

### WebSocket Configuration

```typescript
import {
  WEBSOCKET_EVENTS,
  WEBSOCKET_RECONNECT_INTERVAL,
  WEBSOCKET_MAX_RETRIES
} from '@multiversx/sdk-dapp/out/constants/websocket.constants';

// WebSocket event types
console.log('Transaction event:', WEBSOCKET_EVENTS.TRANSACTION);
console.log('Block event:', WEBSOCKET_EVENTS.BLOCK);
console.log('Account event:', WEBSOCKET_EVENTS.ACCOUNT);

// Connection configuration
console.log('Reconnect interval:', WEBSOCKET_RECONNECT_INTERVAL);
console.log('Max retries:', WEBSOCKET_MAX_RETRIES);
```

## WalletConnect Constants

### WalletConnect Configuration

```typescript
import {
  WALLET_CONNECT_V2_PROJECT_ID,
  WALLET_CONNECT_BRIDGE_URL,
  WALLET_CONNECT_DEEP_LINK
} from '@multiversx/sdk-dapp/out/constants/walletConnect.constants';

// WalletConnect configuration
const walletConnectConfig = {
  projectId: WALLET_CONNECT_V2_PROJECT_ID,
  bridgeUrl: WALLET_CONNECT_BRIDGE_URL,
  deepLink: WALLET_CONNECT_DEEP_LINK
};
```

## Browser Constants

### Browser Detection and Features

```typescript
import {
  IS_BROWSER,
  IS_MOBILE,
  USER_AGENT,
  SUPPORTED_BROWSERS
} from '@multiversx/sdk-dapp/out/constants/browser.constants';

// Environment detection
if (IS_BROWSER) {
  console.log('Running in browser');
}

if (IS_MOBILE) {
  console.log('Mobile device detected');
}

// Browser support check
const isSupportedBrowser = SUPPORTED_BROWSERS.includes(getBrowserName());
```

## Environment Enums

### Network Environments

```typescript
import { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';

// Available environments
const environments = {
  MAINNET: EnvironmentsEnum.mainnet,
  TESTNET: EnvironmentsEnum.testnet,
  DEVNET: EnvironmentsEnum.devnet
};

// Usage in configuration
const config = {
  environment: EnvironmentsEnum.devnet
};
```

### Transaction Status Enums

```typescript
import {
  TransactionServerStatusesEnum,
  TransactionBatchStatusesEnum
} from '@multiversx/sdk-dapp/out/types/enums.types';

// Server transaction statuses
const serverStatuses = {
  PENDING: TransactionServerStatusesEnum.pending,
  SUCCESS: TransactionServerStatusesEnum.success,
  FAILED: TransactionServerStatusesEnum.failed,
  INVALID: TransactionServerStatusesEnum.invalid
};

// Batch transaction statuses
const batchStatuses = {
  SENT: TransactionBatchStatusesEnum.sent,
  CANCELLED: TransactionBatchStatusesEnum.cancelled,
  SIGNED: TransactionBatchStatusesEnum.signed
};
```

## Theme Constants

### Theme Configuration

```typescript
import { ThemesEnum } from '@multiversx/sdk-dapp/out/types/theme.types';

// Available themes
const themes = {
  LIGHT: ThemesEnum.light,
  DARK: ThemesEnum.dark
};

// Usage in configuration
const config = {
  theme: ThemesEnum.dark
};
```

## Placeholder Constants

### Default Values and Placeholders

```typescript
import {
  DEFAULT_ADDRESS_PLACEHOLDER,
  DEFAULT_BALANCE_PLACEHOLDER,
  LOADING_PLACEHOLDER
} from '@multiversx/sdk-dapp/out/constants/placeholders.constants';

// Use placeholders for loading states
const AddressDisplay = ({ address, loading }) => (
  <span>
    {loading ? LOADING_PLACEHOLDER : address || DEFAULT_ADDRESS_PLACEHOLDER}
  </span>
);

const BalanceDisplay = ({ balance, loading }) => (
  <span>
    {loading ? LOADING_PLACEHOLDER : balance || DEFAULT_BALANCE_PLACEHOLDER}
  </span>
);
```

## UI Tag Constants

### UI Element Tags

```typescript
import { UITags } from '@multiversx/sdk-dapp/out/constants/UITags.enum';

// UI component tags for identification
const componentTags = {
  UNLOCK_PANEL: UITags.UNLOCK_PANEL,
  TRANSACTION_TOAST: UITags.TRANSACTION_TOAST,
  NOTIFICATIONS_FEED: UITags.NOTIFICATIONS_FEED,
  LEDGER_MODAL: UITags.LEDGER_MODAL
};
```

## Usage Examples

### Complete Transaction with Constants

```typescript
import { Transaction, Address, TransactionPayload } from '@multiversx/sdk-core';
import {
  GAS_LIMIT,
  GAS_PRICE,
  ADDITIONAL_GAS_FOR_ESDT_TRANSFER
} from '@multiversx/sdk-dapp/out/constants/mvx.constants';

const createTransaction = (account, network, isESDT = false) => {
  const gasLimit = isESDT 
    ? GAS_LIMIT + ADDITIONAL_GAS_FOR_ESDT_TRANSFER 
    : GAS_LIMIT;

  return new Transaction({
    value: BigInt(0),
    data: new TransactionPayload(''),
    receiver: Address.newFromBech32('erd1...'),
    gasLimit: BigInt(gasLimit),
    gasPrice: BigInt(GAS_PRICE),
    chainID: network.chainId,
    nonce: BigInt(account.nonce),
    sender: Address.newFromBech32(account.address),
    version: 1
  });
};
```

### Error Handling with Constants

```typescript
import { LEDGER_ERROR_CODES } from '@multiversx/sdk-dapp/out/constants/ledger.constants';
import { TransactionServerStatusesEnum } from '@multiversx/sdk-dapp/out/types/enums.types';

const handleErrors = (error, transactionStatus) => {
  // Handle Ledger errors
  if (error.statusCode === LEDGER_ERROR_CODES.USER_REJECTED) {
    return 'User cancelled the transaction';
  }

  // Handle transaction errors
  if (transactionStatus === TransactionServerStatusesEnum.failed) {
    return 'Transaction failed on blockchain';
  }

  return 'Unknown error occurred';
};
```

## Best Practices

1. **Use Constants**: Always use provided constants instead of hardcoded values
2. **Import Specifically**: Import only the constants you need to reduce bundle size
3. **Type Safety**: Use enum values for better type safety
4. **Environment Specific**: Use appropriate network constants for your environment
5. **Error Handling**: Leverage error code constants for robust error handling
6. **Gas Estimation**: Use gas constants as base values and adjust as needed