import { useEffect, useRef } from 'react';
import { getNetworkConfigFromApi } from 'apiCalls';
import { useLoginService } from 'hooks/login/useLoginService';
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
import {
  networkSelector,
  walletAddressSelector
} from 'reduxStore/selectors/networkConfigSelectors';
import {
  setAccount,
  setIsAccountLoading,
  setAccountLoadingError,
  setLedgerAccount,
  setWalletLogin,
  setChainID,
  setTokenLogin
} from 'reduxStore/slices';
import { LoginMethodsEnum } from 'types/enums.types';
import {
  getAddress,
  getAccount,
  getLatestNonce,
  newWalletProvider,
  emptyProvider
} from 'utils/account';
import { parseNavigationParams } from 'utils/parseNavigationParams';
import { useWebViewLogin } from '../../hooks/login/useWebViewLogin';
import {
  getOperaProvider,
  getCrossWindowProvider,
  getExtensionProvider,
  processModifiedAccount
} from './helpers';
import { useSetLedgerProvider } from './hooks';

let initalizingLedger = false;

export function ProviderInitializer() {
  const network = useSelector(networkSelector);
  const walletAddress = useSelector(walletAddressSelector);
  const walletConnectLogin = useSelector(walletConnectLoginSelector);
  const loginMethod = useSelector(loginMethodSelector);
  const walletLogin = useSelector(walletLoginSelector);
  const address = useSelector(addressSelector);
  const ledgerAccount = useSelector(ledgerAccountSelector);
  const ledgerLogin = useSelector(ledgerLoginSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);

  const tokenLogin = useSelector(tokenLoginSelector);
  const nativeAuthConfig = tokenLogin?.nativeAuthConfig;
  const loginService = useLoginService(
    nativeAuthConfig ? nativeAuthConfig : false
  );
  const initializedAccountRef = useRef(false);
  const dispatch = useDispatch();
  const { setLedgerProvider, ledgerData } = useSetLedgerProvider();

  useWebViewLogin();

  const { callbackRoute, logoutRoute: wcLogoutRoute } = walletConnectLogin
    ? walletConnectLogin
    : { callbackRoute: '', logoutRoute: '' };

  const [initWalletConnectV2LoginProvider] = useWalletConnectV2Login({
    callbackRoute,
    logoutRoute: wcLogoutRoute
  });

  useEffect(() => {
    refreshChainID();
  }, [network]);

  useEffect(() => {
    initializeProvider();
  }, [loginMethod]);

  useEffect(() => {
    fetchAccount();
  }, [address, network]);

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
    if (initializedAccountRef.current) {
      // account was recently initialized, skip refetching
      initializedAccountRef.current = false;
      dispatch(setIsAccountLoading(false));
      return;
    }

    if (address) {
      try {
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
    const provider = newWalletProvider(walletAddress);
    setAccountProvider(provider);

    if (walletLogin == null) {
      return;
    }

    try {
      const address = await getAddress();
      const {
        clearNavigationHistory,
        remainingParams: { signature, multisig, impersonate }
      } = parseNavigationParams([
        'signature',
        'loginToken',
        'address',
        'multisig',
        'impersonate'
      ]);

      if (!address) {
        setAccountProvider(emptyProvider);
        dispatch(setTokenLogin(null));
        dispatch(setWalletLogin(null));
        return clearNavigationHistory();
      }

      const account = await processModifiedAccount({
        loginToken: tokenLogin?.loginToken,
        extraInfoData: {
          multisig,
          impersonate
        },
        address,
        signature,
        loginService
      });

      if (account) {
        initializedAccountRef.current = true;
        dispatch(setIsAccountLoading(true));

        dispatch(
          loginAction({
            address: account.address,
            loginMethod: LoginMethodsEnum.wallet
          })
        );

        dispatch(
          setAccount({
            ...account,
            nonce: getLatestNonce(account)
          })
        );
        dispatch(setIsAccountLoading(false));
      }

      clearNavigationHistory();
    } catch (e) {
      console.error('Failed authenticating wallet user ', e);
    }

    dispatch(setWalletLogin(null));
  }

  async function setExtensionProvider() {
    const address = await getAddress();
    const provider = await getExtensionProvider(address);
    if (provider) {
      setAccountProvider(provider);
    }
  }

  async function setOperaProvider() {
    const address = await getAddress();
    const provider = await getOperaProvider(address);
    if (provider) {
      setAccountProvider(provider);
    }
  }

  async function setCrossWindowProvider() {
    const address = await getAddress();
    const provider = await getCrossWindowProvider({
      address,
      walletUrl: network.walletAddress
    });
    if (provider) {
      setAccountProvider(provider);
    }
  }

  async function initializeProvider() {
    if (loginMethod == null || initalizingLedger) {
      return;
    }

    switch (loginMethod) {
      case LoginMethodsEnum.ledger: {
        initalizingLedger = true;
        await setLedgerProvider();
        initalizingLedger = false;
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

      case LoginMethodsEnum.opera: {
        setOperaProvider();
        break;
      }

      case LoginMethodsEnum.crossWindow: {
        setCrossWindowProvider();
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
