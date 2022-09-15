import { DECIMALS } from 'constants/index';
import {
  InterpretedTransactionType,
  TokenArgumentType,
  TransactionActionsEnum
} from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { getTransactionTokens } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionTokens';
import { getTransactionActionNftText } from 'utils/transactions/transactionInfoHelpers/getTransactionActionNftText';
import { getTransactionActionTokenText } from 'utils/transactions/transactionInfoHelpers/getTransactionActionTokenText';
import { getIdentifierType } from 'utils/validation/getIdentifierType';

const getTitleText = (transactionTokens: TokenArgumentType[]): string => {
  const tokensArray = transactionTokens.map((transactionToken) => {
    const { isNft } = getIdentifierType(transactionToken.type);
    if (isNft) {
      const {
        badgeText,
        tokenFormattedAmount,
        tokenLinkText
      } = getTransactionActionNftText({
        token: transactionToken,
        showBadge: true
      });
      const badge = badgeText !== null ? `(${badgeText}) ` : '';
      return `${badge}${tokenFormattedAmount} ${tokenLinkText}`;
    }
    const {
      tokenFormattedAmount,
      tokenLinkText
    } = getTransactionActionTokenText({
      token: transactionToken as TokenArgumentType
    });
    return `${tokenFormattedAmount} ${tokenLinkText}`;
  });
  const joinedTokensWithLineBreak = decodeURI(tokensArray.join('%0A'));
  return joinedTokensWithLineBreak;
};

export const getTransactionValue = ({
  transaction,
  hideMultipleBadge
}: {
  transaction: InterpretedTransactionType;
  hideMultipleBadge?: boolean;
}) => {
  if (transaction.action) {
    if (
      transaction.action.name === TransactionActionsEnum.wrapEgld ||
      transaction.action.name === TransactionActionsEnum.unwrapEgld
    ) {
      return {
        egldValueData: {
          value: transaction.value
        }
      };
    }
    const transactionTokens = getTransactionTokens(transaction);
    if (transactionTokens.length) {
      const txToken = transactionTokens[0];
      const isNft = Object.values(NftEnumType).includes(
        txToken.type as NftEnumType
      );

      const hasTitleText = !hideMultipleBadge && transactionTokens.length > 1;

      const titleText = hasTitleText ? getTitleText(transactionTokens) : '';

      if (isNft) {
        const {
          badgeText,
          tokenFormattedAmount,
          tokenExplorerLink,
          tokenLinkText
        } = getTransactionActionNftText({ token: txToken, showBadge: true });

        return {
          nftValueData: {
            badgeText,
            tokenFormattedAmount,
            tokenExplorerLink,
            tokenLinkText,
            transactionTokens,
            token: txToken,
            value: tokenFormattedAmount != null ? txToken.value : null,
            decimals: tokenFormattedAmount != null ? txToken.decimals : null,
            titleText
          }
        };
      }

      const {
        tokenExplorerLink,
        showFormattedAmount,
        tokenLinkText
      } = getTransactionActionTokenText({
        token: txToken,
        showLastNonZeroDecimal: true
      });

      return {
        tokenValueData: {
          tokenExplorerLink,
          showFormattedAmount,
          tokenLinkText,
          transactionTokens,
          token: txToken,
          value: txToken.value,
          decimals: txToken.decimals ?? DECIMALS,
          titleText
        }
      };
    }
  }
  return {
    egldValueData: {
      value: transaction.value
    }
  };
};
