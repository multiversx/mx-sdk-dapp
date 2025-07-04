# Types

The SDK provides comprehensive TypeScript type definitions for all its functionality. This documentation covers the main types and interfaces you'll work with.

## Account Types

### AccountType

```typescript
interface AccountType {
  address: string;              // User's wallet address
  balance: string;              // EGLD balance in wei
  nonce: number;               // Current account nonce
  shard?: number;              // Shard number
  username?: string;           // Herotag username
  code?: string;               // Smart contract code (if account is a contract)
  codeHash?: string;           // Hash of the smart contract code
  rootHash?: string;           // Root hash of the account
  txCount?: number;            // Total transaction count
  scrCount?: number;           // Smart contract result count
  developerReward?: string;    // Developer rewards
  ownerAddress?: string;       // Owner address (for contracts)
  deployedAt?: number;         // Deployment timestamp (for contracts)
  isUpgradeable?: boolean;     // Whether contract is upgradeable
  isReadable?: boolean;        // Whether contract is readable
  isPayable?: boolean;         // Whether contract is payable
  isPayableBySmartContract?: boolean; // Whether contract accepts payments from other contracts
}
```

### LoginInfoType

```typescript
interface LoginInfoType {
  isLoggedIn: boolean;      // Whether user is logged in
  loginMethod: string;      // Provider type used for login
  expires: number;          // Token expiration timestamp
  loginToken?: string;      // Native auth token
  signature?: string;       // Login signature
  accessToken?: string;     // Access token
}
```

## Network Types

### NetworkType

```typescript
interface NetworkType {
  id: string;                    // Network identifier
  name: string;                  // Human-readable network name
  egldLabel: string;             // Token label (EGLD, xEGLD, etc.)
  walletAddress: string;         // Web wallet URL
  apiAddress: string;            // API endpoint URL
  explorerAddress: string;       // Explorer URL
  chainId: string;              // Chain identifier
  decimals: number;             // Token decimals (18)
  gasPerDataByte: number;       // Gas cost per data byte
  walletConnectDeepLink: string; // WalletConnect deep link
}
```

### CustomNetworkType

```typescript
interface CustomNetworkType {
  id?: string;
  name?: string;
  egldLabel?: string;
  walletAddress?: string;
  apiAddress?: string;          // Required for sovereign shards
  explorerAddress?: string;
  chainId?: string;
  decimals?: number;
  gasPerDataByte?: number;
  walletConnectDeepLink?: string;
}
```

## Transaction Types

### SignedTransactionType

```typescript
interface SignedTransactionType extends IPlainTransactionObject {
  hash: string;                 // Transaction hash
  status?: TransactionServerStatusesEnum | TransactionBatchStatusesEnum;
  inTransit?: boolean;         // Whether transaction is being processed
}
```

### TransactionsDisplayInfoType

```typescript
interface TransactionsDisplayInfoType {
  errorMessage?: string;        // Error message for failed transactions
  successMessage?: string;      // Success message for completed transactions
  processingMessage?: string;   // Message while transaction is processing
  submittedMessage?: string;    // Message when transaction is submitted
  transactionDuration?: number; // Expected duration in milliseconds
  timedOutMessage?: string;     // Message for timed out transactions
  invalidMessage?: string;      // Message for invalid transactions
  receivedMessage?: string;     // Message when transaction is received
}
```

### SessionTransactionType

```typescript
interface SessionTransactionType {
  transactions: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum | TransactionServerStatusesEnum;
  errorMessage?: string;
  transactionsDisplayInfo?: TransactionsDisplayInfoType;
  interpretedTransactions?: Record<string, ITransactionListItem>;
  sessionInformation?: any;     // Custom session data
}
```

## Provider Types

### IProvider Interface

```typescript
interface IProvider<T extends ProviderType = ProviderType> extends IDAppProviderBase {
  init: () => Promise<boolean>;
  login: (options?: { 
    callbackUrl?: string; 
    token?: string; 
  }) => Promise<{
    address: string;
    signature: string;
    multisig?: string;
    impersonate?: string;
    [key: string]: unknown;
  }>;
  logout: () => Promise<boolean>;
  cancelLogin?: () => void;
  setShouldShowConsentPopup?: (shouldShow: boolean) => void;
  getType: () => T;
  getAddress(): Promise<string | undefined>;
}
```

### ProviderType Enum

```typescript
const ProviderTypeEnum = {
  extension: 'extension',
  metamask: 'metamask',
  passkey: 'passkey',
  walletConnect: 'walletConnect',
  ledger: 'ledger',
  crossWindow: 'crossWindow',
  webview: 'webview',
  none: ''
} as const;

type ProviderType = 
  | (typeof ProviderTypeEnum)[keyof typeof ProviderTypeEnum]
  | (string & {}); // Allows custom providers
```

