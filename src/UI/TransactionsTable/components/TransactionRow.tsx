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
import styles from './transactionsTable.styles.scss';

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
        <TransactionHash {...{ transaction }} />
      </td>

      <td>
        <TimeAgo value={transaction.timestamp} short tooltip />
      </td>

      <td>
        <TransactionShardsTransition {...{ transaction }} />
      </td>

      <td>
        <TransactionSender {...{ transaction, showLockedAccounts }} />
      </td>

      {showDirectionCol && (
        <td>
          <TransactionDirectionBadge {...{ transaction }} />
        </td>
      )}

      <td>
        <TransactionReceiver {...{ transaction, showLockedAccounts }} />
      </td>

      <td className={styles.transactionFunction}>
        <TransactionMethod {...{ transaction }} />
      </td>

      <td className={globalStyles.textLeft}>
        <TransactionValue {...{ transaction }} />
      </td>
    </tr>
  );
};
