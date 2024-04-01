import { SignableMessage, Address } from '@multiversx/sdk-core';
import { CrossWindowProvider } from '@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider';
import { getAccountProvider, getProviderType } from 'providers';
import { LoginMethodsEnum } from 'types';
import { getAddress } from 'utils/account/getAddress';
import { addOriginToLocationPath } from 'utils/window';

export interface SignMessageType {
  message: string;
  callbackRoute?: string;
  options?: {
    hasConsentPopup?: boolean;
  };
}

export const signMessage = async ({
  message,
  callbackRoute,
  options
}: SignMessageType) => {
  const address = await getAddress();
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);

  const callbackUrl = addOriginToLocationPath(callbackRoute);
  const signableMessage = new SignableMessage({
    address: new Address(address),
    message: Buffer.from(message, 'ascii')
  });

  if (
    options?.hasConsentPopup &&
    providerType === LoginMethodsEnum.crossWindow
  ) {
    (provider as unknown as CrossWindowProvider).setShouldShowConsentPopup(
      true
    );
  }

  return await provider.signMessage(signableMessage, {
    callbackUrl: encodeURIComponent(callbackUrl)
  });
};
