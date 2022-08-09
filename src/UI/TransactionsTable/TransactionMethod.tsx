import { UITransactionType } from 'components/TransactionsInterpreter/helpers/types';
import React from 'react';
import getTransactionMethod from 'components/TransactionsInterpreter/helpers/getTransactionMethod';
import styles from './transactions-table.scss';
import globalStyles from 'assets/sass/main.scss';
import classNames from 'classnames';

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
