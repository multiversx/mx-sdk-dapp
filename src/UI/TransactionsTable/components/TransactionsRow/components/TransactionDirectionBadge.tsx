import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { ExtendedTransactionType } from 'types/serverTransactions.types';
import styles from './transactionsTableStyles.scss';

type TransactionDirectionBadgePropsType = {
  transaction: ExtendedTransactionType;
};

export const TransactionDirectionBadge: React.FC<TransactionDirectionBadgePropsType> = ({
  transaction
}) => {
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
