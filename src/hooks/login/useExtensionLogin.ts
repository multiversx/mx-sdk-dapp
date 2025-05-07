import { useState } from 'react';
import { ExtensionProvider } from '@multiversx/sdk-extension-provider';

import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
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
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { optionalRedirect } from 'utils/internal';
import { addOriginToLocationPath } from 'utils/window';
import { getDefaultCallbackUrl } from 'utils/window';
import { clearInitiatedLogins } from './helpers';
import { useLoginService } from './useLoginService';

export type UseExtensionLoginReturnType = [
  InitiateLoginFunctionType,
  LoginHookGenericStateType
];

export const useExtensionLogin = ({
  callbackRoute,
  token: tokenToSign,
  nativeAuth,
  onLoginRedirect
}: OnProviderLoginType): UseExtensionLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const hasNativeAuth = nativeAuth != null;
  const loginService = useLoginService(nativeAuth);
  let token = tokenToSign;

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
    const provider: ExtensionProvider = ExtensionProvider.getInstance();

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

      const { signature, address } = await provider.login(providerLoginData);

      setAccountProvider(provider);

      if (!address) {
        setIsLoading(false);
        console.warn('Login cancelled.');
        setError('Login cancelled');
        return;
      }

      if (signature && token) {
        loginService.setTokenLoginInfo({
          signature,
          address
        });
      }

      dispatch(
        loginAction({ address, loginMethod: LoginMethodsEnum.extension })
      );

      optionalRedirect({
        callbackRoute,
        onLoginRedirect,
        options: { signature, address }
      });
    } catch (error) {
      console.error('error logging in', error);
      // TODO: can be any or typed error
      setError('error logging in' + (error as any).message);
    } finally {
      setIsLoading(false);
    }
  }

  const loginFailed = Boolean(error);

  return [
    initiateLogin,
    {
      loginFailed,
      error,
      isLoading: isLoading && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    }
  ];
};