### ICustomProvider

```typescript
interface ICustomProvider<T extends ProviderType = ProviderType> {
  name: string;
  type: T;
  iconUrl?: string;
  constructor: (options?: {
    address?: string;
    anchor?: HTMLElement;
  }) => Promise<IProvider>;
}
```

## Configuration Types

### InitAppType

```typescript
interface InitAppType {
  storage?: {
    getStorageCallback: StorageCallback;
  };
  dAppConfig: DappConfigType;
  customProviders?: ICustomProvider[];
}
```

### DappConfigType

```typescript
type DappConfigType = EnvironmentDappConfigType | CustomNetworkDappConfigType;

interface EnvironmentDappConfigType extends BaseDappConfigType {
  environment: EnvironmentsEnum;
  network?: CustomNetworkType;
  transactionTracking?: TransactionTrackingConfigType;
}

interface CustomNetworkDappConfigType extends BaseDappConfigType {
  network: CustomNetworkType & { apiAddress: string };
  environment?: never;
  transactionTracking?: TransactionTrackingConfigType;
}
```

### BaseDappConfigType

```typescript
interface BaseDappConfigType {
  nativeAuth?: boolean | NativeAuthConfigType;
  providers?: {
    crossWindow?: CrossWindowConfig;
    walletConnect?: WalletConnectConfig;
  };
  theme?: `${ThemesEnum}`;
}
```

### TransactionTrackingConfigType

```typescript
interface TransactionTrackingConfigType {
  successfulToastLifetime?: number;
  onSuccess?: (sessionId: string) => Promise<void>;
  onFail?: (sessionId: string) => Promise<void>;
}
```

## Native Auth Types

### NativeAuthConfigType

```typescript
interface NativeAuthConfigType {
  origin?: string;              // Origin for native auth
  expirySeconds?: number;       // Token expiration time
  tokenExpirationToastWarningSeconds?: number; // Warning time before expiration
}
```

## WalletConnect Types

### WalletConnectConfig

```typescript
interface WalletConnectConfig {
  walletConnectV2ProjectId: string;
  walletConnectV2RelayAddress?: string;
  metadata?: {
    name: string;
    description: string;
    url: string;
    icons: string[];
  };
}
```

## Token Types

### TokenType

```typescript
interface TokenType {
  identifier: string;          // Token identifier
  name: string;               // Token name
  ticker: string;             // Token ticker/symbol
  owner: string;              // Token owner address
  decimals: number;           // Number of decimals
  supply: string;             // Total supply
  circulatingSupply: string;  // Circulating supply
  type: string;               // Token type (fungible, non-fungible, etc.)
  price?: number;             // Token price in USD
  marketCap?: number;         // Market capitalization
}
```

### NFTType

```typescript
interface NFTType {
  identifier: string;         // NFT identifier
  collection: string;         // Collection identifier
  name: string;              // NFT name
  nonce: number;             // NFT nonce
  type: string;              // NFT type
  url?: string;              // Metadata URL
  media?: Array<{
    url: string;
    originalUrl: string;
    thumbnailUrl: string;
    fileType: string;
    fileSize: number;
  }>;
  metadata?: {
    description?: string;
    attributes?: Array<{
      trait_type: string;
      value: string | number;
    }>;
  };
}
```

## Enum Types

### EnvironmentsEnum

```typescript
enum EnvironmentsEnum {
  mainnet = 'mainnet',
  testnet = 'testnet',
  devnet = 'devnet'
}
```

### ThemesEnum

```typescript
enum ThemesEnum {
  light = 'light',
  dark = 'dark'
}
```

### TransactionServerStatusesEnum

```typescript
enum TransactionServerStatusesEnum {
  pending = 'pending',
  success = 'success',
  failed = 'failed',
  invalid = 'invalid'
}
```

### TransactionBatchStatusesEnum

```typescript
enum TransactionBatchStatusesEnum {
  sent = 'sent',
  cancelled = 'cancelled',
  signed = 'signed'
}
```

## Utility Types

### FormatAmountType

```typescript
interface FormatAmountType {
  input: string;                    // Amount to format
  decimals: number;                 // Number of decimals
  digits?: number;                  // Number of digits to show
  showLastNonZeroDecimal?: boolean; // Show last non-zero decimal
  addCommas?: boolean;              // Add thousand separators
  showIsLessThanDecimalsLabel?: boolean; // Show "< 0.001" for very small amounts
}
```

