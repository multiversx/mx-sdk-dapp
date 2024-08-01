import { useEffect } from 'react';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { shouldUseWebViewProviderSelector } from 'reduxStore/selectors';
import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';
import { getWebviewToken } from 'utils/account/getWebviewToken';
import { getWindowLocation } from '../../utils';

export function useWebViewLogin() {
  const dispatch = useDispatch();
  const shouldUseWebViewProvider = useSelector(
    shouldUseWebViewProviderSelector
  );

  const { search } = getWindowLocation();
  const urlSearchParams = new URLSearchParams(search) as any;
  const searchParams = Object.fromEntries(urlSearchParams);

  const token = getWebviewToken();

  useEffect(() => {
    if (!shouldUseWebViewProvider || !searchParams?.accessToken) {
      return;
    }

    loginWithNativeAuthToken(token, dispatch);
  }, [token, shouldUseWebViewProvider, searchParams?.accessToken]);
}
