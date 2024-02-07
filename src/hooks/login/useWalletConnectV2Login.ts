import { MutableRefObject, useEffect, useRef, useState } from 'react';

import { useUpdateEffect } from 'hooks/useUpdateEffect';
import {
  getAccountProvider,
  setAccountProvider
} from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { logoutRouteSelector } from 'reduxStore/selectors';
import {
  chainIDSelector,
  walletConnectDeepLinkSelector,
  walletConnectV2OptionsSelector,
  walletConnectV2ProjectIdSelector,
  walletConnectV2RelaySelector
} from 'reduxStore/selectors/networkConfigSelectors';
import { setWalletConnectLogin } from 'reduxStore/slices';
import { LoginMethodsEnum } from 'types/enums.types';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { optionalRedirect } from 'utils/internal';
import { logout } from 'utils/logout';
import {
  PairingTypes,
  SessionEventTypes,
  WalletConnectOptionalMethodsEnum,
  WalletConnectV2Provider
} from 'utils/walletconnect/__sdkWalletconnectProvider';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { LoginHookGenericStateType, OnProviderLoginType } from '../../types';
import { useLoginService } from './useLoginService';
import { emptyProvider, getProviderType } from '../../providers';
import { useGetLoginInfo } from '../account';

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

export interface InitWalletConnectV2Type extends OnProviderLoginType {
  logoutRoute?: string;
  canLoginRef?: MutableRefObject<boolean>;
  customRequestMethods?: Array<string>;
}

