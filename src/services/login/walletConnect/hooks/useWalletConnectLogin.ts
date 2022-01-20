import { useEffect, useState } from 'react';
import { WalletConnectProvider } from '@elrondnetwork/erdjs';
import QRCode from 'qrcode';

import { useUpdateEffect } from 'hooks/useUpdateEffect';
import { loginAction } from 'redux/commonActions';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import {
  isLoggedInSelector,
  providerSelector,
  proxySelector,
  walletConnectBridgeSelector,
  walletConnectDeepLinkSelector
} from 'redux/selectors';

import { setProvider, loginActions } from 'redux/slices';

import { LoginMethodsEnum } from 'types/enums';
import { useInterval } from '../../hooks/use-interval';
import {
  InitWalletConnectType,
  WalletConnectLoginHookReturnType
} from '../../types';
import { useHandleCallback } from './useHandleCallback';
import { useOnLogoutCallback } from './useOnLogoutCallback';

export const useWalletConnectLogin = ({
  callbackRoute,
  logoutRoute,
  token
}: InitWalletConnectType): WalletConnectLoginHookReturnType => {
  const dispatch = useDispatch();

  //TODO:This should live inside reducers.
  const [error, setError] = useState<string>('');
  const [wcUri, setWcUri] = useState<string>('');
  const [qrCodeSvg, setQrCodeSvg] = useState<string>('');

  //TODO: All these subscriptions to state changes are not handled in hooks dependencies..
  //TODO: all these async calls should be placed inside some callbacks!

  const proxy = useSelector(proxySelector);
  const provider: any = useSelector(providerSelector);
  const walletConnectBridge = useSelector(walletConnectBridgeSelector);
  const walletConnectDeepLink = useSelector(walletConnectDeepLinkSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);

  const onLogout = useOnLogoutCallback(callbackRoute);

  const hasWcUri = Boolean(wcUri);
  const isLoading = !hasWcUri;
  const uriDeepLink = hasWcUri
    ? `${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(wcUri)}`
    : null;

  const heartbeatInterval = 15000;
  const handleHeartbeat = useHandleCallback();
  useInterval(handleHeartbeat, heartbeatInterval);

  useEffect(() => {
    generateQRCode();
  }, [wcUri]);

  useUpdateEffect(() => generateWcUri(), [token]);

  const generateQRCode = async () => {
    if (!hasWcUri) {
      return;
    }

    const svg = await QRCode.toString(wcUri, {
      type: 'svg'
    });

    setQrCodeSvg(svg);
  };

  //TODO: This has to use useCallbacks with dependencies so we dont check for nuls on all store fields.
  async function handleOnLogin() {
    try {
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
        dispatch(loginActions.setWalletConnectLogin(loginData));
        dispatch(loginActions.setTokenLoginSignature(signature));
      } else {
        dispatch(loginActions.setWalletConnectLogin(loginData));
      }
      dispatch(loginAction(loginActionData));

      provider.walletConnector.on('heartbeat', onLogout);
    } catch (err) {
      setError('Invalid address');
      console.error(err);
    }
  }

  async function initiateLogin(loginProvider = true) {
    if (!walletConnectBridge) {
      return;
    }
    const providerHandlers = {
      onClientLogin: handleOnLogin,
      onClientLogout: onLogout
    };

    const newProvider = new WalletConnectProvider(
      proxy,
      walletConnectBridge,
      providerHandlers
    );

    await newProvider.init();
    dispatch(setProvider(newProvider));

    if (loginProvider) {
      generateWcUri();
    }
  }

  async function generateWcUri() {
    if (!walletConnectBridge) {
      return;
    }

    const walletConnectUri: string | undefined = await provider.login();
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
    dispatch(loginActions.setTokenLogin({ loginToken: token }));
  }

  const isFailed = error != null;

  return [
    initiateLogin,
    {
      error,
      isFailed,
      isLoading: isLoading && !isFailed,
      isLoggedIn: isLoggedIn && !isFailed
    },
    { uriDeepLink, qrCodeSvg }
  ];
};

export default useWalletConnectLogin;
