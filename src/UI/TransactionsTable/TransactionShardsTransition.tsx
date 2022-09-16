import React from 'react';
import classNames from 'classnames';

import { ExtendedTransactionType } from 'components/TransactionsInterpreter/helpers/types';
import { ExplorerLink } from '../ExplorerLink';
import { ShardSpan } from './ShardSpan';

import globalStyles from 'assets/sass/main.scss';
import styles from './transactionsTableStyles.scss';

export interface TransactionShardsTransitionPropsTypes {
  transaction: ExtendedTransactionType;
}

export const TransactionShardsTransition = (
  props: TransactionShardsTransitionPropsTypes
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
        <ShardSpan shard={transaction.senderShard} />
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
        <ShardSpan shard={transaction.receiverShard} />
      </ExplorerLink>
    </div>
  );
};
