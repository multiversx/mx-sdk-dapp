# API Calls

The SDK provides a comprehensive set of API functions for interacting with the MultiversX network, including account data, transactions, tokens, and network configuration.

## Account API Calls

### Get Account Information

```typescript
import { getAccountFromApi } from '@multiversx/sdk-dapp/out/apiCalls/account/getAccountFromApi';

const fetchAccountData = async (address: string) => {
  try {
    const accountData = await getAccountFromApi(address);
    
    return {
      address: accountData.address,
      balance: accountData.balance,
      nonce: accountData.nonce,
      shard: accountData.shard,
      username: accountData.username,
      // ... other account properties
    };
  } catch (error) {
    console.error('Failed to fetch account data:', error);
    throw error;
  }
};
```

### Get Account Tokens

```typescript
import { getAccountTokensFromApi } from '@multiversx/sdk-dapp/out/apiCalls/account/getAccountTokensFromApi';

const fetchAccountTokens = async (address: string) => {
  try {
    const tokens = await getAccountTokensFromApi(address);
    
    return tokens.map(token => ({
      identifier: token.identifier,
      name: token.name,
      ticker: token.ticker,
      balance: token.balance,
      decimals: token.decimals,
      type: token.type, // fungible, non-fungible, semi-fungible
      // ... other token properties
    }));
  } catch (error) {
    console.error('Failed to fetch account tokens:', error);
    return [];
  }
};
```

### Get Account NFTs

```typescript
import { getAccountNftsFromApi } from '@multiversx/sdk-dapp/out/apiCalls/account/getAccountNftsFromApi';

const fetchAccountNFTs = async (address: string) => {
  try {
    const nfts = await getAccountNftsFromApi(address, {
      size: 100, // Number of NFTs to fetch
      from: 0    // Starting index
    });
    
    return nfts.map(nft => ({
      identifier: nft.identifier,
      collection: nft.collection,
      name: nft.name,
      nonce: nft.nonce,
      type: nft.type,
      url: nft.url,
      media: nft.media,
      metadata: nft.metadata,
      // ... other NFT properties
    }));
  } catch (error) {
    console.error('Failed to fetch account NFTs:', error);
    return [];
  }
};
```

## Transaction API Calls

### Get Transaction by Hash

```typescript
import { getTransactionFromApi } from '@multiversx/sdk-dapp/out/apiCalls/transactions/getTransactionFromApi';

const fetchTransaction = async (txHash: string) => {
  try {
    const transaction = await getTransactionFromApi(txHash);
    
    return {
      hash: transaction.txHash,
      sender: transaction.sender,
      receiver: transaction.receiver,
      value: transaction.value,
      status: transaction.status,
      timestamp: transaction.timestamp,
      gasLimit: transaction.gasLimit,
      gasPrice: transaction.gasPrice,
      gasUsed: transaction.gasUsed,
      data: transaction.data,
      // ... other transaction properties
    };
  } catch (error) {
    console.error('Failed to fetch transaction:', error);
    throw error;
  }
};
```

### Get Account Transactions

```typescript
import { getAccountTransactionsFromApi } from '@multiversx/sdk-dapp/out/apiCalls/transactions/getAccountTransactionsFromApi';

const fetchAccountTransactions = async (address: string, options = {}) => {
  try {
    const transactions = await getAccountTransactionsFromApi(address, {
      size: 50,     // Number of transactions to fetch
      from: 0,      // Starting index
      sender: address, // Filter by sender
      receiver: address, // Filter by receiver
      status: 'success', // Filter by status
      ...options
    });
    
    return transactions.map(tx => ({
      hash: tx.txHash,
      sender: tx.sender,
      receiver: tx.receiver,
      value: tx.value,
      status: tx.status,
      timestamp: tx.timestamp,
      // ... other properties
    }));
  } catch (error) {
    console.error('Failed to fetch account transactions:', error);
    return [];
  }
};
```

## Token API Calls

### Get Token Information

```typescript
import { getTokenFromApi } from '@multiversx/sdk-dapp/out/apiCalls/tokens/getTokenFromApi';

const fetchTokenInfo = async (tokenId: string) => {
  try {
    const token = await getTokenFromApi(tokenId);
    
    return {
      identifier: token.identifier,
      name: token.name,
      ticker: token.ticker,
      owner: token.owner,
      decimals: token.decimals,
      supply: token.supply,
      circulatingSupply: token.circulatingSupply,
      type: token.type,
      // ... other token properties
    };
  } catch (error) {
    console.error('Failed to fetch token info:', error);
    throw error;
  }
};
```

### Get Token Price

