import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { getAccountProvider } from './accountProvider';
import { ProviderTypeEnum } from '../types/providerFactory.types';

export const cancelCrossWindowAction = async () => {
  const provider = getAccountProvider();

  if (provider.getType() === ProviderTypeEnum.crossWindow) {
    const crossWindowProvider = provider as unknown as CrossWindowProvider;
    await crossWindowProvider.cancelAction();
    await crossWindowProvider.dispose();
  }
};
