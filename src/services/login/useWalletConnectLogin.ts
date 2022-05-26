import { useEffect, useRef, useState } from 'react';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider';
import { useUpdateEffect } from 'hooks/useUpdateEffect';
import {
  getAccountProvider,
  setAccountProvider
} from 'providers/accountProvider';
import { loginAction } from 'redux/commonActions';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import {
  isLoggedInSelector,
  walletConnectBridgeAddressSelector,
  walletConnectDeepLinkSelector
} from 'redux/selectors';
import {
  setTokenLogin,
  setTokenLoginSignature,
  setWalletConnectLogin
} from 'redux/slices';
import { LoginMethodsEnum } from 'types/enums';
import { logout } from 'utils';
import { optionalRedirect } from 'utils/internal';
import Timeout = NodeJS.Timeout;
import { LoginHookGenericStateType } from '../types';

interface InitWalletConnectType {
  callbackRoute: string;
  logoutRoute: string;
  token?: string;
  shouldLoginUser?: boolean;
  redirectAfterLogin?: boolean;
}

export interface WalletConnectLoginHookCustomStateType {
  uriDeepLink: string | null;
  walletConnectUri?: string;
}

export type WalletConnectLoginHookReturnType = [
  (loginProvider?: boolean) => void,
  LoginHookGenericStateType,
  WalletConnectLoginHookCustomStateType
];

export const useWalletConnectLogin = ({
  callbackRoute,
  logoutRoute,
  token,
  redirectAfterLogin = false
}: InitWalletConnectType): WalletConnectLoginHookReturnType => {
  const dispatch = useDispatch();
  const heartbeatInterval = 15000;

  const [error, setError] = useState<string>('');
  const [wcUri, setWcUri] = useState<string>('');

  const provider = getAccountProvider();
  const walletConnectBridgeAddress = useSelector(
    walletConnectBridgeAddressSelector
  );
  const walletConnectDeepLink = useSelector(walletConnectDeepLinkSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const providerRef = useRef<any>(provider);

  let heartbeatDisconnectInterval: Timeout;

  const hasWcUri = Boolean(wcUri);
  const isLoading = !hasWcUri;
  const uriDeepLink = hasWcUri
    ? `${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(wcUri)}`
    : null;

  useEffect(() => {
    handleHeartbeat();

    const interval = setInterval(() => {
      handleHeartbeat();
    }, heartbeatInterval);

    return () => clearInterval(interval);
  }, [provider]);

  useUpdateEffect(() => {
    generateWcUri();
  }, [token]);

  useUpdateEffect(() => {
    providerRef.current = provider;
  }, [provider]);

  const handleOnLogout = () => {
    logout(logoutRoute);
  };

  async function handleHeartbeat() {
    const isProviderConnected = Boolean(
      providerRef.current?.walletConnector?.connected
    );
    if (!isProviderConnected) {
      return;
    }

    const customMessage = {
      method: 'heartbeat',
      params: {}
    };

    try {
      await providerRef.current.sendCustomMessage(customMessage);
    } catch (error) {
      console.error('Connection lost', error);
      handleOnLogout();
    }
  }

  async function handleOnLogin() {
    try {
      const provider = providerRef.current;
      if (isLoggedIn) {
        return;
      }
      if (provider == null) {
        return;
      }
      const address = await provider.getAddress();
      const signature = await provider.getSignature();
      const hasSignature = Boolean(signature);
      const loginActionData = {
        address: address,
        loginMethod: LoginMethodsEnum.walletconnect
      };

      const loginData = {
        logoutRoute: logoutRoute,
        loginType: 'walletConnect',
        callbackRoute: callbackRoute
      };

      if (hasSignature) {
        dispatch(setWalletConnectLogin(loginData));
        dispatch(setTokenLoginSignature(signature));
      } else {
        dispatch(setWalletConnectLogin(loginData));
      }
      dispatch(loginAction(loginActionData));

      provider.walletConnector.on('heartbeat', () => {
        clearInterval(heartbeatDisconnectInterval);
        heartbeatDisconnectInterval = setInterval(() => {
          console.log('Maiar Wallet Connection Lost');
          handleOnLogout();
          clearInterval(heartbeatDisconnectInterval);
        }, 150000);
      });

      optionalRedirect(callbackRoute, redirectAfterLogin);
    } catch (err) {
      setError('Invalid address');
      console.error(err);
    }
  }

  async function initiateLogin(loginProvider = true) {
    const shouldGenerateWcUri = loginProvider && !wcUri;
    if (
      !walletConnectBridgeAddress ||
      (providerRef?.current?.isInitialized?.() && !shouldGenerateWcUri)
    ) {
      return;
    }

    const providerHandlers = {
      onClientLogin: handleOnLogin,
      onClientLogout: handleOnLogout
    };

    const newProvider = new WalletConnectProvider(
      walletConnectBridgeAddress,
      providerHandlers
    );

    await newProvider.init();
    setAccountProvider(newProvider);
    providerRef.current = newProvider;
    if (loginProvider) {
      generateWcUri();
    }
  }

  async function generateWcUri() {
    if (!walletConnectBridgeAddress) {
      return;
    }

    const walletConnectUri:
      | string
      | undefined = await providerRef.current?.login();
    const hasUri = Boolean(walletConnectUri);

    if (!hasUri) {
      return;
    }

    if (!token) {
      setWcUri(walletConnectUri as string);
      return;
    }

    const wcUriWithToken = `${walletConnectUri}&token=${token}`;

    setWcUri(wcUriWithToken);
    dispatch(setTokenLogin({ loginToken: token }));
  }

  const loginFailed = error != null;
  return [
    initiateLogin,
    {
      error,
      loginFailed,
      isLoading: isLoading && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    },
    { uriDeepLink, walletConnectUri: wcUri }
  ];
};

export default useWalletConnectLogin;
