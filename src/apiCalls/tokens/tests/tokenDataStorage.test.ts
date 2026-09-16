import { TOKEN_CACHE_MAX_ENTRIES, tokenDataStorage } from '../tokenDataStorage';

describe('tokenDataStorage', () => {
  beforeEach(async () => {
    await tokenDataStorage.clear();
  });

  it('round-trips a stored value', async () => {
    await tokenDataStorage.setItem('url-a', { identifier: 'USDC-c76f1f' });

    expect(await tokenDataStorage.getItem('url-a')).toEqual({
      identifier: 'USDC-c76f1f'
    });
  });

  it('returns null for an unknown key', async () => {
    expect(await tokenDataStorage.getItem('missing')).toBeNull();
  });

  it('evicts the least recently used entry beyond the cap', async () => {
    for (let i = 0; i < TOKEN_CACHE_MAX_ENTRIES; i++) {
      await tokenDataStorage.setItem(`url-${i}`, { i });
    }

    // touch the oldest key so it is no longer the eviction candidate
    await tokenDataStorage.getItem('url-0');
    await tokenDataStorage.setItem('url-overflow', { overflow: true });

    expect(await tokenDataStorage.getItem('url-0')).toEqual({ i: 0 });
    expect(await tokenDataStorage.getItem('url-1')).toBeNull();
    expect(await tokenDataStorage.getItem('url-overflow')).toEqual({
      overflow: true
    });
  });

  it('returns null rather than undefined when a cached entry cannot be parsed', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
    await tokenDataStorage.setItem('url-bad', { ok: true });

    const parseSpy = jest.spyOn(JSON, 'parse').mockImplementationOnce(() => {
      throw new Error('broken');
    });

    expect(await tokenDataStorage.getItem('url-bad')).toBeNull();

    parseSpy.mockRestore();
  });
});
