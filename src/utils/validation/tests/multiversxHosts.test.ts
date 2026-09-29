import { isMultiversxHost, isMultiversxWalletHost } from '../multiversxHosts';

describe('isMultiversxHost', () => {
  it.each([
    'multiversx.com',
    'wallet.multiversx.com',
    'devnet-snap.multiversx.com',
    'API.MultiversX.com'
  ])('accepts %s', (host) => {
    expect(isMultiversxHost(host)).toBe(true);
  });

  it.each([
    'different.example',
    'multiversx.com.different.example',
    'evilmultiversx.com'
  ])('rejects %s', (host) => {
    expect(isMultiversxHost(host)).toBe(false);
  });
});

describe('isMultiversxWalletHost', () => {
  it.each([
    'wallet.multiversx.com',
    'devnet-wallet.multiversx.com',
    'next.wallet.multiversx.com'
  ])('accepts %s', (host) => {
    expect(isMultiversxWalletHost(host)).toBe(true);
  });

  it.each([
    'explorer.multiversx.com',
    'snap.multiversx.com',
    'wallet.multiversx.com.different.example',
    'fakewallet.multiversx.com.example'
  ])('rejects %s', (host) => {
    expect(isMultiversxWalletHost(host)).toBe(false);
  });
});
