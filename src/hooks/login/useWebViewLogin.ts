import { useEffect } from 'react';

import { loginAction } from 'reduxStore/commonActions';
import { useDispatch } from 'reduxStore/DappProviderContext';

import { setTokenLogin } from 'reduxStore/slices';
import { decodeNativeAuthToken } from 'services/nativeAuth/helpers';
import { LoginMethodsEnum } from 'types';

export function useWebViewLogin() {
  const dispatch = useDispatch();

  const search = typeof window !== 'undefined' ? window?.location?.search : '';
  const urlSearchParams = new URLSearchParams(search) as any;
  const searchParams = Object.fromEntries(urlSearchParams);

  const token = searchParams?.accessToken;
  const nativeAuthInfo = decodeNativeAuthToken(token);
  function webviewLogin() {
    if (nativeAuthInfo == null) {
      return;
    }

    const { signature, address } = nativeAuthInfo;
    if (signature && token && address) {
      dispatch(
        setTokenLogin({
          loginToken: token,
          signature,
          nativeAuthToken: token
        })
      );
    }

    dispatch(loginAction({ address, loginMethod: LoginMethodsEnum.extra }));
  }

  useEffect(() => {
    webviewLogin();
  }, [token]);
}
