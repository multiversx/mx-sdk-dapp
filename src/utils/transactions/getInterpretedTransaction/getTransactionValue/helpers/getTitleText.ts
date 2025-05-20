import { DECIMALS, formatAmount } from 'lib/sdkDappUtils';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { getIdentifierType } from 'utils/validation/getIdentifierType';
import { getTransactionActionNftText } from './getTransactionActionNftText';
import {
  EgldValueDataType,
  NFTValueDataType,
  TokenValueDataType
} from '../types';

export interface GetTransactionValueReturnType {
  egldValueData?: EgldValueDataType;
  tokenValueData?: TokenValueDataType;
  nftValueData?: NFTValueDataType;
}

export const getTitleText = (
  transactionTokens: TokenArgumentType[]
): string => {
  const tokensArray = transactionTokens.map((transactionToken) => {
    const { isNft } = getIdentifierType(transactionToken.type);
    if (isNft) {
      const { badgeText, tokenFormattedAmount, tokenLinkText } =
        getTransactionActionNftText({
          token: transactionToken
        });

      const badge = badgeText != null ? `(${badgeText}) ` : '';

      const value = `${badge}${tokenFormattedAmount} ${tokenLinkText}`;
      return value;
    }

    const tokenFormattedAmount = transactionToken.value
      ? formatAmount({
          input: transactionToken.value,
          decimals: transactionToken.decimals ?? DECIMALS,
          digits: 2,
          addCommas: true
        })
      : null;

    const identifier = transactionToken.collection
      ? transactionToken.identifier
      : transactionToken.token;

    const value = `${tokenFormattedAmount} ${transactionToken.ticker} (${identifier})`;
    return value;
  });

  const joinedTokensWithLineBreak = decodeURI(tokensArray.join('%0A'));
  return joinedTokensWithLineBreak;
};
