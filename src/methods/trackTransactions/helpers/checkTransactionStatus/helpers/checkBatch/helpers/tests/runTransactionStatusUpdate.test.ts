import { mockPendingTransaction } from '__mocks__';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import { runTransactionStatusUpdate } from '../runTransactionStatusUpdate';

jest.mock('store/actions/transactions/transactionsActions', () => ({
  updateSessionStatus: jest.fn()
}));

jest.mock('store/actions/transactions/transactionStateByStatus', () => ({
  getIsTransactionFailed: jest.fn()
}));

jest.mock('../runSessionCallbacks', () => ({
  runSessionCallbacks: jest.fn()
}));

jest.mock('../runTransactionFailure', () => ({
  manageFailedTransactions: jest.fn()
}));

jest.mock('../updateTransactionAndSessionStatus', () => ({
  updateTransactionAndSessionStatus: jest.fn()
}));

describe('runTransactionStatusUpdate', () => {
  const sessionId = '1760966489286';

  const serverTransaction = {
    ...mockPendingTransaction,
    status: 'success' as const,
    hasStatusChanged: true,
    previousStatus: 'pending' as const,
    invalidTransaction: false,
    results: []
  };

  const { getIsTransactionFailed } = jest.requireMock(
    'store/actions/transactions/transactionStateByStatus'
  );
  const { runSessionCallbacks } = jest.requireMock('../runSessionCallbacks');
  const { manageFailedTransactions } = jest.requireMock(
    '../runTransactionFailure'
  );
  const { updateTransactionAndSessionStatus } = jest.requireMock(
    '../updateTransactionAndSessionStatus'
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('updates transaction and runs session callbacks when status changed to success', async () => {
    (getIsTransactionFailed as jest.Mock).mockReturnValue(false);
    (updateTransactionAndSessionStatus as jest.Mock).mockReturnValue(
      TransactionBatchStatusesEnum.success
    );

    await runTransactionStatusUpdate({
      serverTransaction,
      sessionId
    });

    expect(updateTransactionAndSessionStatus).toHaveBeenCalledTimes(1);
    expect(updateTransactionAndSessionStatus).toHaveBeenCalledWith({
      sessionId,
      transaction: serverTransaction
    });

    expect(runSessionCallbacks).toHaveBeenCalledTimes(1);
    expect(runSessionCallbacks).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.success
    });

    expect(manageFailedTransactions).not.toHaveBeenCalled();
  });
});
