import { HWProvider } from '@multiversx/sdk-hw-provider';
import { IHWWalletApp } from '@multiversx/sdk-hw-provider/out/interface';

import { LEDGER_CONTRACT_DATA_ENABLED_VALUE } from 'constants/index';

export async function getLedgerConfiguration(initializedHwWalletP: HWProvider) {
  if (!initializedHwWalletP.isInitialized()) {
    throw new Error('Unable to get version. Provider not initialized');
  }
  const hwApp: IHWWalletApp = (initializedHwWalletP as any).hwApp;
  const { contractData, version } = await hwApp.getAppConfiguration();
  const dataEnabled = contractData === LEDGER_CONTRACT_DATA_ENABLED_VALUE;
  return { version, dataEnabled };
}
