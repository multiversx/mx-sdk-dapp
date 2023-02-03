import { useEffect } from 'react';

import { useDispatch } from 'reduxStore/DappProviderContext';

import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';

export function useWebViewLogin() {
  const dispatch = useDispatch();

  const search = typeof window !== 'undefined' ? window?.location?.search : '';
  const urlSearchParams = new URLSearchParams(search) as any;
  const searchParams = Object.fromEntries(urlSearchParams);

  const token = searchParams?.accessToken;

  useEffect(() => {
    loginWithNativeAuthToken(token, dispatch);
  }, [token]);
}
