# Account Management

The SDK provides comprehensive account management functionality to access user account data, monitor balance changes, and handle login state.

## Getting Account Information

### Using React Hooks

```typescript
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetAccountInfo } from '@multiversx/sdk-dapp/out/react/account/useGetAccountInfo';
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';
import { useGetLatestNonce } from '@multiversx/sdk-dapp/out/react/account/useGetLatestNonce';

const AccountInfo = () => {
  const account = useGetAccount();
  const accountInfo = useGetAccountInfo();
  const isLoggedIn = useGetIsLoggedIn();
  const latestNonce = useGetLatestNonce();

  if (!isLoggedIn) {
    return <div>Please log in to view account information</div>;
  }

  return (
    <div>
      <h2>Account Information</h2>
      <p><strong>Address:</strong> {account.address}</p>
      <p><strong>Balance:</strong> {account.balance} EGLD</p>
      <p><strong>Nonce:</strong> {account.nonce}</p>
      <p><strong>Latest Nonce:</strong> {latestNonce}</p>
      <p><strong>Shard:</strong> {account.shard}</p>
      <p><strong>Username:</strong> {account.username || 'Not set'}</p>
    </div>
  );
};
```

### Using Methods (Non-React)

```typescript
import { getAccount } from '@multiversx/sdk-dapp/out/methods/account/getAccount';
import { getAddress } from '@multiversx/sdk-dapp/out/methods/account/getAddress';
import { getIsLoggedIn } from '@multiversx/sdk-dapp/out/methods/account/getIsLoggedIn';
import { getLatestNonce } from '@multiversx/sdk-dapp/out/methods/account/getLatestNonce';

const checkAccountInfo = () => {
  const isLoggedIn = getIsLoggedIn();
  
  if (isLoggedIn) {
    const account = getAccount();
    const address = getAddress();
    const nonce = getLatestNonce();
    
    console.log('Account:', account);
    console.log('Address:', address);
    console.log('Nonce:', nonce);
    
    return {
      address: account.address,
      balance: account.balance,
      nonce: account.nonce,
      shard: account.shard
    };
  }
  
  return null;
};
```

## Account Data Structure

The account object contains the following properties:

```typescript
interface AccountType {
  address: string;          // User's wallet address
  balance: string;          // EGLD balance in wei
  nonce: number;           // Current nonce
  shard?: number;          // Shard number
  username?: string;       // Herotag username
  code?: string;           // Smart contract code (if account is a contract)
  codeHash?: string;       // Hash of the smart contract code
  rootHash?: string;       // Root hash of the account
  txCount?: number;        // Total transaction count
  scrCount?: number;       // Smart contract result count
  developerReward?: string; // Developer rewards
  ownerAddress?: string;   // Owner address (for contracts)
  deployedAt?: number;     // Deployment timestamp (for contracts)
  isUpgradeable?: boolean; // Whether contract is upgradeable
  isReadable?: boolean;    // Whether contract is readable
  isPayable?: boolean;     // Whether contract is payable
  isPayableBySmartContract?: boolean; // Whether contract accepts payments from other contracts
}
```

## Refreshing Account Data

### Manual Refresh

```typescript
import { refreshAccount } from '@multiversx/sdk-dapp/out/utils/account/refreshAccount';

const handleRefreshAccount = async () => {
  try {
    await refreshAccount();
    console.log('Account data refreshed successfully');
  } catch (error) {
    console.error('Failed to refresh account:', error);
  }
};

// Use before sending transactions to get latest nonce
const sendTransactionWithRefresh = async () => {
  await refreshAccount(); // Ensures latest nonce
  
  // Create and send transaction
  const transaction = new Transaction({
    // ... transaction details
    nonce: BigInt(getLatestNonce())
  });
};
```

### Automatic Refresh

The SDK automatically refreshes account data in certain scenarios:
- After successful login
- After transaction completion
- When websocket receives account updates

## Login State Management

### Checking Login Status

