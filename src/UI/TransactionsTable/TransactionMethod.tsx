import React from 'react';
import classNames from 'classnames';

import { getTransactionMethod } from 'components/TransactionsInterpreter/helpers/getTransactionMethod';
import { ServerTransactionType } from 'types/serverTransactions.types';

import globalStyles from 'assets/sass/main.scss';
import styles from './transactionsTableStyles.scss';

export interface TransactionMethodPropsTypes {
  transaction: ServerTransactionType;
}

export const TransactionMethod = (props: TransactionMethodPropsTypes) => {
  const { transaction } = props;

  return (
    <div className={styles.transactionCell}>
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
            globalStyles.textCapitalize,
            globalStyles.textWhite
          )}
        >
          {getTransactionMethod(transaction)}
        </div>
      </span>
    </div>
  );
};
