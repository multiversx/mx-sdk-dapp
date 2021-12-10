import { useEffect, useRef, useState } from 'react';
import { WalletConnectProvider } from '@elrondnetwork/erdjs';
import { useDispatch, useSelector } from 'react-redux';

import { loginAction, logoutAction } from '../redux/commonActions';
import {
  providerSelector,
  proxySelector,
  walletConnectBridgeSelector
} from '../redux/selectors';
import {
  setProvider,
  setTokenLoginSignature,
  setWalletConnectLogin
} from '../redux/slices';

import { LoginMethodsEnum } from '../types';
import { logout } from '../utils';
interface InitWalletConnectType {
  callbackRoute: string;
  logoutRoute: string;
}

export const useInitWalletConnect = ({
  callbackRoute,
  logoutRoute
}: InitWalletConnectType) => {
  const dispatch = useDispatch();
  const heartbeatInterval = 15000;

  const [error, setError] = useState<string>('');
  //   const [walletConnect, setWalletConnect] = useState<WalletConnectProvider>();

  const providerRef = useRef<any>();

  const proxy = useSelector(proxySelector);
  const provider: any = useSelector(providerSelector);
  //   const loginMethod = useSelector(loginMethodSelector);
  const walletConnectBridge = useSelector(walletConnectBridgeSelector);

  let heartbeatDisconnectInterval: any;

  const heartbeat = async () => {
    const isProviderConnected = Boolean(
      providerRef.current?.walletConnector?.connected
    );
    // const hasIosPeerMetaDescription = provider.walletConnector?.peerMeta?.description.match(
    //   /(iPad|iPhone|iPod)/g
    // );

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
  };

  const handleOnLogin = async () => {
    const provider = providerRef.current;
    try {
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
      window.location.href = callbackRoute;
    } catch (err) {
      setError('Invalid address');
      console.error(err);
    }
  };

  const handleOnLogout = () => {
    dispatch(logoutAction());
    logout(callbackRoute).then(() => {
      window.location.href = logoutRoute;
    });
  };

  const walletConnectInit = () => {
    if (!walletConnectBridge || providerRef?.current?.isInitialized()) {
      return;
    }
    const providerHandlers = {
      onClientLogin: handleOnLogin,
      onClientLogout: handleOnLogout
    };

    const newProvider = new WalletConnectProvider(
      proxy,
      walletConnectBridge,
      providerHandlers
    );

    dispatch(setProvider(newProvider));
  };

  useEffect(() => {
    walletConnectInit();
  }, [walletConnectBridge]);

  useEffect(() => {
    providerRef.current = provider;
  }, [provider]);

  useEffect(() => {
    heartbeat();

    const interval = setInterval(() => {
      heartbeat();
    }, heartbeatInterval);

    return () => clearInterval(interval);
  }, [provider]);

  return {
    error,
    walletConnect: providerRef.current,
    walletConnectInit
  };
};

export default useInitWalletConnect;
