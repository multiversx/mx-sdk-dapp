import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'reduxStore/DappProviderContext';
import { shouldUseWebViewProviderSelector } from 'reduxStore/selectors';

import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';

export function useWebViewLogin() {
  const dispatch = useDispatch();
  const shouldUseWebViewProvider = useSelector(
    shouldUseWebViewProviderSelector
  );

  const search = typeof window !== 'undefined' ? window?.location?.search : '';
  const urlSearchParams = new URLSearchParams(search) as any;
  const searchParams = Object.fromEntries(urlSearchParams);

  const token = searchParams?.accessToken;

  useEffect(() => {
    if (!shouldUseWebViewProvider) {
      return;
    }

    loginWithNativeAuthToken(token, dispatch);
  }, [token, shouldUseWebViewProvider]);
}
