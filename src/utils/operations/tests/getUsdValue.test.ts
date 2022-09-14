import { getUsdValue } from '../getUsdValue';

describe('getUsdValue tests', () => {
  it('formats amount', () => {
    expect(
      getUsdValue({
        amount: '2',
        usd: 40,
        decimals: 4
      })
    ).toBe('≈ $80.0000');
  });
  it('shows = for 0', () => {
    expect(
      getUsdValue({
        amount: '0',
        usd: 40
      })
    ).toBe('= $0.00');
  });
});
