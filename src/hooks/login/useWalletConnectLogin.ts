import { useEffect, useRef, useState } from 'react';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useUpdateEffect } from 'hooks/useUpdateEffect';
import { setAccountProvider } from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  isLoggedInSelector,
  walletConnectBridgeAddressSelector,
  walletConnectDeepLinkSelector
} from 'reduxStore/selectors';
import {
  setTokenLogin,
  setTokenLoginSignature,
  setWalletConnectLogin
} from 'reduxStore/slices';
import { LoginHookGenericStateType } from 'types';
import { LoginMethodsEnum } from 'types/enums';
import { logout } from 'utils';
import { optionalRedirect } from 'utils/internal';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import Timeout = NodeJS.Timeout;

interface InitWalletConnectType {
  logoutRoute: string;
  callbackRoute?: string;
  token?: string;
  onLoginRedirect?: (callbackRoute: string) => void;
}

export interface WalletConnectLoginHookCustomStateType {
  uriDeepLink: string;
  walletConnectUri?: string;
}

export type WalletConnectLoginHookReturnType = [
  (loginProvider?: boolean) => void,
  LoginHookGenericStateType,
  WalletConnectLoginHookCustomStateType
];

export const useWalletConnectLogin = ({
  logoutRoute,
  callbackRoute,
  token,
  onLoginRedirect
}: InitWalletConnectType): WalletConnectLoginHookReturnType => {
  const dispatch = useDispatch();
  const heartbeatInterval = 15000;

  const [error, setError] = useState<string>('');
  const [wcUri, setWcUri] = useState<string>('');

  const { provider } = useGetAccountProvider();
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
    : '';

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
      if (
        isLoggedIn ||
        provider == null ||
        !getIsProviderEqualTo(LoginMethodsEnum.walletconnect)
      ) {
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
        callbackRoute: callbackRoute ?? window.location.href
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

      optionalRedirect(callbackRoute, onLoginRedirect);
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

    const uri: string = await providerRef.current?.login();
    const hasUri = Boolean(uri);

    if (!hasUri) {
      return;
    }

    if (!token) {
      setWcUri(uri);
      return;
    }

    const wcUriWithToken = `${uri}&token=${token}`;

    setWcUri(wcUriWithToken);
    dispatch(setTokenLogin({ loginToken: token }));
  }

  const loginFailed = Boolean(error);
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
