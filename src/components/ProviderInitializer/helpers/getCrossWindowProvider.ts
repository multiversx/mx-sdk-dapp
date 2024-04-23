import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';

export async function getCrossWindowProvider({
  address,
  walletUrl
}: {
  address: string;
  walletUrl: string;
}) {
  try {
    const success = await CrossWindowProvider.getInstance().init();
    const provider = CrossWindowProvider.getInstance()
      .setAddress(address)
      .setWalletUrl(walletUrl);

    if (success) {
      return provider;
    } else {
      console.error('Could not initialise Cross Window Wallet provider');
    }
  } catch (err) {
    console.error('Unable to login to CrossWindowWalletProvider', err);
  }
  return null;
}
