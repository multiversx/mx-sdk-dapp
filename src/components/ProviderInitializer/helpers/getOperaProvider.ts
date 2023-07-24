import { OperaProvider } from '@multiversx/sdk-opera-provider';

export async function getOperaProvider(address: string) {
  try {
    const provider = OperaProvider.getInstance().setAddress(address);

    const success = await provider.init();

    if (success) {
      return provider;
    } else {
      console.error(
        'Could not initialise opera crypto wallet, make sure that opera crypto wallet is installed.'
      );
    }
  } catch (err) {
    console.error('Unable to login to OperaProvider', err);
  }
  return null;
}
