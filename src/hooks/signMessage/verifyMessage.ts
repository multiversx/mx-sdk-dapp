import { Address, SignableMessage } from '@multiversx/sdk-core/out';
import { Signature } from '@multiversx/sdk-core/out/signature';
import { UserPublicKey, UserVerifier } from '@multiversx/sdk-wallet';

export const verifyMessage = (signedMessage: string) => {
  const { message, address, signature } = JSON.parse(signedMessage);

  const decodedMessage = Buffer.from(message.replace('0x', ''), 'hex');
  const bech32Address = new Address(address);
  const signedM = new SignableMessage({
    address: bech32Address,
    message: decodedMessage,
    signature: new Signature(signature)
  });
  const publicKey = new UserPublicKey(Address.fromString(address).pubkey());
  const verifier = new UserVerifier(publicKey);

  return {
    verified: verifier.verify(signedM),
    message: decodedMessage,
    address: bech32Address
  };
};
