import { HWProvider } from '@multiversx/sdk-hw-provider';

export async function getHwWalletProvider(ledgerLoginIndex?: number) {
  const hwWalletP = new HWProvider();
  let isInitialized = hwWalletP.isInitialized();
  if (!isInitialized) {
    isInitialized = await hwWalletP.init();
  }
  //   if (!isInitialized && isLoggedIn) {
  //     console.warn('Could not initialise ledger app');
  //     logout(logoutRoute);
  //     return;
  //   }

  if (!isInitialized) {
    return null;
  }

  if (ledgerLoginIndex != null) {
    await hwWalletP.setAddressIndex(ledgerLoginIndex);
  }

  return hwWalletP;
}
