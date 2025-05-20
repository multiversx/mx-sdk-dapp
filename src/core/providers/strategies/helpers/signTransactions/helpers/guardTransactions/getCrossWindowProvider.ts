import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';

export async function getCrossWindowProvider({
  address,
  walletUrl
}: {
  address: string;
  walletUrl: string;
}) {
  try {
    const provider = CrossWindowProvider.getInstance();
    const success = await provider.init();
    provider.setAddress(address).setWalletUrl(walletUrl);

    if (success) {
      return provider;
    } else {
      console.error('Could not initialize CrossWindowWallet Provider');
    }
  } catch (err) {
    console.error('Unable to login to CrossWindowWallet Provider', err);
  }
  return null;
}
