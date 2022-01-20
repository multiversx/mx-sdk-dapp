import { useState } from 'react';
import { ExtensionProvider } from '@elrondnetwork/erdjs';
import { loginAction } from 'redux/commonActions';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import { isLoggedInSelector } from 'redux/selectors';
import { setExtensionLogin, setProvider } from 'redux/slices';
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
  const dispatch = useDispatch();
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
      const now = new Date();
      const expires: number = now.setMinutes(now.getMinutes() + 1) / 1000;
      const extensionLoginData = {
        data: {},
        expires: expires
      };

      dispatch(setExtensionLogin(extensionLoginData));

      const callbackUrl: string = encodeURIComponent(
        `${window.location.origin}${callbackRoute}`
      );
      const providerLoginData = {
        callbackUrl,
        ...(token && { token })
      };

      await provider.login(providerLoginData);

      dispatch(setProvider(provider));

      const { signature, address } = provider.account;
      const url = new URL(`${window.location.origin}${callbackRoute}`);

      const { nextUrlParams } = buildUrlParams(url.search, {
        address,
        ...(signature ? { signature } : {}),
        ...(token ? { loginToken: token } : {})
      });

      dispatch(
        loginAction({ address, loginMethod: LoginMethodsEnum.extension })
      );
      setTimeout(function () {
        if (!window.location.pathname.includes(url?.pathname)) {
          window.location.href =
            window.location.href = `${url.pathname}?${nextUrlParams}`;
        }
      }, 200);
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
