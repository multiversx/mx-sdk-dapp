import { SignableMessage, Address } from '@multiversx/sdk-core';
import { getAccountProvider } from 'providers';
import { getAddress } from 'utils/account/getAddress';
import { addOriginToLocationPath } from 'utils/window';

export interface SignMessageType {
  message: string;
  callbackRoute?: string;
}

export const signMessage = async ({
  message,
  callbackRoute
}: SignMessageType) => {
  const address = await getAddress();
  const provider = getAccountProvider();

  const callbackUrl = addOriginToLocationPath(callbackRoute);
  const signableMessage = new SignableMessage({
    address: new Address(address),
    message: Buffer.from(message, 'ascii')
  });

  return await provider.signMessage(signableMessage, {
    callbackUrl: encodeURIComponent(callbackUrl)
  });
};
