import { loginAction, logoutAction } from 'reduxStore/commonActions';
import { setTokenLogin } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { LoginMethodsEnum } from 'types';
import { decodeNativeAuthToken } from './decodeNativeAuthToken';

export function loginWithNativeAuthToken(token: string, dispatch?: any) {
  const nativeAuthInfo = decodeNativeAuthToken(token);
  if (nativeAuthInfo == null) {
    return;
  }
  const dispatchFn = dispatch ?? store.dispatch;

  const { signature, address } = nativeAuthInfo;
  if (signature && token && address) {
    //this will clear out the store from all previous logins
    dispatchFn(logoutAction());

    setTimeout(() => {
      dispatchFn(
        setTokenLogin({
          loginToken: token,
          signature,
          nativeAuthToken: token
        })
      );
      dispatchFn(loginAction({ address, loginMethod: LoginMethodsEnum.extra }));
    });
  }
}
