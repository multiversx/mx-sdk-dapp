import { PasskeyProvider } from '@multiversx/sdk-passkey-provider/out';

export async function getPasskeyProvider(address: string) {
  try {
    const provider = PasskeyProvider.getInstance().setAddress(address);

    const success = await provider.init();

    if (success) {
      return provider;
    } else {
      console.error('Could not initialise passkey provider');
    }
  } catch (err) {
    console.error('Unable to login to PasskeyProvider', err);
  }
  return null;
}
