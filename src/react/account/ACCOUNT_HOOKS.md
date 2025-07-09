# Account Hooks

This document describes the React hooks available in `src/react/account` for accessing account data in the MultiversX dApp SDK. These hooks provide reactive access to account information stored in the application state.

---

## useGetAccount

**Description:**
Returns the current account object from the store. The account object contains details such as address, balance, nonce, and other account-related information.

**Signature:**
```ts
function useGetAccount(): AccountType
```

**Returns:**
- `AccountType` — The current account object with the following main properties:
  - `address` (`string`): The account's address
  - `balance` (`string`): The account's balance in wei
  - `nonce` (`number`): The account's current nonce
  - `txCount` (`number`): Total number of transactions
  - `scrCount` (`number`): Total number of smart contract calls
  - `claimableRewards` (`string`): Claimable rewards amount
  - `username` (`string`, optional): Account username if set
  - `shard` (`number`, optional): The shard the account belongs to
  - `isGuarded` (`boolean`): Whether the account has guardian protection
  - And other properties (see `AccountType` interface for full details)

**Usage Example:**
```tsx
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';

const MyComponent = () => {
  const account = useGetAccount();
  
  return (
    <div>
      <p>Address: {account.address}</p>
      <p>Balance: {account.balance}</p>
      <p>Nonce: {account.nonce}</p>
      {account.username && <p>Username: {account.username}</p>}
    </div>
  );
};
```

---

## useGetAccountInfo

**Description:**
Returns comprehensive account information including the account object, address, public key, and provider-specific details like Ledger and WalletConnect information.

**Signature:**
```ts
function useGetAccountInfo(): {
  address: string;
  account: AccountType;
  publicKey: string;
  ledgerAccount: LedgerAccountType | null;
  walletConnectAccount: string | null;
  websocketEvent: {
    timestamp: number;
    message: string;
  } | null;
  websocketBatchEvent: {
    timestamp: number;
    data: BatchTransactionsWSResponseType;
  } | null;
}
```

**Returns:**
- An object containing:
  - `address` (`string`): The current account's address
  - `account` (`AccountType`): The current account object
  - `publicKey` (`string`): The public key associated with the account
  - `ledgerAccount` (`LedgerAccountType | null`): Ledger account details if using a Ledger device
  - `walletConnectAccount` (`string | null`): WalletConnect account address if connected
  - `websocketEvent` (`{ timestamp: number; message: string; } | null`): Last WebSocket event
  - `websocketBatchEvent` (`{ timestamp: number; data: BatchTransactionsWSResponseType; } | null`): Last batch WebSocket event

**Usage Example:**
```tsx
import { useGetAccountInfo } from '@multiversx/sdk-dapp/out/react/account/useGetAccountInfo';

const MyComponent = () => {
  const accountInfo = useGetAccountInfo();
  
  return (
    <div>
      <h3>Account Information</h3>
      <p>Address: {accountInfo.address}</p>
      <p>Public Key: {accountInfo.publicKey}</p>
      <p>Balance: {accountInfo.account.balance}</p>
      
      {accountInfo.ledgerAccount && (
        <div>
          <h4>Ledger Account</h4>
          <p>Index: {accountInfo.ledgerAccount.index}</p>
          <p>Version: {accountInfo.ledgerAccount.version}</p>
        </div>
      )}
      
      {accountInfo.walletConnectAccount && (
        <p>WalletConnect: {accountInfo.walletConnectAccount}</p>
      )}
    </div>
  );
};
```

---

## useGetIsLoggedIn

**Description:**
Returns a boolean indicating whether a user is currently logged in to the dApp.

**Signature:**
```ts
function useGetIsLoggedIn(): boolean
```

**Returns:**
- `boolean` — `true` if a user is logged in, `false` otherwise

**Usage Example:**
```tsx
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';

const MyComponent = () => {
  const isLoggedIn = useGetIsLoggedIn();
  
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
};
```

---

## useGetLatestNonce

**Description:**
Returns the latest nonce for the current account. This hook is useful for ensuring the correct nonce is used when sending transactions.

**Signature:**
```ts
function useGetLatestNonce(): number
```

**Returns:**
- `number` — The latest nonce value for the account

**Usage Example:**
```tsx
import { useGetLatestNonce } from '@multiversx/sdk-dapp/out/react/account/useGetLatestNonce';

const MyComponent = () => {
  const latestNonce = useGetLatestNonce();
  
  const handleSendTransaction = async () => {
    // Use the latest nonce when creating a transaction
    const transaction = new Transaction({
      // ... other transaction properties
      nonce: BigInt(latestNonce),
      // ...
    });
  };
  
  return (
    <div>
      <p>Current Nonce: {latestNonce}</p>
      <button onClick={handleSendTransaction}>
        Send Transaction
      </button>
    </div>
  );
};
```

---

## Type Definitions

### AccountType
```ts
interface AccountType {
  address: string;
  balance: string;
  nonce: number;
  txCount: number;
  scrCount: number;
  claimableRewards: string;
  code?: string;
  username?: string;
  shard?: number;
  ownerAddress?: string;
  developerReward?: string;
  deployedAt?: number;
  scamInfo?: ScamInfoType;
  isUpgradeable?: boolean;
  isReadable?: boolean;
  isPayable?: boolean;
  isPayableBySmartContract?: boolean;
  assets?: AssetType;
  isGuarded: boolean;
  activeGuardianActivationEpoch?: number;
  activeGuardianAddress?: string;
  activeGuardianServiceUid?: string;
  pendingGuardianActivationEpoch?: number;
  pendingGuardianAddress?: string;
  pendingGuardianServiceUid?: string;
}
```

### LedgerAccountType
```ts
interface LedgerAccountType {
  index: number;
  address: string;
  hasContractDataEnabled: boolean;
  version: string;
}
```

### BatchTransactionsWSResponseType
```ts
type BatchTransactionsWSResponseType = {
  batchId: string;
  txHashes: string[];
}
```

---

## Best Practices

1. **Use the appropriate hook for your needs:**
   - Use `useGetAccount()` for basic account information
   - Use `useGetAccountInfo()` when you need provider-specific details
   - Use `useGetIsLoggedIn()` for authentication state
   - Use `useGetLatestNonce()` for transaction creation

2. **Handle loading states:**
   ```tsx
   const account = useGetAccount();
   
   if (!account.address) {
     return <div>Loading account...</div>;
   }
   ```

3. **Combine hooks for complex logic:**
   ```tsx
   const isLoggedIn = useGetIsLoggedIn();
   const account = useGetAccount();
   const latestNonce = useGetLatestNonce();
   
   // Only show account details if logged in
   if (!isLoggedIn) {
     return <div>Please log in</div>;
   }
   ```

4. **Use nonce for transaction creation:**
   ```tsx
   const latestNonce = useGetLatestNonce();
   
   // Always use the latest nonce to avoid transaction conflicts
   const transaction = new Transaction({
     nonce: BigInt(latestNonce),
     // ... other properties
   });
   ```

---

## Related Documentation

- [Account Methods](../methods/account/ACCOUNT_METHODS_README.md) - Non-reactive account utility functions
- [Store Selectors](../../store/selectors/accountSelectors.ts) - Store selectors used by these hooks
- [Account Types](../../types/account.types.ts) - Type definitions for account data
