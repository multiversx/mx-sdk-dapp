import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import { clearInitiatedLogins } from 'hooks/login/helpers';
import { setExternalProvider } from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import {
  emptyAccount,
  setAccount,
  setAddress,
  setWebviewLogin
} from 'reduxStore/slices';

import { LoginMethodsEnum } from 'types/enums.types';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { ExperimentalWebviewProvider } from './ExperimentalWebviewProvider';
import { getAccessTokenFromSearchParams } from 'utils/account/getAccessTokenFromSearchParams';
import { version } from 'constants/index';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { useLoginService } from 'hooks/login/useLoginService';

export function useInitiateExperimentalWebviewLogin() {
  const isLoggedIn = getIsLoggedIn();
  const dispatch = useDispatch();
  const nativeAuth = true;
  const loginService = useLoginService(nativeAuth);

  return async () => {
    if (isLoggedIn) {
      throw new Error(SECOND_LOGIN_ATTEMPT_ERROR);
    }

    clearInitiatedLogins();
    dispatch(setAddress(emptyAccount.address));
    dispatch(setAccount(emptyAccount));

    const provider: ExperimentalWebviewProvider =
      ExperimentalWebviewProvider.getInstance();

    const accessToken = getAccessTokenFromSearchParams();

    // is logging in from URL
    if (accessToken) {
      setWebviewLogin({
        data: accessToken
      });
      provider.init();
      setExternalProvider(provider);
      return;
    }

    try {
      const token = await loginService.getNativeAuthLoginToken();

      const isSuccessfullyInitialized: boolean = await provider.init(version);

      if (!isSuccessfullyInitialized) {
        console.warn(
          'Something went wrong trying to redirect to wallet login..'
        );
        return;
      }

      // Fetching block failed
      if (!token) {
        console.warn('Fetching block failed. Login cancelled.');
        return;
      } else {
        loginService.setLoginToken(token);
      }

      const { signature, address } = await provider.login({
        token
      });

      setExternalProvider(provider);

      if (!address) {
        console.warn('Login cancelled.');
        return;
      }

      if (signature && token) {
        loginService.setTokenLoginInfo({
          signature,
          address
        });
      }

      dispatch(loginAction({ address, loginMethod: LoginMethodsEnum.extra }));
    } catch (error) {
      console.error('error logging in', error);
    }
  };
}
