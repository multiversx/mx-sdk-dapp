# API Calls Documentation

## Overview
This folder contains API call functions and modules for the MultiversX SDK DApp project. These functions handle communication with the MultiversX blockchain API to fetch account data, transaction information, economics data, and more.

## Structure
The API calls are organized into logical modules:
- **Core files**: Main entry points and endpoint definitions
- **Account module**: Functions for fetching account information and scam data
- **Economics module**: Functions for fetching blockchain economics data
- **Transactions module**: Functions for fetching and managing transaction data

## Core Files

### `endpoints.ts`
**Purpose**: Defines all API endpoint constants used throughout the application.

**Main Functions**: Exports endpoint constants for various MultiversX API resources including:
- `ACCOUNTS_ENDPOINT`: Account-related endpoints
- `TRANSACTIONS_ENDPOINT`: Transaction-related endpoints
- `ECONOMICS_ENDPOINT`: Economics data endpoints
- `NETWORK_CONFIG_ENDPOINT`: Network configuration endpoints
- And many more...

**Usage Example**:
```typescript
import { ACCOUNTS_ENDPOINT, TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';

const accountUrl = `${apiAddress}/${ACCOUNTS_ENDPOINT}/${address}`;
const transactionsUrl = `${apiAddress}/${TRANSACTIONS_ENDPOINT}`;
```

### `index.ts`
**Purpose**: Main entry point that exports all API call modules.

**Main Functions**: Re-exports all modules for easy importing:
- Account module exports
- Configuration module exports
- Endpoints constants
- Tokens module exports
- Utils module exports
- WebSocket module exports

**Usage Example**:
```typescript
import { getAccountFromApi } from 'apiCalls';
```

**Note**: The economics module is not currently exported from the main index.ts.

## Account Module

### `account/getAccountFromApi.ts`
**Purpose**: Fetches account information from the MultiversX API.

**Main Functions**:
- `accountFetcher`: Internal function that makes the actual API call
- `getAccountFromApi`: Public function that fetches and returns account data

**Parameters**:
- `address`: The account address to fetch (optional)
- `baseURL`: The base URL for the API

**Returns**: `AccountType` object or `null` if the address is invalid or an error occurs

**Usage Example**:
```typescript
import { getAccountFromApi } from 'apiCalls/account/getAccountFromApi';

const account = await getAccountFromApi({
  address: 'erd1...',
  baseURL: 'https://api.multiversx.com'
});
```

**Dependencies**: 
- Uses `axiosInstance` from `apiCalls/utils/axiosInstance` for cross-window compatibility
- Uses `getCleanApiAddress` from `apiCalls/utils/getCleanApiAddress`
- Includes guardian info in the response via `withGuardianInfo=true` parameter

**Note**: This function is exported from the account module index.ts.

### `account/getScamAddressData.ts`
**Purpose**: Fetches scam information for a given address.

**Main Functions**:
- `getScamAddressData`: Fetches scam data and account code for verification

**Parameters**:
- `addressToVerify`: The address to check for scam information
- `baseURL`: The base URL for the API

**Returns**: Object containing `scamInfo` and `code` properties

**Usage Example**:
```typescript
import { getScamAddressData } from 'apiCalls/account/getScamAddressData';

const scamData = await getScamAddressData({
  addressToVerify: 'erd1...',
  baseURL: 'https://api.multiversx.com'
});
```

**Dependencies**: 
- Uses `axios` for HTTP requests
- Uses `getCleanApiAddress` from `apiCalls/utils`
- Uses `TIMEOUT` constant from `constants/index`

**Note**: This function is NOT exported from the account module index.ts.

### `account/index.ts`
**Purpose**: Exports account-related functions for easy importing.

**Main Functions**: Re-exports `getAccountFromApi` function.

**Note**: `getScamAddressData` is not exported from this index file.

## Economics Module

### `economics/getEconomics.ts`
**Purpose**: Fetches blockchain economics information including supply, price, and APR data.

**Main Functions**:
- `getEconomics`: Fetches economics data from the API

**Parameters**:
- `url`: Optional custom endpoint URL (defaults to `ECONOMICS_ENDPOINT`)
- `baseURL`: The base URL for the API

**Returns**: `EconomicsInfoType` object containing:
- `totalSupply`: Total token supply
- `circulatingSupply`: Circulating token supply
- `staked`: Total staked tokens
- `price`: Current token price
- `marketCap`: Market capitalization
- `apr`: Annual percentage rate
- `topUpApr`: Top-up APR

**Usage Example**:
```typescript
import { getEconomics } from 'apiCalls/economics/getEconomics';

const economics = await getEconomics({
  baseURL: 'https://api.multiversx.com'
});
```

**Dependencies**: 
- Uses `axios` for HTTP requests
- Uses `getCleanApiAddress` from `apiCalls/utils/getCleanApiAddress`
- Includes error handling that returns `null` on failure