export interface WalletConnectV2LoginHookCustomStateType {
  uriDeepLink: string;
  cancelLogin: () => Promise<void>;
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
  token: tokenToSign,
  nativeAuth,
  onLoginRedirect,
  logoutRoute: providerLogoutRoute,
  canLoginRef: parentCanLoginRef,
  customRequestMethods = []
}: InitWalletConnectV2Type): WalletConnectV2LoginHookReturnType => {
  const dispatch = useDispatch();
  const { loginMethod } = useGetLoginInfo();
  const hasNativeAuth = nativeAuth != null;
  const loginService = useLoginService(nativeAuth);
  let token = tokenToSign;

  const [error, setError] = useState<string>('');
  const [wcUri, setWcUri] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [wcPairings, setWcPairings] = useState<
    PairingTypes.Struct[] | undefined
  >([]);

  const provider = getAccountProvider();
  const walletConnectV2RelayAddress = useSelector(walletConnectV2RelaySelector);
  const walletConnectV2ProjectId = useSelector(
    walletConnectV2ProjectIdSelector
  );
  const walletConnectV2Options = useSelector(walletConnectV2OptionsSelector);
  const chainId = useSelector(chainIDSelector);
  const walletConnectDeepLink = useSelector(walletConnectDeepLinkSelector);
  const dappLogoutRoute = useSelector(logoutRouteSelector);
  const providerRef = useRef<any>(provider);
  const canLoginRef = parentCanLoginRef ?? useRef<boolean>(false);
  const isInitialisingRef = useRef<boolean>(false);

  const logoutRoute = providerLogoutRoute ?? dappLogoutRoute ?? '/';
  const dappMethods: string[] = [
    WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
    ...customRequestMethods
  ];
  if (tokenToSign) {
    dappMethods.push(WalletConnectOptionalMethodsEnum.SIGN_LOGIN_TOKEN);
  }
  if (hasNativeAuth) {
    dappMethods.push(WalletConnectOptionalMethodsEnum.SIGN_NATIVE_AUTH_TOKEN);
  }

  const uriDeepLink = !isLoading
    ? `${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(wcUri)}`
    : '';

  const loginFailed = Boolean(error);
  const isLoggedIn = getIsLoggedIn();

  const handleOnLogout = () => {
    logout(logoutRoute);
  };

  const handleOnEvent = (event: SessionEventTypes['event']) => {
    console.log('WalletConnect Session Event: ', event);
  };

  const handleOnLogin = async () => {
    try {
      const isLoggedIn = getIsLoggedIn();

      if (
        isLoggedIn ||
        providerRef.current == null ||
        !getIsProviderEqualTo(LoginMethodsEnum.walletconnectv2)
      ) {
        return;
      }

      if (isInitialisingRef.current) {
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

      const address = await providerRef.current?.getAddress();

      if (!address) {
        console.warn('Login cancelled.');
        return;
      }

      const signature = await providerRef.current?.getSignature();
      const loginActionData = {
        address: address,
        loginMethod: LoginMethodsEnum.walletconnectv2
      };

      const loginData = {
        logoutRoute: logoutRoute,
        loginType: 'walletconnectv2',
        callbackRoute: callbackRoute ?? getWindowLocation().href
      };

      dispatch(setWalletConnectLogin(loginData));

      if (signature) {
        loginService.setTokenLoginInfo({ signature, address });
      }

      dispatch(loginAction(loginActionData));
      optionalRedirect({
        callbackRoute,
        onLoginRedirect,
        options: { address, signature }
      });
    } catch (err) {
      setError(WalletConnectV2Error.userRejected);
      console.error(err);
    }
  };

  const cancelLogin = async () => {
    if (canLoginRef.current) {
      canLoginRef.current = false;
    }

    const providerType = getProviderType(providerRef.current);

    if (providerType !== LoginMethodsEnum.walletconnectv2) {
      return;
    }

    try {
      const connectedSessions =
        providerRef.current?.walletConnector?.session?.getAll() ?? [];

      if (connectedSessions.length > 0) {
        await providerRef.current?.logout();
      }

      providerRef.current = emptyProvider;
      setAccountProvider(emptyProvider);

      // TODO: Why is provider still set?
      // Works everything well if refreshing after login

      console.log({
        providerRef: providerRef.current,
        provider,
        isLoggedIn,
        loginMethod
      });
    } catch {
      console.warn('Unable to logout');
    }

    return;
  };

  const connectExisting = async (pairing: PairingTypes.Struct) => {
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

      if (hasNativeAuth && !token) {
        token = await loginService.getNativeAuthLoginToken();
        // Fetching block failed
        if (!token) {
          console.warn('Fetching block failed. Login cancelled.');
          return;
        }
      }

      if (token) {
        loginService.setLoginToken(token);
      }

      try {
        await providerRef.current?.login({ approval, token });
      } catch (err) {
        setError(WalletConnectV2Error.userRejectedExisting);
        setIsLoading(true);

        await initiateLogin();
      }
    } catch (err) {
      console.error(WalletConnectV2Error.sessionExpired, err);
      setError(WalletConnectV2Error.sessionExpired);
    } finally {
      setWcPairings(providerRef.current?.pairings);
    }
  };

  const removeExistingPairing = async (topic: string) => {
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
      const newPairings = await providerRef.current?.getPairings();
      setWcPairings(newPairings);
    }
  };

  async function initiateLogin(loginProvider = true) {
    if (!walletConnectV2ProjectId || !walletConnectV2RelayAddress) {
      setError(WalletConnectV2Error.invalidConfig);
      return;
    }

    if (isInitialisingRef.current || canLoginRef.current === false) {
      return;
    }

    isInitialisingRef.current = true;

    if (providerRef.current?.walletConnector) {
      providerRef.current.init();

      setAccountProvider(providerRef.current);

      isInitialisingRef.current = false;
      canLoginRef.current = true;

      if (loginProvider) {
        generateWcUri();
      }

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
      walletConnectV2ProjectId,
      walletConnectV2Options
    );
    await newProvider.init();
    setAccountProvider(newProvider);
    providerRef.current = newProvider;
    isInitialisingRef.current = false;
    canLoginRef.current = true;

    if (loginProvider) {
      setWcPairings(newProvider.pairings);
      generateWcUri();
    }

    return;
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

      if (walletConnectV2Options?.logger === 'debug') {
        console.log('WalletConnect uri: ', uri);
      }

      if (hasNativeAuth && !token) {
        token = await loginService.getNativeAuthLoginToken();
        // Fetching block failed
        if (!token) {
          console.warn('Fetching block failed. Login cancelled.');
          return;
        }
      }

      if (token) {
        loginService.setLoginToken(token);
      }

      try {
        await providerRef.current?.login({ approval, token });
      } catch (err) {
        setError(WalletConnectV2Error.userRejected);
        setIsLoading(true);

        await initiateLogin();
      }
    } catch (err) {
      console.error(WalletConnectV2Error.connectError, err);
    }
  }

  useUpdateEffect(() => {
    if (!tokenToSign || !providerRef.current?.connect) {
      return;
    }

    generateWcUri();
  }, [tokenToSign, providerRef.current?.connect]);

  useUpdateEffect(() => {
    if (canLoginRef?.current === false) {
      cancelLogin();
    }
  }, [canLoginRef.current]);

  useUpdateEffect(() => {
    providerRef.current = provider;
  }, [provider]);

  useEffect(() => {
    setIsLoading(!Boolean(wcUri));
  }, [wcUri]);

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
