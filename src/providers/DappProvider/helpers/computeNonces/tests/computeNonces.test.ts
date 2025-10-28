import { mockPendingTransaction } from '__mocks__/data/mockPendingTransaction';
import { Transaction } from 'lib/sdkCore';
import { computeNonces } from '../computeNonces';

const tx1 = Transaction.newFromPlainObject(mockPendingTransaction);
const tx2 = Transaction.newFromPlainObject({
  ...mockPendingTransaction,
  nonce: 18
});

describe('computeNonces tests', () => {
  test('returns the correct nonces for two transactions', () => {
    const latestNonce = 10;

    const [r1, r2] = computeNonces({
      latestNonce,
      transactions: [tx1, tx2]
    });

    expect(r1.nonce).toBe(BigInt(17n));
    expect(r2.nonce).toBe(BigInt(18n));
  });

  test('returns the correct nonces for two transactions with a higher nonce', () => {
    const latestNonce = 20;

    const [r1, r2] = computeNonces({
      latestNonce,
      transactions: [tx1, tx2]
    });

    expect(r1.nonce).toBe(BigInt(20n));
    expect(r2.nonce).toBe(BigInt(21n));
  });
});
