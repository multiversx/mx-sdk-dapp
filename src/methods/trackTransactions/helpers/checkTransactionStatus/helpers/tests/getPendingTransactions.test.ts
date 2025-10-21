import { mockPendingTransaction } from '__mocks__';
import { getPendingTransactions } from '../getPendingTransactions';

describe('getPendingTransactions tests', () => {
  it('should return only pending transactions when mixed statuses are provided', () => {
    const pendingTransactions = getPendingTransactions([
      mockPendingTransaction,
      { ...mockPendingTransaction, status: 'success' }
    ]);
    expect(pendingTransactions).toEqual([mockPendingTransaction]);
  });
});
