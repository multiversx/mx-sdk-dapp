import { useEffect, useState } from 'react';
import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider';
import { HWProvider } from '@elrondnetwork/erdjs-hw-provider';
import { getNetworkConfigFromApi } from 'apiCalls';
import { useLoginService } from 'hooks/login/useLoginService';
import { useWalletConnectLogin } from 'hooks/login/useWalletConnectLogin';
import { useWalletConnectV2Login } from 'hooks/login/useWalletConnectV2Login';
import {
  setAccountProvider,
  setExternalProviderAsAccountProvider
} from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  addressSelector,
  ledgerAccountSelector
} from 'reduxStore/selectors/accountInfoSelectors';
import {
  loginMethodSelector,
  walletConnectLoginSelector,
  walletLoginSelector,
  ledgerLoginSelector,
  isLoggedInSelector,
  tokenLoginSelector
} from 'reduxStore/selectors/loginInfoSelectors';
import { networkSelector } from 'reduxStore/selectors/networkConfigSelectors';
import {
  setAccount,
  setIsAccountLoading,
  setAccountLoadingError,
  setLedgerAccount,
  setWalletLogin,
  setChainID
} from 'reduxStore/slices';
import { LoginMethodsEnum } from 'types/enums.types';
import {
  getAddress,
  getAccount,
  getLatestNonce,
  newWalletProvider,
  getLedgerConfiguration
} from 'utils/account';
import { logout } from 'utils/logout';

export function ProviderInitializer() {
  const network = useSelector(networkSelector);
  const walletConnectLogin = useSelector(walletConnectLoginSelector);
  const loginMethod = useSelector(loginMethodSelector);
  const walletLogin = useSelector(walletLoginSelector);
  const address = useSelector(addressSelector);
  const ledgerAccount = useSelector(ledgerAccountSelector);
  const ledgerLogin = useSelector(ledgerLoginSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const [ledgerData, setLedgerData] =
    useState<{
      version: string;
      dataEnabled: boolean;
    }>();
  const tokenLogin = useSelector(tokenLoginSelector);
  const nativeAuthConfig = tokenLogin?.nativeAuthConfig;
  const loginService = useLoginService(
    nativeAuthConfig ? nativeAuthConfig : false
  );
  const dispatch = useDispatch();

  const { callbackRoute, logoutRoute } = walletConnectLogin
    ? walletConnectLogin
    : { callbackRoute: '', logoutRoute: '' };

  const [initWalletLoginProvider] = useWalletConnectLogin({
    callbackRoute,
    logoutRoute
  });

  const [initWalletConnectV2LoginProvider] = useWalletConnectV2Login({
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
    console.log(address);

    fetchAccount();
  }, [address]);

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
      console.error('failed refreshing chainId ', err);
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
    if (address) {
      try {
        console.log('\x1b[42m%s\x1b[0m', '???');

        const account = await getAccount(address);
        if (account) {
          dispatch(
            setAccount({
              ...account,
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

    if (walletLogin == null) {
      return;
    }

    try {
      const address = await getAddress();
      const { clearWalletLoginHistory, signature } = parseWalletSignature();

      if (!address) {
        return clearWalletLoginHistory();
      }

      if (signature) {
        loginService.setTokenLoginInfo({ signature, address });
      }

      // const account = await getAccount(address);
      // if (account) {
      //   dispatch(
      //     setAccount({
      //       ...account,
      //       nonce: getLatestNonce(account)
      //     })
      //   );
      // }

      clearWalletLoginHistory();

      // walletInitializedRef.current = true;

      dispatch(loginAction({ address, loginMethod: LoginMethodsEnum.wallet }));
    } catch (e) {
      console.error('Failed authenticating wallet user ', e);
    }

    dispatch(setWalletLogin(null));
  }

  function parseWalletSignature() {
    let params: any = {};
    if (window?.location?.search) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      params = Object.fromEntries(urlSearchParams as any);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { signature, loginToken, address, ...remainingParams } = params;

    return {
      signature,
      clearWalletLoginHistory: () => clearWalletLoginHistory(remainingParams)
    };
  }

  function clearWalletLoginHistory(remainingParams: any) {
    const newUrlParams = new URLSearchParams(remainingParams).toString();
    const { pathname } = window.location;
    const newSearch = newUrlParams ? `?${newUrlParams}` : '';
    const fullPath = pathname ? `${pathname}${newSearch}` : './';

    setTimeout(() => {
      window.history.replaceState({}, document?.title, fullPath);
    });
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

      case LoginMethodsEnum.walletconnectv2: {
        initWalletConnectV2LoginProvider(false);
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
