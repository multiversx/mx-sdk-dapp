import { parseAmount } from '../parseAmount';

describe('parseAmount tests', () => {
  it('adds 18 zeros', () => {
    expect(parseAmount('10')).toBe('10000000000000000000');
  });

  it('works with custom denomination', () => {
    expect(parseAmount('10', 6)).toBe('10000000');
  });

  it('works with floating numbers', () => {
    expect(parseAmount('0.1')).toBe('100000000000000000');
  });

  it('removes zero at end and start', () => {
    expect(parseAmount('000.100')).toBe('100000000000000000');
  });

  it('works with 0', () => {
    expect(parseAmount('0')).toBe('0');
  });

  it('works with prepended 0', () => {
    expect(parseAmount('010')).toBe('10000000000000000000');
  });

  it('handles gas price values that would produce scientific notation', () => {
    // Gas price value like 50001 that when shifted by 18 decimals would produce 5.0001e+22
    expect(parseAmount('50001')).toBe('50001000000000000000000');
  });

  it('handles very large amounts without scientific notation', () => {
    // Large amount like 9,999,979.9998 that when shifted produces 9.9999799998e+24
    expect(parseAmount('9999979.9998')).toBe('9999979999800000000000000');
  });

  it('handles amounts that produce exactly 1e+21 when shifted', () => {
    expect(parseAmount('1000')).toBe('1000000000000000000000');
  });

  it('handles edge case with very large gas prices', () => {
    const result = parseAmount('999999999999999');
    expect(result).toBe('999999999999999000000000000000000');
    expect(() => BigInt(result)).not.toThrow();
  });
});
