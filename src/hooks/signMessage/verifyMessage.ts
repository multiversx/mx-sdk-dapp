import { Address, Message, MessageComputer } from '@multiversx/sdk-core';
import { getVerifier } from './getVerifier';

export const verifyMessage = async (
  signedMessage: string
): Promise<{
  isVerified: boolean;
  message: string;
  address: string;
}> => {
  try {
    const { message, address, signature } = JSON.parse(signedMessage);

    const decodedMessage = Buffer.from(message.replace('0x', ''), 'hex');
    const decodedSignature = Buffer.from(signature.replace('0x', ''), 'hex');

    const verifier = getVerifier(address);

    const messageComputer = new MessageComputer();

    const msg = new Message({
      address: new Address(address),
      data: decodedMessage
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
};
