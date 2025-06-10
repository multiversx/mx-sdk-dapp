import { Message, Address } from 'lib/sdkCore';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { getAddress } from 'methods/account/getAddress';
import {
  IProvider,
  ProviderTypeEnum
} from 'providers/types/providerFactory.types';

export type SignMessageType = {
  provider: IProvider;
  message: Message;
  options?: {
    hasConsentPopup?: boolean;
  };
};

export async function signMessageWithProvider({
  message,
  provider,
  options
}: SignMessageType): Promise<Message | null> {
  const address = getAddress();

  const messageToSign = new Message({
    address: new Address(address),
    data: message.data
  });

  if (
    options?.hasConsentPopup &&
    provider.getType() === ProviderTypeEnum.crossWindow
  ) {
    (provider as unknown as CrossWindowProvider).setShouldShowConsentPopup(
      true
    ); // TODO: is this still needed ?
  }

  const signedMessage = await provider.signMessage(messageToSign, options);

  return signedMessage;
}
