/**
 * WARNING: This file (and getVerifier) requires Node.js modules like 'fs'.
 * It will break in environments where 'fs' is not available (e.g., browser or client-side code in Next.js).
 * Only use this on the server side.
 */
import { UserVerifier } from '@multiversx/sdk-core/out/wallet/userVerifier';
import { Address } from 'lib/sdkCore';

export function getVerifier(address: string) {
  const verifier = UserVerifier.fromAddress(new Address(address));
  return verifier;
}
