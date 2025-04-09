import { PasskeyProvider } from '@multiversx/sdk-passkey-provider/out';

export async function getPasskeyProvider({
  address,
  extrasApiAddress = ''
}: {
  address: string;
  extrasApiAddress?: string;
}) {
  try {
    const provider = PasskeyProvider.getInstance()
      .setPasskeyServiceUrl(extrasApiAddress)
      .setAddress(address);

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
