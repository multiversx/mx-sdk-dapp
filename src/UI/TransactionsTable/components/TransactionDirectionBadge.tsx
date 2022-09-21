import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import styles from './transactionsTable.styles.scss';

type TransactionDirectionBadgePropsType = {
  transaction: InterpretedTransactionType;
};

export const TransactionDirectionBadge = ({
  transaction
}: TransactionDirectionBadgePropsType) => {
  return (
    <div className={globalStyles.dFlex}>
      <span
        className={classNames(
          styles.directionBadge,
          transaction.transactionDetails.direction?.toLowerCase()
        )}
      >
        {transaction.transactionDetails.direction?.toUpperCase()}
      </span>
    </div>
  );
};
