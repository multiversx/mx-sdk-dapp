import {
  ALL_SHARDS_SHARD_ID,
  METACHAIN_SHARD_ID
} from 'constants/mvx.constants';

export const getShardText = (shard: number | string) => {
  let shardText = shard;

  if (typeof shardText === 'string' && shardText.includes('Shard')) {
    shardText = shardText.replace('Shard', '').replace(' ', '');
  }

  const isMetachain =
    METACHAIN_SHARD_ID.toString() === String(shardText).toString() ||
    String(shardText) === 'metachain';

  const isAllShards =
    ALL_SHARDS_SHARD_ID.toString() === String(shardText).toString();

  if (isMetachain) {
    return 'Metachain';
  }
  if (isAllShards) {
    return 'All Shards';
  }
  return `Shard ${shardText}`;
};
