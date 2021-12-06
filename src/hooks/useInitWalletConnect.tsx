import React from 'react';
import { WalletConnectProvider } from '@elrondnetwork/erdjs';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/commonActions';
import { isLoggedInSelector } from '../redux/selectors/loginInfoSelectors';
import {
  providerSelector,
  proxySelector,
  walletConnectBridgeSelector
} from '../redux/selectors/networkConfigSelectors';

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
      if ('walletConnector' in provider && provider.walletConnector.connected) {
        window.addEventListener('storage', (e) => {
          if (e.key === 'walletconnect') {
            handleOnLogout();
          }
        });
      }
    };
  });

  const heartbeat = () => {
    if ('walletConnector' in provider && provider.walletConnector.connected) {
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

  const handleOnLogin = () => {
    provider
      .getAddress()
      .then((address: string) => {
        if (!isLoggedIn) {
          window.history.pushState({}, document.title, callbackRoute);
        }
        provider.getSignature().then((signature: string) => {
          if (signature) {
            // const tokenLogin = storage.session.getItem('tokenLogin');
            //TODO connect this to redux
            const tokenLogin: any = {};
            const loginToken =
              tokenLogin && 'loginToken' in tokenLogin
                ? tokenLogin.loginToken
                : '';

            dispatch({
              type: 'setTokenLogin',
              tokenLogin: {
                loginToken,
                signature
              }
            });
          }
        });
        dispatch({
          type: 'setWalletConnectLogin',
          walletConnectLogin: {
            loginType: 'walletConnect',
            callbackRoute,
            logoutRoute
          }
        });
        dispatch({ type: 'login', address, loginMethod: 'walletconnect' });
      })
      .catch((e: any) => {
        setError('Invalid address');
        console.log(e);
      });
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
    dispatch({ type: 'setProvider', provider });
    provider = newProvider;
    setWalletConnect(provider);
  };

  return {
    error,
    walletConnectInit,
    walletConnect
  };
}
