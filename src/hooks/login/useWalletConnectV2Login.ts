import { useRef, useState } from 'react';
import {
  PairingTypes,
  SessionEventTypes,
  WalletConnectV2Provider
} from '@elrondnetwork/erdjs-wallet-connect-provider';
import { useUpdateEffect } from 'hooks/useUpdateEffect';
import {
  getAccountProvider,
  setAccountProvider
} from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  chainIDSelector,
  walletConnectDeepLinkSelector,
  walletConnectV2ProjectIdSelector,
  walletConnectV2RelaySelector
} from 'reduxStore/selectors/networkConfigSelectors';
import {
  setTokenLogin,
  setTokenLoginSignature,
  setWalletConnectLogin
} from 'reduxStore/slices';
import {
  LoginMethodsEnum,
  DappCoreWCV2CustomMethodsEnum
} from 'types/enums.types';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { optionalRedirect } from 'utils/internal';
import { logout } from 'utils/logout';
import { LoginHookGenericStateType, OnProviderLoginType } from '../../types';

export enum WalletConnectV2Error {
  invalidAddress = 'Invalid address',
  invalidConfig = 'Invalid WalletConnect setup',
  invalidTopic = 'Expired connection',
  sessionExpired = 'Unable to connect to existing session',
  connectError = 'Unable to connect',
  userRejected = 'User rejected connection proposal',
  userRejectedExisting = 'User rejected existing connection proposal',
  errorLogout = 'Unable to remove existing pairing'
}

export type InitWalletConnectV2Type = OnProviderLoginType & {
  logoutRoute: string;
  events?: string[];
};

export interface WalletConnectV2LoginHookCustomStateType {
  uriDeepLink: string;
  cancelLogin: () => void;
  connectExisting: (pairing: PairingTypes.Struct) => Promise<void>;
  removeExistingPairing: (topic: string) => Promise<void>;
  walletConnectUri?: string;
  wcPairings?: PairingTypes.Struct[];
}

export type WalletConnectV2LoginHookReturnType = [
  (loginProvider?: boolean) => void,
  LoginHookGenericStateType,
  WalletConnectV2LoginHookCustomStateType
];

