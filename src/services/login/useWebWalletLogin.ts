import { useState } from 'react';
import moment from 'moment';
import { useSelector } from 'redux/store';
import { isLoggedInSelector, networkSelector } from 'redux/selectors';
import { setWalletLogin } from 'redux/slices';
import { store } from 'redux/store';
import { newWalletProvider } from '../../utils';
import { LoginHookGenericStateType, LoginHookTriggerType } from '../types';

interface UseWebWalletLoginPropsType {
  callbackRoute: string;
  token?: string;
}

export type UseWebWalletLoginReturnType = [
  LoginHookTriggerType,
  LoginHookGenericStateType
];

export const useWebWalletLogin = ({
  callbackRoute,
  token
}: UseWebWalletLoginPropsType): UseWebWalletLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(isLoggedInSelector);

  async function triggerFunction() {
    try {
      setIsLoading(true);
      const appState = store.getState();
      const network = networkSelector(appState);
      const provider = newWalletProvider(network);

      const expires = moment().add(3, 'minutes').unix();
      const walletLoginData = {
        data: {},
        expires: expires
      };

      store.dispatch(setWalletLogin(walletLoginData));

      const callbackUrl: string = encodeURIComponent(
        `${window.location.origin}${callbackRoute}`
      );
      const loginData = {
        callbackUrl: callbackUrl,
        ...(token && { token })
      };

      await provider.login(loginData);
    } catch (error) {
      console.error(error);
      setError('error logging in' + error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const isFailed = error != null;

  return [
    triggerFunction,
    {
      error,
      isFailed,
      isLoading: isLoading && !isFailed,
      isLoggedIn: isLoggedIn && !isFailed
    }
  ];
};

export default useWebWalletLogin;
