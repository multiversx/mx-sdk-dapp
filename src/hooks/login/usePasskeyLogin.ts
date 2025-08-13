import { useState } from 'react';
import { PasskeyProvider } from '@multiversx/sdk-passkey-provider/out';
import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';
import { setAccountProvider } from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { emptyAccount, setAccount, setAddress } from 'reduxStore/slices';
import {
  InitiateLoginFunctionType,
  LoginHookGenericStateType,
  OnProviderLoginType
} from 'types';
import { LoginMethodsEnum } from 'types/enums.types';
import { getHasNativeAuth } from 'utils/getHasNativeAuth';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { optionalRedirect } from 'utils/internal';
import { setServiceUrlIfValid } from 'utils/validation';
import { addOriginToLocationPath } from 'utils/window';
import { getDefaultCallbackUrl } from 'utils/window';
import { clearInitiatedLogins } from './helpers';
import { useLoginService } from './useLoginService';

type CreateAccountFunctionType = (
  walletName: string
) => Promise<{ address: string }>;

export type UsePasskeyLoginReturnType = [
  InitiateLoginFunctionType,
  CreateAccountFunctionType,
  LoginHookGenericStateType
];

export const usePasskeyLogin = ({
  callbackRoute,
  token: tokenToSign,
  nativeAuth,
  onLoginRedirect
}: OnProviderLoginType): UsePasskeyLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const hasNativeAuth = getHasNativeAuth(nativeAuth);
  const loginService = useLoginService(nativeAuth);
  let token = tokenToSign;
  const {
    network: { extrasApiAddress }
  } = useGetNetworkConfig();

  const dispatch = useDispatch();
  const isLoggedIn = getIsLoggedIn();

  async function initiateLogin() {
    if (isLoggedIn) {
      throw new Error(SECOND_LOGIN_ATTEMPT_ERROR);
    }

    clearInitiatedLogins();
    dispatch(setAddress(emptyAccount.address));
    dispatch(setAccount(emptyAccount));
    setIsLoading(true);

    const provider: PasskeyProvider = PasskeyProvider.getInstance();
    setServiceUrlIfValid(provider, extrasApiAddress);

    try {
      const isSuccessfullyInitialized: boolean = await provider.init();

      if (!isSuccessfullyInitialized) {
        console.warn(
          'Something went wrong trying to redirect to wallet login..'
        );
        return;
      }

      const defaultCallbackUrl = getDefaultCallbackUrl();
      const callbackUrl: string = encodeURIComponent(
        addOriginToLocationPath(callbackRoute ?? defaultCallbackUrl)
      );

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

      const providerLoginData = {
        callbackUrl,
        ...(token && { token })
      };

      await provider.login(providerLoginData);

      setAccountProvider(provider);

      const { signature, address } = provider.account;

      if (!address) {
        setIsLoading(false);
        console.warn('Login cancelled.');
        setError('Login cancelled');
        return;
      }

      if (signature) {
        loginService.setTokenLoginInfo({
          signature,
          address
        });
      }

      dispatch(loginAction({ address, loginMethod: LoginMethodsEnum.passkey }));

      optionalRedirect({
        callbackRoute,
        onLoginRedirect,
        options: { signature, address }
      });
    } catch (error) {
      console.error('error logging in', error);
      // TODO: can be any or typed error
      setError('Error logging in: ' + (error as any).message);
    } finally {
      setIsLoading(false);
    }
  }

  const createAccount = async (walletName: string) => {
    const provider: PasskeyProvider = PasskeyProvider.getInstance();
    setServiceUrlIfValid(provider, extrasApiAddress);

    await provider.init();
    return await provider.createAccount({
      walletName
    });
  };

  const loginFailed = Boolean(error);

  return [
    initiateLogin,
    createAccount,
    {
      loginFailed,
      error,
      isLoading: isLoading && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    }
  ];
};
