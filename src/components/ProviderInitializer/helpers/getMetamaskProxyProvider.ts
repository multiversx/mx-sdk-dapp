import { MetamaskProxyProvider } from 'lib/sdkWebWalletCrossWindowProvider';

export async function getMetamaskProxyProvider({
  address,
  walletUrl
}: {
  address: string;
  walletUrl: string;
}) {
  try {
    const provider = MetamaskProxyProvider.getInstance();

    if (provider.isInitialized()) {
      return provider;
    }

    provider.setAddress(address).setWalletUrl(walletUrl);
    const success = await provider.init();

    if (success) {
      return provider;
    }

    console.error('Could not initialise MetamaskProxyProvider');
  } catch (err) {
    console.error('Unable to login to MetamaskProxyProvider', err);
  }
  return null;
}
