import { useState } from 'react';
import { processModifiedAccount } from 'components/ProviderInitializer/helpers/processModifiedAccount';
import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import {
  IframeLoginTypes,
  IframeProvider
} from 'lib/sdkWebWalletIframeProvider';
import { setAccountProvider } from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { networkSelector } from 'reduxStore/selectors/networkConfigSelectors';
import { emptyAccount, setAccount, setAddress } from 'reduxStore/slices';
import {
  LoginHookGenericStateType,
  LoginMethodsEnum,
  OnProviderLoginType
} from 'types';
import { getLatestNonce } from 'utils/account/getLatestNonce';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { clearInitiatedLogins } from './helpers';
import { useLoginService } from './useLoginService';

export type UseIframeLoginReturnType = [
  (loginType: IframeLoginTypes) => void,
  LoginHookGenericStateType
];

export const useIframeLogin = ({
  callbackRoute,
  token: tokenToSign,
  nativeAuth,
  walletAddress
}: OnProviderLoginType & {
  walletAddress?: string;
}): UseIframeLoginReturnType => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const hasNativeAuth = nativeAuth != null;
  const loginService = useLoginService(nativeAuth);
  let token = tokenToSign;
  const network = useSelector(networkSelector);

  const dispatch = useDispatch();
  const isLoggedIn = getIsLoggedIn();

  async function initiateLogin(loginType = IframeLoginTypes.metamask) {
    if (isLoggedIn) {
      throw new Error(SECOND_LOGIN_ATTEMPT_ERROR);
    }

    clearInitiatedLogins({
      skipLoginMethod: LoginMethodsEnum.iframe
    });

    dispatch(setAddress(emptyAccount.address));
    dispatch(setAccount(emptyAccount));

    setIsLoading(true);
    const provider = IframeProvider.getInstance();

    const walletUrl = walletAddress ?? network.metamaskSnapWalletAddress;

    if (!walletUrl) {
      setError('Iframe snap wallet URL is not set');
      return;
    }

    provider.setLoginType(loginType);
    provider.setWalletUrl(walletUrl);

    const isSuccessfullyInitialized: boolean = await provider.init();

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
          loginMethod: LoginMethodsEnum.iframe,
          iframeLoginType: loginType
        })
      );

      dispatch(
        setAccount({
          ...account,
          nonce: getLatestNonce(account)
        })
      );
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
