import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink';
import { ShardSpan } from './ShardSpan';

type TransactionShardsTransitionProps = {
  transaction: InterpretedTransactionType;
};

export const TransactionShardsTransition = ({
  transaction
}: TransactionShardsTransitionProps) => {
  return (
    <div
      className={classNames(globalStyles.dFlex, globalStyles.alignItemsCenter)}
    >
      <ExplorerLink
        to={transaction.links.senderShardLink ?? ''}
        data-testid='shardFromLink'
      >
        <ShardSpan shard={transaction.senderShard} />
      </ExplorerLink>
      <FontAwesomeIcon
        icon={faArrowRight}
        className={classNames(globalStyles.textSecondary, globalStyles.mx2)}
      />
      <ExplorerLink
        to={transaction.links.receiverShardLink ?? ''}
        data-testid='shardToLink'
      >
        <ShardSpan shard={transaction.receiverShard} />
      </ExplorerLink>
    </div>
  );
};
