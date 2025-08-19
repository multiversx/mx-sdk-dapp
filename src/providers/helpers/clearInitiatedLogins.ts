import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
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
          // Clean up the crossWindowProvider state without triggering a full logout.
          crossWindowProvider.onDestroy();
        }
        break;
      }

      default:
        break;
    }
  });

  return null;
};
