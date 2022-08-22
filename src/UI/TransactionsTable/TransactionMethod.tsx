import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { getTransactionMethod } from 'components/TransactionsInterpreter/helpers/getTransactionMethod';
import { UITransactionType } from 'components/TransactionsInterpreter/helpers/types';
import styles from './transactions-table.scss';

export const TransactionMethod = ({
  transaction
}: {
  transaction: UITransactionType;
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
