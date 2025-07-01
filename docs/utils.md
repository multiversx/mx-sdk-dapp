# Utils

The SDK provides a comprehensive set of utility functions for common operations like formatting amounts, validating addresses, handling dates, and managing transactions.

## Account Utilities

### Address Operations

```typescript
import { 
  shortenAddress,
  isValidAddress,
  getAddressFromPublicKey
} from '@multiversx/sdk-dapp/out/utils/account';

// Shorten address for display
const shortAddress = shortenAddress('erd1abc...xyz', 6); // Shows first 6 and last 6 chars
console.log(shortAddress); // "erd1ab...xyz"

// Validate address format
const isValid = isValidAddress('erd1abc123...');
if (!isValid) {
  throw new Error('Invalid address format');
}

// Get address from public key
const publicKey = '0123456789abcdef...';
const address = getAddressFromPublicKey(publicKey);
```

### Account Refresh

```typescript
import { refreshAccount } from '@multiversx/sdk-dapp/out/utils/account/refreshAccount';

// Refresh account data from API
const refreshAccountData = async () => {
  try {
    await refreshAccount();
    console.log('Account data refreshed');
  } catch (error) {
    console.error('Failed to refresh account:', error);
  }
};

// Use before sending transactions
const sendTransactionSafely = async () => {
  await refreshAccount(); // Ensures latest nonce
  // Create and send transaction
};
```

## Amount and Number Formatting

### Format Amounts

```typescript
import { formatAmount } from '@multiversx/sdk-dapp/out/utils/operations/formatAmount';

// Basic formatting
const formatted = formatAmount({
  input: '1500000000000000000', // 1.5 EGLD in wei
  decimals: 18,
  digits: 4
});
console.log(formatted); // "1.5000"

// Advanced formatting options
const advancedFormat = formatAmount({
  input: '1234567890123456789',
  decimals: 18,
  digits: 2,
  showLastNonZeroDecimal: true,
  addCommas: true,
  showIsLessThanDecimalsLabel: true
});

// Format with token symbol
const withSymbol = formatAmount({
  input: '1000000000000000000',
  decimals: 18,
  digits: 4
}) + ' EGLD';
```

### Parse Amounts

```typescript
import { parseAmount } from '@multiversx/sdk-dapp/out/utils/operations/parseAmount';

// Convert human-readable amount to wei
const weiAmount = parseAmount('1.5', 18); // Converts 1.5 EGLD to wei
console.log(weiAmount); // "1500000000000000000"

// Parse with different decimals
const tokenAmount = parseAmount('100.25', 6); // For tokens with 6 decimals
```

### Number Utilities

```typescript
import { 
  addCommas,
  removeCommas,
  stringIsFloat,
  stringIsInteger
} from '@multiversx/sdk-dapp/out/utils/operations';

// Add thousand separators
const withCommas = addCommas('1234567.89');
console.log(withCommas); // "1,234,567.89"

// Remove commas
const withoutCommas = removeCommas('1,234,567.89');
console.log(withoutCommas); // "1234567.89"

// Validate number strings
const isFloat = stringIsFloat('123.45'); // true
const isInteger = stringIsInteger('123'); // true
```

## Date and Time Utilities

### Date Formatting

```typescript
import { 
  formatDate,
  getTimeAgo,
  convertTimestamp
} from '@multiversx/sdk-dapp/out/utils/dateTime';

// Format timestamp to readable date
const formatted = formatDate(1640995200); // Unix timestamp
console.log(formatted); // "Jan 1, 2022, 12:00:00 AM"

// Get relative time
const timeAgo = getTimeAgo(1640995200);
console.log(timeAgo); // "2 hours ago"

// Convert between timestamp formats
const jsTimestamp = convertTimestamp(1640995200, 'unix', 'js');
```

### Time Calculations

```typescript
import { 
  calculateTimeDifference,
  isTimestampExpired,
  addTimeToTimestamp
} from '@multiversx/sdk-dapp/out/utils/dateTime';

// Calculate difference between timestamps
const diff = calculateTimeDifference(timestamp1, timestamp2);
console.log(diff); // { days, hours, minutes, seconds }

// Check if timestamp is expired
const isExpired = isTimestampExpired(expirationTimestamp);

// Add time to timestamp
const futureTimestamp = addTimeToTimestamp(currentTimestamp, { hours: 24 });
```

## Transaction Utilities

### Transaction Processing

```typescript
import { 
  processTransactionAction,
  processTransactionAssets,
  getTransactionAmount
} from '@multiversx/sdk-dapp/out/utils/transactions';

// Process transaction to extract action
const action = processTransactionAction(transaction);
console.log(action); // "Transfer", "Smart Contract Call", etc.

// Extract assets from transaction
const assets = processTransactionAssets(transaction);
console.log(assets); // Array of tokens/NFTs involved

// Get transaction amount
const amount = getTransactionAmount(transaction);
console.log(amount); // Formatted amount with token info
```

