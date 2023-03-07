import { getRemainingValue } from '../progress';

describe('getRemainingValue tests', () => {
  it('returns correct value for cross-shard transaction', () => {
    const remainingValue = getRemainingValue({
      remaining: 80,
      totalSeconds: 60,
      isCrossShard: true
    });
    expect(Math.round(remainingValue)).toBe(80);
  });
  it('returns correct value for same-shard transaction', () => {
    const remainingValue = getRemainingValue({
      remaining: 80,
      totalSeconds: 6,
      isCrossShard: false
    });
    expect(Math.round(remainingValue)).toBe(78);
  });
  it('returns correct value for cross-shard transaction', () => {
    const remainingValue = getRemainingValue({
      remaining: 20,
      totalSeconds: 30,
      isCrossShard: true
    });
    expect(Math.round(remainingValue)).toBe(20);
  });
  it('returns correct value for same-shard transaction', () => {
    const remainingValue = getRemainingValue({
      remaining: 20,
      totalSeconds: 10,
      isCrossShard: false
    });
    expect(Math.round(remainingValue)).toBe(20);
  });
});
