import { mockPendingTransaction } from '__mocks__';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { manageFailedTransactions } from '../runTransactionFailure';
import { ResultType } from 'types/serverTransactions.types';

jest.mock('store/actions/transactions/transactionsActions', () => ({
  updateSessionStatus: jest.fn()
}));

jest.mock('store/actions/transactions/transactionStateByStatus', () => ({
  getIsTransactionPending: jest.fn()
}));

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

jest.mock('../runSessionCallbacks', () => ({
  runSessionCallbacks: jest.fn()
}));

jest.mock('../updateTransactionAndSessionStatus', () => ({
  updateTransactionAndSessionStatus: jest.fn()
}));

describe('manageFailedTransactions', () => {
  const sessionId = 'session-1';
  const hash = 'hash-1';

  const baseTx = {
    ...mockPendingTransaction,
    hash
  };

  const errorMessage = 'some error';
  const results = [{ returnMessage: '' }, { returnMessage: errorMessage }];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('updates transaction to fail and updates session + runs callbacks when no pending remain', async () => {
    const { updateTransactionAndSessionStatus } = jest.requireMock(
      '../updateTransactionAndSessionStatus'
    );
    const { runSessionCallbacks } = jest.requireMock('../runSessionCallbacks');
    const { updateSessionStatus } = jest.requireMock(
      'store/actions/transactions/transactionsActions'
    );
    const { getState } = jest.requireMock('store/store');
    const { getIsTransactionPending } = jest.requireMock(
      'store/actions/transactions/transactionStateByStatus'
    );

    getState.mockReturnValue({
      transactions: {
        [sessionId]: {
          transactions: [
            { ...baseTx, status: TransactionServerStatusesEnum.fail }
          ]
        }
      }
    });

    getIsTransactionPending.mockImplementation(
      (status: string) => status === TransactionServerStatusesEnum.pending
    );

    await manageFailedTransactions({
      transaction: {
        ...baseTx,
        results: results as ResultType[]
      },
      sessionId
    });

    expect(updateTransactionAndSessionStatus).toHaveBeenCalledWith({
      sessionId,
      transaction: expect.objectContaining({
        hash,
        status: TransactionServerStatusesEnum.fail,
        inTransit: false
      })
    });

    expect(updateSessionStatus).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.fail,
      errorMessage
    });

    expect(runSessionCallbacks).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.fail
    });
  });

  it('does not update session or run callbacks when pending transactions remain', async () => {
    const { updateSessionStatus } = jest.requireMock(
      'store/actions/transactions/transactionsActions'
    );
    const { runSessionCallbacks } = jest.requireMock('../runSessionCallbacks');
    const { getState } = jest.requireMock('store/store');
    const { getIsTransactionPending } = jest.requireMock(
      'store/actions/transactions/transactionStateByStatus'
    );

    getState.mockReturnValue({
      transactions: {
        [sessionId]: {
          transactions: [
            { ...baseTx, status: TransactionServerStatusesEnum.pending }
          ]
        }
      }
    });

    getIsTransactionPending.mockReturnValue(true);

    await manageFailedTransactions({
      transaction: {
        ...baseTx,
        results: results as ResultType[]
      },
      sessionId
    });

    expect(updateSessionStatus).not.toHaveBeenCalled();
    expect(runSessionCallbacks).not.toHaveBeenCalled();
  });
});
