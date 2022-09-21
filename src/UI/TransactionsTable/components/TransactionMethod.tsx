import React from 'react';
import classNames from 'classnames';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { getTransactionMethod } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionMethod';

import globalStyles from 'assets/sass/main.scss';
import styles from './transactionsTable.styles.scss';

interface TransactionMethodPropsTypes {
  transaction: InterpretedTransactionType;
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
        data-testid='transactionMethod'
      >
        <div
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
        </div>
      </span>
    </div>
  );
};
