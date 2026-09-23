import { mockPendingTransaction } from '__mocks__';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import { runTransactionStatusUpdate } from '../runTransactionStatusUpdate';

jest.mock('store/actions/transactions/transactionsActions', () => ({
  updateSessionStatus: jest.fn(),
  updateTransactionStatus: jest.fn()
}));

jest.mock('store/actions/transactions/transactionStateByStatus', () => ({
  getIsTransactionFailed: jest.fn(),
  getIsTransactionPending: jest.fn(),
  isServerTransactionFailed: jest.fn()
}));

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

jest.mock('utils/account/nonceReservations', () => ({
  reserveNonces: jest.fn()
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

  const {
    getIsTransactionFailed,
    getIsTransactionPending,
    isServerTransactionFailed
  } = jest.requireMock('store/actions/transactions/transactionStateByStatus');
  const { getState } = jest.requireMock('store/store');
  const { reserveNonces } = jest.requireMock('utils/account/nonceReservations');
  const { runSessionCallbacks } = jest.requireMock('../runSessionCallbacks');
  const { manageFailedTransactions } = jest.requireMock(
    '../runTransactionFailure'
  );
  const { updateTransactionAndSessionStatus } = jest.requireMock(
    '../updateTransactionAndSessionStatus'
  );
  const { updateSessionStatus, updateTransactionStatus } = jest.requireMock(
    'store/actions/transactions/transactionsActions'
  );

  const mockSession = (transactionStatuses: string[], status = 'sent') =>
    getState.mockReturnValue({
      transactions: {
        [sessionId]: {
          status,
          transactions: transactionStatuses.map((txStatus, index) => ({
            ...mockPendingTransaction,
            hash: `hash-${index}`,
            status: txStatus
          }))
        }
      }
    });

  const exhaustRetries = async (stuckTransaction: typeof serverTransaction) => {
    for (let i = 0; i < 31; i++) {
      await runTransactionStatusUpdate({
        serverTransaction: stuckTransaction,
        sessionId
      });
    }
    jest.clearAllMocks();
  };

  const getStuckTransaction = (hash: string) => ({
    ...mockPendingTransaction,
    hash,
    txHash: hash,
    status: TransactionBatchStatusesEnum.sent as any,
    hasStatusChanged: false,
    previousStatus: 'pending' as const,
    invalidTransaction: false,
    results: []
  });

  beforeEach(() => {
    jest.clearAllMocks();
    getIsTransactionPending.mockImplementation((status: string) =>
      ['pending', 'sent'].includes(status)
    );
    isServerTransactionFailed.mockImplementation((status: string) =>
      ['fail', 'invalid'].includes(status)
    );
    mockSession(['pending']);
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

  it('marks a stuck transaction as timed out and settles the session once nothing is pending', async () => {
    const stuckTransaction = getStuckTransaction('stuck-hash-1');
    await exhaustRetries(stuckTransaction);
    mockSession(['success', 'timedOut']);

    await runTransactionStatusUpdate({
      serverTransaction: stuckTransaction,
      sessionId
    });

    expect(updateTransactionStatus).toHaveBeenCalledWith({
      sessionId,
      transaction: {
        ...stuckTransaction,
        status: TransactionBatchStatusesEnum.timedOut
      }
    });
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

  it('keeps holding the nonce of a stuck transaction', async () => {
    const stuckTransaction = getStuckTransaction('stuck-hash-nonce');
    await exhaustRetries(stuckTransaction);
    mockSession(['timedOut']);

    await runTransactionStatusUpdate({
      serverTransaction: stuckTransaction,
      sessionId
    });

    expect(reserveNonces).toHaveBeenCalledWith(stuckTransaction.sender, [
      Number(stuckTransaction.nonce)
    ]);
  });

  it('keeps tracking the session when a stuck transaction has pending siblings', async () => {
    const stuckTransaction = getStuckTransaction('stuck-hash-2');
    await exhaustRetries(stuckTransaction);
    mockSession(['pending', 'timedOut']);

    await runTransactionStatusUpdate({
      serverTransaction: stuckTransaction,
      sessionId
    });

    expect(updateTransactionStatus).toHaveBeenCalledTimes(1);
    expect(updateSessionStatus).not.toHaveBeenCalled();
    expect(runSessionCallbacks).not.toHaveBeenCalled();
  });

  it('settles as failed when a sibling of a stuck transaction failed on chain', async () => {
    const stuckTransaction = getStuckTransaction('stuck-hash-3');
    await exhaustRetries(stuckTransaction);
    mockSession(['fail', 'timedOut']);

    await runTransactionStatusUpdate({
      serverTransaction: stuckTransaction,
      sessionId
    });

    expect(updateSessionStatus).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.fail
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
      serverTransaction: sequentialTransaction as any,
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

  it('leaves a failed transaction to manageFailedTransactions only', async () => {
    const failedTransaction = {
      ...serverTransaction,
      status: 'fail' as any
    };

    (getIsTransactionFailed as jest.Mock).mockReturnValue(true);

    await runTransactionStatusUpdate({
      serverTransaction: failedTransaction,
      sessionId
    });

    expect(manageFailedTransactions).toHaveBeenCalledTimes(1);
    expect(manageFailedTransactions).toHaveBeenCalledWith({
      sessionId,
      transaction: failedTransaction
    });
    expect(updateTransactionAndSessionStatus).not.toHaveBeenCalled();
    expect(runSessionCallbacks).not.toHaveBeenCalled();
  });

  it('times out a session that is still tracked when processing throws', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const error = new Error('Test error');

    (getIsTransactionFailed as jest.Mock).mockReturnValue(true);
    (manageFailedTransactions as jest.Mock).mockImplementation(() => {
      throw error;
    });
    mockSession(['pending', 'pending'], 'sent');

    await runTransactionStatusUpdate({
      serverTransaction: { ...serverTransaction, status: 'fail' as any },
      sessionId
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

  it('does not rewrite a settled session when processing throws', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    (getIsTransactionFailed as jest.Mock).mockReturnValue(false);
    (updateTransactionAndSessionStatus as jest.Mock).mockImplementation(() => {
      throw new Error('Test error');
    });
    mockSession(['success'], 'success');

    await runTransactionStatusUpdate({
      serverTransaction,
      sessionId
    });

    expect(updateSessionStatus).not.toHaveBeenCalled();
    expect(runSessionCallbacks).not.toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  it('ignores a result for a session cleared while the request was in flight', async () => {
    getState.mockReturnValue({ transactions: {} });
    (getIsTransactionFailed as jest.Mock).mockReturnValue(false);

    await runTransactionStatusUpdate({
      serverTransaction,
      sessionId
    });

    expect(updateTransactionAndSessionStatus).not.toHaveBeenCalled();
    expect(updateSessionStatus).not.toHaveBeenCalled();
    expect(runSessionCallbacks).not.toHaveBeenCalled();
  });

  it('does not report a session that was cleared while processing threw', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    (getIsTransactionFailed as jest.Mock).mockReturnValue(false);
    (updateTransactionAndSessionStatus as jest.Mock).mockImplementation(() => {
      getState.mockReturnValue({ transactions: {} });
      throw new TypeError('Cannot read properties of undefined');
    });

    await runTransactionStatusUpdate({
      serverTransaction,
      sessionId
    });

    expect(updateSessionStatus).not.toHaveBeenCalled();
    expect(runSessionCallbacks).not.toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
