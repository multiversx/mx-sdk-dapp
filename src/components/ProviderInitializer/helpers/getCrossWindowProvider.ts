import { CrossWindowProvider } from '@multiversx/sdk-web-wallet-cross-window-provider';

export async function getCrossWindowProvider({
  address,
  walletUrl
}: {
  address: string;
  walletUrl: string;
}) {
  try {
    const provider = CrossWindowProvider.getInstance()
      .setAddress(address)
      .setWalletUrl(walletUrl);

    const success = await provider.init();

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
