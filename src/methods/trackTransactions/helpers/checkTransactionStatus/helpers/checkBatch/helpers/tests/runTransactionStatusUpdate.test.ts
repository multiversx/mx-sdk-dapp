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

describe('runTransactionStatusUpdate tests', () => {
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
  const { updateSessionStatus } = jest.requireMock(
    'store/actions/transactions/transactionsActions'
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

  it('should mark transaction as timed out and run callbacks when retries exceed 30', async () => {
    const stuckTransaction = {
      ...mockPendingTransaction,
      hash: 'stuck-transaction-hash',
      txHash: 'stuck-transaction-hash',
      status: TransactionBatchStatusesEnum.sent,
      hasStatusChanged: false,
      invalidTransaction: false
    };

    // Increment retries 31 times by calling with status === sent
    for (let i = 0; i < 31; i++) {
      await runTransactionStatusUpdate({
        serverTransaction: stuckTransaction,
        sessionId
      });
    }

    // Clear mocks before the 32nd call to verify only the timeout logic runs
    jest.clearAllMocks();

    // 32nd call should trigger timeout
    await runTransactionStatusUpdate({
      serverTransaction: stuckTransaction,
      sessionId
    });

    expect(updateSessionStatus).toHaveBeenCalledTimes(1);
    expect(updateSessionStatus).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.timedOut
    });

    expect(runSessionCallbacks).toHaveBeenCalledTimes(1);
    expect(runSessionCallbacks).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.timedOut
    });
  });

  it('should update transaction and run callbacks for sequential batch when status is falsy', async () => {
    const sequentialTransaction = {
      ...mockPendingTransaction,
      status: undefined,
      hasStatusChanged: false,
      invalidTransaction: false
    };

    (updateTransactionAndSessionStatus as jest.Mock).mockReturnValue(
      TransactionBatchStatusesEnum.success
    );

    await runTransactionStatusUpdate({
      serverTransaction: sequentialTransaction,
      sessionId,
      isSequential: true
    });

    expect(updateTransactionAndSessionStatus).toHaveBeenCalledWith({
      sessionId,
      transaction: sequentialTransaction
    });

    expect(runSessionCallbacks).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.success
    });
  });

  it('should call manageFailedTransactions and handle error in catch block', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const error = new Error('Test error');

    const failedTransaction = {
      ...mockPendingTransaction,
      status: TransactionBatchStatusesEnum.fail,
      hasStatusChanged: true,
      invalidTransaction: false
    };

    (getIsTransactionFailed as jest.Mock).mockReturnValue(true);
    (updateTransactionAndSessionStatus as jest.Mock).mockReturnValue(
      TransactionBatchStatusesEnum.fail
    );
    (manageFailedTransactions as jest.Mock).mockImplementation(() => {
      throw error;
    });

    await runTransactionStatusUpdate({
      serverTransaction: failedTransaction,
      sessionId
    });

    expect(updateTransactionAndSessionStatus).toHaveBeenCalledWith({
      sessionId,
      transaction: failedTransaction
    });

    expect(runSessionCallbacks).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.fail
    });

    expect(manageFailedTransactions).toHaveBeenCalledWith({
      sessionId,
      transaction: failedTransaction
    });

    expect(consoleSpy).toHaveBeenCalledWith(error);
    expect(updateSessionStatus).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.timedOut
    });
    expect(runSessionCallbacks).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.timedOut
    });

    consoleSpy.mockRestore();
  });
});
