import BigNumber from 'bignumber.js';
import { Address } from 'lib/sdkCore';
import { TransactionTypesEnum } from 'types/enums.types';
import { decodePart } from 'utils/decoders/decodePart';
import { addressIsValid } from 'utils/validation/addressIsValid';

const noData = {
  tokenId: '',
  amount: ''
};

export const decodeData = (data: string) => {
  const nonceIndex = 2;
  const amountIndex = 3;
  const parts = data.split('@');
  const decodedParts = parts.map((part, i) =>
    [nonceIndex, amountIndex].includes(i) ? part : decodePart(part)
  );
  return decodedParts;
};

export function getTokenFromData(data?: string): {
  tokenId: string;
  amount: string;
  collection?: string;
  nonce?: string;
  receiver?: string;
} {
  if (!data) {
    return noData;
  }

  const isTokenTransfer = data.startsWith(TransactionTypesEnum.ESDTTransfer);
  const isNftTransfer =
    data.startsWith(TransactionTypesEnum.ESDTNFTTransfer) && data.includes('@');
  const isNftBurn =
    data.startsWith(TransactionTypesEnum.ESDTNFTBurn) && data.includes('@');

  try {
    if (isTokenTransfer) {
      const [, encodedToken, encodedAmount] = data.split('@');
      const tokenId = Buffer.from(encodedToken, 'hex').toString('ascii');

      if (!tokenId) {
        return noData;
      }

      const amount = new BigNumber(
        '0x' + encodedAmount.replace('0x', '')
      ).toString(10);

      return {
        tokenId,
        amount
      };
    }

    const decodedData = decodeData(data);

    if (isNftTransfer) {
      const [, /*ESDTNFTTransfer*/ collection, nonce, quantity, receiver] =
        decodedData;

      if (
        [collection, nonce, quantity, receiver].every((el) => Boolean(el)) &&
        addressIsValid(new Address(receiver).toBech32())
      ) {
        return {
          tokenId: `${collection}-${nonce}`,
          amount: new BigNumber(quantity, 16).toString(10),
          collection,
          nonce,
          receiver: new Address(receiver).toBech32()
        };
      }
    }

    if (isNftBurn) {
      const [, /*ESDTNFTBurn*/ collection, nonce, quantity] = decodedData;

      if ([collection, nonce, quantity].every((el) => Boolean(el))) {
        return {
          tokenId: `${collection}-${nonce}`,
          amount: new BigNumber(quantity, 16).toString(10),
          collection,
          nonce
        };
      }
    }
  } catch {
    return noData;
  }

  return noData;
}
