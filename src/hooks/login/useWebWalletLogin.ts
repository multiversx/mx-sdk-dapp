import { useState } from 'react';
import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { networkSelector } from 'reduxStore/selectors';
import {
  setWalletLogin,
  setCustomWalletAddress,
  setAccount,
  emptyAccount,
  setAddress
} from 'reduxStore/slices';
import { getHasNativeAuth, newWalletProvider } from 'utils';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import {
  AccountInfoSliceNetworkType,
  InitiateLoginFunctionType,
  LoginHookGenericStateType,
  OnProviderLoginType
} from '../../types';
import { sanitizeCallbackUrl } from '../../utils/sanitizeCallbackUrl';
import { initAndValidateNativeAuthToken } from './helpers';
import { useLoginService } from './useLoginService';

export interface UseWebWalletLoginPropsType
  extends Omit<OnProviderLoginType, 'onLoginRedirect'> {
  redirectDelayMilliseconds?: number;
  /**
   * @param {string} customWalletAddress if set, will be used as main `walletAddress`
   * @description
   * The `customWalletAddress` property is used to override the default `walletAddress`.
   * This is useful when you want to use a custom wallet provider.
   * It overrides the network's wallet address, including the wallet address from the custom network config specified in the `DappProvider`.
   * @example
   * <WebWalletLoginButton
      {...otherLoginProps}
      customWalletAddress="https://custom-web-wallet.com"
     >
   */
  customWalletAddress?: AccountInfoSliceNetworkType['customWalletAddress'];
}

export type UseWebWalletLoginReturnType = [
  InitiateLoginFunctionType,
  LoginHookGenericStateType
];

export const useWebWalletLogin = ({
  callbackRoute,
  token: tokenToSign,
  nativeAuth,
  redirectDelayMilliseconds = 100,
  customWalletAddress
}: UseWebWalletLoginPropsType): UseWebWalletLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const network = useSelector(networkSelector);
  const dispatch = useDispatch();
  const isLoggedIn = getIsLoggedIn();
  const hasNativeAuth = getHasNativeAuth(nativeAuth);
  const loginService = useLoginService(hasNativeAuth ? nativeAuth : false);
  let token = tokenToSign;

  async function initiateLogin() {
    if (isLoggedIn) {
      throw new Error(SECOND_LOGIN_ATTEMPT_ERROR);
    }

    dispatch(setAddress(emptyAccount.address));
    dispatch(setAccount(emptyAccount));
    dispatch(setCustomWalletAddress(customWalletAddress));

    try {
      setIsLoading(true);
      const provider = newWalletProvider(
        customWalletAddress ?? network.walletAddress
      );

      const now = new Date();
      const expires: number = now.setMinutes(now.getMinutes() + 3) / 1000;
      const walletLoginData = {
        data: {},
        expires: expires
      };

      const { token: validatedToken, error: tokenError } =
        await initAndValidateNativeAuthToken({
          hasNativeAuth,
          token,
          loginService
        });

      if (tokenError) {
        return;
      }

      token = validatedToken;

      const { origin } = getWindowLocation();
      const targetUrl = window?.location
        ? `${origin}${callbackRoute}`
        : `${callbackRoute}`;
      const params = new URLSearchParams(document?.location.search);

      // skip login when an address param is prefilled in URL
      const skipLogin = params.get('address');

      if (!skipLogin) {
        dispatch(setWalletLogin(walletLoginData));
      }

      const sanitizedCallbackUrl = sanitizeCallbackUrl(targetUrl);
      const callbackUrl = encodeURIComponent(sanitizedCallbackUrl);

      const loginData = {
        callbackUrl,
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
