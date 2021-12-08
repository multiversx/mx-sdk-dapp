import React from 'react';
import { WalletConnectProvider } from '@elrondnetwork/erdjs';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../redux/commonActions';
import {
  providerSelector,
  proxySelector,
  walletConnectBridgeSelector,
  isLoggedInSelector
} from '../redux/selectors';
import {
  setProvider,
  setTokenLoginSignature,
  setWalletConnectLogin
} from '../redux/slices';
import { LoginMethodsEnum } from '../types';

interface InitWalletConnectType {
  callbackRoute: string;
  logoutRoute: string;
}

export default function useInitWalletConnect({
  callbackRoute,
  logoutRoute
}: InitWalletConnectType) {
  const heartbeatInterval = 15000;
  const walletConnectBridge = useSelector(walletConnectBridgeSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  let provider: any = useSelector(providerSelector);
  const proxy = useSelector(proxySelector);
  const dispatch = useDispatch();

  const [error, setError] = React.useState<string>('');
  const [walletConnect, setWalletConnect] =
    React.useState<WalletConnectProvider>();

  React.useEffect(() => {
    const interval = setInterval(() => {
      heartbeat();
    }, heartbeatInterval);

    return () => clearInterval(interval);
  }, [provider]);

  React.useEffect(() => {
    return () => {
      if (provider?.walletConnector?.connected) {
        window.addEventListener('storage', (e) => {
          if (e.key === 'walletconnect') {
            handleOnLogout();
          }
        });
      }
    };
  });

  const heartbeat = () => {
    if (provider?.walletConnector?.connected) {
      provider
        .sendCustomMessage({
          method: 'heartbeat',
          params: {}
        })
        .catch((e: any) => {
          console.error('Connection lost', e);
          handleOnLogout();
        });
    }
  };

  const handleOnLogin = async () => {
    try {
      const address = await provider.getAddress();
      if (!isLoggedIn) {
        window.location.href = callbackRoute;
      }
      const signature = await provider.getSignature();
      if (signature != null) {
        dispatch(setTokenLoginSignature(signature));
      }
      dispatch(
        setWalletConnectLogin({
          loginType: 'walletConnect',
          callbackRoute,
          logoutRoute
        })
      );

      dispatch(
        loginAction({ address, loginMethod: LoginMethodsEnum.walletconnect })
      );
    } catch (err) {
      setError('Invalid address');
      console.log(err);
    }
  };

  const handleOnLogout = () => {
    if (isLoggedIn) {
      history.pushState({}, document.title, logoutRoute);
    }
    dispatch(logoutAction());
  };

  const walletConnectInit = () => {
    const newProvider = new WalletConnectProvider(proxy, walletConnectBridge, {
      onClientLogin: handleOnLogin,
      onClientLogout: handleOnLogout
    });
    dispatch(setProvider(provider));
    provider = newProvider;
    setWalletConnect(provider);
  };

  return {
    error,
    walletConnectInit,
    walletConnect
  };
}
