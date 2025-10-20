import { mockPendingTransaction } from '__mocks__';
import { getPendingTransactions } from '../getPendingTransactions';

describe('getPendingTransactions tests', () => {
  it('should return an empty array if there are no transactions', () => {
    const pendingTransactions = getPendingTransactions([
      mockPendingTransaction,
      { ...mockPendingTransaction, status: 'success' }
    ]);
    expect(pendingTransactions).toEqual([mockPendingTransaction]);
  });
});
