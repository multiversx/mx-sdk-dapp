
#  dapp-core

> A library that holds the the core logic of a dapp on the Elrond Network

[![NPM](https://img.shields.io/npm/v/dapp-core.svg)](https://www.npmjs.com/package/dapp-core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Installation

The library can be installed via npm or yarn.
```bash
npm install @elrondnetwork/dapp-core
```
or
```bash
yarn add @elrondnetwork/dapp-core
```
# Usage

dapp-core aims to abstract and simplify the process of interacting with users' wallets and with the Elrond Network, allowing developers to easily get started with a new application or integrate dapp-core into an existing application, however complex.

This library covers two main areas: **User Identity** and **Transactions**. The API for interacting with library's logic is exposed via hooks and methods that can be called for logging in the user, getting the status of the user or sending transactions.

However, to simplify usage even further, the library also comes with a default UI that already uses these hooks and methods under the hood. These UI elements can be easily customized with custom css classes.

The default UI is exposed via the DappUI object.

`import { DappUI } from "@elrondnetwork/dapp-core";`

More on this below.

## Prerequisites
There are a couple of requirements that need to be met for the application to work properly.

### React
This library was built for applications that use React, it might not be suitable for usage with other libraries or frameworks.

### DappProvider
You need to wrap your application with the **DappProvider**, which is exported by the library, as we need to create a global Context to be able to manipulate the data.
- import the Provider:

`import { DappProvider } from "@elrondnetwork/dapp-core";`

- Wrap your application with this Provider.

`<DappProvider networkConfig={{ network, walletConnectBridge, walletConnectDeepLink }}>`

As you might have noticed, the DappProvider accepts a networkConfig object with a couple of keys. This is necessary for us to know which environment you use and to allow the developers to use different APIs and different connection providers.

- **walletConnectBridge (optional)** is a string which is used to establish the connection to walletConnect library.
- **walletConnectDeepLink (optional)** is a string which will create a deeplink for an application that is used on a mobile phone, instead of generating the login QR code.
- **network** is a required configuration file that contains the following information about the environment of the application:

```
{
  id: string;
  egldLabel: string;
  name: string;
  walletAddress: string;
  apiAddress: string;
  gatewayAddress: string;
  explorerAddress: string;
}
```

## User Identity
Dapp-core makes logging in and persisting user's session easy and hassle-free. The library exposes two ways in which a user can be logged in:

### Login UI
There are a couple of very handy React components that can be used to login the user and protect certain routes if the user is not logged in.

Under the DappUI object mentioned above, you can find 4 buttons (one for each provider) which abstract away all the logic of loggin in the user and render the default UI for everything. These buttons can be easily customized with a custom css class.
The exported buttons are:
- DappUI.ExtensionLoginButton
- DappUI.WalletConnectLoginButton
- DappUI.LedgerLoginButton
- DappUI.WebWalletLoginButton

example:
```
<DappUI.ExtensionLoginButton callbackRoute="/dashboard" buttonClassName="ExtensionLogin" loginButtonText="Extension login" />
```

They can also be used with children

```
<DappUI.ExtensionLoginButton callbackRoute="/dashboard" buttonClassName="ExtensionLogin" loginButtonText="Extension login">
  <>
    <icon/>
    <p>Login text</p>
  <>
</DappUI.ExtensionLoginButton
```

Also, for a quicker setup, the DappUI object exports a `DappUI.UnlockPage` component, which contains all 4 buttons.

Another handly component is DappUI.AuthenticatedRoutesWrapper, which can be used to protect certain routes and redirect the user to login page if the user is not authenticated.

Import from dapp-core;
```
import { AuthenticatedRoutesWrapper} from "@elrondnetwork/dapp-core";
```

Use with routes:
```
<AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={routeNames.unlock}
        >
          {appContent}
        </AuthenticatedRoutesWrapper>
```

**routes** should be an array with objects with a signature similar to this:

```
{
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
    authenticatedRoute: true,
  }
```

The important parts that makes this component work are the flag **authenticatedRoute: true** and the key **path**, which means that this route should be accessible only to authenticated users.


### Login hooks

The Login UI is very handy, but if one wants to build a completely custom UI, one can bypass the default UI and opt in for the login hooks, which expose a trigger function and the login data, ready to be rendered.

These hooks are exposed by the `loginServices` object, which can be imported from the dapp-core:

```
import {loginServices} from @elrondnetwork/dapp-core
```

There are 4 hooks available:
- useExtensionLogin
- useWalletConnectLogin
- useLedgerLogin
- useWebWalletConnect

All hooks have the same respose signature:

return type is as follows:
```
const [triggerFunction, genericLoginReturnType, customLoginReturnType] = useLoginHook({
    callbackRoute,
    logoutRoute
  });
```

- **triggerFunction** is a function that needs to be called for the login flow to be initiated;
- **genericLoginReturnType** is an object that is exactly the same for all hooks:

```
{
  error: string,
  isFailed: boolean,
  isLoading: boolean,
  isLoggedIn: boolean
}
```

- **customLoginReturnType** is an object that is custom for each hook and returns specific data for that login:

  - null for useExtensionLogin;

  - null for useWebWalletConnect;

  -  `{ uriDeepLink: string, qrCodeSvg: svgElement }` for useWalletConnectLogin;

  -
```
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


### Reading User State

Once logged in, the user's session is persisted and can be read and deleted via a couple of handy functions.

For logging out, the library exposes a simple function called **logout**, which can be called to clear the user.

There are 2 ways of reading the user current state: hooks for using inside components and for reacting to changes in the data and simple functions for reading data outside of React components or inside handlers.
- hooks: `useGetLoginInfo, useGetAccountInfo, useGetNetworkConfig`;
- functions: `getAccount, getAccountBalance, getAccountShard, getAddress, getIsLoggedIn;`

## Transactions

The dapp-core library also exposes a handy way of sending transactions and tracking their status, with a couple of handy UI components;

#### Sending Transactions

The API for sending transactions is very simple and a lot of intricacies have been abstracted. the library exposes a function called sendTransactions
`import { sendTransactions } from "@elrondnetwork/dapp-core";`

This can be used to send a transaction with minimum information:

```
const { sessionId, error } = await sendTransactions({
    transactions: [
        {
          value: '1000000000000000000',
          data: 'ping',
          receiver: contractAddress
        },
      ],
    });
```

Which returns a Promise that will be fulfilled with `{error?: string; sessionId: string | null;}`

sessionId is the transaction's batch id which can be used to track a transaction's status and react to it.

### Tracking a transaction

The library exposes a hook called useTrackTransactionStatus under the object `transactionServices`.

```
import {transactionServices} from @elrondnetwork/dapp-core;

const transactionStatus = transactionServices.useTrackTransactionStatus({
  transactionId: sessionId,
  onSuccess,
  onFailed,
  onCancelled
});
```

transactionStatus has the following information about the transaction:
```
{
  isPending,
  isSuccessful,
  isFailed,
  isCancelled,
  errorMessage,
  status,
  transactions
}
```

It's safe to pass in a null as a sessionId, if the transaction wasn't sent yet, the hook will just return an empty object.

Also, one can use the hook `useGetPendingTransactions` to get a list of all pending transactions.

### Transaction Toasts UI

dapp-core also exposes a very handy UI for tracking transactions via toasts that use the above mentioned hooks and display toasts with transactions statuses.

The toasts list is exposed via the  DappUI.TransactionsToastList component and can be used just by rendering it inside the application.

```
<App>
  <Router/>
  <DappUI.TransactionsToastList />
</App>
```

**Important**: This has to be inside the `<DappProvider/>` children.

# License

MIT © [](https://github.com/)




