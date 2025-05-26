import { Address, UserPublicKey, UserVerifier } from 'lib/sdkCore';

export function getVerifier(address: string) {
  const publicKey = new UserPublicKey(new Address(address).getPublicKey());

  return new UserVerifier(publicKey);
}
