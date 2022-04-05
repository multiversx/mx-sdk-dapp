import { useRef, useState } from 'react';
import { ExtensionProvider } from '@elrondnetwork/erdjs';
import { setAccountProvider } from 'providers/accountProvider';
import { loginAction } from 'redux/commonActions';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import { isLoggedInSelector } from 'redux/selectors';
import { setTokenLogin } from 'redux/slices';
import { LoginMethodsEnum } from 'types/enums';
import { optionalRedirect } from 'utils/internal';
import { LoginHookGenericStateType, InitiateLoginFunctionType } from '../types';

interface UseExtensionLoginPropsType {
  callbackRoute: string;
  token?: string;
  redirectAfterLogin?: boolean;
}

export type UseExtensionLoginReturnType = [
  InitiateLoginFunctionType,
  LoginHookGenericStateType
];

export const useExtensionLogin = ({
  callbackRoute,
  token,
  redirectAfterLogin = false
}: UseExtensionLoginPropsType): UseExtensionLoginReturnType => {
  const [error, setError] = useState('');
  const isLoadingRef = useRef(false);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();

  async function initiateLogin() {
    const provider: ExtensionProvider = ExtensionProvider.getInstance();

    try {
      const isSuccessfullyInitialized: boolean = await provider.init();

      if (!isSuccessfullyInitialized) {
        console.warn(
          'Something went wrong trying to redirect to wallet login..'
        );
        return;
      }

      const callbackUrl: string = encodeURIComponent(
        `${window.location.origin}${callbackRoute}`
      );
      const providerLoginData = {
        callbackUrl,
        ...(token && { token })
      };

      await provider.login(providerLoginData);

      setAccountProvider(provider);

      const { signature, address } = provider.account;
      if (signature) {
        dispatch(
          setTokenLogin({
            loginToken: String(token),
            signature
          })
        );
      }
      dispatch(
        loginAction({ address, loginMethod: LoginMethodsEnum.extension })
      );
      optionalRedirect(callbackRoute, redirectAfterLogin);
    } catch (error) {
      console.error('error loging in', error);
      // TODO: can be any or typed error
      setError('error logging in' + (error as any).message);
    } finally {
      isLoadingRef.current = false;
    }
  }

  const loginFailed = Boolean(error);
  return [
    initiateLogin,
    {
      loginFailed,
      error,
      isLoading: isLoadingRef.current && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    }
  ];
};
