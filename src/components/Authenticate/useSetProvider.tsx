import * as React from 'react';
import { HWProvider, ExtensionProvider } from '@elrondnetwork/erdjs';
import { useDispatch, useSelector } from 'react-redux';
import useInitWalletConnect from 'hooks/useInitWalletConnect';
import { newWalletProvider } from '../../utils';
import {
  loginMethodSelector,
  walletConnectLoginSelector,
  networkSelector,
  proxySelector
} from '../../redux/selectors';
import { LoginMethodsEnum } from '../../types';
import { getAddress } from '../../utils';

export default function useSetProvider() {
  const network = useSelector(networkSelector);
  const walletConnectLogin = useSelector(walletConnectLoginSelector);
  const loginMethod = useSelector(loginMethodSelector);
  const proxy = useSelector(proxySelector);
  const dispatch = useDispatch();

  const { callbackRoute, logoutRoute } = walletConnectLogin
    ? walletConnectLogin
    : { callbackRoute: '', logoutRoute: '' };

  const { walletConnectInit } = useInitWalletConnect({
    callbackRoute,
    logoutRoute
  });

  const setLedgerProvider = () => {
    const hwWalletP = new HWProvider(proxy);
    hwWalletP
      .init()
      .then((success: any) => {
        if (!success) {
          console.warn('Could not initialise ledger app');
          return;
        }
        dispatch({ type: 'setProvider', provider: hwWalletP });
      })
      .catch((err) => {
        console.error('Could not initialise ledger app', err);
      });
  };

  const setExtensionProvider = async () => {
    try {
      const address = await getAddress();
      const provider = ExtensionProvider.getInstance().setAddress(address);
      const success = await provider.init();

      if (success) {
        dispatch({ type: 'setProvider', provider });
      } else {
        console.error(
          'Could not initialise extension, make sure Elrond wallet extension is installed.'
        );
      }
    } catch (err) {
      console.error('Unable to login to ExtensionProvider', err);
    }
  };

  React.useEffect(() => {
    if (loginMethod == null) {
      return;
    }
    switch (loginMethod) {
      case LoginMethodsEnum.ledger: {
        setLedgerProvider();
        break;
      }

      case LoginMethodsEnum.walletconnect: {
        walletConnectInit();
        break;
      }
      case LoginMethodsEnum.wallet: {
        const provider = newWalletProvider(network);
        dispatch({ type: 'setProvider', provider });
        break;
      }

      case LoginMethodsEnum.extension: {
        setExtensionProvider();
        break;
      }
      default:
        return;
    }
  }, [loginMethod]);
}
