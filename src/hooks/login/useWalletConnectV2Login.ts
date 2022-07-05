import { useRef, useState } from 'react';
import {
  WalletConnectProviderV2,
  PairingTypes
} from '@elrondnetwork/erdjs-wallet-connect-provider';
import { useUpdateEffect } from 'hooks/useUpdateEffect';
import {
  getAccountProvider,
  setAccountProvider
} from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { isLoggedInSelector } from 'reduxStore/selectors/loginInfoSelectors';
import {
  walletConnectV2RelaySelector,
  walletConnectV2ProjectIdSelector,
  chainIDSelector,
  walletConnectDeepLinkSelector
} from 'reduxStore/selectors/networkConfigSelectors';
import {
  setTokenLogin,
  setTokenLoginSignature,
  setWalletConnectLogin
} from 'reduxStore/slices';
import { LoginHookGenericStateType } from 'types';
import { LoginMethodsEnum } from 'types/enums';
import { logout } from 'utils';
import { optionalRedirect } from 'utils/internal';

interface InitWalletConnectV2Type {
  logoutRoute: string;
  token?: string;
  callbackRoute?: string;
  shouldLoginUser?: boolean;
}

export interface WalletConnectV2LoginHookCustomStateType {
  uriDeepLink: string | null;
  walletConnectUri?: string;
  wcPairings?: PairingTypes.Struct[];
}

export type WalletConnectV2LoginHookReturnType = [
  (loginProvider?: boolean) => void,
  (pairing: PairingTypes.Struct) => Promise<void>,
  LoginHookGenericStateType,
  WalletConnectV2LoginHookCustomStateType
];

export const useWalletConnectV2Login = ({
  callbackRoute,
  logoutRoute,
  token
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
  const isLoggedIn = useSelector(isLoggedInSelector);
  const providerRef = useRef<any>(provider);

  const hasWcUri = Boolean(wcUri);
  const isLoading = !hasWcUri;
  const uriDeepLink = hasWcUri
    ? `${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(wcUri)}`
    : null;

  useUpdateEffect(() => {
    generateWcUri();
  }, [token]);

  useUpdateEffect(() => {
    providerRef.current = provider;
  }, [provider]);

  const handleOnLogout = () => {
    logout(logoutRoute);
  };

  async function handleOnLogin() {
    try {
      const provider = providerRef.current;
      if (isLoggedIn) {
        return;
      }
      if (provider == null) {
        return;
      }
      if (Object.keys(provider).length === 0) {
        return;
      }
      const address = await provider.getAddress();
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
      optionalRedirect(callbackRoute);
    } catch (err) {
      setError('Invalid address');
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
      return;
    }

    const providerHandlers = {
      onClientLogin: handleOnLogin,
      onClientLogout: handleOnLogout
    };

    const newProvider = new WalletConnectProviderV2(
      providerHandlers,
      chainId,
      walletConnectV2RelayAddress,
      walletConnectV2ProjectId
    );

    await newProvider.init();
    setAccountProvider(newProvider);
    setWcPairings(newProvider.pairings);
    providerRef.current = newProvider;
    if (loginProvider) {
      generateWcUri();
    }
  }

  async function connectExisting(pairing: PairingTypes.Struct | undefined) {
    if (!walletConnectV2RelayAddress || !walletConnectV2ProjectId) {
      return;
    }
    if (!pairing || !pairing.topic) {
      return;
    }

    try {
      const { approval } = await providerRef.current?.connect({
        topic: pairing.topic
      });
      if (token) {
        dispatch(setTokenLogin({ loginToken: token }));
      }

      try {
        await providerRef.current?.login({ approval });
      } catch {
        await initiateLogin();
      }
    } catch {
      setError('Unable to connect to existing session');
    } finally {
      setWcPairings(providerRef.current?.pairings);
    }
  }

  async function generateWcUri() {
    if (!walletConnectV2RelayAddress || !walletConnectV2ProjectId) {
      return;
    }

    const { uri, approval } = await providerRef.current?.connect();
    const walletConnectUri: string | undefined = uri;
    const hasUri = Boolean(walletConnectUri);

    if (!hasUri) {
      return;
    }

    if (!token) {
      setWcUri(walletConnectUri as string);
    } else {
      const wcUriWithToken = `${walletConnectUri}&token=${token}`;

      setWcUri(wcUriWithToken);
      dispatch(setTokenLogin({ loginToken: token }));
    }

    try {
      await providerRef.current?.login({ approval });
    } catch {
      await initiateLogin();
    }
  }

  const loginFailed = Boolean(error);
  return [
    initiateLogin,
    connectExisting,
    {
      error,
      loginFailed,
      isLoading: isLoading && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    },
    { uriDeepLink, walletConnectUri: wcUri, wcPairings }
  ];
};

export default useWalletConnectV2Login;
