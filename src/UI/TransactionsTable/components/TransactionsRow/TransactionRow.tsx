import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { InterpretedTransactionType } from 'types/serverTransactions.types';

import {
  TimeAgo,
  TransactionDirectionBadge,
  TransactionHash,
  TransactionAction,
  TransactionReceiver,
  TransactionSender,
  TransactionShardsTransition
} from './components';
import styles from './components/transactionsTableStyles.scss';

export interface TransactionRowType {
  transaction: InterpretedTransactionType;
  showDirectionCol?: boolean;
  showLockedAccounts?: boolean;
}

export const TransactionRow = ({
  transaction,
  showDirectionCol,
  showLockedAccounts
}: TransactionRowType) => {
  return (
    <tr className={classNames({ new: transaction.isNew })}>
      <td>
        <TransactionHash transaction={transaction} />
      </td>
      <td>
        <TimeAgo value={transaction.timestamp} short tooltip />
      </td>
      <td>
        <TransactionShardsTransition transaction={transaction} />
      </td>
      <td>
        <TransactionSender
          transaction={transaction}
          showLockedAccounts={showLockedAccounts}
        />
      </td>
      {showDirectionCol && (
        <td>
          <TransactionDirectionBadge transaction={transaction} />
        </td>
      )}
      <td>
        <TransactionReceiver
          transaction={transaction}
          showLockedAccounts={showLockedAccounts}
        />
      </td>
      <td className={styles.transactionFunction}>
        <TransactionAction transaction={transaction} />
      </td>
      <td className={globalStyles.textLeft}>
        <span>{`${transaction.amountInfo.formattedValue} ${transaction.tokenLabel}`}</span>
      </td>
    </tr>
  );
};
