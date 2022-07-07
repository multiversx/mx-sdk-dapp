import { useState } from 'react';
import { useSelector, useDispatch } from 'reduxStore/DappProviderContext';
import { isLoggedInSelector, networkSelector } from 'reduxStore/selectors';
import { setTokenLogin, setWalletLogin } from 'reduxStore/slices';
import { InitiateLoginFunctionType, LoginHookGenericStateType } from 'types';
import { newWalletProvider } from 'utils';

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
  const network = useSelector(networkSelector);
  const dispatch = useDispatch();

  async function initiateLogin() {
    try {
      setIsLoading(true);
      const provider = newWalletProvider(network.walletAddress);

      const now = new Date();
      const expires: number = now.setMinutes(now.getMinutes() + 3) / 1000;
      const walletLoginData = {
        data: {},
        expires: expires
      };

      dispatch(setWalletLogin(walletLoginData));
      if (token) {
        dispatch(setTokenLogin({ loginToken: token }));
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

export default useWebWalletLogin;
