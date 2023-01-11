import { useEffect, useRef, useState } from 'react';
import { WalletConnectProvider } from '@multiversx/sdk-wallet-connect-provider/out/walletConnectProvider';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useUpdateEffect } from 'hooks/useUpdateEffect';
import { setAccountProvider } from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  walletConnectBridgeAddressSelector,
  walletConnectDeepLinkSelector
} from 'reduxStore/selectors';
import { setWalletConnectLogin } from 'reduxStore/slices';
import { LoginMethodsEnum } from 'types/enums.types';

import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { optionalRedirect } from 'utils/internal';
import { logout } from 'utils/logout';
import Timeout = NodeJS.Timeout;
import { LoginHookGenericStateType, OnProviderLoginType } from '../../types';
import { useLoginService } from './useLoginService';

export interface InitWalletConnectType extends OnProviderLoginType {
  logoutRoute: string;
}

export interface WalletConnectLoginHookCustomStateType {
  uriDeepLink: string;
  walletConnectUri?: string;
  cancelLogin: () => void;
}

export type WalletConnectLoginHookReturnType = [
  (loginProvider?: boolean) => void,
  LoginHookGenericStateType,
  WalletConnectLoginHookCustomStateType
];

export const useWalletConnectLogin = ({
  logoutRoute,
  callbackRoute,
  nativeAuth,
  token: tokenToSign,
  onLoginRedirect
}: InitWalletConnectType): WalletConnectLoginHookReturnType => {
  const dispatch = useDispatch();
  const heartbeatInterval = 15000;
  const hasNativeAuth = nativeAuth != null;
  const loginService = useLoginService(nativeAuth);
  let token = tokenToSign;

  const [error, setError] = useState<string>('');
  const [wcUri, setWcUri] = useState<string>('');

  const { provider } = useGetAccountProvider();
  const walletConnectBridgeAddress = useSelector(
    walletConnectBridgeAddressSelector
  );
  const walletConnectDeepLink = useSelector(walletConnectDeepLinkSelector);
  const providerRef = useRef<any>(provider);
  const canLoginRef = useRef<boolean>(true);

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
    providerRef.current = provider;
  }, [provider]);

  const handleOnLogout = () => {
    logout(logoutRoute);
  };

  const cancelLogin = () => {
    canLoginRef.current = false;
  };

  async function handleHeartbeat() {
    if (
      provider == null ||
      !getIsProviderEqualTo(LoginMethodsEnum.walletconnect)
    ) {
      return;
    }

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
      const isLoggedIn = getIsLoggedIn();

      if (
        isLoggedIn ||
        provider == null ||
        !getIsProviderEqualTo(LoginMethodsEnum.walletconnect)
      ) {
        return;
      }

      if (!canLoginRef.current) {
        try {
          await providerRef.current?.logout();
        } catch {
          console.warn('Unable to logout');
        }

        return;
      }

      const address = await provider.getAddress();
      if (!address) {
        console.warn('Login cancelled.');
        return;
      }

      const signature = await provider.getSignature();
      const loginActionData = {
        address: address,
        loginMethod: LoginMethodsEnum.walletconnect
      };

      const loginData = {
        logoutRoute: logoutRoute,
        loginType: 'walletConnect',
        callbackRoute: callbackRoute ?? window.location.href
      };

      dispatch(setWalletConnectLogin(loginData));

      if (signature) {
        loginService.setTokenLoginInfo({ signature, address });
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

      optionalRedirect({
        callbackRoute,
        onLoginRedirect,
        options: { address, signature }
      });
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
    canLoginRef.current = true;
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

    if (hasNativeAuth && !token) {
      token = await loginService.getNativeAuthLoginToken();
      // Fetching block failed
      if (!token) {
        console.warn('Fetching block failed. Login cancelled.');
        return;
      }
    }

    if (!token) {
      setWcUri(uri);
      return;
    }

    loginService.setLoginToken(token);

    const wcUriWithToken = `${uri}&token=${token}`;

    setWcUri(wcUriWithToken);
  }

  const loginFailed = Boolean(error);
  const isLoggedIn = getIsLoggedIn();

  return [
    initiateLogin,
    {
      error,
      loginFailed,
      isLoading: isLoading && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    },
    { uriDeepLink, walletConnectUri: wcUri, cancelLogin }
  ];
};
