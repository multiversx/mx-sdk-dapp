import React from 'react';
import classNames from 'classnames';

import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { Trim } from 'UI/Trim/Trim';

import { TransactionIcon } from './TransactionIcon';

import { WithTransactionType } from '../../../UI/types';

import globalStyles from 'assets/sass/main.scss';
import styles from './transactionsTable.styles.scss';

export const TransactionHash = ({ transaction }: WithTransactionType) => {
  const transactionHashLink = `/transactions/${
    transaction.originalTxHash
      ? `${transaction.originalTxHash}#${transaction.txHash}`
      : transaction.txHash
  }`;

  return (
    <div
      className={classNames(
        globalStyles.dFlex,
        globalStyles.alignItemsCenter,
        styles.transactionCell
      )}
    >
      <TransactionIcon transaction={transaction} />

      <ExplorerLink
        page={transactionHashLink}
        data-testid='transactionLink'
        className={classNames(
          globalStyles.w100,
          styles.transactionCellMargin,
          styles.transactionCellOverflow,
          styles.transactionCellLink
        )}
      >
        <Trim text={transaction.txHash} dataTestId='transactionHash' />
      </ExplorerLink>
    </div>
  );
};
