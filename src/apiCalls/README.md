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
import { getAccountFromApi, getEconomics } from 'apiCalls';
```

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
import { getAccountFromApi } from 'apiCalls/account';

const account = await getAccountFromApi({
  address: 'erd1...',
  baseURL: 'https://api.multiversx.com'
});
```

**Dependencies**: Uses `axiosInstance` for cross-window compatibility and includes guardian info in the response.

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
import { getScamAddressData } from 'apiCalls/account';

const scamData = await getScamAddressData({
  addressToVerify: 'erd1...',
  baseURL: 'https://api.multiversx.com'
});
```

### `account/index.ts`
**Purpose**: Exports account-related functions for easy importing.

**Main Functions**: Re-exports `getAccountFromApi` function.

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
import { getEconomics } from 'apiCalls/economics';

const economics = await getEconomics({
  baseURL: 'https://api.multiversx.com'
});
```

**Dependencies**: Uses axios for HTTP requests and includes error handling.

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
- `condition`: Search condition ('should' or 'must')
- `withScResults`: Include smart contract results (default: true)
- `withUsername`: Include username information
- `status`: Filter by transaction status
- `search`: Search term in transaction data

**Returns**: Promise resolving to an array of `ServerTransactionType` objects

**Usage Example**:
```typescript
import { getTransactions } from 'apiCalls/transactions';

const transactions = await getTransactions({
  apiAddress: 'https://api.multiversx.com',
  sender: 'erd1...',
  page: 1,
  transactionSize: 10,
  withScResults: true
});
```

### `transactions/getTransactionByHash.ts`
**Purpose**: Fetches a single transaction by its hash.

**Main Functions**:
- `getTransactionByHash`: Fetches transaction details for a specific hash

**Parameters**:
- `hash`: The transaction hash to fetch

**Returns**: Promise resolving to a `ServerTransactionType` object

**Usage Example**:
```typescript
import { getTransactionByHash } from 'apiCalls/transactions';

const transaction = await getTransactionByHash('tx_hash_here');
```

**Dependencies**: Uses network selector from the store to get the API address.

### `transactions/getServerTransactionsByHashes.ts`
**Purpose**: Fetches multiple transactions by their hashes in a single request.

**Main Functions**:
- `getServerTransactionsByHashes`: Fetches transactions for multiple hashes

**Parameters**:
- `hashes`: Array of transaction hashes to fetch

**Returns**: Promise resolving to an array of `ServerTransactionType` objects

**Usage Example**:
```typescript
import { getServerTransactionsByHashes } from 'apiCalls/transactions';

const transactions = await getServerTransactionsByHashes([
  'hash1',
  'hash2',
  'hash3'
]);
```

**Dependencies**: Uses network selector from the store and includes smart contract results.

### `transactions/getTransactionsByHashes.ts`
**Purpose**: Tracks and updates the status of pending transactions by comparing them with server data.

**Main Functions**:
- `getTransactionsByHashes`: Compares pending transactions with server data and updates their status

**Parameters**:
- `pendingTransactions`: Array of `SignedTransactionType` objects to track

**Returns**: Promise resolving to an array of `TrackedTransactionResultType` objects with updated status information

**Usage Example**:
```typescript
import { getTransactionsByHashes } from 'apiCalls/transactions';

const trackedTransactions = await getTransactionsByHashes(pendingTransactions);
```

**Dependencies**: Uses `getServerTransactionsByHashes` internally and includes status comparison logic.

## Important Notes

### Error Handling
Most API call functions include try-catch blocks and return `null` or empty arrays when errors occur. Check the return values before using the data.

### Dependencies
- **axios**: Used for HTTP requests in most functions
- **axiosInstance**: Used for cross-window compatibility in account fetching
- **Store selectors**: Some functions use Redux store selectors to get network configuration
- **Type definitions**: All functions use TypeScript types from the `types` folder

### Timeouts
- Default timeout is defined in `constants/network.constants`
- Some functions allow custom timeout configuration
- `getTransactionByHash` uses a 10-second timeout

### Cross-Window Compatibility
The `accountFetcher` function uses `axiosInstance` instead of regular axios to handle cross-window user interaction issues.

### API Address Cleaning
Most functions use `getCleanApiAddress` utility to ensure proper API address formatting before making requests. 