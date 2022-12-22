import { parseAmount } from '../parseAmount';

describe('parseAmount tests', () => {
  it('returns empty string for no amount', () => {
    expect(parseAmount('')).toBe('');
  });
  it('returns empty string for invalid number', () => {
    expect(parseAmount('some number')).toBe('');
  });
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
});
