import { mockPendingTransaction } from '__mocks__';
import { getTransactionsSessionStatus } from 'managers/TransactionManager/helpers/getTransactionsStatus';
import {
  updateSessionStatus,
  updateTransactionStatus
} from 'store/actions/transactions/transactionsActions';
import { getState } from 'store/store';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import { updateTransactionAndSessionStatus } from '../updateTransactionAndSessionStatus';

jest.mock('managers/TransactionManager/helpers/getTransactionsStatus');
jest.mock('store/actions/transactions/transactionsActions');
jest.mock('store/store');

const mockGetTransactionsSessionStatus =
  getTransactionsSessionStatus as jest.MockedFunction<
    typeof getTransactionsSessionStatus
  >;
const mockUpdateTransactionStatus =
  updateTransactionStatus as jest.MockedFunction<
    typeof updateTransactionStatus
  >;
const mockUpdateSessionStatus = updateSessionStatus as jest.MockedFunction<
  typeof updateSessionStatus
>;
const mockGetState = getState as jest.MockedFunction<typeof getState>;

describe('updateTransactionAndSessionStatus', () => {
  const sessionId = 'test-session-id';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update transaction, get session status and update session status', () => {
    const mockTransactions = [mockPendingTransaction];

    mockGetState.mockReturnValue({
      transactions: {
        [sessionId]: {
          transactions: mockTransactions
        }
      }
    } as any);

    mockGetTransactionsSessionStatus.mockReturnValue(
      TransactionBatchStatusesEnum.success
    );

    const result = updateTransactionAndSessionStatus({
      sessionId,
      transaction: mockPendingTransaction
    });

    expect(mockUpdateTransactionStatus).toHaveBeenCalledWith({
      sessionId,
      transaction: mockPendingTransaction
    });

    expect(mockGetState).toHaveBeenCalled();
    expect(mockGetTransactionsSessionStatus).toHaveBeenCalledWith(
      mockTransactions
    );

    expect(mockUpdateSessionStatus).toHaveBeenCalledWith({
      sessionId,
      status: TransactionBatchStatusesEnum.success
    });

    expect(result).toBe(TransactionBatchStatusesEnum.success);
  });
});
