import { normalizeAllowedOrigins } from '../normalizeAllowedOrigins';

describe('normalizeAllowedOrigins', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns serialized origins', () => {
    const origins = normalizeAllowedOrigins([
      'https://devnet.template-dapp.multiversx.com/',
      'https://localhost:3000/some/path?query=1',
      'https://localhost:3000'
    ]);

    expect([...origins]).toEqual([
      'https://devnet.template-dapp.multiversx.com',
      'https://localhost:3000'
    ]);
  });

  it('drops wildcard, opaque and invalid origins', () => {
    const origins = normalizeAllowedOrigins([
      '*',
      'null',
      'localhost:3000',
      'file:///index.html',
      'not a url'
    ]);

    expect(origins.size).toBe(0);
    expect(console.error).toHaveBeenCalledTimes(5);
  });

  it('returns an empty set when origins are missing', () => {
    expect(normalizeAllowedOrigins(undefined).size).toBe(0);
    expect(
      normalizeAllowedOrigins('https://example.com' as unknown as string[]).size
    ).toBe(0);
  });
});