### Transaction History

```typescript
import { 
  createTransactionsHistoryFromSessions,
  mapTransactionToListItem
} from '@multiversx/sdk-dapp/out/utils/transactions/getTransactionsHistory/helpers';

// Create transaction history from sessions
const history = createTransactionsHistoryFromSessions(sessions);

// Map transaction to display format
const listItem = mapTransactionToListItem(transaction);
console.log(listItem); // Formatted transaction for UI display
```

## Validation Utilities

### Address Validation

```typescript
import { isValidAddress } from '@multiversx/sdk-dapp/out/utils/validation/isValidAddress';

const validateUserInput = (address: string) => {
  if (!isValidAddress(address)) {
    throw new Error('Please enter a valid MultiversX address');
  }
  return address;
};
```

### Data Validation

```typescript
import { 
  isValidAmount,
  isValidGasLimit,
  isValidNonce
} from '@multiversx/sdk-dapp/out/utils/validation';

// Validate transaction inputs
const validateTransactionData = (data: any) => {
  if (!isValidAmount(data.amount)) {
    throw new Error('Invalid amount');
  }
  
  if (!isValidGasLimit(data.gasLimit)) {
    throw new Error('Invalid gas limit');
  }
  
  if (!isValidNonce(data.nonce)) {
    throw new Error('Invalid nonce');
  }
  
  return true;
};
```

## Visual Utilities

### Theme Management

```typescript
import { switchTheme } from '@multiversx/sdk-dapp/out/utils/visual/switchTheme';
import { ThemesEnum } from '@multiversx/sdk-dapp/out/types/theme.types';

// Switch between themes
const toggleTheme = () => {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === ThemesEnum.dark 
    ? ThemesEnum.light 
    : ThemesEnum.dark;
  
  switchTheme(newTheme);
};
```

### UI Helpers

```typescript
import { 
  getExplorerLink,
  getWalletLink,
  copyToClipboard
} from '@multiversx/sdk-dapp/out/utils/visual';

// Generate explorer links
const explorerUrl = getExplorerLink({
  type: 'transaction',
  value: transactionHash
});

const accountUrl = getExplorerLink({
  type: 'account',
  value: address
});

// Generate wallet links
const walletUrl = getWalletLink(address);

// Copy to clipboard
const handleCopy = async (text: string) => {
  try {
    await copyToClipboard(text);
    console.log('Copied to clipboard');
  } catch (error) {
    console.error('Failed to copy:', error);
  }
};
```

## Network Utilities

### Network Operations

```typescript
import { 
  getNetworkConfig,
  switchNetwork,
  isMainnet,
  isTestnet,
  isDevnet
} from '@multiversx/sdk-dapp/out/utils/network';

// Get current network configuration
const network = getNetworkConfig();
console.log(network.chainId, network.name);

// Check network type
if (isMainnet()) {
  console.log('Running on mainnet');
} else if (isTestnet()) {
  console.log('Running on testnet');
} else if (isDevnet()) {
  console.log('Running on devnet');
}
```

## Async Action Utilities

### Retry Logic

```typescript
import { retryMultipleTimes } from '@multiversx/sdk-dapp/out/utils/retryMultipleTimes';

// Retry failed operations
const fetchWithRetry = async () => {
  return retryMultipleTimes(
    async () => {
      const response = await fetch('/api/data');
      if (!response.ok) throw new Error('Request failed');
      return response.json();
    },
    {
      maxRetries: 3,
      delayMs: 1000,
      exponentialBackoff: true
    }
  );
};
```

### Async Operations

```typescript
import { 
  withTimeout,
  debounce,
  throttle
} from '@multiversx/sdk-dapp/out/utils/asyncActions';

// Add timeout to promises
const fetchWithTimeout = withTimeout(
  fetch('/api/data'),
  5000 // 5 seconds timeout
);

// Debounce function calls
const debouncedSearch = debounce((query: string) => {
  console.log('Searching for:', query);
}, 300);

// Throttle function calls
const throttledUpdate = throttle((data: any) => {
  console.log('Updating with:', data);
}, 1000);
```

## Decoder Utilities

### Data Decoding

```typescript
import { 
  decodeBase64,
  decodeHex,
  decodeTransactionData
} from '@multiversx/sdk-dapp/out/utils/decoders';

// Decode base64 data
const decoded = decodeBase64('SGVsbG8gV29ybGQ=');
console.log(decoded); // "Hello World"

// Decode hex data
const hexDecoded = decodeHex('48656c6c6f20576f726c64');
console.log(hexDecoded); // "Hello World"

// Decode transaction data
const transactionData = decodeTransactionData(transaction.data);
console.log(transactionData); // Decoded transaction payload
```