**Note**: This function is NOT exported from the main index.ts and there is no index.ts file in the economics folder.

## Transactions Module

### `transactions/getTransactions.ts`
**Purpose**: Fetches transactions with various filtering and pagination options.

**Main Functions**:
- `getTransactions`: Fetches transactions based on specified criteria

**Parameters**:
- `apiAddress`: The API base address
- `apiTimeout`: Optional timeout for the request
- `sender`: Filter by sender address
- `receiver`: Filter by receiver address
- `page`: Page number for pagination (default: 1)
- `transactionSize`: Number of transactions per page (default: 15)
- `after`: Filter transactions after this timestamp
- `before`: Filter transactions before this timestamp
- `condition`: Search condition ('should' or 'must', default: 'should')
- `withScResults`: Include smart contract results (default: true)
- `withUsername`: Include username information
- `status`: Filter by transaction status
- `search`: Search term in transaction data

**Returns**: Promise resolving to an array of `ServerTransactionType` objects

**Usage Example**:
```typescript
import { getTransactions } from 'apiCalls/transactions/getTransactions';

const transactions = await getTransactions({
  apiAddress: 'https://api.multiversx.com',
  sender: 'erd1...',
  page: 1,
  transactionSize: 10,
  withScResults: true
});
```

**Dependencies**: 
- Uses `axios` for HTTP requests
- Uses `TRANSACTIONS_ENDPOINT` from `apiCalls/endpoints`
- Supports pagination via `from` and `size` parameters

### `transactions/getTransactionByHash.ts`
**Purpose**: Fetches a single transaction by its hash.

**Main Functions**:
- `getTransactionByHash`: Fetches transaction details for a specific hash

**Parameters**:
- `hash`: The transaction hash to fetch

**Returns**: Promise resolving to a `ServerTransactionType` object

**Usage Example**:
```typescript
import { getTransactionByHash } from 'apiCalls/transactions/getTransactionByHash';

const transaction = await getTransactionByHash('tx_hash_here');
```

**Dependencies**: 
- Uses `networkSelector` from `store/selectors` to get the API address
- Uses `getState` from `store/store`
- Sets a 10-second timeout for the request

### `transactions/getServerTransactionsByHashes.ts`
**Purpose**: Fetches multiple transactions by their hashes in a single request.

**Main Functions**:
- `getServerTransactionsByHashes`: Fetches transactions for multiple hashes

**Parameters**:
- `hashes`: Array of transaction hashes to fetch

**Returns**: Promise resolving to an array of `ServerTransactionType` objects

**Usage Example**:
```typescript
import { getServerTransactionsByHashes } from 'apiCalls/transactions/getServerTransactionsByHashes';

const transactions = await getServerTransactionsByHashes([
  'hash1',
  'hash2',
  'hash3'
]);
```

**Dependencies**: 
- Uses `networkSelector` from `store/selectors/networkSelectors` to get the API address
- Uses `getState` from `store/store`
- Includes smart contract results via `withScResults: true` parameter

### `transactions/getTransactionsByHashes.ts`
**Purpose**: Tracks and updates the status of pending transactions by comparing them with server data.

**Main Functions**:
- `getTransactionsByHashes`: Compares pending transactions with server data and updates their status

**Parameters**:
- `pendingTransactions`: Array of `SignedTransactionType` objects to track

**Returns**: Promise resolving to an array of `TrackedTransactionResultType` objects with updated status information

**Usage Example**:
```typescript
import { getTransactionsByHashes } from 'apiCalls/transactions/getTransactionsByHashes';

const trackedTransactions = await getTransactionsByHashes(pendingTransactions);
```

**Dependencies**: 
- Uses `getServerTransactionsByHashes` internally
- Compares transaction statuses and marks invalid transactions
- Updates transaction results and status change tracking

**Note**: There is no index.ts file in the transactions folder, so functions must be imported directly.

## Important Notes

### Error Handling
Most API call functions include try-catch blocks and return `null` or empty arrays when errors occur. Check the return values before using the data.

### Import Guidelines
- Always import functions directly from their specific files, not from index.ts files
- Example: `import { getAccountFromApi } from 'apiCalls/account/getAccountFromApi'`
- Avoid: `import { getAccountFromApi } from 'apiCalls/account'`

### Cross-Window Compatibility
Some functions use `axiosInstance` instead of regular `axios` to handle cross-window user interaction issues, particularly in the account module.

### Timeout Configuration
Most functions use the `TIMEOUT` constant from `constants/network.constants` or `constants/index`, while some have hardcoded timeouts (e.g., `getTransactionByHash` uses 10 seconds).

### Network Configuration
Functions that need API addresses typically use the network selector from the store to get the current network configuration. 