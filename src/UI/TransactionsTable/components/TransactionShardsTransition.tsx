import React from 'react';
import classNames from 'classnames';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink';
import { ShardSpan } from './ShardSpan';

import globalStyles from 'assets/sass/main.scss';
import styles from './transactionsTable.styles.scss';

interface TransactionShardsTransitionProps {
  transaction: InterpretedTransactionType;
}

export const TransactionShardsTransition = (
  props: TransactionShardsTransitionProps
) => {
  const { transaction } = props;

  return (
    <div
      className={classNames(
        globalStyles.dFlex,
        globalStyles.alignItemsCenter,
        styles.transactionCell
      )}
    >
      <ExplorerLink
        page={transaction.links.senderShardLink ?? ''}
        className={styles.transactionCellMargin}
        data-testid='shardFromLink'
      >
        <ShardSpan shard={transaction.senderShard} data-testid='senderShard' />
      </ExplorerLink>

      <span
        className={classNames(globalStyles.textSecondary, globalStyles.mx2)}
      >
        &#10132;
      </span>

      <ExplorerLink
        className={styles.transactionCellMargin}
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
};
