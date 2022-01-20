import { useCallback, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import { isLoggedInSelector, networkSelector } from 'redux/selectors';
import { loginActions } from 'redux/slices';
import { newWalletProvider } from 'utils';
import {
  UseWebWalletLoginPropsType,
  UseWebWalletLoginReturnType
} from '../types';

export const useWebWalletLogin = ({
  callbackRoute,
  token
}: UseWebWalletLoginPropsType): UseWebWalletLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();

  const initiateLogin = useCallback(() => {
    async function init() {
      try {
        setIsLoading(true);

        const network = useSelector(networkSelector);
        const provider = newWalletProvider(network);

        const expires = moment().add(3, 'minutes').unix();

        const walletLoginData = {
          data: {},
          expires: expires
        };

        dispatch(loginActions.setWalletLogin(walletLoginData));

        const callbackUrl: string = encodeURIComponent(
          `${window.location.origin}${callbackRoute}`
        );

        const loginData = {
          callbackUrl: callbackUrl,
          ...(token && { token })
        };

        await provider.login(loginData);
      } catch (error) {
        setError('error logging in' + (error as any).message);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, [dispatch, isLoggedIn]);

  const isFailed = error != null;

  return [
    initiateLogin,
    {
      error,
      isFailed,
      isLoading: isLoading && !isFailed,
      isLoggedIn: isLoggedIn && !isFailed
    }
  ];
};

export default useWebWalletLogin;
