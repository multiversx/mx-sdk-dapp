import { WalletV2Provider } from 'tempWalletProviderV2';

export async function getWalletV2Provider(address: string, walletUrl: string) {
  try {
    const provider =
      WalletV2Provider.getInstance(walletUrl).setAddress(address);

    const success = await provider.init();

    if (success) {
      return provider;
    } else {
      console.error('Could not initialise walletV2 provider');
    }
  } catch (err) {
    console.error('Unable to login to WalletV2Provider', err);
  }
  return null;
}
