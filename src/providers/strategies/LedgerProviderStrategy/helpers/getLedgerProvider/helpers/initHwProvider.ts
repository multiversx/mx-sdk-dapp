import { HWProvider } from '@multiversx/sdk-hw-provider';
import { DappProvider } from 'providers/DappProvider/DappProvider';

type InitHwProviderParams = {
  provider: DappProvider | HWProvider;
  ledgerProvider: HWProvider;
  ledgerLogin?: { index?: number | null } | null;
  shouldInitProvider: boolean;
};

export async function initHwProvider({
  provider,
  ledgerProvider,
  ledgerLogin,
  shouldInitProvider
}: InitHwProviderParams): Promise<HWProvider> {
  const hasAddressIndex = ledgerLogin?.index != null;

  if (provider instanceof HWProvider && provider.isInitialized()) {
    if (hasAddressIndex) {
      await provider.setAddressIndex(ledgerLogin!.index as number);
    }
    return provider;
  }

  if (shouldInitProvider) {
    const isInitialized = await ledgerProvider.init();
    if (!isInitialized) {
      throw new Error('Failed to initialize Ledger Provider');
    }
  }

  if (hasAddressIndex) {
    await ledgerProvider.setAddressIndex(ledgerLogin!.index as number);
  }

  return ledgerProvider;
}
