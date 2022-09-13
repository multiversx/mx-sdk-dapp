import React from 'react';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  InterpretedTransactionType,
  TokenArgumentType,
  TransactionActionsEnum
} from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { FormatAmount } from 'UI/FormatAmount';
import { TransactionActionBlock } from 'UI/TransactionInfo/components/TransactionAction/components/TransactionActionBlock';
import { getTransactionActionTokenText } from 'utils';
import { getTransactionTokens } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionTokens';
import { getTransactionActionNftText } from 'utils/transactions/transactionInfoHelpers/getTransactionActionNftText';
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

const MultipleTokensBadge = ({
  transactionTokens
}: {
  transactionTokens: TokenArgumentType[];
}) => {
  const titleText = getTitleText(transactionTokens);

  return (
    <FontAwesomeIcon
      icon={faLayerGroup}
      className='ml-2 text-secondary'
      title={titleText}
    />
  );
};

export const TransactionValue = ({
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
      return <FormatAmount value={transaction.value} />;
    }

    const transactionTokens = getTransactionTokens(transaction);

    if (transactionTokens.length) {
      const txToken = transactionTokens[0];

      return (
        <div className='transaction-value d-flex align-items-center'>
          {Object.values(NftEnumType).includes(txToken.type as NftEnumType) ? (
            <TransactionActionBlock.Nft token={txToken} showBadge />
          ) : (
            <TransactionActionBlock.Token token={txToken} />
          )}
          {!hideMultipleBadge && transactionTokens.length > 1 && (
            <MultipleTokensBadge transactionTokens={transactionTokens} />
          )}
        </div>
      );
    }
  }

  return <FormatAmount value={transaction.value} />;
};