export const useWalletConnectV2Login = ({
  callbackRoute,
  logoutRoute,
  token,
  onLoginRedirect
}: InitWalletConnectV2Type): WalletConnectV2LoginHookReturnType => {
  const dispatch = useDispatch();

  const [error, setError] = useState<string>('');
  const [wcUri, setWcUri] = useState<string>('');
  const [wcPairings, setWcPairings] = useState<
    PairingTypes.Struct[] | undefined
  >([]);

  const provider = getAccountProvider();
  const walletConnectV2RelayAddress = useSelector(walletConnectV2RelaySelector);
  const walletConnectV2ProjectId = useSelector(
    walletConnectV2ProjectIdSelector
  );
  const chainId = useSelector(chainIDSelector);
  const walletConnectDeepLink = useSelector(walletConnectDeepLinkSelector);
  const providerRef = useRef<any>(provider);
  const canLoginRef = useRef<boolean>(true);

  const hasWcUri = Boolean(wcUri);
  const dappMethods: string[] = [
    DappCoreWCV2CustomMethodsEnum.erd_cancelAction
  ];
  const isLoading = !hasWcUri;
  const uriDeepLink = hasWcUri
    ? `${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(wcUri)}`
    : '';

  useUpdateEffect(() => {
    generateWcUri();
  }, [token]);

  useUpdateEffect(() => {
    providerRef.current = provider;
  }, [provider]);

  const handleOnLogout = () => {
    logout(logoutRoute);
  };

  const handleOnEvent = (event: SessionEventTypes['event']) => {
    console.log('wc2 session event: ', event);
  };

  const cancelLogin = () => {
    canLoginRef.current = false;
  };

  async function handleOnLogin() {
    try {
      const provider = providerRef.current;
      const isLoggedIn = getIsLoggedIn();

      if (
        isLoggedIn ||
        provider == null ||
        !getIsProviderEqualTo(LoginMethodsEnum.walletconnectv2)
      ) {
        return;
      }

      if (!canLoginRef.current) {
        try {
          await providerRef.current?.logout();
        } catch {
          console.warn('Unable to logout');
        }

        return;
      }

      const address = await provider.getAddress();
      if (!address) {
        console.warn('Login cancelled.');
        return;
      }

      const signature = await provider.getSignature();
      const hasSignature = Boolean(signature);
      const loginActionData = {
        address: address,
        loginMethod: LoginMethodsEnum.walletconnectv2
      };

      const loginData = {
        logoutRoute: logoutRoute,
        loginType: 'walletconnectv2',
        callbackRoute: callbackRoute ?? window.location.href
      };

      if (hasSignature) {
        dispatch(setWalletConnectLogin(loginData));
        dispatch(setTokenLoginSignature(signature));
      } else {
        dispatch(setWalletConnectLogin(loginData));
      }

      dispatch(loginAction(loginActionData));
      optionalRedirect({
        callbackRoute,
        onLoginRedirect,
        options: { address, signature }
      });
    } catch (err) {
      setError(WalletConnectV2Error.invalidAddress);
      console.error(err);
    }
  }

  async function initiateLogin(loginProvider = true) {
    const shouldGenerateWcUri = loginProvider && !wcUri;
    if (
      !walletConnectV2ProjectId ||
      !walletConnectV2RelayAddress ||
      (providerRef?.current?.isInitialized?.() && !shouldGenerateWcUri)
    ) {
      setError(WalletConnectV2Error.invalidConfig);

      return;
    }

    const providerHandlers = {
      onClientLogin: handleOnLogin,
      onClientLogout: handleOnLogout,
      onClientEvent: handleOnEvent
    };

    const newProvider = new WalletConnectV2Provider(
      providerHandlers,
      chainId,
      walletConnectV2RelayAddress,
      walletConnectV2ProjectId
    );

    await newProvider.init();
    canLoginRef.current = true;
    setAccountProvider(newProvider);
    setWcPairings(newProvider.pairings);
    providerRef.current = newProvider;
    if (loginProvider) {
      generateWcUri();
    }
  }

  async function connectExisting(pairing: PairingTypes.Struct) {
    if (!walletConnectV2RelayAddress || !walletConnectV2ProjectId) {
      setError(WalletConnectV2Error.invalidConfig);
      return;
    }
    if (!pairing || !pairing.topic) {
      setError(WalletConnectV2Error.invalidTopic);
      return;
    }

    try {
      const { approval } = await providerRef.current?.connect({
        topic: pairing.topic,
        methods: dappMethods
      });
      if (token) {
        dispatch(setTokenLogin({ loginToken: token }));
      }

      try {
        await providerRef.current?.login({ approval, token });
      } catch (err) {
        console.warn(WalletConnectV2Error.userRejectedExisting, err);

        await initiateLogin();
      }
    } catch (err) {
      console.error(WalletConnectV2Error.sessionExpired, err);
      setError(WalletConnectV2Error.sessionExpired);
    } finally {
      setWcPairings(providerRef.current?.pairings);
    }
  }

  async function removeExistingPairing(topic: string) {
    try {
      if (topic) {
        await providerRef.current?.logout({
          topic
        });
      }
    } catch (err) {
      console.error(WalletConnectV2Error.errorLogout, err);
      setError(WalletConnectV2Error.errorLogout);
    } finally {
      setWcPairings(providerRef.current?.pairings);
    }
  }

  async function generateWcUri() {
    if (!walletConnectV2RelayAddress || !walletConnectV2ProjectId) {
      setError(WalletConnectV2Error.invalidConfig);
      return;
    }

    try {
      const { uri, approval } = await providerRef.current?.connect({
        methods: dappMethods
      });

      const hasUri = Boolean(uri);

      if (!hasUri) {
        return;
      }

      setWcUri(uri);
      if (token) {
        dispatch(setTokenLogin({ loginToken: token }));
      }

      try {
        await providerRef.current?.login({ approval, token });
      } catch (err) {
        console.warn(WalletConnectV2Error.userRejected, err);

        await initiateLogin();
      }
    } catch (err) {
      console.error(WalletConnectV2Error.connectError, err);
    }
  }

  const loginFailed = Boolean(error);
  const isLoggedIn = getIsLoggedIn();

  return [
    initiateLogin,
    {
      error,
      loginFailed,
      isLoading: isLoading && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    },
    {
      uriDeepLink,
      walletConnectUri: wcUri,
      cancelLogin,
      connectExisting,
      removeExistingPairing,
      wcPairings
    }
  ];
};
