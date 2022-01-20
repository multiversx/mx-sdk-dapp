import { useState } from 'react';
import { ExtensionProvider } from '@elrondnetwork/erdjs';
import moment from 'moment';
import { loginAction } from 'redux/commonActions';
import { useSelector } from 'redux/DappProviderContext';
import { isLoggedInSelector } from 'redux/selectors';
import { loginActions, setProvider } from 'redux/slices';
import { store } from 'redux/store';
import { LoginMethodsEnum } from 'types/enums';
import { buildUrlParams } from 'utils';
import { LoginHookGenericStateType, InitiateLoginFunctionType } from '../types';

interface UseExtensionLoginPropsType {
  callbackRoute: string;
  token?: string;
}

export type UseExtensionLoginReturnType = [
  InitiateLoginFunctionType,
  LoginHookGenericStateType
];

export const useExtensionLogin = ({
  callbackRoute,
  token
}: UseExtensionLoginPropsType): UseExtensionLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(isLoggedInSelector);

  async function initiateLogin() {
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

      const expires: number = moment().add(1, 'minutes').unix();
      const extensionLoginData = {
        data: {},
        expires: expires
      };

      store.dispatch(loginActions.setExtensionLogin(extensionLoginData));

      const callbackUrl: string = encodeURIComponent(
        `${window.location.origin}${callbackRoute}`
      );
      const providerLoginData = {
        callbackUrl,
        ...(token && { token })
      };

      await provider.login(providerLoginData);

      store.dispatch(setProvider(provider));

      const { signature, address } = provider.account;
      const url = new URL(`${window.location.origin}${callbackRoute}`);

      const { nextUrlParams } = buildUrlParams(url.search, {
        address,
        ...(signature ? { signature } : {}),
        ...(token ? { loginToken: token } : {})
      });
      store.dispatch(
        loginAction({ address, loginMethod: LoginMethodsEnum.extension })
      );
      setTimeout(() => {
        window.location.href = `${url.pathname}?${nextUrlParams}`;
      }, 1000);
    } catch (error) {
      console.error(error);
      // TODO: can be any or typed error
      setError('error logging in' + (error as any).message);
    } finally {
      setIsLoading(false);
    }
  }

  const isFailed = error != null;
  return [
    initiateLogin,
    {
      isFailed,
      error,
      isLoading: isLoading && !isFailed,
      isLoggedIn: isLoggedIn && !isFailed
    }
  ];
};
