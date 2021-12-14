import React from 'react';
import { HWProvider, ExtensionProvider } from '@elrondnetwork/erdjs';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'redux/commonActions';
import {
  loginMethodSelector,
  walletConnectLoginSelector,
  networkSelector,
  proxySelector,
  walletLoginSelector
} from 'redux/selectors';
import { setAccount, setProvider, setWalletLogin } from 'redux/slices';
import { useInitWalletConnect } from '../hooks';
import { loginMethodsEnum } from '../types/enums';
import {
  newWalletProvider,
  getAddress,
  getAccount,
  getLatestNonce
} from '../utils';

export default function ProviderInitializer() {
  const network = useSelector(networkSelector);
  const walletConnectLogin = useSelector(walletConnectLoginSelector);
  const loginMethod = useSelector(loginMethodSelector);
  const walletLogin = useSelector(walletLoginSelector);
  const proxy = useSelector(proxySelector);
  const dispatch = useDispatch();

  const { callbackRoute, logoutRoute } = walletConnectLogin
    ? walletConnectLogin
    : { callbackRoute: '', logoutRoute: '' };

  const { walletConnectInit } = useInitWalletConnect({
    callbackRoute,
    logoutRoute
  });

  React.useEffect(() => {
    initializeProvider();
  }, [loginMethod]);

  async function tryAuthenticateWalletUser() {
    try {
      if (walletLogin != null) {
        const provider = newWalletProvider(network);
        const address = await getAddress();
        if (address) {
          dispatch(setProvider(provider));
          dispatch(
            loginAction({ address, loginMethod: loginMethodsEnum.wallet })
          );
          const account = await getAccount(address);
          dispatch(
            setAccount({
              balance: account.balance.toString(),
              address,
              nonce: getLatestNonce(account)
            })
          );
          dispatch(setWalletLogin(null));
        }
      }
    } catch (e) {
      console.error('Failed authenticating wallet user ', e);
    }
  }

  function setLedgerProvider() {
    const hwWalletP = new HWProvider(proxy);
    hwWalletP
      .init()
      .then((success: any) => {
        if (!success) {
          console.warn('Could not initialise ledger app');
          return;
        }
        dispatch(setProvider(hwWalletP));
      })
      .catch((err) => {
        console.error('Could not initialise ledger app', err);
      });
  }

  async function setExtensionProvider() {
    try {
      const address = await getAddress();
      const provider = ExtensionProvider.getInstance().setAddress(address);
      const success = await provider.init();

      if (success) {
        dispatch(setProvider(provider));
      } else {
        console.error(
          'Could not initialise extension, make sure Elrond wallet extension is installed.'
        );
      }
    } catch (err) {
      console.error('Unable to login to ExtensionProvider', err);
    }
  }

  function initializeProvider() {
    if (loginMethod == null) {
      return;
    }
    switch (loginMethod) {
      case loginMethodsEnum.ledger: {
        setLedgerProvider();
        break;
      }

      case loginMethodsEnum.walletconnect: {
        walletConnectInit();
        break;
      }
      case loginMethodsEnum.wallet: {
        const provider = newWalletProvider(network);
        dispatch(setProvider(provider));
        break;
      }

      case loginMethodsEnum.extension: {
        setExtensionProvider();
        break;
      }

      case loginMethodsEnum.none: {
        tryAuthenticateWalletUser();
        break;
      }
      default:
        return;
    }
  }

  return null;
}
