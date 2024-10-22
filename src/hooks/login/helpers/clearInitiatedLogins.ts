import { IframeProvider } from '@multiversx/sdk-web-wallet-iframe-provider/out';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
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
