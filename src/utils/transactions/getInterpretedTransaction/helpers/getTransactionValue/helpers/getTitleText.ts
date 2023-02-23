import { TokenArgumentType } from 'types/serverTransactions.types';
import {
  EgldValueDataType,
  NFTValueDataType,
  TokenValueDataType
} from 'utils/transactions/getInterpretedTransaction/helpers/types';
import { getTransactionActionNftText } from 'utils/transactions/transactionInfoHelpers/getTransactionActionNftText';
import { getTransactionActionTokenText } from 'utils/transactions/transactionInfoHelpers/getTransactionActionTokenText';
import { getIdentifierType } from 'utils/validation/getIdentifierType';

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
    const { tokenFormattedAmount, tokenLinkText, token } =
      getTransactionActionTokenText({
        token: transactionToken as TokenArgumentType
      });

    const identifier = token.collection ? token.identifier : token.token;

    const value = `${tokenFormattedAmount} ${tokenLinkText} (${identifier})`;
    return value;
  });

  const joinedTokensWithLineBreak = decodeURI(tokensArray.join('%0A'));
  return joinedTokensWithLineBreak;
};
