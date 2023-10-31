import { CrossWindowProvider } from 'crossWindowProvider';

export async function getCrossWindowProvider({
  address,
  walletUrl
}: {
  address: string;
  walletUrl: string;
}) {
  try {
    const provider =
      CrossWindowProvider.getInstance(walletUrl).setAddress(address);

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
