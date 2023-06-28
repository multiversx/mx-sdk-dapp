import { Address } from '@multiversx/sdk-core/out';
import { UserPublicKey, UserVerifier } from '@multiversx/sdk-wallet';

export const getVerifier = (address: string) => {
  const publicKey = new UserPublicKey(Address.fromString(address).pubkey());

  return new UserVerifier(publicKey);
};
