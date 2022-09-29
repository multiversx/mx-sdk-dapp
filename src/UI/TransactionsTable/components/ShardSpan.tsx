import React from 'react';

import { getShardText } from 'utils/transactions/transactionInfoHelpers/getShardText';

export interface ShardSpanType {
  shard: number | string;
  ['data-testid']?: string;
}

export const ShardSpan = (props: ShardSpanType) => {
  const { shard, ...rest } = props;

  return <span {...rest}>{getShardText(shard)}</span>;
};
