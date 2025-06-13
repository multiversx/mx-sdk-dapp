import {
  ProviderTypeEnum,
  ProviderType
} from 'providers/types/providerFactory.types';
import {
  LedgerLoginType,
  LoginInfoType,
  WalletConnectLoginType
} from 'store/slices/loginInfo/loginInfo.types';
import { getStore } from 'store/store';
import { TokenLoginType } from 'types/login.types';

export const setProviderType = <T extends ProviderType = ProviderType>(
  providerType: T
) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.providerType = providerType;
    },
    false,
    'setProviderType'
  );

export const setTokenLogin = (tokenLogin: TokenLoginType) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.tokenLogin = tokenLogin;
    },
    false,
    'setTokenLogin'
  );

export const setLoginToken = (loginToken: string) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      if (state.tokenLogin != null) {
        state.tokenLogin.loginToken = loginToken;
        return;
      }
      state.tokenLogin = {
        loginToken
      };
    },
    false,
    'setLoginToken'
  );

export const setTokenLoginSignature = (signature: string) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      if (state?.tokenLogin != null) {
        state.tokenLogin.signature = signature;
      }
    },
    false,
    'setTokenLoginSignature'
  );

export const setWalletLogin = (walletLogin: LoginInfoType | null) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.walletLogin = walletLogin;
    },
    false,
    'setWalletLogin'
  );

export const setWalletConnectLogin = (
  walletConnectLogin: WalletConnectLoginType | null
) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.walletConnectLogin = walletConnectLogin;
    },
    false,
    'setWalletConnectLogin'
  );

export const setLedgerLogin = (ledgerLogin: LedgerLoginType | null) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.ledgerLogin = ledgerLogin;
    },
    false,
    'setLedgerLogin'
  );

export const setLogoutRoute = (logoutRoute: string | undefined) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.logoutRoute = logoutRoute;
    },
    false,
    'setLogoutRoute'
  );

export const setIsWalletConnectV2Initialized = (isInitialized: boolean) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.isWalletConnectV2Initialized = isInitialized;
    },
    false,
    'setIsWalletConnectV2Initialized'
  );

export const removeLoginExpiresAt = () =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.loginExpiresAt = null;
    },
    false,
    'removeLoginExpiresAt'
  );

export const addLoginExpiresAt = (expiresAt: number) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.loginExpiresAt = expiresAt;
    },
    false,
    'addLoginExpiresAt'
  );
