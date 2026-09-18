import BigNumber from 'bignumber.js';

export const getTokenIdentifier = ({
  tokenId,
  nonce
}: {
  tokenId?: string;
  nonce?: string;
}) => {
  if (!tokenId || !nonce) {
    return tokenId ?? '';
  }

  const nonceValue = new BigNumber(nonce, 16);

  if (nonceValue.isNaN()) {
    return `${tokenId}-${nonce}`;
  }

  const hexNonce = nonceValue.toString(16);
  const evenHexNonce = hexNonce.length % 2 ? `0${hexNonce}` : hexNonce;

  return `${tokenId}-${evenHexNonce}`;
};
