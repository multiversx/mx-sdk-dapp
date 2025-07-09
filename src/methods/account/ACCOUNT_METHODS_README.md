# Account Methods

This document describes the helper functions available in `src/methods/account` for accessing and managing account data in the MultiversX dApp SDK.

---

## getAccount

**Description:**
Returns the current account object from the store, or from a provided state. The account object contains details such as address, balance, nonce, and more.

**Signature:**
```ts
function getAccount(state?: StoreType): AccountType
```

**Returns:**
- `AccountType` — The current account object.

**Usage Example:**
```ts
import { getAccount } from '@multiversx/sdk-dapp/out/methods/account/getAccount';

const account = getAccount();
console.log(account.address, account.balance);
```

---

## getAccountInfo

**Description:**
Returns detailed account info from the store, or from a provided state. The returned object includes the account's address, the account object, public key, ledger and WalletConnect account info, and websocket event data.

**Signature:**
```ts
function getAccountInfo(state?: StoreType): {
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
- An object with the following fields:
  - `address` (`string`): The current account's address.
  - `account` (`AccountType`): The current account object (see below).
  - `publicKey` (`string`): The public key associated with the account.
  - `ledgerAccount` (`LedgerAccountType | null`): Ledger account details if using a Ledger device, otherwise `null`.
  - `walletConnectAccount` (`string | null`): WalletConnect account address if connected, otherwise `null`.
  - `websocketEvent` (`{ timestamp: number; message: string; } | null`): Last WebSocket event for the account, or `null`.
  - `websocketBatchEvent` (`{ timestamp: number; data: BatchTransactionsWSResponseType; } | null`): Last batch WebSocket event, or `null`.

**Type Details:**
- `LedgerAccountType`:
  ```ts
  interface LedgerAccountType {
    index: number;
    address: string;
    hasContractDataEnabled: boolean;
    version: string;
  }
  ```
- `BatchTransactionsWSResponseType`:
  ```ts
  type BatchTransactionsWSResponseType = {
    batchId: string;
    txHashes: string[];
  }
  ```

**Usage Example:**
```ts
import { getAccountInfo } from '@multiversx/sdk-dapp/out/methods/account/getAccountInfo';

const info = getAccountInfo();
console.log(info.address, info.account.nonce, info.publicKey);
if (info.ledgerAccount) {
  console.log('Ledger index:', info.ledgerAccount.index);
}
if (info.websocketBatchEvent) {
  console.log('Batch ID:', info.websocketBatchEvent.data.batchId);
}
```

---

## getAddress

**Description:**
Returns the current account's address from the store, or from a provided state.

**Signature:**
```ts
function getAddress(state?: StoreType): string
```

**Returns:**
- `string` — The current account's address.

**Usage Example:**
```ts
import { getAddress } from '@multiversx/sdk-dapp/out/methods/account/getAddress';

const address = getAddress();
console.log(address);
```

---

## getIsLoggedIn

**Description:**
Returns a boolean indicating whether a user is currently logged in, based on the store or a provided state.

**Signature:**
```ts
function getIsLoggedIn(state?: StoreType): boolean
```

**Returns:**
- `boolean` — `true` if a user is logged in, `false` otherwise.

**Usage Example:**
```ts
import { getIsLoggedIn } from '@multiversx/sdk-dapp/out/methods/account/getIsLoggedIn';

const isLoggedIn = getIsLoggedIn();
console.log(isLoggedIn ? 'User is logged in' : 'User is not logged in');
```

---

## getLatestNonce

**Description:**
Returns the latest nonce for the account, considering both the store and optionally a provided API account. This is useful for ensuring the correct nonce is used when sending transactions.

**Signature:**
```ts
function getLatestNonce(apiAccount: AccountType | null): number
```

**Parameters:**
- `apiAccount` (`AccountType | null`): The account object fetched from the API, or `null` to use only the store value.

**Returns:**
- `number` — The latest nonce value for the account.

**Usage Example:**
```ts
import { getLatestNonce } from '@multiversx/sdk-dapp/out/methods/account/getLatestNonce';
import { getAccount } from '@multiversx/sdk-dapp/out/methods/account/getAccount';

const apiAccount = getAccount(); // or fetch from API
const latestNonce = getLatestNonce(apiAccount);
console.log('Latest nonce:', latestNonce);
```

---

## Types

### AccountType
See `src/types/account.types.ts` for the full definition. The main fields are:
```ts
interface AccountType {
  address: string;
  balance: string;
  nonce: number;
  shard: number;
  username?: string;
  // ...other fields
}
```