### ParseAmountType

```typescript
interface ParseAmountType {
  input: string;    // Human-readable amount
  decimals: number; // Number of decimals to convert to
}
```

## Manager Types

### TransactionManagerTrackOptionsType

```typescript
interface TransactionManagerTrackOptionsType {
  disableToasts?: boolean;
  transactionsDisplayInfo?: TransactionsDisplayInfoType;
  sessionInformation?: any;
}
```

### UnlockPanelManagerType

```typescript
interface UnlockPanelManagerType {
  loginHandler: (params: {
    type: ProviderType;
    anchor?: HTMLElement;
  }) => void | Promise<void>;
  onClose?: () => void;
  customProviders?: ICustomProvider[];
}
```

## Store Types

### StoreType

```typescript
interface StoreType {
  account: AccountType;
  loginInfo: LoginInfoType;
  network: NetworkType;
  transactions: Record<string, SessionTransactionType>;
  toast: ToastType[];
  cache: Record<string, any>;
  ui: UIStateType;
  config: ConfigType;
}
```

### SelectorType

```typescript
type SelectorType<T> = (state: StoreType) => T;

// Example selectors
const accountSelector: SelectorType<AccountType> = (state) => state.account;
const networkSelector: SelectorType<NetworkType> = (state) => state.network;
const transactionsSelector: SelectorType<Record<string, SessionTransactionType>> = 
  (state) => state.transactions;
```

## API Response Types

### ApiResponseType

```typescript
interface ApiResponseType<T = any> {
  data: T;
  error?: string;
  code?: string;
}
```

### PaginatedResponseType

```typescript
interface PaginatedResponseType<T = any> {
  data: T[];
  count: number;
  from: number;
  size: number;
}
```

## Error Types

### ApiErrorType

```typescript
interface ApiErrorType extends Error {
  status: number;
  statusText: string;
  data?: any;
}
```

### ProviderErrorType

```typescript
interface ProviderErrorType extends Error {
  code?: string | number;
  data?: any;
  provider?: string;
}
```

## Usage Examples

### Type Guards

```typescript
// Type guard for checking transaction status
const isTransactionSuccessful = (
  status: TransactionServerStatusesEnum | TransactionBatchStatusesEnum
): status is TransactionServerStatusesEnum.success => {
  return status === TransactionServerStatusesEnum.success;
};

// Type guard for checking provider type
const isExtensionProvider = (type: ProviderType): type is 'extension' => {
  return type === ProviderTypeEnum.extension;
};
```

### Generic Types

```typescript
// Generic API call type
type ApiCall<T> = () => Promise<ApiResponseType<T>>;

// Generic hook return type
type HookReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

// Usage
const useAccountData: () => HookReturn<AccountType> = () => {
  // Hook implementation
};
```

### Utility Types

```typescript
// Pick specific fields from AccountType
type AccountSummary = Pick<AccountType, 'address' | 'balance' | 'nonce'>;

// Make all fields optional
type PartialNetworkConfig = Partial<NetworkType>;

// Exclude certain fields
type PublicAccountInfo = Omit<AccountType, 'code' | 'codeHash'>;

// Create union types
type TransactionStatus = 
  | TransactionServerStatusesEnum 
  | TransactionBatchStatusesEnum;
```

## Best Practices

1. **Use Proper Types**: Always use the provided types instead of `any`
2. **Type Guards**: Implement type guards for runtime type checking
3. **Generic Types**: Use generics for reusable type definitions
4. **Utility Types**: Leverage TypeScript utility types for type manipulation
5. **Interface Extension**: Extend interfaces when adding custom properties
6. **Enum Usage**: Use enums for constants and status values
7. **Strict Typing**: Enable strict TypeScript settings for better type safety

## Custom Type Extensions

### Extending Interfaces

```typescript
// Extend AccountType with custom properties
interface ExtendedAccountType extends AccountType {
  displayName?: string;
  avatar?: string;
  preferences?: {
    theme: ThemesEnum;
    notifications: boolean;
  };
}

// Extend TransactionsDisplayInfoType
interface CustomTransactionsDisplayInfoType extends TransactionsDisplayInfoType {
  customIcon?: string;
  customColor?: string;
}
```

### Creating Custom Types

```typescript
// Custom transaction type
interface CustomTransactionType extends SignedTransactionType {
  category: 'defi' | 'nft' | 'gaming' | 'other';
  tags: string[];
  metadata?: Record<string, any>;
}

// Custom provider configuration
interface CustomProviderConfig {
  name: string;
  type: string;
  enabled: boolean;
  settings: Record<string, any>;
}
```