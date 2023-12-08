import React from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { Trim } from 'UI/Trim/Trim';
import { WithClassnameType, WithTransactionType } from 'UI/types';
import { TransactionIcon } from './TransactionIcon';

export const TransactionHashComponent = ({
  className,
  transaction,
  globalStyles,
  styles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => {
  const transactionHashLink = `/transactions/${
    transaction.originalTxHash
      ? `${transaction.originalTxHash}#${transaction.txHash}`
      : transaction.txHash
  }`;

  return (
    <div
      className={classNames(
        globalStyles?.dFlex,
        globalStyles?.alignItemsCenter,
        styles?.transactionCell,
        className
      )}
    >
      <TransactionIcon transaction={transaction} />

      <ExplorerLink
        page={transactionHashLink}
        data-testid={DataTestIdsEnum.transactionLink}
        className={classNames(
          globalStyles?.w100,
          styles?.transactionCellMargin,
          styles?.transactionCellOverflow,
          styles?.transactionCellLink
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

export const TransactionHash = withStyles(TransactionHashComponent, {
  ssrStyles: () =>
    import('UI/TransactionsTable/components/transactionsTable.styles.scss'),
  clientStyles: () =>
    require('UI/TransactionsTable/components/transactionsTable.styles.scss')
      .default
});
