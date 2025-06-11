import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { IframeProvider } from 'lib/sdkWebWalletIframeProvider';
import { ProviderTypeEnum, ProviderType } from '../types/providerFactory.types';

export const clearInitiatedLogins = (
  props?: {
    skipLoginMethod: ProviderType;
  } | null
) => {
  Object.values(ProviderTypeEnum).forEach((method) => {
    if (method === props?.skipLoginMethod) {
      return;
    }

    switch (method) {
      case ProviderTypeEnum.crossWindow: {
        const crossWindowProvider = CrossWindowProvider.getInstance();
        if (crossWindowProvider.isInitialized()) {
          crossWindowProvider.dispose();
        }
        break;
      }

      case ProviderTypeEnum.metamask:
      case ProviderTypeEnum.passkey: {
        const iframeProvider = IframeProvider.getInstance();
        if (iframeProvider.isInitialized()) {
          iframeProvider.dispose();
        }
        break;
      }

      default:
        break;
    }
  });

  return null;
};
