import { SignableMessage, Address } from '@elrondnetwork/erdjs';
import { useGetAccountInfo, useGetAccountProvider } from './account';

interface UseSignMessageType {
  message: string;
  callbackRoute?: string;
}

export function useSignMessage() {
  const { provider } = useGetAccountProvider();
  const { address } = useGetAccountInfo();

  async function signMessage({ message, callbackRoute }: UseSignMessageType) {
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

  return signMessage;
}

export default useSignMessage();
