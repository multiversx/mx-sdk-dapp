import { mockPendingTransaction } from '__mocks__';
import { getTransactionsByHashes } from 'apiCalls/transactions/getTransactionsByHashes';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { updateSessionStatus } from 'store/actions/transactions/transactionsActions';
import { getState } from 'store/store';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import * as utils from 'utils';
import { getPendingTransactions } from '../../getPendingTransactions';
import { checkBatch } from '../checkBatch';
import { runTransactionStatusUpdate } from '../helpers/runTransactionStatusUpdate';

// Mock all dependencies
jest.mock('apiCalls/transactions/getTransactionsByHashes');
jest.mock('methods/account/getIsLoggedIn');
jest.mock('store/actions/transactions/transactionsActions');
jest.mock('store/store');
jest.mock('utils', () => ({
  refreshAccount: jest.fn()
}));
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

const mockRefreshAccount = utils.refreshAccount as jest.MockedFunction<
  typeof utils.refreshAccount
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

  it('should return early if transactions is null', async () => {
    await checkBatch({
      sessionId,
      transactionBatch: null as any
    });

    expect(mockGetPendingTransactions).not.toHaveBeenCalled();
    expect(mockGetTransactionsByHashes).not.toHaveBeenCalled();
  });

  it('should return early if transactions is undefined', async () => {
    await checkBatch({
      sessionId,
      transactionBatch: undefined as any
    });

    expect(mockGetPendingTransactions).not.toHaveBeenCalled();
    expect(mockGetTransactionsByHashes).not.toHaveBeenCalled();
  });

  it('should process transactions and update session status to success when all transactions are successful', async () => {
    const mockServerTransactions = [
      {
        ...mockPendingTransaction,
        status: TransactionServerStatusesEnum.success
      }
    ];

    const mockSession = {
      transactions: [
        {
          ...mockPendingTransaction,
          status: TransactionServerStatusesEnum.success
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
