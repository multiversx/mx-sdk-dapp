import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { getTransactionMethod } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionMethod';
import styles from './transactionsTableStyles.scss';

export const TransactionMethod = ({
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
        {getTransactionMethod(transaction)}
      </div>
    </span>
  );
};
