import { getTokenIdentifier } from '../getTokenIdentifier';

describe('getTokenIdentifier', () => {
  it('returns the token id when there is no nonce', () => {
    expect(getTokenIdentifier({ tokenId: 'USDC-c76f1f' })).toBe('USDC-c76f1f');
    expect(getTokenIdentifier({})).toBe('');
  });

  it.each([
    ['01', 'EAPES-8f3c1f-01'],
    ['0001', 'EAPES-8f3c1f-01'],
    ['1', 'EAPES-8f3c1f-01'],
    ['0a', 'EAPES-8f3c1f-0a'],
    ['100', 'EAPES-8f3c1f-0100']
  ])('normalizes the nonce %s', (nonce, expected) => {
    expect(getTokenIdentifier({ tokenId: 'EAPES-8f3c1f', nonce })).toBe(
      expected
    );
  });

  it('keeps a nonce that is not hex as-is', () => {
    expect(getTokenIdentifier({ tokenId: 'EAPES-8f3c1f', nonce: 'zz' })).toBe(
      'EAPES-8f3c1f-zz'
    );
  });
});
