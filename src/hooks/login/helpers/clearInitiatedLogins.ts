import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { IframeProvider } from 'lib/sdkWebWalletIframeProvider';
import { LoginMethodsEnum } from 'types';

export const clearInitiatedLogins = (props?: {
  intiatedLogin: LoginMethodsEnum;
}) => {
  Object.values(LoginMethodsEnum).forEach((method) => {
    if (props?.intiatedLogin && method !== props.intiatedLogin) {
      return;
    }
    const crossWindowProvider = CrossWindowProvider.getInstance();
    if (crossWindowProvider.isInitialized()) {
      crossWindowProvider.dispose();
    }
    const iframeProvider = IframeProvider.getInstance();
    if (iframeProvider.isInitialized()) {
      iframeProvider.dispose();
    }
  });

  return null;
};
