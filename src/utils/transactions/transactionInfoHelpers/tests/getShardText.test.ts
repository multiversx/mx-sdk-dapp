import { getShardText } from '../getShardText';

describe('getShardText tests', () => {
  it('formats metachain', () => {
    expect(getShardText(4294967295)).toBe('Metachain');
  });
  it('formats Shard 1', () => {
    expect(getShardText(1)).toBe('Shard 1');
  });
  it('formats Shard 2', () => {
    expect(getShardText('Shard 2')).toBe('Shard 2');
  });
});
