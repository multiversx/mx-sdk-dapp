import { explorerUrlBuilder } from '../explorerUrlBuilder';

describe('explorerUrlBuilder', () => {
  it('keeps a hash anchor as a fragment', () => {
    expect(explorerUrlBuilder.transactionDetails('originalHash#scHash')).toBe(
      '/transactions/originalHash#scHash'
    );
  });

  it('encodes characters that would leave the path segment', () => {
    expect(explorerUrlBuilder.accountDetails('../tokens?x=1')).toBe(
      '/accounts/..%2Ftokens%3Fx%3D1'
    );
    expect(explorerUrlBuilder.transactionDetails('hash#../a?b')).toBe(
      '/transactions/hash#..%2Fa%3Fb'
    );
  });
});