```typescript
import { useGetLoginInfo } from '@multiversx/sdk-dapp/out/react/loginInfo/useGetLoginInfo';

const LoginStatus = () => {
  const {
    isLoggedIn,
    loginMethod,
    expires,
    loginToken,
    signature
  } = useGetLoginInfo();

  return (
    <div>
      <p>Status: {isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
      {isLoggedIn && (
        <>
          <p>Method: {loginMethod}</p>
          <p>Expires: {new Date(expires * 1000).toLocaleString()}</p>
          <p>Token: {loginToken}</p>
        </>
      )}
    </div>
  );
};
```

### Login Information Structure

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

## Account Balance Formatting

### Format Balance Display

```typescript
import { formatAmount } from '@multiversx/sdk-dapp/out/utils/operations/formatAmount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';

const BalanceDisplay = () => {
  const account = useGetAccount();
  const { network } = useGetNetworkConfig();

  const formattedBalance = formatAmount({
    input: account.balance,
    decimals: network.decimals,
    digits: 4,
    showLastNonZeroDecimal: true
  });

  return (
    <div>
      <p>Balance: {formattedBalance} {network.egldLabel}</p>
    </div>
  );
};
```

### Convert Between Units

```typescript
import { parseAmount } from '@multiversx/sdk-dapp/out/utils/operations/parseAmount';

// Convert from EGLD to wei
const egldAmount = '1.5';
const weiAmount = parseAmount(egldAmount, 18); // 18 decimals for EGLD

// Convert from wei to EGLD
const balanceInWei = '1500000000000000000';
const balanceInEgld = formatAmount({
  input: balanceInWei,
  decimals: 18
});
```

## Account Validation

### Address Validation

```typescript
import { isValidAddress } from '@multiversx/sdk-dapp/out/utils/validation/isValidAddress';

const validateAddress = (address: string) => {
  const isValid = isValidAddress(address);
  
  if (!isValid) {
    throw new Error('Invalid MultiversX address');
  }
  
  return isValid;
};

// Usage in forms
const AddressInput = () => {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
    
    if (value && !isValidAddress(value)) {
      setError('Invalid address format');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={handleChange}
        placeholder="Enter MultiversX address"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};
```

## Account Subscription for Real-time Updates

### Subscribe to Account Changes

```typescript
import { getStore } from '@multiversx/sdk-dapp/out/store/store';
import { accountSelector } from '@multiversx/sdk-dapp/out/store/selectors';

const subscribeToAccountUpdates = () => {
  const store = getStore();
  let previousAccount = accountSelector(store.getState());

  const unsubscribe = store.subscribe(() => {
    const currentAccount = accountSelector(store.getState());
    
    // Check if account data changed
    if (currentAccount.balance !== previousAccount.balance) {
      console.log('Balance changed:', {
        old: previousAccount.balance,
        new: currentAccount.balance
      });
    }
    
    if (currentAccount.nonce !== previousAccount.nonce) {
      console.log('Nonce changed:', {
        old: previousAccount.nonce,
        new: currentAccount.nonce
      });
    }
    
    previousAccount = currentAccount;
  });

  return unsubscribe; // Call this to stop listening
};
```

## Multi-Account Support

### Handle Multiple Accounts (Ledger)

```typescript
import { LedgerProviderStrategy } from '@multiversx/sdk-dapp/out/providers/strategies';

const handleLedgerAccountSelection = async () => {
  const provider = new LedgerProviderStrategy();
  
  try {
    // Get multiple addresses for selection
    const addresses = await provider.getAddresses(0, 5); // Start index, count
    
    console.log('Available addresses:', addresses);
    
    // Let user select an address
    const selectedIndex = await showAddressSelectionUI(addresses);
    
    // Set the selected address
    await provider.setAddressByIndex(selectedIndex);
    
    // Complete login
    const loginResult = await provider.login();
    return loginResult;
  } catch (error) {
    console.error('Ledger account selection failed:', error);
  }
};
```

## Account Metadata

### Get Additional Account Information

