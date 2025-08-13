import { isValidUrl } from 'utils/validation';

export const setServiceUrlIfValid = (
  provider: { setPasskeyServiceUrl: (url: string) => void },
  extrasApiAddress?: string
) => {
  if (extrasApiAddress && isValidUrl(extrasApiAddress)) {
    provider.setPasskeyServiceUrl(extrasApiAddress);
  } else if (extrasApiAddress) {
    console.warn(
      'Invalid extrasApiAddress provided for passkey service:',
      extrasApiAddress
    );
  }
};