import { Address, SignableMessage } from '@multiversx/sdk-core/out';
import { Signature } from '@multiversx/sdk-core/out/signature';
import { UserPublicKey, UserVerifier } from '@multiversx/sdk-wallet';

export const useVerifyMessage = () => (signedMessage: string) => {
  const { message, address, signature } = JSON.parse(signedMessage);
  const signedM = new SignableMessage({
    address: new Address(address),
    message: Buffer.from(message.replace('0x', ''), 'hex'),
    signature: new Signature(signature)
  });
  const publicKey = new UserPublicKey(Address.fromString(address).pubkey());
  const verifier = new UserVerifier(publicKey);

  return verifier.verify(signedM);
};
