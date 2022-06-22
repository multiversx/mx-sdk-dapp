import { useEffect, useState } from 'react';
import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider';
import { HWProvider } from '@elrondnetwork/erdjs-hw-provider';
import {
  setExternalProviderAsAccountProvider,
  setAccountProvider
} from 'reduxStore/slices/providersSlice';
import {
  getLedgerConfiguration,
  newWalletProvider
} from 'utils/providers/utils';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  loginMethodSelector,
  walletConnectLoginSelector,
  networkSelector,
  walletLoginSelector,
  addressSelector,
  ledgerAccountSelector,
  ledgerLoginSelector,
  isLoggedInSelector
} from 'reduxStore/selectors';
import {
  setAccount,
  setIsAccountLoading,
  setAccountLoadingError,
  setLedgerAccount,
  setWalletLogin,
  setChainID
} from 'reduxStore/slices';
import { useWalletConnectLogin } from 'hooks/login/useWalletConnectLogin';
import { LoginMethodsEnum } from 'types/enums';
import { getAddress, getAccount, getLatestNonce, logout } from 'utils';
import { getNetworkConfigFromApi } from 'apiCalls';

export default function ProviderInitializer() {
  const network = useSelector(networkSelector);
  const walletConnectLogin = useSelector(walletConnectLoginSelector);
  const loginMethod = useSelector(loginMethodSelector);
  const walletLogin = useSelector(walletLoginSelector);
  const address = useSelector(addressSelector);
  const ledgerAccount = useSelector(ledgerAccountSelector);
  const ledgerLogin = useSelector(ledgerLoginSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const [ledgerData, setLedgerData] = useState<{
    version: string;
    dataEnabled: boolean;
  }>();

  const dispatch = useDispatch();

  const { callbackRoute, logoutRoute } = walletConnectLogin
    ? walletConnectLogin
    : { callbackRoute: '', logoutRoute: '' };

  const [initWalletLoginProvider] = useWalletConnectLogin({
    callbackRoute,
    logoutRoute
  });

  useEffect(() => {
    refreshChainID();
  }, [network]);

  useEffect(() => {
    initializeProvider();
  }, [loginMethod]);

  useEffect(() => {
    fetchAccount();
  }, [address, isLoggedIn]);

  useEffect(() => {
    // prevent balance double fetching by handling ledgerAccount data separately
    setLedgerAccountInfo();
  }, [ledgerAccount, isLoggedIn, ledgerData]);

  async function refreshChainID() {
    try {
      const networkConfig = await getNetworkConfigFromApi();
      if (networkConfig) {
        dispatch(setChainID(networkConfig.erd_chain_id));
      }
    } catch (err) {
      console.error('To do ', err);
    }
  }

  function setLedgerAccountInfo() {
    if (ledgerAccount == null && ledgerLogin != null && ledgerData) {
      dispatch(
        setLedgerAccount({
          index: ledgerLogin.index,
          address,
          hasContractDataEnabled: ledgerData.dataEnabled,
          version: ledgerData.version
        })
      );
    }
  }

  async function fetchAccount() {
    dispatch(setIsAccountLoading(true));
    if (address && isLoggedIn) {
      try {
        const account = await getAccount(address);
        if (account) {
          dispatch(
            setAccount({
              balance: account.balance,
              address,
              nonce: account.nonce.valueOf(),
              username: account.username
            })
          );
        }
      } catch (e) {
        dispatch(setAccountLoadingError('Failed getting account'));
        console.error('Failed getting account ', e);
      }
    }
    dispatch(setIsAccountLoading(false));
  }

  async function tryAuthenticateWalletUser() {
    try {
      if (walletLogin != null) {
        const provider = newWalletProvider(network.walletAddress);
        const address = await getAddress();
        if (address) {
          dispatch(setAccountProvider(provider));
          dispatch(
            loginAction({ address, loginMethod: LoginMethodsEnum.wallet })
          );
          const account = await getAccount(address);
          if (account) {
            dispatch(
              setAccount({
                balance: account.balance,
                address,
                nonce: getLatestNonce(account),
                username: account.username
              })
            );
          }
        }
        dispatch(setWalletLogin(null));
      }
    } catch (e) {
      console.error('Failed authenticating wallet user ', e);
    }
  }

  async function getInitializedHwWalletProvider() {
    const hwWalletP = new HWProvider();
    let isInitialized = hwWalletP.isInitialized();
    if (!isInitialized) {
      isInitialized = await hwWalletP.init();
    }
    if (!isInitialized && isLoggedIn) {
      console.warn('Could not initialise ledger app');
      logout();
      return;
    }
    if (ledgerLogin?.index != null) {
      hwWalletP.addressIndex = ledgerLogin.index;
    }
    return hwWalletP;
  }

  async function setLedgerProvider() {
    try {
      const hwWalletP = await getInitializedHwWalletProvider();
      if (!hwWalletP) {
        return;
      }
      const ledgerConfig = await getLedgerConfiguration(hwWalletP);
      dispatch(setAccountProvider(hwWalletP));
      setLedgerData(ledgerConfig);
    } catch (err) {
      console.error('Could not initialise ledger app', err);
      logout();
    }
  }

  async function setExtensionProvider() {
    try {
      const address = await getAddress();
      const provider = ExtensionProvider.getInstance().setAddress(address);
      const success = await provider.init();

      if (success) {
        dispatch(setAccountProvider(provider));
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
      case LoginMethodsEnum.ledger: {
        setLedgerProvider();
        break;
      }

      case LoginMethodsEnum.walletconnect: {
        initWalletLoginProvider(false);
        break;
      }
      case LoginMethodsEnum.wallet: {
        const provider = newWalletProvider(network.walletAddress);
        dispatch(setAccountProvider(provider));
        break;
      }

      case LoginMethodsEnum.extension: {
        setExtensionProvider();
        break;
      }

      case LoginMethodsEnum.extra: {
        setExternalProviderAsAccountProvider();
        break;
      }

      case LoginMethodsEnum.none: {
        tryAuthenticateWalletUser();
        break;
      }
      default:
        return;
    }
  }

  return null;
}
