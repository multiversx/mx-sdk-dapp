import {
  isPrivateHost,
  validateNetworkUrl,
  validateNetworkUrls
} from '../validateNetworkUrls';

describe('isPrivateHost', () => {
  it.each([
    'localhost',
    '127.0.0.1',
    '10.1.2.3',
    '192.168.0.1',
    '169.254.169.254',
    '172.16.0.1',
    '172.31.255.255',
    'my-box.local',
    '[::1]',
    '0.0.0.0',
    '100.64.0.1',
    'localhost.',
    'app.localhost',
    '[::]',
    '[fe80::1]',
    '[fd00::1]',
    '[::ffff:7f00:1]',
    '[::ffff:127.0.0.1]',
    '[::ffff:a00:1]'
  ])('treats %s as private', (host) => {
    expect(isPrivateHost(host)).toBe(true);
  });

  it.each([
    'api.multiversx.com',
    '8.8.8.8',
    '172.32.0.1',
    '11.0.0.1',
    '100.128.0.1',
    '[2001:4860:4860::8888]',
    '[::ffff:808:808]'
  ])('treats %s as public', (host) => {
    expect(isPrivateHost(host)).toBe(false);
  });

  it.each([
    'https://[::ffff:127.0.0.1]',
    'https://[fe80::1]',
    'https://app.localhost',
    'https://localhost.',
    'https://2130706433'
  ])('rejects the parsed host of %s', (url) => {
    expect(() => validateNetworkUrl({ field: 'apiAddress', url })).toThrow(
      'loopback or private host'
    );
  });
});

describe('validateNetworkUrl', () => {
  it('accepts an https api address', () => {
    expect(() =>
      validateNetworkUrl({
        field: 'apiAddress',
        url: 'https://api.multiversx.com'
      })
    ).not.toThrow();
  });

  it('rejects a non-https url', () => {
    expect(() =>
      validateNetworkUrl({
        field: 'apiAddress',
        url: 'http://api.multiversx.com'
      })
    ).toThrow('must use https');
  });

  it('rejects a loopback host', () => {
    expect(() =>
      validateNetworkUrl({ field: 'apiAddress', url: 'https://127.0.0.1:8080' })
    ).toThrow('loopback or private host');
  });

  it('rejects an unparseable url', () => {
    expect(() =>
      validateNetworkUrl({ field: 'apiAddress', url: 'not-a-url' })
    ).toThrow('Invalid `apiAddress`');
  });

  it.each(['walletAddress', 'iframeWalletAddress'] as const)(
    'rejects an unknown host for %s',
    (field) => {
      expect(() =>
        validateNetworkUrl({ field, url: 'https://different.example' })
      ).toThrow('not a MultiversX host');
    }
  );

  it('allows an unknown wallet host once it is explicitly declared', () => {
    expect(() =>
      validateNetworkUrl({
        field: 'walletAddress',
        url: 'https://wallet.my-sovereign-chain.io',
        unsafeAllowCustomWalletHosts: true
      })
    ).not.toThrow();
  });

  it('does not apply the wallet host rule to explorerAddress', () => {
    expect(() =>
      validateNetworkUrl({
        field: 'explorerAddress',
        url: 'https://explorer.example'
      })
    ).not.toThrow();
  });
});

describe('validateNetworkUrls', () => {
  it.each([
    'wss://socket-api.multiversx.com',
    'https://socket-api.multiversx.com'
  ])('accepts %s as websocketUrl', (websocketUrl) => {
    expect(() =>
      validateNetworkUrls({ config: { websocketUrl } })
    ).not.toThrow();
  });

  it.each([
    ['ws://socket-api.multiversx.com', 'must use https or wss'],
    ['wss://10.0.0.5:3000', 'loopback or private host']
  ])('rejects %s as websocketUrl', (websocketUrl, error) => {
    expect(() => validateNetworkUrls({ config: { websocketUrl } })).toThrow(
      error
    );
  });

  it('skips absent fields', () => {
    expect(() =>
      validateNetworkUrls({
        config: { apiAddress: 'https://api.multiversx.com' }
      })
    ).not.toThrow();
  });

  it('reports the offending field', () => {
    expect(() =>
      validateNetworkUrls({
        config: {
          apiAddress: 'https://api.multiversx.com',
          walletAddress: 'https://different.example'
        }
      })
    ).toThrow('`walletAddress`');
  });
});
