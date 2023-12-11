import React from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { ExplorerLink } from 'UI/ExplorerLink';
import { WithTransactionType } from 'UI/types';
import { ShardSpan } from './ShardSpan';

const TransactionShardsTransitionComponent = ({
  transaction,
  globalStyles,
  styles
}: WithTransactionType & WithStylesImportType) => (
  <div
    className={classNames(
      globalStyles?.dFlex,
      globalStyles?.alignItemsCenter,
      styles?.transactionCell
    )}
  >
    <ExplorerLink
      page={transaction.links.senderShardLink ?? ''}
      className={classNames(
        styles?.transactionCellMargin,
        styles?.transactionCellLink
      )}
      data-testid={DataTestIdsEnum.shardFromLink}
    >
      <ShardSpan
        shard={transaction.senderShard}
        data-testid={DataTestIdsEnum.senderShard}
      />
    </ExplorerLink>

    <span
      className={classNames(globalStyles?.textSecondary, globalStyles?.mx2)}
    >
      &#10132;
    </span>

    <ExplorerLink
      className={classNames(
        styles?.transactionCellMargin,
        styles?.transactionCellLink
      )}
      page={transaction.links.receiverShardLink ?? ''}
      data-testid={DataTestIdsEnum.shardToLink}
    >
      <ShardSpan
        shard={transaction.receiverShard}
        data-testid={DataTestIdsEnum.receiverShard}
      />
    </ExplorerLink>
  </div>
);

export const TransactionShardsTransition = withStyles(
  TransactionShardsTransitionComponent,
  {
    ssrStyles: () =>
      import('UI/TransactionsTable/components/transactionsTable.styles.scss'),
    clientStyles: () =>
      require('UI/TransactionsTable/components/transactionsTable.styles.scss')
        .default
  }
);
