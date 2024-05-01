import { useState } from 'react';
import { processModifiedAccount } from 'components/ProviderInitializer/helpers/processModifiedAccount';
import { isBrowserWithPopupConfirmation } from 'constants/browser';
import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import { useNetwork } from 'hooks/store/useNetworkStore';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { setAccountProvider } from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { setAccount } from 'reduxStore/slices';
import {
  InitiateLoginFunctionType,
  LoginHookGenericStateType,
  OnProviderLoginType
} from 'types';
import { LoginMethodsEnum } from 'types/enums.types';
import { getLatestNonce } from 'utils/account/getLatestNonce';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { optionalRedirect } from 'utils/internal';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { useLoginService } from './useLoginService';

export type UseCrossWindowLoginReturnType = [
  InitiateLoginFunctionType,
  LoginHookGenericStateType
];

export const useCrossWindowLogin = ({
  callbackRoute,
  token: tokenToSign,
  nativeAuth,
  onLoginRedirect,
  hasConsentPopup
}: OnProviderLoginType & {
  hasConsentPopup?: boolean;
}): UseCrossWindowLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const hasNativeAuth = nativeAuth != null;
  const loginService = useLoginService(nativeAuth);
  let token = tokenToSign;
  const network = useNetwork();

  const dispatch = useDispatch();
  const isLoggedIn = getIsLoggedIn();

  async function initiateLogin() {
    if (isLoggedIn) {
      throw new Error(SECOND_LOGIN_ATTEMPT_ERROR);
    }

    setIsLoading(true);
    const isSuccessfullyInitialized: boolean =
      await CrossWindowProvider.getInstance().init();
    const provider: CrossWindowProvider =
      CrossWindowProvider.getInstance().setWalletUrl(network.walletAddress);

    try {
      if (!isSuccessfullyInitialized) {
        console.warn(
          'Something went wrong trying to redirect to wallet login..'
        );
        return;
      }

      const { origin, pathname } = getWindowLocation();
      const callbackUrl: string = encodeURIComponent(
        `${origin}${callbackRoute ?? pathname}`
      );

      if (hasNativeAuth && !token) {
        token = await loginService.getNativeAuthLoginToken();

        // Fetching block failed
        if (!token) {
          console.warn('Fetching block failed. Login cancelled.');
          return;
        }
      }

      if (token) {
        loginService.setLoginToken(token);
      }

      const providerLoginData = {
        callbackUrl,
        ...(token && { token })
      };

      const needsConsent = isBrowserWithPopupConfirmation && hasNativeAuth;

      if (needsConsent || hasConsentPopup) {
        provider.setShouldShowConsentPopup(true);
      }

      const { signature, address, multisig, impersonate } =
        await provider.login(providerLoginData);

      setAccountProvider(provider);

      if (!address) {
        setIsLoading(false);
        console.warn('Login cancelled.');
        return;
      }

      const account = await processModifiedAccount({
        loginToken: token,
        extraInfoData: { multisig, impersonate },
        address,
        signature,
        loginService
      });

      if (!account) {
        return;
      }

      dispatch(
        loginAction({
          address: account.address,
          loginMethod: LoginMethodsEnum.crossWindow
        })
      );

      dispatch(
        setAccount({
          ...account,
          nonce: getLatestNonce(account)
        })
      );

      optionalRedirect({
        callbackRoute,
        onLoginRedirect,
        options: { signature, address: account.address }
      });
    } catch (error) {
      console.error('error loging in', error);
      // TODO: can be any or typed error
      setError('error logging in' + (error as any).message);
    } finally {
      setIsLoading(false);
    }
  }

  const loginFailed = Boolean(error);

  return [
    initiateLogin,
    {
      loginFailed,
      error,
      isLoading: isLoading && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    }
  ];
};
