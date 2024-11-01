import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { IframeProvider } from 'lib/sdkWebWalletIframeProvider';
import { LoginMethodsEnum } from 'types';

export const clearInitiatedLogins = (props?: { skip: LoginMethodsEnum }) => {
  Object.values(LoginMethodsEnum).forEach((method) => {
    if (props?.skip && method === props.skip) {
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
