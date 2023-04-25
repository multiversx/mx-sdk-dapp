import { Address, SignableMessage } from '@multiversx/sdk-core/out';
import { UserPublicKey, UserVerifier } from '@multiversx/sdk-wallet';

export const verifyMessage = (signedMessage: string) => {
  try {
    const { message, address, signature } = JSON.parse(signedMessage);

    const decodedMessage = Buffer.from(message.replace('0x', ''), 'hex');
    const bech32Address = new Address(address);
    const signedM = new SignableMessage({
      address: bech32Address,
      message: decodedMessage,
      signature: Buffer.from(signature, 'hex')
    });
    const publicKey = new UserPublicKey(Address.fromString(address).pubkey());
    const verifier = new UserVerifier(publicKey);

    return {
      isVerified: verifier.verify(
        signedM.serializeForSigning(),
        signedM.getSignature()
      ),
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
