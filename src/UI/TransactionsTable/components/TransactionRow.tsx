import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { InterpretedTransactionType } from 'types/serverTransactions.types';

import { TimeAgo } from 'UI/TimeAgo/TimeAgo';
import {
  TransactionDirectionBadge,
  TransactionHash,
  TransactionMethod,
  TransactionReceiver,
  TransactionSender,
  TransactionShardsTransition,
  TransactionValue
} from '.';
import styles from './transactionsTableStyles.scss';

export interface TransactionRowPropsTypes {
  transaction: InterpretedTransactionType;
  showDirectionCol?: boolean;
  showLockedAccounts?: boolean;
}

export const TransactionRow = (props: TransactionRowPropsTypes) => {
  const { transaction, showDirectionCol, showLockedAccounts } = props;

  return (
    <tr className={classNames({ new: transaction.isNew })}>
      <td>
        <TransactionHash transaction={transaction} />
      </td>
      <td>
        <TransactionTimeAgo value={transaction.timestamp} short tooltip />
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
        <TransactionValue transaction={transaction} />
      </td>
    </tr>
  );
};
