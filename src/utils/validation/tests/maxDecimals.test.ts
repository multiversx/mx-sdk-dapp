import { maxDecimals } from '../maxDecimals';

describe('maxDecimals tests', () => {
  it('returns true when amount has no decimal part', () => {
    expect(maxDecimals('100')).toBe(true);
  });

  it('returns true when decimal part length is within the limit', () => {
    expect(maxDecimals('123.456', 6)).toBe(true);
  });

  it('returns true when decimal part length equals the limit', () => {
    expect(maxDecimals('0.123456', 6)).toBe(true);
  });

  it('returns false when decimal part length exceeds the default limit of 18', () => {
    expect(maxDecimals('1.1234567890123456789')).toBe(false);
  });

  it('returns false when decimal part length exceeds the provided limit', () => {
    expect(maxDecimals('10.123', 2)).toBe(false);
  });

  it('returns true when amount is null or undefined', () => {
    expect(maxDecimals(null as unknown as string)).toBe(true);
    expect(maxDecimals(undefined as unknown as string)).toBe(true);
  });
});
