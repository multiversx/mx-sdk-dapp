import { SignableMessage, Address } from '@elrondnetwork/erdjs';
import { getAddress } from 'utils/account/getAddress';
import { getAccountProvider } from 'providers';

interface SignMessageType {
  message: string;
  callbackRoute?: string;
}

export async function signMessage({ message, callbackRoute }: SignMessageType) {
  const address = await getAddress();
  const provider = getAccountProvider();

  const callbackUrl = `${window.location.origin}${callbackRoute}`;
  const signableMessage = new SignableMessage({
    address: new Address(address),
    message: Buffer.from(message, 'ascii')
  });
  const signedMessage = await provider.signMessage(signableMessage, {
    callbackUrl: encodeURIComponent(callbackUrl)
  });

  return signedMessage;
}
