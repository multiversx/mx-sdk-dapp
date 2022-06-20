import { useRef, useState } from 'react';
import { WalletConnectProviderV2 } from '@elrondnetwork/erdjs-wallet-connect-provider';
import { useUpdateEffect } from 'hooks/useUpdateEffect';
import {
  getAccountProvider,
  setAccountProvider
} from 'providers/accountProvider';
import { loginAction } from 'redux/commonActions';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import {
  isLoggedInSelector,
  walletConnectV2RelaySelector,
  walletConnectV2ProjectIdSelector,
  chainIDSelector,
  walletConnectDeepLinkSelector
} from 'redux/selectors';
import {
  setTokenLogin,
  setTokenLoginSignature,
  setWalletConnectLogin
} from 'redux/slices';
import { LoginMethodsEnum } from 'types/enums';
import { logout } from 'utils';
import { optionalRedirect } from 'utils/internal';
import { LoginHookGenericStateType } from '../types';

interface InitWalletConnectType {
  callbackRoute: string;
  logoutRoute: string;
  token?: string;
  shouldLoginUser?: boolean;
  redirectAfterLogin?: boolean;
}

export interface WalletConnectLoginHookCustomStateType {
  uriDeepLink: string | null;
  walletConnectUri?: string;
  wcPairings?: any[];
}

export type WalletConnectV2LoginHookReturnType = [
  (loginProvider?: boolean) => void,
  (pairing: any) => Promise<void>,
  LoginHookGenericStateType,
  WalletConnectLoginHookCustomStateType
];

export const useWalletConnectV2Login = ({
  callbackRoute,
  logoutRoute,
  token,
  redirectAfterLogin = false
}: InitWalletConnectType): WalletConnectV2LoginHookReturnType => {
  const dispatch = useDispatch();

  const [error, setError] = useState<string>('');
  const [wcUri, setWcUri] = useState<string>('');
  const [wcPairings, setWcPairings] = useState<any[] | undefined>([]); //useState<PairingTypes.Struct[]>([]);

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
        callbackRoute: callbackRoute
      };

      if (hasSignature) {
        dispatch(setWalletConnectLogin(loginData));
        dispatch(setTokenLoginSignature(signature));
      } else {
        dispatch(setWalletConnectLogin(loginData));
      }
      dispatch(loginAction(loginActionData));

      optionalRedirect(callbackRoute, redirectAfterLogin);
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

  async function connectExisting(pairing: any) {
    if (!walletConnectV2RelayAddress || !walletConnectV2ProjectId) {
      return;
    }

    const { approval } = await providerRef.current?.connect(pairing);
    if (token) {
      dispatch(setTokenLogin({ loginToken: token }));
    }

    await providerRef.current?.login(approval);
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
      await providerRef.current?.login(approval);
    } catch (e) {
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
