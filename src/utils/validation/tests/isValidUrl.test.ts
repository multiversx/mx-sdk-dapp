import { isValidUrl } from '../isValidUrl';

describe('isValidUrl', () => {
  it('should return true for valid URLs', () => {
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('http://localhost:3000')).toBe(true);
    expect(isValidUrl('https://api.multiversx.com')).toBe(true);
    expect(isValidUrl('https://testnet-api.multiversx.com')).toBe(true);
  });

  it('should return false for invalid URLs', () => {
    expect(isValidUrl('')).toBe(false);
    expect(isValidUrl('   ')).toBe(false);
    expect(isValidUrl('not-a-url')).toBe(false);
    expect(isValidUrl('://missing-protocol')).toBe(false);
    expect(isValidUrl('http://')).toBe(false);
  });

  it('should return false for non-string inputs', () => {
    expect(isValidUrl(null as any)).toBe(false);
    expect(isValidUrl(undefined as any)).toBe(false);
    expect(isValidUrl(123 as any)).toBe(false);
    expect(isValidUrl({} as any)).toBe(false);
  });

  it('should handle URLs with whitespace', () => {
    expect(isValidUrl('  https://example.com  ')).toBe(true);
    expect(isValidUrl('\nhttps://example.com\n')).toBe(true);
    expect(isValidUrl('\t  https://example.com\t  ')).toBe(true);
  });
});
