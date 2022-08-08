import React from 'react';
import { TransactionMethod } from './TransactionMethod';
import { ExtendedTransactionType } from 'components/TransactionsInterpreter/helpers/types';
import { TimeAgo } from './TImeAgo';
import globalStyles from 'assets/sass/main.scss';
import styles from './transactions-table.scss';
import { TransactionHash } from './TransactionHash';
import { TransactionShardsTransition } from './TransactionShardsTransition';
import { TransactionSender } from './TransactionSender';
import { TransactionDirectionBadge } from './TransactionDirectionBadge';
import { TransactionReceiver } from './TransactionReceiver';
import classNames from 'classnames';

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
        <span>{`${transaction.denomination.denominatedValue} ${transaction.tokenLabel}`}</span>
      </td>
    </tr>
  );
};
