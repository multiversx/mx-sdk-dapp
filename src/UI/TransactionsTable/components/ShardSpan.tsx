import React from 'react';
import { getShardText } from 'utils/transactions/transactionInfoHelpers/getShardText';

export interface ShardSpanType {
  shard: number | string;
}

export const ShardSpan = ({ shard }: ShardSpanType) => {
  return <span>{getShardText(shard)}</span>;
};
