import { useState } from 'react';
import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { networkSelector } from 'reduxStore/selectors';
import { setWalletLogin } from 'reduxStore/slices';
import { newWalletProvider } from 'utils';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import {
  InitiateLoginFunctionType,
  LoginHookGenericStateType,
  OnProviderLoginType
} from '../../types';
import { useAuthService } from './useAuthService';

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
  token: tokenToSign,
  nativeAuth,
  redirectDelayMilliseconds = 100
}: UseWebWalletLoginPropsType): UseWebWalletLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const network = useSelector(networkSelector);
  const dispatch = useDispatch();
  const isLoggedIn = getIsLoggedIn();
  const hasNativeAuth = Boolean(nativeAuth);
  const authService = useAuthService(nativeAuth);
  let token = tokenToSign;

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
        token = await authService.getLoginToken();
      }

      dispatch(setWalletLogin(walletLoginData));
      if (token) {
        authService.setLoginToken(token);
      }

      const callbackUrl: string = encodeURIComponent(
        `${window.location.origin}${callbackRoute}`
      );
      const loginData = {
        callbackUrl: callbackUrl,
        ...(token && { token }),
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
