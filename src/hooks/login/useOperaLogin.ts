import { useState } from 'react';
import { OperaProvider } from '@multiversx/sdk-opera-provider';

import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import { useGetAccount } from 'hooks/account/useGetAccount';
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
import { getDefaultCallbackUrl } from 'utils/window';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import {
  clearInitiatedLogins,
  initAndValidateNativeAuthToken
} from './helpers';
import { useLoginService } from './useLoginService';

export type UseOperaLoginReturnType = [
  InitiateLoginFunctionType,
  LoginHookGenericStateType
];

export const useOperaLogin = ({
  callbackRoute,
  token: tokenToSign,
  nativeAuth,
  onLoginRedirect
}: OnProviderLoginType): UseOperaLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const hasNativeAuth = getHasNativeAuth(nativeAuth);
  const loginService = useLoginService(nativeAuth);
  const dispatch = useDispatch();
  const account = useGetAccount();
  let token = tokenToSign;

  async function initiateLogin() {
    const isLoggedIn = getIsLoggedIn();

    if (isLoggedIn) {
      throw new Error(SECOND_LOGIN_ATTEMPT_ERROR);
    }

    clearInitiatedLogins();
    dispatch(setAddress(emptyAccount.address));
    dispatch(setAccount(emptyAccount));
    setIsLoading(true);
    const provider: OperaProvider = OperaProvider.getInstance();

    try {
      const isSuccessfullyInitialized: boolean = await provider.init();

      if (!isSuccessfullyInitialized) {
        console.warn(
          'Something went wrong trying to redirect to wallet login..'
        );
        return;
      }

      const { origin } = getWindowLocation();
      const defaulCallbackUrl = getDefaultCallbackUrl();
      const callbackUrl: string = encodeURIComponent(
        `${origin}${callbackRoute ?? defaulCallbackUrl}`
      );

      const { token: validatedToken, error: tokenError } =
        await initAndValidateNativeAuthToken({
          hasNativeAuth,
          token,
          loginService
        });

      if (tokenError) {
        return;
      }

      token = validatedToken;

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
        return;
      }

      if (signature && token) {
        loginService.setTokenLoginInfo({
          signature,
          address
        });
      }

      dispatch(loginAction({ address, loginMethod: LoginMethodsEnum.opera }));

      optionalRedirect({
        callbackRoute,
        onLoginRedirect,
        options: { signature, address }
      });
    } catch (error) {
      console.error('error loging in', error);
      // TODO: can be any or typed error
      setError('error logging in' + (error as any).message);
    } finally {
      setIsLoading(false);
    }
  }

  const loginFailed = Boolean(error);
  const isLoggedIn = Boolean(account.address);

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