```typescript
import { getTokenPriceFromApi } from '@multiversx/sdk-dapp/out/apiCalls/tokens/getTokenPriceFromApi';

const fetchTokenPrice = async (tokenId: string) => {
  try {
    const priceData = await getTokenPriceFromApi(tokenId);
    
    return {
      price: priceData.price,
      priceUsd: priceData.priceUsd,
      marketCap: priceData.marketCap,
      volume24h: priceData.volume24h,
      change24h: priceData.change24h,
      // ... other price properties
    };
  } catch (error) {
    console.error('Failed to fetch token price:', error);
    return null;
  }
};
```

## Network Configuration API

### Get Network Configuration

```typescript
import { getNetworkConfigFromApi } from '@multiversx/sdk-dapp/out/apiCalls/configuration/getNetworkConfigFromApi';

const fetchNetworkConfig = async () => {
  try {
    const config = await getNetworkConfigFromApi();
    
    return {
      chainId: config.erd_chain_id,
      gasPerDataByte: config.erd_gas_per_data_byte,
      minGasLimit: config.erd_min_gas_limit,
      minGasPrice: config.erd_min_gas_price,
      minTransactionVersion: config.erd_min_transaction_version,
      // ... other config properties
    };
  } catch (error) {
    console.error('Failed to fetch network config:', error);
    throw error;
  }
};
```

### Get Network Economics

```typescript
import { getEconomicsFromApi } from '@multiversx/sdk-dapp/out/apiCalls/economics/getEconomicsFromApi';

const fetchNetworkEconomics = async () => {
  try {
    const economics = await getEconomicsFromApi();
    
    return {
      totalSupply: economics.totalSupply,
      circulatingSupply: economics.circulatingSupply,
      staked: economics.staked,
      price: economics.price,
      marketCap: economics.marketCap,
      apr: economics.apr,
      topUpRewardsAPR: economics.topUpRewardsAPR,
      // ... other economics data
    };
  } catch (error) {
    console.error('Failed to fetch network economics:', error);
    throw error;
  }
};
```

## Utility API Functions

### Check Transaction Status

```typescript
import { getTransactionStatus } from '@multiversx/sdk-dapp/out/apiCalls/utils/getTransactionStatus';

const checkTransactionStatus = async (txHash: string) => {
  try {
    const status = await getTransactionStatus(txHash);
    
    return {
      status: status.status, // 'pending', 'success', 'failed', 'invalid'
      isCompleted: ['success', 'failed', 'invalid'].includes(status.status),
      isPending: status.status === 'pending',
      isSuccessful: status.status === 'success'
    };
  } catch (error) {
    console.error('Failed to check transaction status:', error);
    return { status: 'unknown', isCompleted: false, isPending: false, isSuccessful: false };
  }
};
```

### Validate Address

```typescript
import { validateAddressFromApi } from '@multiversx/sdk-dapp/out/apiCalls/utils/validateAddressFromApi';

const validateAddress = async (address: string) => {
  try {
    const validation = await validateAddressFromApi(address);
    
    return {
      isValid: validation.isValid,
      shard: validation.shard,
      isContract: validation.isContract,
      // ... other validation data
    };
  } catch (error) {
    console.error('Failed to validate address:', error);
    return { isValid: false };
  }
};
```

## WebSocket API

### Subscribe to Real-time Updates

```typescript
import { subscribeToWebsocketEvents } from '@multiversx/sdk-dapp/out/apiCalls/websocket/subscribeToWebsocketEvents';

const subscribeToAccountUpdates = (address: string) => {
  const unsubscribe = subscribeToWebsocketEvents({
    address,
    events: ['transactions', 'balance'],
    onMessage: (event) => {
      switch (event.type) {
        case 'transaction':
          console.log('New transaction:', event.data);
          break;
        case 'balance':
          console.log('Balance updated:', event.data);
          break;
        default:
          console.log('Unknown event:', event);
      }
    },
    onError: (error) => {
      console.error('WebSocket error:', error);
    },
    onClose: () => {
      console.log('WebSocket connection closed');
    }
  });

  return unsubscribe; // Call this to stop listening
};
```

## Batch API Calls

### Fetch Multiple Data Points

```typescript
const fetchAccountOverview = async (address: string) => {
  try {
    // Fetch multiple data points in parallel
    const [account, tokens, transactions] = await Promise.all([
      getAccountFromApi(address),
      getAccountTokensFromApi(address),
      getAccountTransactionsFromApi(address, { size: 10 })
    ]);

    return {
      account: {
        address: account.address,
        balance: account.balance,
        nonce: account.nonce
      },
      tokens: tokens.slice(0, 5), // Top 5 tokens
      recentTransactions: transactions.slice(0, 5) // Recent 5 transactions
    };
  } catch (error) {
    console.error('Failed to fetch account overview:', error);
    throw error;
  }
};
```

