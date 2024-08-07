import { IFrameProvider } from 'lib/sdkWebWalletCrossWindowProvider';

export async function getIFrameProvider({
  address,
  walletUrl
}: {
  address: string;
  walletUrl: string;
}) {
  try {
    const provider = IFrameProvider.getInstance();

    if (provider.isInitialized()) {
      return provider;
    }

    provider.setAddress(address).setWalletUrl(walletUrl);
    const success = await provider.init();

    if (success) {
      return provider;
    }

    console.error('Could not initialise IFrameProvider');
  } catch (err) {
    console.error('Unable to login to IFrameProvider', err);
  }
  return null;
}
