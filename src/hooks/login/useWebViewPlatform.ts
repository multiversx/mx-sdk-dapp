import { useEffect } from 'react';
import { useSelector } from 'reduxStore/DappProviderContext';
import { shouldUseWebViewProviderSelector } from 'reduxStore/selectors';
import { getWebviewPlatform } from '../../utils/account/getWebviewPlatform';

export function useWebViewPlatform() {
  const shouldUseWebViewProvider = useSelector(
    shouldUseWebViewProviderSelector
  );

  const webviewPlatform = getWebviewPlatform();

  useEffect(() => {
    if (!shouldUseWebViewProvider || !webviewPlatform) {
      return;
    }

    sessionStorage.setItem('webviewPlatform', webviewPlatform);
  }, [webviewPlatform, shouldUseWebViewProvider]);
}
