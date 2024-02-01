# sdk-dapp

> A library that holds the core functional logic of a dapp on the MultiversX blockchain

[![NPM](https://img.shields.io/npm/v/@multiversx/sdk-dapp.svg)](https://www.npmjs.com/package/@multiversx/sdk-dapp) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

See [Dapp template](https://template-dapp.multiversx.com/) for live demo or checkout usage in the [Github repo](https://github.com/multiversx/mx-template-dapp)

# Installation

The library can be installed via npm or yarn.

```bash
npm install @multiversx/sdk-dapp
```

or

```bash
yarn add @multiversx/sdk-dapp
```

If you need only the sdk-dapp basic logic, without the additional UI, consider using the `--no-optional` flag.
This will not install the packages needed for the optional UI components.

```bash
npm install @multiversx/sdk-dapp --no-optional
```

or

```bash
yarn add @multiversx/sdk-dapp --no-optional
```

### **If you're transitioning from dapp-core 1.x to @multiversx/sdk-dapp (dapp-core 2.0), please read the [Migration guide](https://github.com/multiversx/mx-sdk-dapp/wiki/Migration-guide-2.0)**

### **As of @multiversx/sdk-dapp@2.28.0 Node >=18 is required since Node 16 [reached its EOL](https://nodejs.org/en/blog/announcements/nodejs16-eol).**

# Usage

sdk-dapp aims to abstract and simplify the process of interacting with users' wallets and with the MultiversX blockchain, allowing developers to easily get started with a new application or integrate sdk-dapp into an existing application.

This library covers two main areas: **User Identity** and **Transactions**. The API for interacting with library's logic is exposed via hooks and methods that can be called for logging in the user, getting the status of the user or sending transactions.

However, to simplify usage even further, the library also comes with a default UI that already uses these hooks and methods under the hood. These UI elements can be easily customized with custom css classes.

The default UI is exposed via the `UI` module.

`import * as DappUI from "@multiversx/sdk-dapp/UI";`

**Please be aware that this style of importing might also import unused code.**

To reduce the amount of dead code, you can use named imports for each component like

```typescript
import { UnlockPage } from '@multiversx/sdk-dapp/UI/pages';
or;
import { UnlockPage } from '@multiversx/sdk-dapp/UI/pages/UnlockPage';
```

More on this below.

## Prerequisites

There are a couple of requirements that need to be met for the application to work properly.

**_If you experience bugs, please make sure that you read these, before opening an issue_**

<details>
  <summary>
      React
  </summary>

### React

This library was built for applications that use React, it might not be suitable for usage with other libraries or frameworks.

  </details>

<details>
  <summary>
    DappProvider
 </summary>

### DappProvider

You need to wrap your application with the **DappProvider** component, which is exported by the library, as we need to create a global Context to be able to manipulate the data.

- import the Provider:

```typescript
import { DappProvider } from '@multiversx/sdk-dapp/wrappers/DappProvider';
or;
import { DappProvider } from '@multiversx/sdk-dapp/wrappers';
```

- Wrap your application with this Provider.

```jsx
<DappProvider
    environment="devnet"
    customNetworkConfig={customNetworkConfig} // optional
    dappConfig={dappConfig} // optional
>
```

`environment` is a required key that is needed to configure the app's endpoints for a specific environment. Accepted values are `testnet`, `devnet` and `mainnet` (also configured in `EnvironmentsEnum`)

DappProvider also accepts an optional `customNetworkConfig` object with a couple of keys.
This allows using different APIs and different connection providers to configure your network configuration.

**All keys are optional**

```typescript
{
  id?: string;
  name?: string;
  egldLabel?: string;
  decimals?: string;
  digits?: string;
  gasPerDataByte?: string;
  walletConnectDeepLink?: string; // a string that will create a deeplink for an application that is used on a mobile phone, instead of generating the login QR code.
  walletConnectV2ProjectId?: string; // a unique ProjectID needed to access the WalletConnect 2.0 Relay Cloud
  walletAddress?: string;
  apiAddress?: string;
  explorerAddress?: string;
  apiTimeout?: 4000;
}
```

DappProvider also accepts an optional `dappConfig` object.

```typescript
{
  logoutRoute?: string;  // a route to redirect after auto-logout (session expired, native auth token expired or idle app)
}
```

  </details>

<details>
  <summary>
    UI Wrappers
 </summary>

### UI Wrappers

The library exposes a couple of Components that are connected to the redux store and are used to display various elements
when something happens inside the app:

- `TransactionsToastList` will display new transactions in nice toasts at the bottom of the screen. This component is fully customizable.

```jsx
  import {TransactionsToastList} from "@multiversx/sdk-dapp/UI/TransactionsToastList";

  // all properties are optional
  <TransactionsToastList
    className = 'transactions-toast-list'
    transactionToastClassName="transactions-toast-class"
    successfulToastLifetime={30000}
    parentElement={
      /*
        React NodeElement where the toast will be rendered
        */
    }
  />

```

- `SignTransactionsModals` will show a modal when a new transaction is submitted, prompting the user to verify and sign it.

**Important! This is required** to make transactions work, except when you use hooks to sign the transactions manually (more on this below).

```jsx
import { SignTransactionsModals } from '@multiversx/sdk-dapp/UI/SignTransactionsModals';

<App>
  <SignTransactionsModals />
  <Content />
</App>;
```

`NotificationModal` Will show a modal to the user with various warnings and errors.

```jsx
import { NotificationModal } from '@multiversx/sdk-dapp/UI/NotificationModal';

<App>
  <NotificationModal />
  <Content />
</App>;
```

If you want to show custom notifications, you can use the `useGetNotification` hook to get the notifications (like insufficient funds, errors etc).

</details>

## User Identity

sdk-dapp makes logging in and persisting user's session easy and hassle-free.

A handy component is AuthenticatedRoutesWrapper, which can be used to protect certain routes and redirect the user to login page if the user is not authenticated.

Import from sdk-dapp:

```typescript
import { AuthenticatedRoutesWrapper } from '@multiversx/sdk-dapp/wrappers/AuthenticatedRoutesWrapper';
or;
import { AuthenticatedRoutesWrapper } from '@multiversx/sdk-dapp/wrappers';
```

Use with routes:

```jsx
<AuthenticatedRoutesWrapper routes={routes} unlockRoute='/unlock'>
  {appContent}
</AuthenticatedRoutesWrapper>
```

**routes** should be an array with objects with a signature similar to this:

```typescript
{
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
    authenticatedRoute: true,
  }
```

The important parts that makes this component work are the flag **authenticatedRoute: true** and the key **path**, which means that this route should be accessible only to authenticated users.

  <details>
    <summary>
      Login UI
  </summary>

### Login UI

There are a couple of very handy React components that can be used to login the user and protect certain routes if the user is not logged in.

Under the `DappUI` object mentioned above, you can find 4 buttons (one for each provider) which abstract away all the logic of loggin in the user and render the default UI. These buttons can be easily customized with a custom css class.
The exported buttons are:

- ExtensionLoginButton
- WalletConnectLoginButton
- LedgerLoginButton
- WebWalletLoginButton

example:

```jsx
<ExtensionLoginButton
  callbackRoute='/dashboard'
  buttonClassName='extension-login'
  loginButtonText='Extension login'
/>
```

They can also be used with children

```jsx
<ExtensionLoginButton
  callbackRoute="/dashboard"
  buttonClassName="extension-login"
  loginButtonText="Extension login"
>
  <>
    <icon/>
    <p>Login text</p>
  <>
</ExtensionLoginButton>
```

`WalletConnectLoginButton` and `LedgerLoginButton` will trigger a modal with a QR code and the ledger login UI, respectively.
These are automatically triggered by the buttons.

If, however, you want access to these containers without the buttons,
you can easily import and use them.

```jsx
<WalletConnectLoginContainer
  callbackRoute={callbackRoute}
  loginButtonText='Login with xPortal'
  title='xPortal Login'
  className='wallect-connect-login-modal'
  lead='Scan the QR code using xPortal'
  wrapContentInsideModal={wrapContentInsideModal}
  redirectAfterLogin={redirectAfterLogin}
  token={token}
  onLoginRedirect={onLoginRedirect}
  onClose={onClose}
/>
```

```jsx
<LedgerLoginContainer
  callbackRoute={callbackRoute}
  className='ledger-login-modal'
  wrapContentInsideModal={wrapContentInsideModal}
  redirectAfterLogin={redirectAfterLogin}
  nativeAuth
  onClose={onClose}
  onLoginRedirect={onLoginRedirect}
/>
```

```jsx
<WebWalletLoginButton
  callbackRoute="/dashboard"
  loginButtonText="Web Wallet login"
>
```

If you have a custom Web Wallet provider you can integrate it by using the `customWalletAddress` prop:

```jsx
<WebWalletLoginButton
  callbackRoute="/dashboard"
  loginButtonText="Custom Web Wallet login"
  customWalletAddress="https://custom-web-wallet.com"
>
```

All login buttons and hooks accept a prop called `redirectAfterLogin` which specifies of the user should be redirected automatically after login.
The default value for this boolean is false, since most apps listen for the "isLoggedIn" boolean and redirect programmatically.

If you need to authenticate some requests, you can provide the `nativeAuth` flag to your login buttons. It comes as a boolean or as a configuration object. This token will be available in `useGetLoginInfo` hook later, inside `tokenLogin.nativeAuthToken`. If you need to use an interceptor for your requests, make sure to check out the implementation of `AxiosInterceptorContext`. Use it like:

```typescript
import { AxiosInterceptorContext } from '@multiversx/sdk-dapp/wrappers/AxiosInterceptorContext';
```

```jsx
<AxiosInterceptorContext.Provider>
  <AxiosInterceptorContext.Interceptor
    authenticatedDomanis={['https://my-api.com']}
  >
    <Router>
      <DappProvider environment={EnvironmentsEnum.devnet}>
        <>
          <AxiosInterceptorContext.Listener />
          {/*
              // other components below
              */}
          <TransactionsToastList />
          <NotificationModal />
          <SignTransactionsModals />

          <Routes>...</Routes>
        </>
      </DappProvider>
    </Router>
  </AxiosInterceptorContext.Interceptor>
</AxiosInterceptorContext.Provider>
```

Another handly component is AuthenticatedRoutesWrapper, which can be used to protect certain routes and redirect the user to login page if the user is not authenticated.

Import from sdk-dapp:

```typescript
import { AuthenticatedRoutesWrapper } from '@multiversx/sdk-dapp/wrappers/AuthenticatedRoutesWrapper';
```

Use with routes:

```jsx
<AuthenticatedRoutesWrapper routes={routes} unlockRoute={routeNames.unlock}>
  {appContent}
</AuthenticatedRoutesWrapper>
```

**routes** should be an array with objects with a signature similar to this:

```typescript
{
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
    authenticatedRoute: true,
  }
```

The important parts that makes this component work are the flag **authenticatedRoute: true** and the key **path**, which means that this route should be accessible only to authenticated users.

</details>

  <details><summary>
Login hooks
  </summary>

### Login hooks

This area covers the login hooks, which expose a trigger function and the login data, ready to be rendered.

These hooks are exposed as named exports, which can be imported from sdk-dapp:

```typescript
import {
  useExtensionLogin,
  useWalletConnectV2Login,
  useLedgerLogin,
  useWebWalletLogin
} from '@multiversx/sdk-dapp/hooks';
or;
import { useExtensionLogin } from '@multiversx/sdk-dapp/hooks/login/useExtensionLogin';
import { useWalletConnectV2Login } from '@multiversx/sdk-dapp/hooks/login/useWalletConnectV2Login';
import { useLedgerLogin } from '@multiversx/sdk-dapp/hooks/login/useLedgerLogin';
import { useWebWalletLogin } from '@multiversx/sdk-dapp/hooks/login/useWebWalletLogin';
```

There are 4 available hooks:

- useExtensionLogin
- useWalletConnectV2Login
- useLedgerLogin
- useWebWalletLogin

All hooks have the same response signature:

return type is as follows:

```typescript
const [initiateLogin, genericLoginReturnType, customLoginReturnType] =
  useLoginHook({
    callbackRoute,
    token,
    nativeAuth,
    onLoginRedirect
  });
```

- **initiateLogin** is a function that needs to be called for the login flow to be initiated;
- **genericLoginReturnType** is an object that is exactly the same for all hooks:

```typescript
{
  error: string,
  loginFailed: boolean,
  isLoading: boolean,
  isLoggedIn: boolean
}
```

- **customLoginReturnType** is an object that is custom for each hook and returns specific data for that login:

  - null for useExtensionLogin;

  - null for useWebWalletLogin;

  - `{ uriDeepLink: string, qrCodeSvg: svgElement }` for useWalletConnectV2Login;

  -

```typescript
{
  accounts: string[];
  showAddressList: boolean;
  startIndex: number;
  selectedAddress: SelectedAddress | null;
  onGoToPrevPage: () => void;
  onGoToNextPage: () => void;
  onSelectAddress: (address: SelectedAddress | null) => void;
  onConfirmSelectedAddress: () => void;
}
```

for useLedgerLogin;

</details>

  <details>
<summary>
Reading User State
  </summary>

### Reading User State

Once logged in, the user's session is persisted and can be read and deleted via a couple of handy functions.

For logging out, the library exposes a simple function called **logout**, which can be called to clear the user data.

the function accepts 2 arguments:

- `callbackUrl: string (optional)` the url to redirect the user to after logging him out
- `onRedirect: (callbackUrl: string) => void (optional)` a function that will be called instead of redirecting the user.
  This allows you to control how the redirect is done, for example, with react-router-dom, instead of window.location.href assignment.
  _Important_ this function will not be called for web wallet logout

You can opt-in for using the `useIdleTimer` hook, which logs out the user after a period of inactivity (default set to 10 minutes). Optionally it accepts an `onLogout` function that fulfills your dapp's specific logout business logic. Make sure to call the above `logout` function inside this `onLogout` callback.

You can also opt-in for using the `useRegisterWebsocketListener` hook. The hooks accepts a callback which will get fired once a websocket message is received, receiving the `string` argument provided by the event. Optionally you can simply listen to changes on account/transactions with the `useGetWebsocketEvent` hook.

There are 2 ways of reading the user current state: hooks (to be used inside components and for reacting to changes in the data) and simple functions (for reading data outside of React components or inside handlers).

- hooks: `useGetLoginInfo, useGetAccountInfo, useGetNetworkConfig, useGetWebsocketEvent`;
- functions: `getAccount, getAccountBalance, getAccountShard, getAddress, getIsLoggedIn;`

</details>

## Transactions

The sdk-dapp library exposes a straight-forward way of sending transactions and tracking their status, with a couple of handy UI components;

<details><summary>
Sending Transactions
  </summary>

### Sending Transactions

The API for sending transactions is a function called **sendTransactions**:

`import { sendTransactions } from "@multiversx/sdk-dapp";`

It can be used to send a transaction with minimum information:

```typescript
const { sessionId, error } = await sendTransactions({
    transactions: [
        {
          value: '1000000000000000000',
          data: 'ping',
          receiver: contractAddress
        },
      ],
    callbackRoute?: string // (optional, defaults to window.location.pathname) the route to be redirected to after signing. Will not redirect if the user is already on the specified route;
    transactionsDisplayInfo: TransactionsDisplayInfoType // (optional, default to null) custom message for toasts texts;
    minGasLimit?: number (optional, defaults to 50_000);
    sessionInformation?: any (optional, defaults to null) extra sessionInformation that will be passed back to you via getSignedTransactions hook;
    signWithoutSending?: boolean // (optional, defaults to false), the transaction will be signed without being sent to the blockchain;
    completedTransactionsDelay?: number // delay the transaction status from going into "successful" state;
    redirectAfterSigning?: boolean // (optional, defaults to true), whether to redirect to the provided callbackRoute;
    });
```

It returns a Promise that will be fulfilled with `{error?: string; sessionId: string | null;}`

`sessionId` is the transaction's batch id which can be used to track a transaction's status and react to it.

**Important! For the transaction to be signed, you will have to use either `SignTransactionsModals` defined above, in the `Prerequisites` section,
or the `useSignTransactions` hook defined below. If you don't use one of these, the transactions won't be signed**

</details>

<details>
<summary>
Sending sync transactions in batches (batch transactions mechanism)
</summary>

### Sending transactions synchronously in batches

The API for sending sync transactions is a function called **sendBatchTransactions**:

`import { sendBatchTransactions } from "@multiversx/sdk-dapp/services/transactions/sendBatchTransactions";`

It can be used to send a group of transactions (that ca be synchronized) with minimum information:

```typescript
const { batchId, error } = await sendBatchTransactions({
    transactions: [
      [
        {
          value: '1000000000000000000',
          data: 'tx1',
          receiver: receiverAddress
        },
      ],
      [
        {
          value: '1000000000000000000',
          data: 'tx2',
          receiver: receiverAddress
        },
        {
          value: '1000000000000000000',
          data: 'tx3',
          receiver: receiverAddress
        },
      ]
    ],
  /**
   * the route to be redirected to after signing. Will not redirect if the user is already on the specified route
   * @default window.location.pathname
   */
  callbackRoute?: string;
  /**
   * custom message for toasts texts
   * @default null
   */
  transactionsDisplayInfo: TransactionsDisplayInfoType;
  /**
   * Minimum amount of gas in order to process the transaction.
   * @default 50_000
   */
  minGasLimit?: number (optional, defaults to 50_000);
  /**
   * Contains extra sessionInformation that will be passed back via getSignedTransactions hook
   */
  sessionInformation?: any (optional, defaults to null)
  /**
   * The transactions will be signed without being sent to the blockchain
   */
  signWithoutSending?: boolean;
  /**
   * Delay the transaction status from going into "successful" state
   */
  completedTransactionsDelay?: number;
  /**
   * If true, redirects to the provided callbackRoute
   */
  redirectAfterSigning?: boolean;
  });
```

It returns a Promise that will be fulfilled with `{error?: string; batchId: string | null;}`

- `batchId` is the transactions' batch id used to send the batch to the batch service and to track the transactions status and react to it. This is composed by the `sessionId` (received after signing) and the user address. Eg. `12123423123-erd1address...`.
- `error` is the error that can appear during the signing/sending process.

### How to synchronize transactions ?

`sendBatchTransactions` accepts an argument `transactions` which is an array of transactions arrays.
Each transaction array will be sent to the blockchain in the order they are provided.
Having the example above, the transactions will be sent in the following order:

- `tx1`
- `tx2, tx3`

`tx1` will be sent first, waits until is completed, then `tx2` and `tx3` will be sent in parallel. This means that the groups are sent synchronously, but the transactions inside a group are sent in parallel.

** Important! This function will send the transactions automatically in batches, based on the provided transactions array, immediately after signing.
If you do not want them to be sent automatically, but on demand, then you should use send callback exposed by the `useSendBatchTransactions` hook.
Be sure to save the `sessionId` passed to the batch. We recommend to generate a new sessionId like this: `Date.now().toString();` **

```typescript
import { sendBatchTransactions } from '@multiversx/sdk-dapp/services/transactions/sendBatchTransactions';
import { useSendBatchTransactions } from '@multiversx/sdk-dapp/hooks/transactions/batch/useSendBatchTransactions';

const { send: sendBatchToBlockchain } = useSendBatchTransactions();

// Use signWithoutSending: true to sign the transactions without sending them to the blockchain
sendBatchTransactions({
  transactions,
  signWithoutSending: true,
  callbackRoute: window.location.pathname,
  redirectAfterSign: true
});

const { error, batchId, data } = await sendBatchToBlockchain({
  transactions,
  sessionId
});
```

**Important! For the transaction to be signed, you will have to use either `SignTransactionsModals` defined above, in the `Prerequisites` section,
or the `useSignTransactions` hook defined below. If you don't use one of these, the transactions won't be signed**

</details>

<details>
<summary>
Transaction Signing Flow
</summary>

### Transaction Signing Flow

Once a transaction has been submitted, you have to use either the `SignTransactionsModals` or the `useSignTransactions` hook,
for the user to be prompted in his provider (Extension, xPortal App etc) to sign the transaction.

If you don't want to use the default modals that appear for the user when the signing process happens,
you have to use the `useSignTransactions` hook to sign those transactions.

```typescript
const {
  callbackRoute,
  transactions,
  error,
  sessionId,
  onAbort,
  hasTransactions,
  canceledTransactionsMessage
} = useSignTransactions();
```

This hook will let you know if there are any transactions and you can programmatically abort the signing process.

We suggest displaying a message on the screen that confirms the transaction that needs to be signed.

You can also get the provider via

```typescript
const { providerType, provider } = useGetAccountProvider();
```

and use that to display an appropriate message to the user.

For ledger, signing a transaction is simple if you're using the `SignTransactionsModal` component.

It is fully customizable and will take care of walking the user through the signing flow.

If, however, you want to implement a different experience, you will have to use the `useSignTransactionsWithLedger` hook.

it accepts the following props:

```typescript
{
  onCancel: () => void;
}
```

and returns an object with the following keys:

```typescript
{
  onSignTransaction: () => void;
  onNext: () => void;
  onPrev: () => void;
  waitingForDevice: boolean;
  onAbort: (e: React.MouseEvent) => void;
  isLastTransaction: boolean;
  currentStep: number;
  signedTransactions?: Record<string, Transaction>;
  currentTransaction: {
      transaction: Transaction;
      transactionTokenInfo: {
          tokenId: string;
          amount: string;
          receiver: string;
          type?: string;
          nonce?: string;
          multiTxData?: string;
      };
      isTokenTransaction: boolean;
      tokenDecimals: number;
      dataField: string;
  };
  }
```

</details>

<details><summary>
Tracking a transaction
  </summary>

### Tracking a transaction

The library has a built-in implementation for tracking the transactions sent normally or synchronously via batch transactions.
Also, exposes a hook called `useTrackTransactionStatus`;

### 1. Built-in tracking

There is a `TransactionTracker` component that is used to track transactions. It is used by default in the `DappProvider` component.
This component is using the `useTransactionsTracker` and `useBatchTransactionsTracker` hooks to track the transactions.

`useTransactionsTracker` - track transactions sent normally
`useBatchTransactionsTracker` track batch transactions

The developers are be able to create their own implementation for the transaction tracking component (using these hooks or creating their own logic) and pass it to the `DappProvider` component through `customComponents` field.

```jsx
import { TransactionsTracker } from "your/module";
<DappProvider
  environment={environment}
  customNetworkConfig={{
    name: 'customConfig',
    apiTimeout,
    walletConnectV2ProjectId
  }}
  customComponents={{
    transactionTracker: {
      component: TransactionsTracker,
      props: {
        onSuccess: (sessionId) => {
          console.log(`Session ${sessionId} successfully completed`);
        },
        onFail: (sessionId, errorMessage) => {
          if (errorMessage) {
            console.log(`Session ${sessionId} failed, ${errorMessage}`);
            return;
          }

          console.log(`Session ${sessionId} failed`);
        }
      }
    }
  }}
>
```

The props passed to the `TransactionsTracker` component are:

```typescript
export interface TransactionsTrackerType {
  getTransactionsByHash?: GetTransactionsByHashesType;
  onSuccess?: (sessionId: string | null) => void;
  onFail?: (sessionId: string | null, errorMessage?: string) => void;
}
```

Also, the same props can be passed to the `useTransactionsTracker` and `useBatchTransactionsTracker` hooks.

```typescript
import { useBatchTransactionsTracker } from 'hooks/transactions/batch/tracker/useBatchTransactionsTracker';
import { useTransactionsTracker } from 'hooks/transactions/useTransactionsTracker';

const props = {
  onSuccess: (sessionId) => {
    console.log(`Session ${sessionId} successfully completed`);
  },
  onFail: (sessionId, errorMessage) => {
    if (errorMessage) {
      console.log(`Session ${sessionId} failed, ${errorMessage}`);
      return;
    }

    console.log(`Session ${sessionId} failed`);
  }
};

useTransactionsTracker(props);
useBatchTransactionsTracker(props);
```

The transactions trackers will automatically update the transactions statuses in the store. This functionality is used by the `TransactionToastList` component to display the transactions statuses.

### 2. Tracking transaction status

```typescript
import {useTrackTransactionStatus} from @multiversx/sdk-dapp/hooks;

const transactionStatus = useTrackTransactionStatus({
  transactionId: sessionId,
  onSuccess,
  onFail,
  onCancelled,
});
```

transactionStatus has the following information about the transaction:

```typescript
{
  isPending,
    isSuccessful,
    isFailed,
    isCancelled,
    errorMessage,
    status,
    transactions;
}
```

It's safe to pass in `null` as a sessionId, so if the transaction wasn't yet sent, the hook will just return an empty object.

</details>

<details><summary>
Tracking transactions' statuses
  </summary>

### Tracking transactions' statuses

sdk-dapp also exposes a number of handy hooks for tracking all, pending, failed, successful and timed out transactions.

Use:

- `useGetPendingTransactions` to get a list of all pending transactions.
- `useGetSuccessfulTransactions` to get a list of all successful transactions.
- `useGetFailedTransactions` to get a list of all pending transactions.

An especially useful hook called `useGetActiveTransactionsStatus` will keep you updated with the status
of all transactions at a certain point in time.

it's return signature is

```typescript
{
  pending: boolean, // at least one transaction is pending;
  hasPendingTransactions: boolean, // the user has at least 1 pending transaction active;
  timedOut: boolean, // there are no pending transactions and at least one has timed out;
  fail: boolean, // there are no pending and no timedOut transactions and at least one has failed;
  success: boolean, // all transactions are successful and all smart contract calls have been processed successfully;
}
```

</details>

  <details><summary>
Transaction Toasts UI
  </summary>

### Transaction Toasts UI

sdk-dapp also exposes a toast component for tracking transactions that uses the above mentioned hooks and displays toasts with transactions statuses.

The toasts list is exposed via **TransactionsToastList** UI component and can be used just by rendering it inside the application.
`TransactionToastList` component renders also custom toasts. A custom toast can be added using the util function: `addNewCustomToast` and can be removed using `deleteCustomToast`

When `TransactionToastList` is also used for displaying custom toasts, is enough to call `addNewCustomToast` to add new custom toast to the list;

```jsx
<App>
  <Router />
  <TransactionsToastList />
</App>
```

**Important**: This has to be inside the `<DappProvider/>` children.

In case you don't want to use `TransactionToastList` and just display a custom toast, then you have to import `CustomToast` component

```jsx
const customToast = addNewCustomToast(
  {
    toastId: 'toast-id',
    message: '',
    type: 'custom',
    duration: 2000
  }
);

<CustomToast
  {...customToast}
  onDelete: () => deleteCustomToast(toastId)
 />
```

</details>

  <details><summary>
Removing transactions manually
  </summary>

### Removing transactions manually

sdk-dapp takes care to change transactions' statuses and removes them when needed,
but if you need to do this manually, you can use the exposed functions for this:

```typescript
removeTransactionsToSign(sessionId);
removeSignedTransaction(sessionId);
removeAllTransactionsToSign();
removeAllSignedTransactions();
```

</details>

# Unit testing with Jest

The sdk-dapp library exposes bundles for both CommonJS and ESModules, however, in some environments, Jest might require manual mapping of the CommonJS output. To implement it, add the following snippet inside your jest config file.

```javascript
moduleNameMapper: {
    '@multiversx/sdk-dapp/(.*)':
      '<rootDir>/node_modules/@multiversx/sdk-dapp/__commonjs/$1.js'
},
```

You may need in your setupJest.js file do:
```javascript
import 'isomorphic-fetch';
```

# sdk-dapp exports

Since version 2.0, sdk-dapp does not have a default export object.
You have to import everything from its own separate module. Below you can find all the exports.

You can either import everything from a module, or if you really want to make sure you're not importing anything
that is not used, you can import everything from its own file.

You can either go into their specific folder in the module for extra trimming, or import everything together.

for example, these 2 imports are both valid:

```typescript
import {
  useExtensionLogin,
  useGetAccountInfo
} from '@multiversx/sdk-dapp/hooks';
```

and

```typescript
import { useExtensionLogin } from '@multiversx/sdk-dapp/hooks/login';
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account';
```

## constants exports

```typescript
import {
  GAS_PRICE_MODIFIER,
  GAS_PER_DATA_BYTE,
  GAS_LIMIT,
  GAS_PRICE,
  DECIMALS,
  DIGITS,
  mnemonicWords,
  ledgerErrorCodes,
  fallbackNetworkConfigurations
} from '@multiversx/sdk-dapp/constants';
```

## hooks exports

### Login

```typescript
import {
  useExtensionLogin,
  useLedgerLogin,
  useWalletConnectV2Login,
  useWebWalletLogin
} from '@multiversx/sdk-dapp/hooks/login';
```

### Account

```typescript
import {
  useGetAccount, // if you only need the account as on network
  useGetAccountInfo, // if you need all account information from store
  useGetAccountProvider,
  useGetLoginInfo,
  useGetWebsocketSignalTimestamp // get a Date.now() timestamp every time a change occurs on the account on network
} from '@multiversx/sdk-dapp/hooks/account';
```

### Transactions

```typescript
import {
  useCheckTransactionStatus,
  useGetActiveTransactionsStatus,
  useGetFailedTransactions,
  useGetPendingTransactions,
  useGetSignedTransactions,
  useGetSignTransactionsError,
  useGetSuccessfulTransactions,
  useGetTokenDetails,
  useGetTransactionDisplayInfo,
  useParseMultiEsdtTransferData,
  useParseSignedTransactions,
  useSignMultipleTransactions,
  useSignTransactions,
  useSignTransactionsWithDevice,
  useSignTransactionsWithLedger
} from '@multiversx/sdk-dapp/hooks/transactions';
```

### Misc

```typescript
import {
  useDebounce,
  useGetNetworkConfig,
  useGetNotification,
  useUpdateEffect
} from '@multiversx/sdk-dapp/hooks';
```

## services exports

```typescript
import {
  removeTransactionsToSign,
  removeSignedTransaction,
  removeAllSignedTransactions,
  removeAllTransactionsToSign,
  isCrossShardTransaction,
  sendTransactions,
  signTransactions,
  calcTotalFee
} from '@multiversx/sdk-dapp/services';
```

## utils exports

### Account

```typescript
import {
  addressIsValid,
  getAccount,
  getAccountBalance,
  getAccountShard,
  getAddress,
  getLatestNonce,
  getShardOfAddress,
  refreshAccount,
  setNonce,
  signMessage
} from '@multiversx/sdk-dapp/utils/account';
```

### Operations

```typescript
import {
  calculateFeeLimit,
  formatAmount,
  nominate,
  getUsdValue
} from '@multiversx/sdk-dapp/utils/operations';
```

### Transactions

```typescript
import {
  getTokenFromData,
  isTokenTransfer,
  parseMultiEsdtTransferData,
  parseTransactionAfterSigning
} from '@multiversx/sdk-dapp/utils/transactions';
```

### Validation

```typescript
import {
  getIdentifierType,
  stringIsFloat,
  stringIsInteger,
  isContract,
  isStringBase64
} from '@multiversx/sdk-dapp/utils';
```

### Misc

```typescript
import {
  encodeToBase64,
  decodeBase64,
  logout,
  getTokenFromData,
  getIsLoggedIn,
  isSelfESDTContract,
  getAddressFromDataField
} from '@multiversx/sdk-dapp/utils';
```

## Wrappers

```typescript
import {
  DappProvider,
  AuthenticatedRoutesWrapper,
  AppInitializer
} from '@multiversx/sdk-dapp/wrappers';
```

## Web-specific imports

```typescript
import { useIdleTimer } from '@multiversx/sdk-dapp/web';
```

## UI

```typescript
import {
  CopyButton,
  FormatAmount,
  ExplorerLink,
  ExtensionLoginButton,
  LedgerLoginButton,
  LedgerLoginContainer,
  NotificationModal,
  PageState,
  ProgressSteps,
  SignTransactionsModals,
  SignWithDeviceModal,
  SignWithExtensionModal,
  SignWithLedgerModal,
  TransactionsToastList,
  TransactionToast,
  Trim,
  UsdValue,
  WalletConnectLoginButton,
  WalletConnectLoginContainer,
  WebWalletLoginButton
} from '@multiversx/sdk-dapp/UI';
```

or

```typescript
import { CopyButton } from '@multiversx/sdk-dapp/UI/CopyButton';
import { FormatAmount } from '@multiversx/sdk-dapp/UI/FormatAmount';
import { ExplorerLink } from '@multiversx/sdk-dapp/UI/ExplorerLink';

etc;
```

**Important**: `shouldRenderDefaultCss` was removed from all components.

## React Native support

We are aware that there are projects out there that would like to use this library to allow users to seamlessly authenticate with the xPortal App.

You can use this library for its utility functions, like "formatAmount, parseAmount", mnemonic words list or its constants.

However, certain architectural decisions that we made do not work out of the box with React Native runtime (neither Metro nor Re.pack).
Due to this, you cannot yet use the DappProvider wrapping logic in a React Native application.

We have a couple of solutions in mind and are actively working on exploring ways to overcome these limitations.
Until then, you can use @multiversx/erdjs libraries and @walletconnect to connect to the xPortal App.
There are also guide for doing this from the [community](https://github.com/sash20m/react-native-xportal)

## Next.js support

If you are using [Next.js](https://nextjs.org/), make sure to check out the [README](https://github.com/multiversx/mx-template-nextjs-dapp/blob/main/README.md) and implementation of the [Next.js Template dApp](https://github.com/multiversx/mx-template-nextjs-dapp).

## WalletConnect 2.0 Setup

Starting with the 2.0 version of the dApp SDK ( previously `@elrondnetwork/dapp-core@2.0.0` ) and `@multiversx/sdk-dapp@2.2.8` [WalletConnect 2.0](https://docs.walletconnect.com/2.0/) is available as a login and signing provider, allowing users to login by scanning a QR code with the Mobile App

This is an implementation of [sdk-wallet-connect-provider](https://github.com/multiversx/mx-sdk-js-wallet-connect-provider) ( [docs](https://docs.multiversx.com/sdk-and-tools/sdk-js/sdk-js-signing-providers/#the-wallet-connect-provider) ) signing provider

As a ProjectID is needed for the complete functionality, the following change is needed:

### Set the `walletConnectV2ProjectId`

In the [DappProvider](#dappprovider) wrapper a `walletConnectV2ProjectId` must be provided in the `customNetworkConfig`

The Project ID can be generated for free here: [https://cloud.walletconnect.com/sign-in](https://cloud.walletconnect.com/sign-in)

```jsx
<DappProvider
    environment="devnet"
    customNetworkConfig={{
      name: 'customConfig',
      walletConnectV2ProjectId: '9b1a9564f91...'
    }}
>
```

The WalletConnect Project ID grants you access to the [WalletConnect Cloud Relay](https://docs.walletconnect.com/2.0/cloud/relay) that securely manages communication between the device and the dApp.

If the Project ID is valid, the new functionality will work out of the box with the [Transactions and Message signing](#transactions) flows.

## Roadmap

See the [open issues](https://github.com/multiversx/mx-sdk-dapp/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

One can contribute by creating _pull requests_, or by opening _issues_ for discovered bugs or desired features.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

GPL-3.0-or-later
