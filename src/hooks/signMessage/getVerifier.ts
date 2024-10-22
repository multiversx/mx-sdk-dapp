import { Address, UserPublicKey, UserVerifier } from '@multiversx/sdk-core';

export const getVerifier = (address: string) => {
  const publicKey = new UserPublicKey(new Address(address).pubkey());

  return new UserVerifier(publicKey);
};
