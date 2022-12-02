import { useState } from 'react';
import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { networkSelector } from 'reduxStore/selectors';
import { setTokenLogin, setWalletLogin } from 'reduxStore/slices';
import { newWalletProvider } from 'utils';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import {
  InitiateLoginFunctionType,
  LoginHookGenericStateType,
  OnProviderLoginType
} from '../../types';
import { useNativeAuthService } from './useNativeAuthService';

export interface UseWebWalletLoginPropsType
  extends Omit<OnProviderLoginType, 'onLoginRedirect'> {
  redirectDelayMilliseconds?: number;
}

export type UseWebWalletLoginReturnType = [
  InitiateLoginFunctionType,
  LoginHookGenericStateType
];

export const useWebWalletLogin = ({
  callbackRoute,
  token,
  nativeAuth,
  redirectDelayMilliseconds = 100
}: UseWebWalletLoginPropsType): UseWebWalletLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const network = useSelector(networkSelector);
  const dispatch = useDispatch();
  const isLoggedIn = getIsLoggedIn();
  const hasNativeAuth = nativeAuth != null;
  const nativeAuthService = useNativeAuthService(nativeAuth);
  let tokenToSign = token;

  const nativeAuthConfig = hasNativeAuth
    ? nativeAuthService.configuration
    : undefined;

  async function initiateLogin() {
    if (isLoggedIn) {
      throw new Error(SECOND_LOGIN_ATTEMPT_ERROR);
    }
    try {
      setIsLoading(true);
      const provider = newWalletProvider(network.walletAddress);

      const now = new Date();
      const expires: number = now.setMinutes(now.getMinutes() + 3) / 1000;
      const walletLoginData = {
        data: {},
        expires: expires
      };

      if (hasNativeAuth) {
        tokenToSign = await nativeAuthService.getLoginToken();
      }

      dispatch(setWalletLogin(walletLoginData));
      if (tokenToSign) {
        dispatch(
          setTokenLogin({
            loginToken: tokenToSign,
            nativeAuthConfig
          })
        );
      }

      const callbackUrl: string = encodeURIComponent(
        `${window.location.origin}${callbackRoute}`
      );
      const loginData = {
        callbackUrl: callbackUrl,
        ...(tokenToSign && { token: tokenToSign }),
        redirectDelayMilliseconds
      };

      await provider.login(loginData);
    } catch (error) {
      console.error(error);
      setError('error logging in' + (error as any).message);
    } finally {
      setIsLoading(false);
    }
  }

  const loginFailed = Boolean(error);

  return [
    initiateLogin,
    {
      error,
      loginFailed,
      isLoading: isLoading && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    }
  ];
};
