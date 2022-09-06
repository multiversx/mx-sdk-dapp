import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { getTransactionAction } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionAction';
import styles from './transactionsTableStyles.scss';

export const TransactionAction = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <span
      title={transaction.action?.description}
      className={classNames(
        globalStyles.badge,
        globalStyles.badgeSecondary,
        globalStyles.badgePill,
        globalStyles.fontWeightLight
      )}
    >
      <div
        className={classNames(
          styles.transactionFunctionBadge,
          globalStyles.textTruncate,
          globalStyles.textCapitalize
        )}
      >
        {getTransactionAction(transaction)}
      </div>
    </span>
  );
};
