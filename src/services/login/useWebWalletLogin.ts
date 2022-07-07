import { useState } from 'react';
import { newWalletProvider } from 'providers/utils';
import { useSelector } from 'redux/DappProviderContext';
import { isLoggedInSelector, networkSelector } from 'redux/selectors';
import { setTokenLogin, setWalletLogin } from 'redux/slices';
import { store } from 'redux/store';
import { LoginHookGenericStateType, InitiateLoginFunctionType } from '../types';

interface UseWebWalletLoginPropsType {
  callbackRoute: string;
  token?: string;
  redirectDelayMilliseconds?: number;
}

export type UseWebWalletLoginReturnType = [
  InitiateLoginFunctionType,
  LoginHookGenericStateType
];

export const useWebWalletLogin = ({
  callbackRoute,
  token,
  redirectDelayMilliseconds = 100
}: UseWebWalletLoginPropsType): UseWebWalletLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(isLoggedInSelector);

  async function initiateLogin() {
    try {
      setIsLoading(true);
      const appState = store.getState();
      const network = networkSelector(appState);
      const provider = newWalletProvider(network.walletAddress);

      const now = new Date();
      const expires: number = now.setMinutes(now.getMinutes() + 3) / 1000;
      const walletLoginData = {
        data: {},
        expires: expires
      };

      store.dispatch(setWalletLogin(walletLoginData));
      if (token) {
        store.dispatch(setTokenLogin({ loginToken: token }));
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

  const loginFailed = error != null;

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

export default useWebWalletLogin;
