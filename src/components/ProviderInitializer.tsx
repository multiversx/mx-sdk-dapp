import { useEffect, useState } from 'react';
import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider';
import { HWProvider } from '@elrondnetwork/erdjs-hw-provider';
import {
  setExternalProviderAsAccountProvider,
  setAccountProvider
} from 'providers/accountProvider';
import { getNetworkConfigFromProxyProvider } from 'providers/proxyProvider';
import { getLedgerConfiguration, newWalletProvider } from 'providers/utils';
import { loginAction } from 'redux/commonActions';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import {
  loginMethodSelector,
  walletConnectLoginSelector,
  networkSelector,
  walletLoginSelector,
  addressSelector,
  ledgerAccountSelector,
  ledgerLoginSelector,
  isLoggedInSelector
} from 'redux/selectors';
import {
  setAccount,
  setIsAccountLoading,
  setAccountLoadingError,
  setLedgerAccount,
  setWalletLogin,
  setChainID,
  setTokenLoginSignature
} from 'redux/slices';
import { useWalletConnectLogin } from 'services/login/useWalletConnectLogin';
import { LoginMethodsEnum } from 'types/enums';
import { getAddress, getAccount, getLatestNonce, logout } from 'utils';

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

  function refreshChainID() {
    getNetworkConfigFromProxyProvider()
      .then((networkConfig) => {
        if (networkConfig) {
          dispatch(setChainID(networkConfig.ChainID.valueOf()));
        }
      })
      .catch((e: any) => {
        console.error('To do ', e);
      });
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
              balance: account.balance.toFixed(),
              address,
              nonce: account.nonce.valueOf()
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
    const provider = newWalletProvider(network.walletAddress);
    setAccountProvider(provider);
    if (walletLogin != null) {
      try {
        const address = await getAddress();
        if (address) {
          dispatch(
            loginAction({ address, loginMethod: LoginMethodsEnum.wallet })
          );
          const account = await getAccount(address);
          if (account) {
            dispatch(
              setAccount({
                balance: account.balance.toFixed(),
                address,
                nonce: getLatestNonce(account)
              })
            );
          }
        }
        parseWalletSignature();
      } catch (e) {
        console.error('Failed authenticating wallet user ', e);
      }
      dispatch(setWalletLogin(null));
    }
  }

  function parseWalletSignature() {
    let params: any = {};
    if (window?.location?.search) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      params = Object.fromEntries(urlSearchParams as any);
    }
    const { signature, loginToken, address, ...remainingParams } = params;

    if (signature) {
      dispatch(setTokenLoginSignature(signature));
    }
    clearWalletLoginHistory(remainingParams);
  }

  function clearWalletLoginHistory(remainingParams: any) {
    const newUrlParams = new URLSearchParams(remainingParams).toString();
    const { pathname } = window.location;
    const newSearch = newUrlParams ? `?${newUrlParams}` : '';
    const fullPath = pathname ? `${pathname}${newSearch}` : './';
    window.history.replaceState({}, document.title, fullPath);
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
      setAccountProvider(hwWalletP);
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
        setAccountProvider(provider);
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

      case LoginMethodsEnum.extension: {
        setExtensionProvider();
        break;
      }

      case LoginMethodsEnum.extra: {
        setExternalProviderAsAccountProvider();
        break;
      }

      case LoginMethodsEnum.wallet:
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
