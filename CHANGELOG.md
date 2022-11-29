# Change Log

All notable changes will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- [Fixed logging out with wallet provider](https://github.com/ElrondNetwork/dapp-core/pull/489)
## [[2.1.15](https://github.com/ElrondNetwork/dapp-core/pull/486)] - 2022-11-21
- [Fixed sign new transaction with Ledger after cancelling transaction](https://github.com/ElrondNetwork/dapp-core/pull/485)
## [[2.1.14](https://github.com/ElrondNetwork/dapp-core/pull/482)] - 2022-11-21
- [Added custom toast to for displaying components](https://github.com/ElrondNetwork/dapp-core/pull/481)

## [[2.1.13](https://github.com/ElrondNetwork/dapp-core/pull/479)] - 2022-11-17
- [Changed custom toast to display transaction objects](https://github.com/ElrondNetwork/dapp-core/pull/478)
- [Fixed the toast progress bar exceeding boundaries](https://github.com/ElrondNetwork/dapp-core/pull/477)

## [[2.1.12](https://github.com/ElrondNetwork/dapp-core/pull/476)] - 2022-11-16

- [Added icon functionality to custom toast](https://github.com/ElrondNetwork/dapp-core/pull/475)

## [[2.1.11](https://github.com/ElrondNetwork/dapp-core/pull/474)] - 2022-11-15

- [Changed `ConfirmationScreen` calling sign hooks depeding on device](https://github.com/ElrondNetwork/dapp-core/pull/461)
- [Updated legacy peers type definitions](https://github.com/ElrondNetwork/dapp-core/pull/460)

## [[2.1.10](https://github.com/ElrondNetwork/dapp-core/pull/473)] - 2022-11-11

- [Fixed `getTrimmedHash` helper](https://github.com/ElrondNetwork/dapp-core/pull/473)

## [[2.1.9](https://github.com/ElrondNetwork/dapp-core/pull/472)] - 2022-11-11

- [Added `getTransactionLinkWithLabel` helper](https://github.com/ElrondNetwork/dapp-core/pull/471)

## [[2.1.8](https://github.com/ElrondNetwork/dapp-core/pull/470)] - 2022-11-10

- [Added fix for missing `transaction.operations`](https://github.com/ElrondNetwork/dapp-core/pull/468)
- [Added `search` param to get transactions API](https://github.com/ElrondNetwork/dapp-core/pull/467)

## [[2.1.7](https://github.com/ElrondNetwork/dapp-core/pull/465)] - 2022-11-04

- [Added `window` and `document` guards for undefined](https://github.com/ElrondNetwork/dapp-core/pull/464)

## [[2.1.6](https://github.com/ElrondNetwork/dapp-core/pull/463)] - 2022-11-03

- [Removed `signTransactionsCancelMessage` from persisted state](https://github.com/ElrondNetwork/dapp-core/pull/462)
- [Changed `useSignTransactions` being called for ledger and extra provider](https://github.com/ElrondNetwork/dapp-core/pull/461)

## [[2.1.5](https://github.com/ElrondNetwork/dapp-core/pull/459)] - 2022-11-02

- [Changed `useSignTransaction` hook to prevent multiple sign requests on same transactions](https://github.com/ElrondNetwork/dapp-core/pull/458)

## [[2.1.4](https://github.com/ElrondNetwork/dapp-core/pull/457)] - 2022-11-01

- [Changed `Notification` component to render only of content is present](https://github.com/ElrondNetwork/dapp-core/pull/456)

## [[2.1.3](https://github.com/ElrondNetwork/dapp-core/pull/455)] - 2022-10-31

- [Changed `onLoginRedirect` callback logic to overwrite callbackRoute navigation](https://github.com/ElrondNetwork/dapp-core/pull/454)
- [Changed `onLoginRedirect` function to allow sending signature and address params](https://github.com/ElrondNetwork/dapp-core/pull/453)

## [[2.1.2](https://github.com/ElrondNetwork/dapp-core/pull/451)] - 2022-10-27

- [Fixed throwing console exception on searching for transaction](https://github.com/ElrondNetwork/dapp-core/pull/449)
- [Updated WalletConnect provider to 2.1.0-beta.3](https://github.com/ElrondNetwork/dapp-core/pull/450)

## [[2.1.1](https://github.com/ElrondNetwork/dapp-core/pull/448)] - 2022-10-20

- [Fixed transaciton signing with extra provider](https://github.com/ElrondNetwork/dapp-core/pull/444)
- [Changed TimeAgo `div` tag to `span`](https://github.com/ElrondNetwork/dapp-core/pull/445)
- [Updated WalletConnect provider to 2.1.0-beta.2, added ping helper, show only latest pairing per app](https://github.com/ElrondNetwork/dapp-core/pull/446)

## [[2.1.0](https://github.com/ElrondNetwork/dapp-core/pull/443)] - 2022-10-14

- [Fix Trim Component on Safari on iOS 16](https://github.com/ElrondNetwork/dapp-core/pull/435)
- [Removed moment dependency](https://github.com/ElrondNetwork/dapp-core/pull/439)
- [Fixed type definitions](https://github.com/ElrondNetwork/dapp-core/pull/406)

## [[2.1.0-rc3](https://github.com/ElrondNetwork/dapp-core/pull/433)] - 2022-09-26

- [Added logic to extract transaction value for staking operations](https://github.com/ElrondNetwork/dapp-core/pull/432)
- [Fixed `UsdValue` intelisense](https://github.com/ElrondNetwork/dapp-core/pull/431)
- [Delegate redirecting after signing to `TreansactionSender`](https://github.com/ElrondNetwork/dapp-core/pull/430)

## [[2.1.0-rc2](https://github.com/ElrondNetwork/dapp-core/pull/428)] - 2022-09-22

- [Added interfaces for `getTransactionValue`](https://github.com/ElrondNetwork/dapp-core/pull/427)

## [[2.1.0-rc1](https://github.com/ElrondNetwork/dapp-core/pull/424)] - 2022-09-21

- [Added documentation about registering a websocket listener](https://github.com/ElrondNetwork/dapp-core/pull/423)
- [Updated @elrondnetwork/erdjs-wallet-connect-provider to 2.1.0-beta.1 with @walletconnect 2.0.0-rc.3](https://github.com/ElrondNetwork/dapp-core/pull/422)
- [Added option for showing equal sign in front of computed USD value by `getUsdValue` function](https://github.com/ElrondNetwork/dapp-core/pull/421)
- [Fixed fetching transaction count and smart contract results count from accounts endpoint](https://github.com/ElrondNetwork/dapp-core/pull/420)
- [Added extra actions names](https://github.com/ElrondNetwork/dapp-core/pull/419)
- [Added transaction interpreter functions and UI components (rc1)](https://github.com/ElrondNetwork/dapp-core/pull/418)

## [[2.0.4](https://github.com/ElrondNetwork/dapp-core/pull/416)] - 2022-09-12

- [Fixed navigating after pressing Cancel on sign modal](https://github.com/ElrondNetwork/dapp-core/pull/415)
- [Added hook allowing to check for dapp modal visibility](https://github.com/ElrondNetwork/dapp-core/pull/416)

## [[2.0.3](https://github.com/ElrondNetwork/dapp-core/pull/414)] - 2022-09-09

- [Added second login attempt error](https://github.com/ElrondNetwork/dapp-core/pull/408)
- [Fixed `AuthenticatedRoutesWrapper` not detecting pattern routes](https://github.com/ElrondNetwork/dapp-core/pull/409)
- [Fixed invalidating signed transactions after sign flow was canceled](https://github.com/ElrondNetwork/dapp-core/pull/413)

## [2.0.2] - 2022-09-01

- [Changed saving account information by using address namespacing](https://github.com/ElrondNetwork/dapp-core/pull/402)
- [Added ledger login default zero index selection on address table](https://github.com/ElrondNetwork/dapp-core/pull/403)
- [Changed internal file imports](https://github.com/ElrondNetwork/dapp-core/pull/404)
- [Fixed setting and rehydrating redux account information](https://github.com/ElrondNetwork/dapp-core/pull/406)
