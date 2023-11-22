import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
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

export interface TransactionRowPropsType
  extends WithTransactionType,
    WithClassnameType {
  showDirectionCol?: boolean;
  showLockedAccounts?: boolean;
}

export const TransactionRowComponent = ({
  className,
  transaction,
  showDirectionCol,
  showLockedAccounts,
  globalStyles,
  styles
}: TransactionRowPropsType & WithStylesImportType) => (
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

    <td className={styles?.transactionFunction}>
      <TransactionMethod transaction={transaction} />
    </td>

    <td className={globalStyles?.textLeft}>
      <TransactionValue transaction={transaction} />
    </td>
  </tr>
);

export const TransactionRow = withStyles(TransactionRowComponent, {
  local: () =>
    import('UI/TransactionsTable/components/transactionsTable.styles.scss')
});
