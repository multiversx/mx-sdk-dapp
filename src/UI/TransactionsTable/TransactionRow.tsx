import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { ExtendedTransactionType } from 'components/TransactionsInterpreter';
import { TimeAgo } from './TImeAgo';
import { TransactionDirectionBadge } from './TransactionDirectionBadge';
import { TransactionHash } from './TransactionHash';
import { TransactionMethod } from './TransactionMethod';
import { TransactionReceiver } from './TransactionReceiver';
import { TransactionSender } from './TransactionSender';
import { TransactionShardsTransition } from './TransactionShardsTransition';
import styles from './transactionsTableStyles.scss';

export interface TransactionRowType {
  transaction: ExtendedTransactionType;
  showDirectionCol?: boolean;
  showLockedAccounts?: boolean;
}

export const TransactionRow = ({
  transaction,
  showDirectionCol,
  showLockedAccounts
}: TransactionRowType) => {
  return (
    <tr className={classNames({ ['new']: transaction.isNew })}>
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
        <TransactionMethod transaction={transaction} />
      </td>
      <td className={globalStyles.textLeft}>
        <span>{`${transaction.amountInfo.formattedValue} ${transaction.tokenLabel}`}</span>
      </td>
    </tr>
  );
};
