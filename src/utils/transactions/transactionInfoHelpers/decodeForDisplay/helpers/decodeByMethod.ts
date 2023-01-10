import { Address } from '@multiversx/erdjs/out';
import BigNumber from 'bignumber.js';
import {
  DecodeMethodEnum,
  TransactionTokensType
} from 'types/serverTransactions.types';
import { addressIsValid } from 'utils/account/addressIsValid';
import { isUtf8 } from 'utils/decoders/isUtf8';

export const decodeByMethod = (
  part: string,
  decodeMethod: DecodeMethodEnum | string,
  transactionTokens?: TransactionTokensType
) => {
  switch (decodeMethod) {
    case DecodeMethodEnum.text:
      try {
        return Buffer.from(String(part), 'hex').toString('utf8');
      } catch {}
      return part;
    case DecodeMethodEnum.decimal:
      const bn = new BigNumber(part, 16);
      return bn.toString(10);
    case DecodeMethodEnum.smart:
      try {
        const bech32Encoded = Address.fromHex(part).toString();
        if (addressIsValid(bech32Encoded)) {
          return bech32Encoded;
        }
      } catch {}
      try {
        const decoded = Buffer.from(String(part), 'hex').toString('utf8');
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
        } else {
          return decoded;
        }
      } catch {}
      return part;
    case DecodeMethodEnum.raw:
    default:
      return part;
  }
};
