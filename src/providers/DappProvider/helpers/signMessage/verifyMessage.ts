import { Address, Message, MessageComputer } from 'lib/sdkCore';
import { getVerifier } from './getVerifier';

export type VerifyMessageReturnType = {
  isVerified: boolean;
  message: string;
  address: any;
};

export async function verifyMessage(
  signedMessage: string
): Promise<VerifyMessageReturnType> {
  try {
    const { message, address, signature } = JSON.parse(signedMessage);

    const decodedMessage = Buffer.from(message.replace('0x', ''), 'hex');
    const decodedSignature = Buffer.from(signature.replace('0x', ''), 'hex');
    const bech32Address = new Address(address);

    const verifier = getVerifier(address);

    const messageComputer = new MessageComputer();

    const msg = new Message({
      address: bech32Address,
      data: decodedMessage,
      signature: decodedSignature
    });

    const serializedMessage = messageComputer.computeBytesForVerifying(msg);

    const isVerified = await verifier.verify(
      serializedMessage,
      decodedSignature
    );

    return {
      isVerified,
      message: decodedMessage.toString(),
      address
    };
  } catch {
    return {
      isVerified: false,
      message: '',
      address: ''
    };
  }
}
