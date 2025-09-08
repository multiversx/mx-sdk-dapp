import { MetamaskProvider } from '@multiversx/sdk-metamask-provider/out/metamaskProvider';

export async function getMetamaskProvider(address: string) {
  try {
    const provider = MetamaskProvider.getInstance().setAddress(address);

    const success = await provider.init();

    if (success) {
      return provider;
    } else {
      console.error(
        'Could not initialize metamask, make sure metamask is installed.'
      );
    }
  } catch (err) {
    console.error('Unable to login to MetamaskProvider', err);
  }
  return null;
}
