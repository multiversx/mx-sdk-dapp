import { getUsdValue } from '../getUsdValue';

describe('getUsdValue tests', () => {
  it('formats amount', () => {
    expect(
      getUsdValue({
        amount: '2',
        usd: 40,
        decimals: 4,
        addEqualSign: true
      })
    ).toBe('≈ $80.0000');
  });
  it('shows = for 0', () => {
    expect(
      getUsdValue({
        amount: '0',
        usd: 40,
        addEqualSign: true
      })
    ).toBe('= $0.00');
  });
});
