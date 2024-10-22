import { IframeProvider } from '@multiversx/sdk-web-wallet-iframe-provider/out';

export async function getIframeProvider({
  address,
  walletUrl
}: {
  address: string;
  walletUrl: string;
}) {
  try {
    const provider = IframeProvider.getInstance();

    if (provider.isInitialized()) {
      return provider;
    }

    provider.setAddress(address).setWalletUrl(walletUrl);
    const success = await provider.init();

    if (success) {
      return provider;
    }

    console.error('Could not initialise IframeProvider');
  } catch (err) {
    console.error('Unable to login to IframeProvider', err);
  }
  return null;
}
