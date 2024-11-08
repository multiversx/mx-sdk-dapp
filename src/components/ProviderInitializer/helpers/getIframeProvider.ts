import {
  IframeLoginTypes,
  IframeProvider
} from 'lib/sdkWebWalletIframeProvider';

interface GetIframeProviderPropsType {
  address: string;
  walletUrl: string;
  loginType?: IframeLoginTypes;
}

export async function getIframeProvider({
  address,
  walletUrl,
  loginType
}: GetIframeProviderPropsType) {
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
