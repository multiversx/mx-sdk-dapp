import { pendingTransactionsSessionsSelector } from 'store/selectors/transactionsSelector';
import { getState } from 'store/store';
import { checkTransactionStatus } from '../checkTransactionStatus';
import { checkBatch } from '../helpers/checkBatch';

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

jest.mock('store/selectors/transactionsSelector', () => ({
  pendingTransactionsSessionsSelector: jest.fn()
}));

jest.mock('../helpers/checkBatch', () => ({
  checkBatch: jest.fn().mockResolvedValue(undefined)
}));

describe('checkTransactionStatus tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should check all pending transaction sessions', async () => {
    const mockTransactions = [
      { hash: 'tx1', status: 'pending' },
      { hash: 'tx2', status: 'pending' }
    ];

    const mockPendingSessions = {
      session1: {
        transactions: mockTransactions
      },
      session2: {
        transactions: [{ hash: 'tx3', status: 'pending' }]
      }
    };

    (getState as jest.Mock).mockReturnValue({});
    (pendingTransactionsSessionsSelector as jest.Mock).mockReturnValue(
      mockPendingSessions
    );

    await checkTransactionStatus();

    expect(pendingTransactionsSessionsSelector).toHaveBeenCalledWith({});
    expect(checkBatch).toHaveBeenCalledTimes(2);
    expect(checkBatch).toHaveBeenCalledWith({
      sessionId: 'session1',
      transactionBatch: mockTransactions
    });
    expect(checkBatch).toHaveBeenCalledWith({
      sessionId: 'session2',
      transactionBatch: [{ hash: 'tx3', status: 'pending' }]
    });
  });
});
