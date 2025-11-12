import { Address } from '@multiversx/sdk-core';
import BigNumber from 'bignumber.js';

import {
  DecodeMethodEnum,
  TransactionTokensType
} from 'types/serverTransactions.types';
import { isUtf8 } from 'utils/decoders/isUtf8';
import { addressIsValid } from 'utils/validation/addressIsValid';

interface IDecodeByMethod {
  data: string;
  decodeMethod: DecodeMethodEnum | string;
  transactionTokens?: TransactionTokensType;
}

export const decodeByMethod = ({
  data,
  decodeMethod,
  transactionTokens
}: IDecodeByMethod) => {
  switch (decodeMethod) {
    case DecodeMethodEnum.text:
      try {
        return Buffer.from(data, 'hex').toString('utf8');
      } catch {
        return data;
      }

    case DecodeMethodEnum.decimal:
      return data !== '' ? new BigNumber(data, 16).toString(10) : '';
    case DecodeMethodEnum.smart:
      try {
        const bech32Encoded = Address.newFromHex(data).toString();

        if (addressIsValid(bech32Encoded)) {
          return bech32Encoded;
        }
      } catch {
        // skip
      }

      try {
        const decoded = Buffer.from(data, 'hex').toString('utf8');

        if (!isUtf8(decoded)) {
          if (transactionTokens) {
            const tokens = [
              ...transactionTokens.esdts,
              ...transactionTokens.nfts
            ];

            if (tokens.some((token) => decoded.includes(token))) {
              return decoded;
            }
          }

          const bigNumber = new BigNumber(data, 16);

          return bigNumber.isFinite() ? bigNumber.toString(10) : data;
        } else {
          return decoded;
        }
      } catch {
        return data;
      }

    case DecodeMethodEnum.raw:
    default:
      return data;
  }
};
