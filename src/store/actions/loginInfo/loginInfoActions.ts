import { ProviderType } from 'providers/types/providerFactory.types';
import {
  LedgerLoginType,
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
    {
      type: 'setProviderType',
      // @ts-ignore
      payload: {
        value: providerType
      }
    }
  );

export const setTokenLogin = (tokenLogin: TokenLoginType) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.tokenLogin = tokenLogin;
    },
    false,
    {
      type: 'setTokenLogin',
      // @ts-ignore
      payload: {
        value: tokenLogin
      }
    }
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
    {
      type: 'setLoginToken',
      // @ts-ignore
      payload: {
        value: loginToken
      }
    }
  );

export const setTokenLoginSignature = (signature: string) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      if (state?.tokenLogin != null) {
        state.tokenLogin.signature = signature;
      }
    },
    false,
    {
      type: 'setTokenLoginSignature',
      // @ts-ignore
      payload: {
        value: signature
      }
    }
  );

export const setWalletConnectLogin = (
  walletConnectLogin: WalletConnectLoginType | null
) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.walletConnectLogin = walletConnectLogin;
    },
    false,
    {
      type: 'setWalletConnectLogin',
      // @ts-ignore
      payload: {
        value: walletConnectLogin
      }
    }
  );

export const setLedgerLogin = (ledgerLogin: LedgerLoginType | null) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.ledgerLogin = ledgerLogin;
    },
    false,
    {
      type: 'setLedgerLogin',
      // @ts-ignore
      payload: {
        value: ledgerLogin
      }
    }
  );

export const setIsWalletConnectV2Initialized = (isInitialized: boolean) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.isWalletConnectV2Initialized = isInitialized;
    },
    false,
    {
      type: 'setIsWalletConnectV2Initialized',
      // @ts-ignore
      payload: {
        value: isInitialized
      }
    }
  );

export const removeLoginExpiresAt = () =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.loginExpiresAt = null;
    },
    false,
    {
      type: 'removeLoginExpiresAt',
      // @ts-ignore
      payload: {
        value: null
      }
    }
  );

export const addLoginExpiresAt = (expiresAt: number) =>
  getStore().setState(
    ({ loginInfo: state }) => {
      state.loginExpiresAt = expiresAt;
    },
    false,
    {
      type: 'addLoginExpiresAt',
      // @ts-ignore
      payload: {
        value: expiresAt
      }
    }
  );
