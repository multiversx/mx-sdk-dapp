import React from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { DataTestIdsEnum } from 'constants/index';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { Trim } from 'UI/Trim/Trim';

import { WithClassnameType, WithTransactionType } from 'UI/types';
import { TransactionIcon } from './TransactionIcon';

import styles from './transactionsTable.styles.scss';

export const TransactionHash = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => {
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
        styles.transactionCell,
        className
      )}
    >
      <TransactionIcon transaction={transaction} />

      <ExplorerLink
        page={transactionHashLink}
        data-testid={DataTestIdsEnum.transactionLink}
        className={classNames(
          globalStyles.w100,
          styles.transactionCellMargin,
          styles.transactionCellOverflow,
          styles.transactionCellLink
        )}
      >
        <Trim
          text={transaction.txHash}
          data-testid={DataTestIdsEnum.transactionHash}
        />
      </ExplorerLink>
    </div>
  );
};
