import { Address, UserPublicKey, UserVerifier } from '@multiversx/sdk-core';

export const getVerifier = (address: string) => {
  const publicKey = new UserPublicKey(new Address(address).getPublicKey());

  return new UserVerifier(publicKey);
};
