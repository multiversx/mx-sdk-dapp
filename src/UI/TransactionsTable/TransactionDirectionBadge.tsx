import classNames from 'classnames';
import globalStyles from '../../assets/sass/main.scss';
import React from 'react';
import { ExtendedTransactionType } from 'components/TransactionsInterpreter/helpers/types';
import styles from './transactions-table.scss';

type TransactionDirectionBadgeProps = {
  transaction: ExtendedTransactionType;
};

export const TransactionDirectionBadge: React.FC<TransactionDirectionBadgeProps> = ({
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
