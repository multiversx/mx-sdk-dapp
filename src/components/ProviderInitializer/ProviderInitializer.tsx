import { useEffect, useRef, useState } from 'react';

import {
  getNetworkConfigFromApi,
  getGasStationMetadataFromApi,
  useGetAccountFromApi
} from 'apiCalls';
import {
  DEVNET_CHAIN_ID,
  MAINNET_CHAIN_ID,
  TESTNET_CHAIN_ID
} from 'constants/index';
import { useLoginService } from 'hooks/login/useLoginService';
import { useWalletConnectV2Login } from 'hooks/login/useWalletConnectV2Login';
import { useWebViewLogin } from 'hooks/login/useWebViewLogin';
import {
  setAccountProvider,
  setExternalProviderAsAccountProvider
} from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  accountSelector,
  addressSelector,
  ledgerAccountSelector
} from 'reduxStore/selectors/accountInfoSelectors';
import {
  walletConnectLoginSelector,
  walletLoginSelector,
  ledgerLoginSelector,
  isLoggedInSelector,
  tokenLoginSelector,
  loginInfoSelector
} from 'reduxStore/selectors/loginInfoSelectors';
import {
  chainIDSelector,
  networkSelector,
  walletAddressSelector
} from 'reduxStore/selectors/networkConfigSelectors';
import {
  setAccount,
  setIsAccountLoading,
  setAccountLoadingError,
  setLedgerAccount,
  setWalletLogin,
  setTokenLogin,
  setIsWalletConnectV2Initialized,
  setAddress,
  updateNetworkConfig
} from 'reduxStore/slices';
import { decodeNativeAuthToken } from 'services/nativeAuth/helpers';
import { LoginMethodsEnum } from 'types/enums.types';
import { NetworkType, ApiNetworkConfigType } from 'types/network.types';
import {
  getAddress,
  getLatestNonce,
  newWalletProvider,
  emptyProvider,
  refreshAccount
} from 'utils/account';
import { parseNavigationParams } from 'utils/parseNavigationParams';
import { isContract } from 'utils/smartContracts';

import {
  getOperaProvider,
  getCrossWindowProvider,
  getExtensionProvider,
  getPasskeyProvider,
  processModifiedAccount,
  getMetamaskProvider,
  getIframeProvider,
  handleGuardianWarning
} from './helpers';
import { useSetLedgerProvider } from './hooks';
let initalizingLedger = false;

