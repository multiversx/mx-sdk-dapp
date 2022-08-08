import React from 'react';
import { getShardOfAddress } from '../../utils';

interface ShardSpanType {
  shard: number | string;
}

export const shardSpanText = (shard: number | string) => {
  if (typeof shard === 'string' && shard.includes('Shard')) {
    shard = shard.replace('Shard', '');
  }

  const metaChainShardId = getShardOfAddress(shard);

  const isMetachain =
    metaChainShardId.toString() === String(shard).toString() ||
    String(shard) === 'metachain';

  return isMetachain ? 'Metachain' : `Shard ${shard}`;
};

export const ShardSpan = ({ shard }: ShardSpanType) => {
  return <span>{shardSpanText(shard)}</span>;
};
