import { getLatestBlockHash } from '../getLatestBlockHash';

jest.mock('utils/retryMultipleTimes', () => ({
  retryMultipleTimes:
    (cb: (...args: any[]) => any) =>
    async (...args: any[]) => {
      try {
        return await cb(...args);
      } catch {
        return null;
      }
    }
}));

const createGetBlockHash = (hash: string) => jest.fn().mockResolvedValue(hash);

describe('getLatestBlockHash', () => {
  it('caches the block hash per api address', async () => {
    const devnetBlockHash = createGetBlockHash('devnet-hash');
    const testnetBlockHash = createGetBlockHash('testnet-hash');

    const devnet = await getLatestBlockHash({
      apiAddress: 'https://devnet-api.multiversx.com',
      getBlockHash: devnetBlockHash
    });
    const testnet = await getLatestBlockHash({
      apiAddress: 'https://testnet-api.multiversx.com',
      getBlockHash: testnetBlockHash
    });
    const devnetAgain = await getLatestBlockHash({
      apiAddress: 'https://devnet-api.multiversx.com',
      getBlockHash: createGetBlockHash('other')
    });

    expect(devnet.hash).toBe('devnet-hash');
    expect(testnet.hash).toBe('testnet-hash');
    expect(devnetAgain.hash).toBe('devnet-hash');
  });

  it('keys the cache by shard as well', async () => {
    await getLatestBlockHash({
      apiAddress: 'https://shard-api.multiversx.com',
      blockHashShard: 0,
      getBlockHash: createGetBlockHash('shard-0')
    });

    const shardOne = await getLatestBlockHash({
      apiAddress: 'https://shard-api.multiversx.com',
      blockHashShard: 1,
      getBlockHash: createGetBlockHash('shard-1')
    });

    expect(shardOne.hash).toBe('shard-1');
  });

  it('fetches a new block hash with noCache, even with a request in flight', async () => {
    const apiAddress = 'https://nocache-api.multiversx.com';
    let resolveFirst: (hash: string) => void = () => {};
    const slowBlockHash = jest.fn(
      () => new Promise<string>((resolve) => (resolveFirst = resolve))
    );

    const first = getLatestBlockHash({
      apiAddress,
      getBlockHash: slowBlockHash
    });
    const second = await getLatestBlockHash({
      apiAddress,
      noCache: true,
      getBlockHash: createGetBlockHash('fresh')
    });

    resolveFirst('slow');
    await first;

    expect(second.hash).toBe('fresh');
  });

  it('rejects instead of resolving to nothing when the hash cannot be fetched', async () => {
    await expect(
      getLatestBlockHash({
        apiAddress: 'https://failing-api.multiversx.com',
        getBlockHash: jest.fn().mockRejectedValue(new Error('down'))
      })
    ).rejects.toThrow('could not get block hash');
  });
});
