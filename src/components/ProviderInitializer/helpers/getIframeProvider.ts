import { IframeProvider } from '@multiversx/sdk-web-wallet-iframe-provider/out';
import { IframeLoginTypes } from '@multiversx/sdk-web-wallet-iframe-provider/out/constants';

console.log('\x1b[42m%s\x1b[0m', 3);

export async function getIframeProvider({
  address,
  walletUrl,
  loginType
}: {
  address: string;
  walletUrl: string;
  loginType?: IframeLoginTypes;
}) {
  try {
    const provider = IframeProvider.getInstance();

    if (provider.isInitialized()) {
      return provider;
    }

    switch (loginType) {
      case IframeLoginTypes.passkey:
        provider.setLoginType(IframeLoginTypes.passkey);
        break;
      case IframeLoginTypes.metamask:
        provider.setLoginType(IframeLoginTypes.metamask);
        break;
      default:
        break;
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