export function ProviderInitializer() {
  const { loginMethod, iframeLoginType } = useSelector(loginInfoSelector);

  const network = useSelector(networkSelector);
  const walletAddress = useSelector(walletAddressSelector);
  const walletConnectLogin = useSelector(walletConnectLoginSelector);
  const walletLogin = useSelector(walletLoginSelector);
  const address = useSelector(addressSelector);
  const ledgerAccount = useSelector(ledgerAccountSelector);
  const ledgerLogin = useSelector(ledgerLoginSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const chainID = useSelector(chainIDSelector);
  const tokenLogin = useSelector(tokenLoginSelector);
  const userAccount = useSelector(accountSelector);
  const nativeAuthConfig = tokenLogin?.nativeAuthConfig;
  const [lastChainId, setLastChainId] = useState<string>(chainID);

  const loginService = useLoginService(
    nativeAuthConfig ? nativeAuthConfig : false
  );
  const {
    data: account,
    isLoading: isAccountLoading,
    error: accountError
  } = useGetAccountFromApi(address);

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
    refreshNetworkConfig();
  }, [network]);

  useEffect(() => {
    initializeProvider();
  }, [address, loginMethod, chainID]);

  useEffect(() => {
    checkAddress();
  }, [tokenLogin?.nativeAuthToken, address]);

  useEffect(() => {
    setupAccount();
  }, [account, isAccountLoading]);

  useEffect(() => {
    // prevent balance double fetching by handling ledgerAccount data separately
    setLedgerAccountInfo();
  }, [ledgerAccount, isLoggedIn, ledgerData]);

  useEffect(() => {
    if (isLoggedIn && userAccount.address) {
      handleGuardianWarning(userAccount);
    }
  }, [isLoggedIn, userAccount]);

  useEffect(() => {
    checkGasMetadata();
  }, [
    userAccount.shard,
    userAccount.address,
    isLoggedIn,
    lastChainId,
    chainID
  ]);

  async function checkGasMetadata() {
    const hasAccountShard = isLoggedIn && userAccount.shard != null;

    if (!hasAccountShard) {
      return;
    }

    const shard = Number(userAccount.shard);
    const fetchedGasMetadata = await getGasStationMetadataFromApi(shard);

    if (!fetchedGasMetadata?.[shard]?.lastBlock) {
      return;
    }

    const hasDifferentGasStationMetadata =
      !network.gasStationMetadata ||
      !network.gasStationMetadata[shard] ||
      network.gasStationMetadata[shard].lastBlock !==
        fetchedGasMetadata[shard].lastBlock;

    const hasDifferentChainId = lastChainId !== chainID;

    if (hasDifferentChainId) {
      setLastChainId(chainID);
    }

    if (hasDifferentGasStationMetadata || hasDifferentChainId) {
      dispatch(
        updateNetworkConfig({
          gasStationMetadata: fetchedGasMetadata
        })
      );
    }
  }

  // We need to get the roundDuration for networks that do not support websocket (e.g. sovereign)
  // The round duration is used for polling interval
  async function refreshNetworkConfig() {
    const needsRoundDurationForPollingInterval =
      network.chainId &&
      ![DEVNET_CHAIN_ID, TESTNET_CHAIN_ID, MAINNET_CHAIN_ID].includes(
        network.chainId
      ) &&
      !network.roundDuration;

    const shouldGetBaseConfig =
      !network.chainId || needsRoundDurationForPollingInterval;

    if (!shouldGetBaseConfig) {
      return;
    }

    try {
      const fetchedNetworkConfig = await getNetworkConfigFromApi();

      const updates: Partial<NetworkType> = {};

      if (fetchedNetworkConfig) {
        const networkConfigResult =
          fetchedNetworkConfig as ApiNetworkConfigType;

        const hasDifferentNetworkConfig =
          network.chainId !== networkConfigResult.erd_chain_id ||
          network.roundDuration !== networkConfigResult.erd_round_duration;

        if (hasDifferentNetworkConfig) {
          updates.chainId = networkConfigResult.erd_chain_id;
          updates.roundDuration = networkConfigResult.erd_round_duration;
        }
      }

      if (Object.keys(updates).length > 0) {
        dispatch(updateNetworkConfig(updates));
      }
    } catch (err) {
      console.error('Failed refreshing network config:', err);
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

  async function checkAddress() {
    const {
      remainingParams: { impersonate, multisig }
    } = parseNavigationParams(['impersonate']);

    const addressIsContract = isContract(address);

    if (
      !tokenLogin?.nativeAuthToken ||
      impersonate ||
      multisig ||
      addressIsContract
    ) {
      return;
    }

    const decoded = decodeNativeAuthToken(tokenLogin?.nativeAuthToken);

    if (decoded?.address && decoded.address !== address) {
      dispatch(setAddress(decoded.address));
      await refreshAccount();
    }
  }

  async function setupAccount() {
    if (isAccountLoading) {
      dispatch(setIsAccountLoading(true));
      return;
    }

    if (accountError) {
      dispatch(setAccountLoadingError('Failed getting account'));
      console.error('Failed getting account ', accountError);
      return;
    }

    if (initializedAccountRef.current) {
      // account was recently initialized, skip refetching
      initializedAccountRef.current = false;
      dispatch(setIsAccountLoading(false));
      return;
    }

    if (account) {
      dispatch(
        setAccount({
          ...account,
          address,
          nonce: account.nonce.valueOf()
        })
      );
    } else if (!isLoggedIn) {
      // Clear the address and publicKey if account is not found
      dispatch(setAddress(''));
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

  async function setPasskeyProvider() {
    const address = await getAddress();
    const provider = await getPasskeyProvider({
      address,
      extrasApiAddress: network.extrasApiAddress
    });
    if (provider) {
      setAccountProvider(provider);
    }
  }

  async function setMetamaskProvider() {
    const address = await getAddress();
    const provider = await getMetamaskProvider(address);
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
      walletUrl: network.customWalletAddress ?? network.walletAddress
    });
    if (provider) {
      setAccountProvider(provider);
    }
  }

  async function setIframeProvider() {
    const address = await getAddress();

    if (!network.metamaskSnapWalletAddress) {
      throw new Error('Metamask snap wallet URL is not set.');
    }
    const provider = await getIframeProvider({
      address,
      walletUrl: network.metamaskSnapWalletAddress,
      loginType: iframeLoginType
    });
    if (provider) {
      setAccountProvider(provider);
    }
  }

  async function setWalletConnectV2Provider() {
    try {
      // Trigger loader until wallet connect has been initialized
      dispatch(setIsWalletConnectV2Initialized(true));
      await initWalletConnectV2LoginProvider(false);
    } catch {
      console.error('Could not initialize WalletConnect');
    } finally {
      dispatch(setIsWalletConnectV2Initialized(false));
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
        setWalletConnectV2Provider();
        break;
      }

      case LoginMethodsEnum.extension: {
        setExtensionProvider();
        break;
      }

      case LoginMethodsEnum.passkey: {
        setPasskeyProvider();
        break;
      }

      case LoginMethodsEnum.metamask: {
        setMetamaskProvider();
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

      case LoginMethodsEnum.iframe:
        setIframeProvider();
        break;

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
