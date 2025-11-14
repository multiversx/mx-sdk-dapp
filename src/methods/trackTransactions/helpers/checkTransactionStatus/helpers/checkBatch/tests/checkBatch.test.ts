import { mockPendingTransaction } from '__mocks__';
import { getTransactionsByHashes } from 'apiCalls/transactions/getTransactionsByHashes';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { updateSessionStatus } from 'store/actions/transactions/transactionsActions';
import { getState } from 'store/store';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { refreshAccount } from 'utils/account/refreshAccount';
import { getPendingTransactions } from '../../getPendingTransactions';
import { checkBatch } from '../checkBatch';
import { runTransactionStatusUpdate } from '../helpers/runTransactionStatusUpdate';

// Mock all dependencies
jest.mock('apiCalls/transactions/getTransactionsByHashes');
jest.mock('methods/account/getIsLoggedIn');
jest.mock('store/actions/transactions/transactionsActions');
jest.mock('store/store');
jest.mock('utils/account/refreshAccount');
jest.mock('../../getPendingTransactions');
jest.mock('../helpers/runTransactionStatusUpdate');

const mockGetTransactionsByHashes =
  getTransactionsByHashes as jest.MockedFunction<
    typeof getTransactionsByHashes
  >;

const mockGetIsLoggedIn = getIsLoggedIn as jest.MockedFunction<
  typeof getIsLoggedIn
>;

const mockUpdateSessionStatus = updateSessionStatus as jest.MockedFunction<
  typeof updateSessionStatus
>;

const mockGetState = getState as jest.MockedFunction<typeof getState>;

const mockRefreshAccount = refreshAccount as jest.MockedFunction<
  typeof refreshAccount
>;

const mockGetPendingTransactions =
  getPendingTransactions as jest.MockedFunction<typeof getPendingTransactions>;

const mockRunTransactionStatusUpdate =
  runTransactionStatusUpdate as jest.MockedFunction<
    typeof runTransactionStatusUpdate
  >;

describe('checkBatch', () => {
  const sessionId = 'test-session-id';
  const mockTransactions = [mockPendingTransaction];

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const setupMocks = (status: TransactionServerStatusesEnum) => {
    const mockServerTransactions = [
      {
        ...mockPendingTransaction,
        status
      }
    ];

    const mockSession = {
      transactions: [
        {
          ...mockPendingTransaction,
          status
        }
      ]
    };

    mockGetPendingTransactions.mockReturnValue([mockPendingTransaction]);
    mockGetTransactionsByHashes.mockResolvedValue(mockServerTransactions);
    mockGetIsLoggedIn.mockReturnValue(true);
    mockGetState.mockReturnValue({
      transactions: {
        [sessionId]: mockSession
      }
    } as any);
    mockRefreshAccount.mockResolvedValue(undefined);

    return { mockServerTransactions };
  };

  it('should return early if transactions is null', async () => {
    await checkBatch({
      sessionId,
      transactionBatch: null as any
    });

    expect(mockUpdateSessionStatus).not.toHaveBeenCalled();
  });

  it('should process transactions and update session status to success when all transactions are successful', async () => {
    const { mockServerTransactions } = setupMocks(
      TransactionServerStatusesEnum.success
    );

    await checkBatch({
      sessionId,
      transactionBatch: mockTransactions
    });

    expect(mockGetPendingTransactions).toHaveBeenCalledWith(mockTransactions);
    expect(mockGetTransactionsByHashes).toHaveBeenCalledWith([
      mockPendingTransaction
    ]);
    expect(mockRunTransactionStatusUpdate).toHaveBeenCalledWith({
      serverTransaction: mockServerTransactions[0],
      sessionId,
      isSequential: undefined
    });
    expect(mockRefreshAccount).toHaveBeenCalled();
    expect(mockUpdateSessionStatus).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.success
    });
  });

  it('should update session status to fail when at least one transaction has failed', async () => {
    setupMocks(TransactionServerStatusesEnum.fail);

    await checkBatch({
      sessionId,
      transactionBatch: mockTransactions
    });

    expect(mockUpdateSessionStatus).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.fail
    });
  });

  it('should update session status to invalid when all transactions are not executed', async () => {
    setupMocks(TransactionServerStatusesEnum.notExecuted);

    await checkBatch({
      sessionId,
      transactionBatch: mockTransactions
    });

    expect(mockUpdateSessionStatus).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.invalid
    });
  });

  it('should handle error and log it to console', async () => {
    const consoleSpy = jest.spyOn(console, 'error');
    const error = new Error('Test error');

    mockGetPendingTransactions.mockImplementation(() => {
      throw error;
    });

    await checkBatch({
      sessionId,
      transactionBatch: mockTransactions
    });

    expect(consoleSpy).toHaveBeenCalledWith(error);
  });
});