## Error Handling

### API Error Types

```typescript
import { ApiError } from '@multiversx/sdk-dapp/out/apiCalls/utils/ApiError';

const handleApiCall = async () => {
  try {
    const data = await getAccountFromApi('erd1...');
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      switch (error.status) {
        case 404:
          console.error('Account not found');
          break;
        case 429:
          console.error('Rate limit exceeded');
          break;
        case 500:
          console.error('Server error');
          break;
        default:
          console.error('API error:', error.message);
      }
    } else {
      console.error('Network error:', error);
    }
    throw error;
  }
};
```

### Retry Logic

```typescript
import { retryMultipleTimes } from '@multiversx/sdk-dapp/out/utils/retryMultipleTimes';

const fetchWithRetry = async (address: string) => {
  return retryMultipleTimes(
    () => getAccountFromApi(address),
    {
      maxRetries: 3,
      delayMs: 1000,
      exponentialBackoff: true
    }
  );
};
```

## Caching API Responses

### Basic Caching

```typescript
const cache = new Map();

const getCachedAccountData = async (address: string) => {
  const cacheKey = `account:${address}`;
  const cached = cache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < 30000) { // 30 seconds cache
    return cached.data;
  }
  
  const data = await getAccountFromApi(address);
  cache.set(cacheKey, {
    data,
    timestamp: Date.now()
  });
  
  return data;
};
```

## Custom API Endpoints

### Using Custom Network

```typescript
import { setApiAddress } from '@multiversx/sdk-dapp/out/apiCalls/utils/setApiAddress';

// Set custom API endpoint
setApiAddress('https://my-custom-api.com');

// Now all API calls will use the custom endpoint
const account = await getAccountFromApi('erd1...');
```

## Rate Limiting

### Handle Rate Limits

```typescript
const rateLimitedApiCall = async (apiFunction: Function, ...args: any[]) => {
  const maxRetries = 3;
  let retries = 0;
  
  while (retries < maxRetries) {
    try {
      return await apiFunction(...args);
    } catch (error) {
      if (error.status === 429 && retries < maxRetries - 1) {
        const delay = Math.pow(2, retries) * 1000; // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, delay));
        retries++;
      } else {
        throw error;
      }
    }
  }
};
```

## Best Practices

1. **Error Handling**: Always implement proper error handling for API calls
2. **Caching**: Cache frequently accessed data to reduce API calls
3. **Rate Limiting**: Respect API rate limits and implement backoff strategies
4. **Parallel Requests**: Use `Promise.all()` for independent API calls
5. **Timeout Handling**: Set appropriate timeouts for API requests
6. **Data Validation**: Validate API response data before using it
7. **Retry Logic**: Implement retry logic for transient failures

## Common Patterns

### Real-time Account Monitor

```typescript
class AccountMonitor {
  private address: string;
  private intervalId: NodeJS.Timeout | null = null;
  private websocketUnsubscribe: (() => void) | null = null;

  constructor(address: string) {
    this.address = address;
  }

  start() {
    // Periodic polling as fallback
    this.intervalId = setInterval(async () => {
      try {
        const account = await getAccountFromApi(this.address);
        this.onAccountUpdate(account);
      } catch (error) {
        console.error('Failed to fetch account:', error);
      }
    }, 30000); // Every 30 seconds

    // WebSocket for real-time updates
    this.websocketUnsubscribe = subscribeToAccountUpdates(this.address);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    
    if (this.websocketUnsubscribe) {
      this.websocketUnsubscribe();
      this.websocketUnsubscribe = null;
    }
  }

  private onAccountUpdate(account: any) {
    console.log('Account updated:', account);
    // Handle account updates
  }
}
```

### Transaction Tracker

```typescript
class TransactionTracker {
  async trackTransaction(txHash: string): Promise<any> {
    const maxAttempts = 60; // 5 minutes with 5-second intervals
    let attempts = 0;

    while (attempts < maxAttempts) {
      try {
        const transaction = await getTransactionFromApi(txHash);
        
        if (transaction.status !== 'pending') {
          return transaction;
        }
        
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
        attempts++;
      } catch (error) {
        if (attempts === maxAttempts - 1) {
          throw error;
        }
        await new Promise(resolve => setTimeout(resolve, 5000));
        attempts++;
      }
    }
    
    throw new Error('Transaction tracking timeout');
  }
}
```