import React from 'react';
import classNames from 'classnames';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { Trim } from 'UI/Trim/Trim';
import { TransactionIcon } from './TransactionIcon';

import globalStyles from 'assets/sass/main.scss';
import styles from './transactionsTable.styles.scss';

interface TransactionHashPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionHash = (props: TransactionHashPropsTypes) => {
  const { transaction } = props;
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
      <TransactionIcon {...{ transaction }} />

      <ExplorerLink
        page={transactionHashLink}
        data-testid='transactionLink'
        className={classNames(
          globalStyles.trimWrapper,
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
