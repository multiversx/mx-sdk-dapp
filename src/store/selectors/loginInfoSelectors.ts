import { StoreType } from 'store/store.types';

export const loginInfoSelector = ({ loginInfo }: StoreType) => loginInfo;

export const tokenLoginSelector = ({ loginInfo }: StoreType) =>
  loginInfo.tokenLogin;

export const walletConnectLoginSelector = ({ loginInfo }: StoreType) =>
  loginInfo.walletConnectLogin;

export const providerTypeSelector = ({ loginInfo }: StoreType) =>
  loginInfo.providerType;

export const ledgerLoginSelector = ({ loginInfo }: StoreType) =>
  loginInfo.ledgerLogin;

export const loginExpiresAtSelector = ({ loginInfo }: StoreType) =>
  loginInfo.loginExpiresAt;
