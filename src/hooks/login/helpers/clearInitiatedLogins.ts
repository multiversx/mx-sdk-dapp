import {
  CrossWindowProvider,
  MetamaskProxyProvider
} from 'lib/sdkWebWalletCrossWindowProvider';
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
    const metamaskProvider = MetamaskProxyProvider.getInstance();
    if (metamaskProvider.isInitialized()) {
      metamaskProvider.dispose();
    }
  });

  return null;
};