```typescript
import { getAccountFromApi } from '@multiversx/sdk-dapp/out/apiCalls/account/getAccountFromApi';

const getDetailedAccountInfo = async (address: string) => {
  try {
    const accountData = await getAccountFromApi(address);
    
    return {
      ...accountData,
      // Additional computed properties
      hasUsername: !!accountData.username,
      isContract: !!accountData.code,
      balanceInEgld: formatAmount({
        input: accountData.balance,
        decimals: 18
      })
    };
  } catch (error) {
    console.error('Failed to fetch account details:', error);
    return null;
  }
};
```

## Account Security

### Native Authentication

```typescript
import { useGetLoginInfo } from '@multiversx/sdk-dapp/out/react/loginInfo/useGetLoginInfo';

const SecurityInfo = () => {
  const { loginToken, expires, signature } = useGetLoginInfo();

  const isTokenExpiringSoon = () => {
    const now = Date.now() / 1000;
    const timeUntilExpiry = expires - now;
    return timeUntilExpiry < 300; // 5 minutes
  };

  return (
    <div>
      <h3>Security Information</h3>
      <p>Token expires: {new Date(expires * 1000).toLocaleString()}</p>
      <p>Status: {isTokenExpiringSoon() ? 'Expiring Soon' : 'Valid'}</p>
      {loginToken && <p>Token: {loginToken.substring(0, 20)}...</p>}
    </div>
  );
};
```

### Logout Management

```typescript
import { LogoutManager } from '@multiversx/sdk-dapp/out/managers/LogoutManager/LogoutManager';

const handleLogout = async () => {
  try {
    const provider = getAccountProvider();
    await provider.logout();
    
    // Optional: Stop automatic logout manager
    LogoutManager.getInstance().stop();
    
    console.log('Logged out successfully');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

// Prevent automatic logout on token expiration
const preventAutoLogout = () => {
  LogoutManager.getInstance().stop();
};
```

## Account Utilities

### Format Account Address

```typescript
import { shortenAddress } from '@multiversx/sdk-dapp/out/utils/operations/shortenAddress';

const AddressDisplay = ({ address }: { address: string }) => {
  const shortAddress = shortenAddress(address, 6); // Show 6 chars at start/end
  
  return (
    <span title={address}>
      {shortAddress}
    </span>
  );
};
```

### Copy Address to Clipboard

```typescript
const CopyAddressButton = ({ address }: { address: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy address:', error);
    }
  };

  return (
    <button onClick={handleCopy}>
      {copied ? 'Copied!' : 'Copy Address'}
    </button>
  );
};
```

## Best Practices

1. **Always Check Login Status**: Verify user is logged in before accessing account data
2. **Refresh Before Transactions**: Call `refreshAccount()` before creating transactions
3. **Handle Loading States**: Account data may not be immediately available
4. **Validate Addresses**: Always validate addresses before using them
5. **Format Balances**: Use proper formatting for displaying token amounts
6. **Monitor Expiration**: Keep track of native auth token expiration
7. **Error Handling**: Implement proper error handling for account operations

## Common Patterns

### Account Dashboard Component

```typescript
const AccountDashboard = () => {
  const account = useGetAccount();
  const { network } = useGetNetworkConfig();
  const { isLoggedIn, loginMethod } = useGetLoginInfo();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await refreshAccount();
    } finally {
      setRefreshing(false);
    }
  };

  if (!isLoggedIn) {
    return <div>Please connect your wallet</div>;
  }

  return (
    <div className="account-dashboard">
      <h2>Account Dashboard</h2>
      
      <div className="account-info">
        <p><strong>Address:</strong> {shortenAddress(account.address)}</p>
        <p><strong>Balance:</strong> {formatAmount({
          input: account.balance,
          decimals: network.decimals
        })} {network.egldLabel}</p>
        <p><strong>Provider:</strong> {loginMethod}</p>
      </div>
      
      <button onClick={handleRefresh} disabled={refreshing}>
        {refreshing ? 'Refreshing...' : 'Refresh Account'}
      </button>
    </div>
  );
};
```

### Account Guard Component

```typescript
const AccountGuard = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useGetIsLoggedIn();
  const account = useGetAccount();

  if (!isLoggedIn) {
    return <div>Please log in to access this content</div>;
  }

  if (!account.address) {
    return <div>Loading account information...</div>;
  }

  return <>{children}</>;
};
```