## Window Utilities

### Browser Detection

```typescript
import { 
  isBrowser,
  isMobile,
  isIOS,
  isAndroid,
  getBrowserName
} from '@multiversx/sdk-dapp/out/utils/window';

// Environment detection
if (isBrowser()) {
  console.log('Running in browser');
}

if (isMobile()) {
  console.log('Mobile device detected');
  
  if (isIOS()) {
    console.log('iOS device');
  } else if (isAndroid()) {
    console.log('Android device');
  }
}

// Get browser information
const browser = getBrowserName();
console.log('Browser:', browser);
```

### Window Operations

```typescript
import { 
  openInNewTab,
  copyToClipboard,
  getWindowDimensions
} from '@multiversx/sdk-dapp/out/utils/window';

// Open URL in new tab
openInNewTab('https://explorer.multiversx.com');

// Copy text to clipboard
const handleCopyAddress = async (address: string) => {
  try {
    await copyToClipboard(address);
    showSuccessMessage('Address copied!');
  } catch (error) {
    showErrorMessage('Failed to copy address');
  }
};

// Get window dimensions
const { width, height } = getWindowDimensions();
console.log(`Window size: ${width}x${height}`);
```

## Component Factory

### Dynamic Component Creation

```typescript
import { ComponentFactory } from '@multiversx/sdk-dapp/out/utils/ComponentFactory';

// Create components dynamically
const factory = new ComponentFactory();

const button = factory.createButton({
  text: 'Connect Wallet',
  onClick: handleConnect,
  variant: 'primary'
});

const modal = factory.createModal({
  title: 'Transaction Confirmation',
  content: 'Please confirm the transaction',
  onConfirm: handleConfirm,
  onCancel: handleCancel
});
```

## Custom Utility Patterns

### Utility Composition

```typescript
// Combine multiple utilities for complex operations
const processAccountData = (account: any) => {
  return {
    shortAddress: shortenAddress(account.address),
    formattedBalance: formatAmount({
      input: account.balance,
      decimals: 18,
      digits: 4
    }) + ' EGLD',
    isValid: isValidAddress(account.address),
    explorerLink: getExplorerLink({
      type: 'account',
      value: account.address
    })
  };
};

// Create reusable validation pipeline
const validateTransactionInputs = (inputs: any) => {
  const validations = [
    () => isValidAddress(inputs.receiver),
    () => isValidAmount(inputs.amount),
    () => isValidGasLimit(inputs.gasLimit)
  ];
  
  return validations.every(validate => validate());
};
```

### Error Handling Utilities

```typescript
// Create error handling wrapper
const withErrorHandling = <T extends any[], R>(
  fn: (...args: T) => R,
  errorHandler?: (error: Error) => void
) => {
  return (...args: T): R | undefined => {
    try {
      return fn(...args);
    } catch (error) {
      if (errorHandler) {
        errorHandler(error as Error);
      } else {
        console.error('Utility function error:', error);
      }
      return undefined;
    }
  };
};

// Usage
const safeFormatAmount = withErrorHandling(formatAmount, (error) => {
  console.error('Failed to format amount:', error);
});
```

## Best Practices

1. **Input Validation**: Always validate inputs before processing
2. **Error Handling**: Implement proper error handling for all utilities
3. **Type Safety**: Use TypeScript types for better development experience
4. **Performance**: Use memoization for expensive calculations
5. **Reusability**: Create composable utility functions
6. **Testing**: Test utility functions thoroughly
7. **Documentation**: Document complex utility functions

## Common Utility Combinations

### Transaction Display Helper

```typescript
const formatTransactionForDisplay = (transaction: any) => {
  return {
    hash: shortenAddress(transaction.hash, 8),
    sender: shortenAddress(transaction.sender),
    receiver: shortenAddress(transaction.receiver),
    amount: formatAmount({
      input: transaction.value,
      decimals: 18,
      digits: 4
    }),
    date: formatDate(transaction.timestamp),
    status: transaction.status,
    explorerLink: getExplorerLink({
      type: 'transaction',
      value: transaction.hash
    })
  };
};
```

### Account Summary Helper

```typescript
const createAccountSummary = (account: any, tokens: any[]) => {
  const totalValue = tokens.reduce((sum, token) => {
    const tokenValue = parseFloat(token.balance) * (token.price || 0);
    return sum + tokenValue;
  }, parseFloat(formatAmount({ input: account.balance, decimals: 18 })));

  return {
    address: account.address,
    shortAddress: shortenAddress(account.address),
    balance: formatAmount({ input: account.balance, decimals: 18 }),
    tokenCount: tokens.length,
    totalValue: totalValue.toFixed(2),
    isValid: isValidAddress(account.address)
  };
};
```