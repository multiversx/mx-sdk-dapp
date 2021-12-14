import { useState } from 'react';
import { ExtensionProvider } from '@elrondnetwork/erdjs';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { loginAction } from 'redux/commonActions';
import { isLoggedInSelector } from 'redux/selectors';
import { setExtensionLogin, setProvider } from 'redux/slices';
import { store } from 'redux/store';
import { loginMethodsEnum } from 'types/enums';
import { buildUrlParams } from 'utils';
import { LoginHookGenericStateType, LoginHookTriggerType } from '../types';

interface UseExtensionLoginPropsType {
  callbackRoute: string;
  token?: string;
}

export type UseExtensionLoginReturnType = [
  LoginHookTriggerType,
  LoginHookGenericStateType
];

export const useExtensionLogin = ({
  callbackRoute,
  token
}: UseExtensionLoginPropsType): UseExtensionLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(isLoggedInSelector);

  async function triggerFunction() {
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

      store.dispatch(setExtensionLogin(extensionLoginData));

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

      window.location.href = `${url.pathname}?${nextUrlParams}`;
      store.dispatch(
        loginAction({ address, loginMethod: loginMethodsEnum.extension })
      );
    } catch (error) {
      console.error(error);
      setError('error logging in' + error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return [triggerFunction, { error, isLoading, isLoggedIn }];
};
