import { useRef, useState, useEffect } from 'react';
import {
  SessionEventTypes,
  PairingTypes
} from '@elrondnetwork/erdjs-wallet-connect-provider';
import { WalletConnectV2Provider } from '@elrondnetwork/erdjs-wallet-connect-provider/out/walletConnectV2Provider';

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
import { setWalletConnectLogin } from 'reduxStore/slices';
import {
  LoginMethodsEnum,
  DappCoreWCV2CustomMethodsEnum
} from 'types/enums.types';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { optionalRedirect } from 'utils/internal';
import { logout } from 'utils/logout';
import { LoginHookGenericStateType, OnProviderLoginType } from '../../types';
import { useLoginService } from './useLoginService';

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
  logoutRoute: string;
  events?: string[];
  walletConnectV2Options?: WalletConnectV2Provider['options'];
}

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
  token: tokenToSign,
  nativeAuth,
  onLoginRedirect,
  walletConnectV2Options
}: InitWalletConnectV2Type): WalletConnectV2LoginHookReturnType => {
  const dispatch = useDispatch();
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
  const chainId = useSelector(chainIDSelector);
  const walletConnectDeepLink = useSelector(walletConnectDeepLinkSelector);
  const providerRef = useRef<any>(provider);
  const canLoginRef = useRef<boolean>(true);

  const dappMethods: string[] = [
    DappCoreWCV2CustomMethodsEnum.erd_cancelAction
  ];

  const uriDeepLink = !isLoading
    ? `${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(wcUri)}`
    : '';

  useUpdateEffect(() => {
    generateWcUri();
  }, [tokenToSign]);

  useUpdateEffect(() => {
    providerRef.current = provider;
  }, [provider]);

  useEffect(() => {
    setIsLoading(Boolean(wcUri));
  }, [wcUri]);

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
      const loginActionData = {
        address: address,
        loginMethod: LoginMethodsEnum.walletconnectv2
      };

      const loginData = {
        logoutRoute: logoutRoute,
        loginType: 'walletconnectv2',
        callbackRoute: callbackRoute ?? window.location.href
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
      setError(WalletConnectV2Error.invalidAddress);
      console.error(err);
    }
  }

  async function initiateLogin(loginProvider = true) {
    if (!walletConnectV2ProjectId || !walletConnectV2RelayAddress) {
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
      walletConnectV2ProjectId,
      walletConnectV2Options
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
