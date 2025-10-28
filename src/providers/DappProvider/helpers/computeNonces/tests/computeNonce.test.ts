import { computeNonce } from '../computeNonce';

describe('computeNonce tests', () => {
  test('returns accountNonce when transactionNonce is undefined', () => {
    expect(computeNonce({ accountNonce: 5 })).toBe(5);
  });

  test('returns accountNonce when transactionNonce equals accountNonce', () => {
    expect(computeNonce({ accountNonce: 7, transactionNonce: 7 })).toBe(7);
  });

  test('returns higher when transactionNonce greater than accountNonce', () => {
    expect(computeNonce({ accountNonce: 3, transactionNonce: 10 })).toBe(10);
  });

  test('returns accountNonce when transactionNonce lower than accountNonce', () => {
    expect(computeNonce({ accountNonce: 12, transactionNonce: 4 })).toBe(12);
  });
});
