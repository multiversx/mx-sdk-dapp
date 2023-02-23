import React from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
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

import { WithClassnameType, WithTransactionType } from '../../../UI/types';

import styles from './transactionsTable.styles.scss';

export interface TransactionRowPropsType
  extends WithTransactionType,
    WithClassnameType {
  showDirectionCol?: boolean;
  showLockedAccounts?: boolean;
}

export const TransactionRow = ({
  className,
  transaction,
  showDirectionCol,
  showLockedAccounts
}: TransactionRowPropsType) => (
  <tr className={classNames(className, { new: transaction.isNew })}>
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
      <TransactionValue transaction={transaction} />
    </td>
  </tr>
);
