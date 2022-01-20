
#  dapp-core

> A library that holds the core functional logic of a dapp on the Elrond Network

[![NPM](https://img.shields.io/npm/v/dapp-core.svg)](https://www.npmjs.com/package/@elrondnetwork/dapp-core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


The UI components have been moved to [@elrondnetwork/dapp-core-components](https://github.com/ElrondNetwork/dapp-core-components)

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

dapp-core aims to abstract and simplify the process of interacting with users' wallets and with the Elrond Network, allowing developers to easily get started with a new application or integrate dapp-core into an existing application.

This library covers two main areas: **User Identity** and **Transactions**. The API for interacting with library's logic is exposed via hooks and methods that can be called for logging in the user, getting the status of the user or sending transactions.


## Prerequisites
There are a couple of requirements that need to be met for the application to work properly.

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

`import { DappProvider } from "@elrondnetwork/dapp-core";`

- Wrap your application with this Provider.

`<DappProvider networkConfig={{ network, walletConnectBridge, walletConnectDeepLink }}>`

As you might have noticed, the DappProvider accepts a `networkConfig` object with a couple of keys. This allows using different APIs and different connection providers.

- **walletConnectBridge (optional)** is a string that is used to establish the connection to walletConnect library.
- **walletConnectDeepLink (optional)** is a string that will create a deeplink for an application that is used on a mobile phone, instead of generating the login QR code.
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
  </details>

## User Identity
Dapp-core makes logging in and persisting user's session easy and hassle-free.



A handy component is AuthenticatedRoutesWrapper, which can be used to protect certain routes and redirect the user to login page if the user is not authenticated.

Import from dapp-core:
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

  <details><summary>
Login hooks
  </summary>

### Login hooks
This area covers the login hooks, which expose a trigger function and the login data, ready to be rendered.

These hooks are exposed by the `loginServices` object, which can be imported from dapp-core:

```
import {loginServices} from @elrondnetwork/dapp-core
```

There are 4 available hooks:
- useExtensionLogin
- useWalletConnectLogin
- useLedgerLogin
- useWebWalletLogin

All hooks have the same respose signature:

return type is as follows:
```
const [triggerFunction, genericLoginReturnType, customLoginReturnType] = useLoginHook({
    callbackRoute,
    logoutRoute
  });
```

- **initiateLogin** is a function that needs to be called for the login flow to be initiated;
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

</details>

  <details>
<summary>
Reading User State
  </summary>

### Reading User State
Once logged in, the user's session is persisted and can be read and deleted via a couple of handy functions.

For logging out, the library exposes a simple function called **logout**, which can be called to clear the user data.

There are 2 ways of reading the user current state: hooks (to be used inside components and for reacting to changes in the data) and simple functions (for reading data outside of React components or inside handlers).
- hooks: `useGetLoginInfo, useGetAccountInfo, useGetNetworkConfig`;
- functions: `getAccount, getAccountBalance, getAccountShard, getAddress, getIsLoggedIn;`

</details>

## Transactions

The dapp-core library exposes a straight-forward way of sending transactions and tracking their status, with a couple of handy UI components;

<details><summary>
Sending Transactions
  </summary>

### Sending Transactions
The API for sending transactions is a function called **sendTransactions**:

`import { sendTransactions } from "@elrondnetwork/dapp-core";`

It can be used to send a transaction with minimum information:

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

It returns a Promise that will be fulfilled with `{error?: string; sessionId: string | null;}`

`sessionId` is the transaction's batch id which can be used to track a transaction's status and react to it.

</details>

<details><summary>
Transaction Signing Flow
  </summary>


### Transaction Signing Flow

Once a transaction has been submitted,
the user will be prompted in his provider (Extension, Maiar etc) to sign the transaction.

We suggest displaying a message on the screen that confirms the transaction that needs to be signed.
You may do this with `useSignTransactions` hook.

```
 const {
    callbackRoute,
    transactions,
    error,
    sessionId,
    onAbort,
    hasTransactions
  } = useSignTransactions();
```

This hook will let you know if there are any transactions and you can programatically abort the signing process.

You can also get the provider via
```
  const { providerType } = useGetAccountProvider();
```
and use that to display an appropriate message to the user.

</details>

<details><summary>
Tracking a transaction
  </summary>


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

It's safe to pass in `null` as a sessionId, so if the transaction wasn't yet sent, the hook will just return an empty object.

Also, one can use the hook `useGetPendingTransactions` to get a list of all pending transactions.
</details>


## Roadmap

See the [open issues](https://github.com/ElrondNetwork/dapp-core/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

One can contribute by creating _pull requests_, or by opening _issues_ for discovered bugs or desired features.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Developers

The [Elrond Team](https://elrond.com/team/).

## License
GPL-3.0-or-later




