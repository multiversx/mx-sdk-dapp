import { explorerUrlBuilder } from '../explorerUrlBuilder';

describe('explorerUrlBuilder', () => {
  it('keeps a hash anchor as a fragment', () => {
    expect(explorerUrlBuilder.transactionDetails('originalHash#scHash')).toBe(
      '/transactions/originalHash#scHash'
    );
  });

  it('keeps the path segment after the value in front of the anchor', () => {
    expect(explorerUrlBuilder.transactionDetailsLogs('tx#scr')).toBe(
      '/transactions/tx/logs#scr'
    );
    expect(explorerUrlBuilder.transactionDetailsScResults('tx')).toBe(
      '/transactions/tx/sc-results'
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
