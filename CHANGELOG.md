# Change Log

All notable changes will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [[v2.7.1](https://github.com/multiversx/mx-sdk-dapp/pull/632)] - 2023-02-13

- [Fixed ledger issues link](https://github.com/multiversx/mx-sdk-dapp/pull/632)
## [[v2.7.0](https://github.com/multiversx/mx-sdk-dapp/pull/631)] - 2023-02-13

- [Added the ability to relogin into dapps from xPortal](https://github.com/multiversx/mx-sdk-dapp/pull/629)
- [Breaking change: **xPortal authentication panel layout and Sign Transaction panel layout**.

  Migration guide:

- Use `InnerWalletConnectComponentsClassesType` for styling xPortal screens and `signStepInnerClasses` for styling Sign Transaction modals.](https://github.com/multiversx/mx-sdk-dapp/pull/628)

## [[v2.6.3](https://github.com/multiversx/mx-sdk-dapp/pull/626)] - 2023-02-10

- [Added caching mechanism for block hash](https://github.com/multiversx/mx-sdk-dapp/pull/625)

## [[v2.6.2](https://github.com/multiversx/mx-sdk-dapp/pull/624)] - 2023-02-09

- [Fixed NFT display in Sign screen](https://github.com/multiversx/mx-sdk-dapp/pull/623)

## [[v2.6.1](https://github.com/multiversx/mx-sdk-dapp/pull/622)] - 2023-02-08

- [Fixed addressTable component balance fetch](https://github.com/multiversx/mx-sdk-dapp/pull/621)

## [[v2.6.1](https://github.com/multiversx/mx-sdk-dapp/pull/622)] - 2023-02-08

- [Fixed addressTable component balance fetch](https://github.com/multiversx/mx-sdk-dapp/pull/621)

## [[v2.6.0](https://github.com/multiversx/mx-sdk-dapp/pull/620)] - 2023-02-06

- [Breaking change: **Ledger authentication panel layout**.

  Migration guide:

- Use `innerLedgerComponentsClasses` for styling Ledger screens.
- Addresses will trim if container is < 730px, needs to be at least that size.](https://github.com/multiversx/mx-sdk-dapp/pull/619)

## [[v2.5.1](https://github.com/multiversx/mx-sdk-dapp/pull/618)] - 2023-02-04

- [Fixed ledger cancelled transactions state](https://github.com/multiversx/mx-sdk-dapp/pull/617)

## [[v2.5.0](https://github.com/multiversx/mx-sdk-dapp/pull/615)] - 2023-02-04

- [Fixed sign transactions with web wallet when data field is empty](https://github.com/multiversx/mx-sdk-dapp/pull/614)
- [Added missing attributes of transaction types](https://github.com/multiversx/mx-sdk-dapp/pull/613)
- [Added Opera Crypto wallet provider - Beta](https://github.com/multiversx/mx-sdk-dapp/pull/600)
- [Added default SignTransactionModal for extra provider](https://github.com/multiversx/mx-sdk-dapp/pull/612)

## [[v2.4.0](https://github.com/multiversx/mx-sdk-dapp/pull/610)] - 2023-02-03

- [Added support for webview provider automatic login](https://github.com/multiversx/mx-sdk-dapp/pull/609)
- [Extension and WalletConnect login rebranding](https://github.com/multiversx/mx-sdk-dapp/pull/611)

## [[v2.3.5](https://github.com/multiversx/mx-sdk-dapp/pull/604)] - 2023-02-02

- [Skip login when address is prefilled](https://github.com/multiversx/mx-sdk-dapp/pull/607)

## [[v2.3.4](https://github.com/multiversx/mx-sdk-dapp/pull/604)] - 2023-02-01

- [Sanitize web wallet login callback URL](https://github.com/multiversx/mx-sdk-dapp/pull/605)

## [[v2.3.3](https://github.com/multiversx/mx-sdk-dapp/pull/604)] - 2023-01-31

- [Fixed erronated publish 2.3.2](https://github.com/multiversx/mx-sdk-dapp/pull/604)

## [[v2.3.2](https://github.com/multiversx/mx-sdk-dapp/pull/603)] - 2023-01-31

- [Extracted ledger address screens control to separate hook](https://github.com/multiversx/mx-sdk-dapp/pull/602)

## [[v2.3.1](https://github.com/multiversx/mx-sdk-dapp/pull/599)] - 2023-01-26

- [Added support to not show meridiem by default in `getHumanReadableTimeFormat` util function](https://github.com/multiversx/mx-sdk-dapp/pull/597)
- [Fixed web wallet cancelled login](https://github.com/multiversx/mx-sdk-dapp/pull/598)

## [[v2.3.0](https://github.com/multiversx/mx-sdk-dapp/pull/596)] - 2023-01-20

- [Added support for autoLogout callback url](https://github.com/multiversx/mx-sdk-dapp/pull/594)
- [Fixed imports for React Native support](https://github.com/multiversx/mx-sdk-dapp/pull/595)

## [[v2.2.12](https://github.com/multiversx/mx-sdk-dapp/pull/592)] - 2023-01-17

- [Created `useSignMessage` hook to support message signing](https://github.com/multiversx/mx-sdk-dapp/pull/578)

## [[v2.2.11](https://github.com/multiversx/mx-sdk-dapp/pull/591)] - 2023-01-17

- [Fixed ledger address table display issue](https://github.com/multiversx/mx-sdk-dapp/pull/590)

## [[v2.2.10](https://github.com/multiversx/mx-sdk-dapp/pull/586)] - 2023-01-17

- [Revert "increase hw-provider package version"](https://github.com/multiversx/mx-sdk-dapp/pull/585)

## [[v2.2.10-alpha.0](https://github.com/multiversx/mx-sdk-dapp/pull/584)] - 2023-01-17

- [Increase hw-provider package version](https://github.com/multiversx/mx-sdk-dapp/pull/583)
- [Change multiversX defi wallet store urls](https://github.com/multiversx/mx-sdk-dapp/pull/582)

## [[v2.2.9](https://github.com/multiversx/mx-sdk-dapp/pull/577)] - 2023-01-12

- [Added partial support for Next.js](https://github.com/multiversx/mx-sdk-dapp/pull/559)

## [[2.2.8](https://api.github.com/repos/multiversx/mx-sdk-dapp/pulls/557)] - 2023-01-12

- [Created first version of @multiversx/sdk-dapp](https://github.com/multiversx/mx-sdk-dapp/pull/538)

## [[2.2.7](https://api.github.com/repos/multiversx/mx-sdk-dapp/pulls/554)] - 2023-01-10

- [Changed branding from elrond to multiversx](https://github.com/multiversx/mx-sdk-dapp/pull/538)

## [[2.2.6](https://github.com/multiversx/mx-sdk-dapp/pull/531)] - 2023-01-09

- [Fixed cancel transaction toast position](https://github.com/multiversx/mx-sdk-dapp/pull/537)
- [Reverted WalletConnect provider to 2.1.0-beta.5 and stability fixes](https://github.com/multiversx/mx-sdk-dapp/pull/539)

## [[2.2.5](https://github.com/multiversx/mx-sdk-dapp/pull/531)] - 2023-01-05

- [Fixed fetching account twice on login. Populate shard from account.](https://github.com/multiversx/mx-sdk-dapp/pull/530)
- [Updated WalletConnect provider to 2.1.0-beta.6 and stability fixes](https://github.com/multiversx/mx-sdk-dapp/pull/529)
- [Refetch account data on network change](https://github.com/multiversx/mx-sdk-dapp/pull/526)

## [[2.2.4](https://github.com/multiversx/mx-sdk-dapp/pull/525)] - 2022-12-28

- [Fixed extension plain login](https://github.com/multiversx/mx-sdk-dapp/pull/523)

## [[2.2.3](https://github.com/multiversx/mx-sdk-dapp/pull/510)] - 2022-12-16

- [Fixed login on nativeAuth block failed](https://github.com/multiversx/mx-sdk-dapp/pull/516)
- [Changed CSS to exclude `!important;` and added className to transaction info components](https://github.com/multiversx/mx-sdk-dapp/pull/517)
- [Added missing actions to TransactionActionsEnum `AxiosInterceptorContext` response](https://github.com/multiversx/mx-sdk-dapp/pull/518)

## [[2.2.2](https://github.com/multiversx/mx-sdk-dapp/pull/512)] - 2022-12-16

- [Fixed loginHooks to have same response and changed `AxiosInterceptorContext` response](https://github.com/multiversx/mx-sdk-dapp/pull/511)

## [[2.2.1](https://github.com/multiversx/mx-sdk-dapp/pull/510)] - 2022-12-16

- [Changed logging in logic to allow signing custom token](https://github.com/multiversx/mx-sdk-dapp/pull/509)
- [Security issue fixed by substituting `anchorme` with linkify.js and fixed `getScamFlag` logic](https://github.com/multiversx/mx-sdk-dapp/pull/508)

## [[2.2.0](https://github.com/multiversx/mx-sdk-dapp/pull/507)] - 2022-12-14

- [Added Axios interceptor wrapper to be used with `nativeAuth`](https://github.com/multiversx/mx-sdk-dapp/pull/506)
- [Changed `signTransactions.ts` import to resolve Next.js support](https://github.com/multiversx/mx-sdk-dapp/pull/505)
- [Upgraded `@elrondnetwork/erdjs-web-wallet-provider` to vesion 2.1.2](https://github.com/multiversx/mx-sdk-dapp/pull/503)
- [Added `nativeAuth` and Storybook](https://github.com/multiversx/mx-sdk-dapp/pull/504)

## [[2.1.20](https://github.com/multiversx/mx-sdk-dapp/pull/500)] - 2022-12-07

- [Allow compatible versions of peer deps](https://github.com/multiversx/mx-sdk-dapp/pull/499)

## [[2.1.19](https://github.com/multiversx/mx-sdk-dapp/pull/498)] - 2022-12-05

- [Fixed web-wallet login on FireFox](https://github.com/multiversx/mx-sdk-dapp/pull/497)

## [[2.1.18](https://github.com/multiversx/mx-sdk-dapp/pull/495)] - 2022-12-01

- [Updated WalletConnect provider to 2.1.0-beta.5](https://github.com/multiversx/mx-sdk-dapp/pull/494)

## [[2.1.17](https://github.com/multiversx/mx-sdk-dapp/pull/493)] - 2022-12-01

- [Fixed setting incremental nonces when signing with ledger](https://github.com/multiversx/mx-sdk-dapp/pull/492)

## [[2.1.16](https://github.com/multiversx/mx-sdk-dapp/pull/490)] - 2022-11-29

- [Fixed logging out with wallet provider](https://github.com/multiversx/mx-sdk-dapp/pull/489)
- [Added `status` param to `getTransactions` API](https://github.com/multiversx/mx-sdk-dapp/pull/488)

## [[2.1.15](https://github.com/multiversx/mx-sdk-dapp/pull/486)] - 2022-11-21

- [Fixed sign new transaction with Ledger after cancelling transaction](https://github.com/multiversx/mx-sdk-dapp/pull/485)

## [[2.1.14](https://github.com/multiversx/mx-sdk-dapp/pull/482)] - 2022-11-21

- [Added custom toast to for displaying components](https://github.com/multiversx/mx-sdk-dapp/pull/481)

## [[2.1.13](https://github.com/multiversx/mx-sdk-dapp/pull/479)] - 2022-11-17

- [Changed custom toast to display transaction objects](https://github.com/multiversx/mx-sdk-dapp/pull/478)
- [Fixed the toast progress bar exceeding boundaries](https://github.com/multiversx/mx-sdk-dapp/pull/477)

## [[2.1.12](https://github.com/multiversx/mx-sdk-dapp/pull/476)] - 2022-11-16

- [Added icon functionality to custom toast](https://github.com/multiversx/mx-sdk-dapp/pull/475)

## [[2.1.11](https://github.com/multiversx/mx-sdk-dapp/pull/474)] - 2022-11-15

- [Changed `ConfirmationScreen` calling sign hooks depeding on device](https://github.com/multiversx/mx-sdk-dapp/pull/461)
- [Updated legacy peers type definitions](https://github.com/multiversx/mx-sdk-dapp/pull/460)

## [[2.1.10](https://github.com/multiversx/mx-sdk-dapp/pull/473)] - 2022-11-11

- [Fixed `getTrimmedHash` helper](https://github.com/multiversx/mx-sdk-dapp/pull/473)

## [[2.1.9](https://github.com/multiversx/mx-sdk-dapp/pull/472)] - 2022-11-11

- [Added `getTransactionLinkWithLabel` helper](https://github.com/multiversx/mx-sdk-dapp/pull/471)

## [[2.1.8](https://github.com/multiversx/mx-sdk-dapp/pull/470)] - 2022-11-10

- [Added fix for missing `transaction.operations`](https://github.com/multiversx/mx-sdk-dapp/pull/468)
- [Added `search` param to get transactions API](https://github.com/multiversx/mx-sdk-dapp/pull/467)

## [[2.1.7](https://github.com/multiversx/mx-sdk-dapp/pull/465)] - 2022-11-04

- [Added `window` and `document` guards for undefined](https://github.com/multiversx/mx-sdk-dapp/pull/464)

## [[2.1.6](https://github.com/multiversx/mx-sdk-dapp/pull/463)] - 2022-11-03

- [Removed `signTransactionsCancelMessage` from persisted state](https://github.com/multiversx/mx-sdk-dapp/pull/462)
- [Changed `useSignTransactions` being called for ledger and extra provider](https://github.com/multiversx/mx-sdk-dapp/pull/461)

## [[2.1.5](https://github.com/multiversx/mx-sdk-dapp/pull/459)] - 2022-11-02

- [Changed `useSignTransaction` hook to prevent multiple sign requests on same transactions](https://github.com/multiversx/mx-sdk-dapp/pull/458)

## [[2.1.4](https://github.com/multiversx/mx-sdk-dapp/pull/457)] - 2022-11-01

- [Changed `Notification` component to render only of content is present](https://github.com/multiversx/mx-sdk-dapp/pull/456)

## [[2.1.3](https://github.com/multiversx/mx-sdk-dapp/pull/455)] - 2022-10-31

- [Changed `onLoginRedirect` callback logic to overwrite callbackRoute navigation](https://github.com/multiversx/mx-sdk-dapp/pull/454)
- [Changed `onLoginRedirect` function to allow sending signature and address params](https://github.com/multiversx/mx-sdk-dapp/pull/453)

## [[2.1.2](https://github.com/multiversx/mx-sdk-dapp/pull/451)] - 2022-10-27

- [Fixed throwing console exception on searching for transaction](https://github.com/multiversx/mx-sdk-dapp/pull/449)
- [Updated WalletConnect provider to 2.1.0-beta.3](https://github.com/multiversx/mx-sdk-dapp/pull/450)

## [[2.1.1](https://github.com/multiversx/mx-sdk-dapp/pull/448)] - 2022-10-20

- [Fixed transaciton signing with extra provider](https://github.com/multiversx/mx-sdk-dapp/pull/444)
- [Changed TimeAgo `div` tag to `span`](https://github.com/multiversx/mx-sdk-dapp/pull/445)
- [Updated WalletConnect provider to 2.1.0-beta.2, added ping helper, show only latest pairing per app](https://github.com/multiversx/mx-sdk-dapp/pull/446)

## [[2.1.0](https://github.com/multiversx/mx-sdk-dapp/pull/443)] - 2022-10-14

- [Fix Trim Component on Safari on iOS 16](https://github.com/multiversx/mx-sdk-dapp/pull/435)
- [Removed moment dependency](https://github.com/multiversx/mx-sdk-dapp/pull/439)
- [Fixed type definitions](https://github.com/multiversx/mx-sdk-dapp/pull/406)

## [[2.1.0-rc3](https://github.com/multiversx/mx-sdk-dapp/pull/433)] - 2022-09-26

- [Added logic to extract transaction value for staking operations](https://github.com/multiversx/mx-sdk-dapp/pull/432)
- [Fixed `UsdValue` intelisense](https://github.com/multiversx/mx-sdk-dapp/pull/431)
- [Delegate redirecting after signing to `TreansactionSender`](https://github.com/multiversx/mx-sdk-dapp/pull/430)

## [[2.1.0-rc2](https://github.com/multiversx/mx-sdk-dapp/pull/428)] - 2022-09-22

- [Added interfaces for `getTransactionValue`](https://github.com/multiversx/mx-sdk-dapp/pull/427)

## [[2.1.0-rc1](https://github.com/multiversx/mx-sdk-dapp/pull/424)] - 2022-09-21

- [Added documentation about registering a websocket listener](https://github.com/multiversx/mx-sdk-dapp/pull/423)
- [Updated @elrondnetwork/erdjs-wallet-connect-provider to 2.1.0-beta.1 with @walletconnect 2.0.0-rc.3](https://github.com/multiversx/mx-sdk-dapp/pull/422)
- [Added option for showing equal sign in front of computed USD value by `getUsdValue` function](https://github.com/multiversx/mx-sdk-dapp/pull/421)
- [Fixed fetching transaction count and smart contract results count from accounts endpoint](https://github.com/multiversx/mx-sdk-dapp/pull/420)
- [Added extra actions names](https://github.com/multiversx/mx-sdk-dapp/pull/419)
- [Added transaction interpreter functions and UI components (rc1)](https://github.com/multiversx/mx-sdk-dapp/pull/418)

## [[2.0.4](https://github.com/multiversx/mx-sdk-dapp/pull/416)] - 2022-09-12

- [Fixed navigating after pressing Cancel on sign modal](https://github.com/multiversx/mx-sdk-dapp/pull/415)
- [Added hook allowing to check for dapp modal visibility](https://github.com/multiversx/mx-sdk-dapp/pull/416)

## [[2.0.3](https://github.com/multiversx/mx-sdk-dapp/pull/414)] - 2022-09-09

- [Added second login attempt error](https://github.com/multiversx/mx-sdk-dapp/pull/408)
- [Fixed `AuthenticatedRoutesWrapper` not detecting pattern routes](https://github.com/multiversx/mx-sdk-dapp/pull/409)
- [Fixed invalidating signed transactions after sign flow was canceled](https://github.com/multiversx/mx-sdk-dapp/pull/413)

## [2.0.2] - 2022-09-01

- [Changed saving account information by using address namespacing](https://github.com/multiversx/mx-sdk-dapp/pull/402)
- [Added ledger login default zero index selection on address table](https://github.com/multiversx/mx-sdk-dapp/pull/403)
- [Changed internal file imports](https://github.com/multiversx/mx-sdk-dapp/pull/404)
- [Fixed setting and rehydrating redux account information](https://github.com/multiversx/mx-sdk-dapp/pull/406)
