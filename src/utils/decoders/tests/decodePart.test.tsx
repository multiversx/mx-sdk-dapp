import { decodePart } from '../decodePart';

describe('decodePart', () => {
  it('should decode hex to utf-8 string', async () => {
    const result = decodePart('6f6b');
    expect(result).toBe('ok');
  });

  it('should return input value if not utf-8 string and not a number', async () => {
    const result = decodePart('oÉD');
    expect(result).toBe('oÉD');
  });
});
