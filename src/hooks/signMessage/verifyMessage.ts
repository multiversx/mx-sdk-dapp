import { Address, SignableMessage } from '@multiversx/sdk-core/out';
import { getVerifier } from './getVerifier';

export const verifyMessage = (signedMessage: string) => {
  try {
    const { message, address, signature } = JSON.parse(signedMessage);

    const decodedMessage = Buffer.from(message.replace('0x', ''), 'hex');
    const decodedSignature = Buffer.from(signature.replace('0x', ''), 'hex');
    const bech32Address = new Address(address);
    const signedM = new SignableMessage({
      address: bech32Address,
      message: decodedMessage,
      signature: decodedSignature
    });

    const verifier = getVerifier(address);
    const isVerified = verifier.verify(
      signedM.serializeForSigning(),
      signedM.getSignature()
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
