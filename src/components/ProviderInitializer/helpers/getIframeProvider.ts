import { IframeProvider } from '@multiversx/sdk-web-wallet-iframe-provider/out';
import { IframeLoginTypes } from '@multiversx/sdk-web-wallet-iframe-provider/out/constants';
import { LoginMethodsEnum } from 'types/enums.types';

export async function getIframeProvider({
  address,
  walletUrl,
  loginMethod
}: {
  address: string;
  walletUrl: string;
  loginMethod: LoginMethodsEnum;
}) {
  try {
    const provider = IframeProvider.getInstance();

    if (provider.isInitialized()) {
      return provider;
    }

    switch (loginMethod) {
      case LoginMethodsEnum.passkey:
        provider.setLoginType(IframeLoginTypes.passkey);
        break;
      case LoginMethodsEnum.metamask:
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
