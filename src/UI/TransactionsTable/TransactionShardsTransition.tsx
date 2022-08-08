import classNames from 'classnames';
import globalStyles from '../../assets/sass/main.scss';
import { ExplorerLink } from '../ExplorerLink';
import React from 'react';
import { ExtendedTransactionType } from 'components/TransactionsInterpreter/helpers/types';
import { ShardSpan } from './ShardSpan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

type TransactionShardsTransitionProps = {
  transaction: ExtendedTransactionType;
};

export const TransactionShardsTransition: React.FC<TransactionShardsTransitionProps> = ({
  transaction
}) => {
  return (
    <div
      className={classNames(globalStyles.dFlex, globalStyles.alignItemsCenter)}
    >
      <ExplorerLink
        page={transaction.links.senderShardLink ?? ''}
        data-testid='shardFromLink'
      >
        <ShardSpan shard={transaction.senderShard} />
      </ExplorerLink>
      <FontAwesomeIcon
        icon={faArrowRight}
        className={classNames(globalStyles.textSecondary, globalStyles.mx2)}
      />
      <ExplorerLink
        page={transaction.links.receiverShardLink ?? ''}
        data-testid='shardToLink'
      >
        <ShardSpan shard={transaction.receiverShard} />
      </ExplorerLink>
    </div>
  );
};
