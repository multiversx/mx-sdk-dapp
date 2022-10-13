import React from 'react';
import classNames from 'classnames';

import { ExplorerLink } from 'UI/ExplorerLink';

import { ShardSpan } from './ShardSpan';
import { WithTransactionType } from '../../../UI/types';

import globalStyles from 'assets/sass/main.scss';
import styles from './transactionsTable.styles.scss';

export const TransactionShardsTransition = ({
  transaction
}: WithTransactionType) => (
  <div
    className={classNames(
      globalStyles.dFlex,
      globalStyles.alignItemsCenter,
      styles.transactionCell
    )}
  >
    <ExplorerLink
      page={transaction.links.senderShardLink ?? ''}
      className={classNames(
        styles.transactionCellMargin,
        styles.transactionCellLink
      )}
      data-testid='shardFromLink'
    >
      <ShardSpan shard={transaction.senderShard} data-testid='senderShard' />
    </ExplorerLink>

    <span className={classNames(globalStyles.textSecondary, globalStyles.mx2)}>
      &#10132;
    </span>

    <ExplorerLink
      className={classNames(
        styles.transactionCellMargin,
        styles.transactionCellLink
      )}
      page={transaction.links.receiverShardLink ?? ''}
      data-testid='shardToLink'
    >
      <ShardSpan
        shard={transaction.receiverShard}
        data-testid='receiverShard'
      />
    </ExplorerLink>
  </div>
);
