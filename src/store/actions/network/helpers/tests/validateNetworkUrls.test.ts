import {
  validateNetworkUrl,
  validateNetworkUrls
} from 'store/actions/network/helpers/validateNetworkUrls';

const validateApiAddress = (url: string) => () =>
  validateNetworkUrl({ field: 'apiAddress', url });

describe('validateNetworkUrl', () => {
  it.each([
    'https://localhost',
    'https://localhost.',
    'https://app.localhost',
    'https://my-box.local',
    'https://127.0.0.1:8080',
    'https://2130706433',
    'https://0.0.0.0',
    'https://10.1.2.3',
    'https://100.64.0.1',
    'https://169.254.169.254',
    'https://172.16.0.1',
    'https://192.168.0.1',
    'https://[::1]',
    'https://[::ffff:127.0.0.1]',
    'https://[fd00::1]',
    'https://[fe80::1]'
  ])('rejects the private host of %s', (url) => {
    expect(validateApiAddress(url)).toThrow('loopback or private host');
  });

  it.each([
    'https://api.multiversx.com',
    'https://8.8.8.8',
    'https://172.32.0.1',
    'https://10.api.example.com',
    'https://[2001:4860:4860::8888]'
  ])('accepts %s', (url) => {
    expect(validateApiAddress(url)).not.toThrow();
  });

  it('rejects a non-https url', () => {
    expect(validateApiAddress('http://api.multiversx.com')).toThrow(
      'must use https'
    );
  });

  it('rejects an unparseable url', () => {
    expect(validateApiAddress('not-a-url')).toThrow('Invalid `apiAddress`');
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

  it('rejects a ws:// websocketUrl', () => {
    expect(() =>
      validateNetworkUrls({
        config: { websocketUrl: 'ws://socket-api.multiversx.com' }
      })
    ).toThrow('must use https or wss');
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
