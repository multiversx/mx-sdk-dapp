import { Address } from '@multiversx/sdk-core/out';
import BigNumber from 'bignumber.js';
import {
  DecodeMethodEnum,
  TransactionTokensType
} from 'types/serverTransactions.types';
import { addressIsValid } from 'utils/account/addressIsValid';
import { isUtf8, stringContainsNumbers } from 'utils/decoders';

export const decodeByMethod = (
  part: string,
  decodeMethod: DecodeMethodEnum | string,
  transactionTokens?: TransactionTokensType
) => {
  try {
    switch (decodeMethod) {
      case DecodeMethodEnum.text:
        if (!stringContainsNumbers(part)) {
          return part;
        }

        return Buffer.from(part, 'hex').toString('utf8');
      case DecodeMethodEnum.decimal:
        const bn = new BigNumber(part, 16);

        return bn.toString(10);
      case DecodeMethodEnum.smart:
        const bech32Encoded = Address.fromHex(part).toString();

        if (addressIsValid(bech32Encoded)) {
          return bech32Encoded;
        }

        const decoded = Buffer.from(part, 'hex').toString('utf8');

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

          const bn = new BigNumber(part, 16);

          return bn.toString(10);
        }

        return decoded;
      case DecodeMethodEnum.raw:
      default:
        return part;
    }
  } catch (err) {
    console.error(
      `Error during data decoding of "${part}" as "${decodeMethod}"`,
      err
    );

    return part;
  }
};
