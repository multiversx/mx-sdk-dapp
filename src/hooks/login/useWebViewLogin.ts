import { useEffect } from 'react';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { shouldUseWebViewProviderSelector } from 'reduxStore/selectors';
import { loginWithNativeAuthToken } from 'services/nativeAuth/helpers/loginWithNativeAuthToken';
import { getWebviewToken } from 'utils/account/getWebviewToken';

export function useWebViewLogin() {
  const dispatch = useDispatch();
  const shouldUseWebViewProvider = useSelector(
    shouldUseWebViewProviderSelector
  );

  const token = getWebviewToken();

  useEffect(() => {
    if (!shouldUseWebViewProvider) {
      return;
    }

    loginWithNativeAuthToken(token, dispatch);
  }, [token, shouldUseWebViewProvider]);
}
