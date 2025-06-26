import { version } from 'constants/index';
import { clearInitiatedLogins } from 'hooks/login/helpers';
import { useLoginService } from 'hooks/login/useLoginService';
import { setExternalProvider } from 'providers/accountProvider';
import { loginAction } from 'reduxStore/commonActions';
import { useDispatch } from 'reduxStore/DappProviderContext';
import {
  emptyAccount,
  setAccount,
  setAddress,
  setWebviewLogin
} from 'reduxStore/slices';

import { LoginMethodsEnum } from 'types/enums.types';
import { getAccessTokenFromSearchParams } from 'utils/account/getAccessTokenFromSearchParams';
import { ExperimentalWebviewProvider } from './ExperimentalWebviewProvider';

export function useInitiateExperimentalWebviewLogin() {
  const dispatch = useDispatch();
  const nativeAuth = true;
  const loginService = useLoginService(nativeAuth);

  return async () => {
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
