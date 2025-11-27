import { TransactionIconTypeEnum } from 'types/transaction-list-item.types';
import { SignedTransactionType } from 'types/transactions.types';
import { getTransactionsHistory } from '../getTransactionsHistory';

jest.mock('../helpers/createTransactionsHistoryFromSessions', () => ({
  createTransactionsHistoryFromSessions: jest.fn()
}));

jest.mock('../helpers/mapServerTransactionsToListItems', () => ({
  mapServerTransactionsToListItems: jest.fn()
}));

const {
  createTransactionsHistoryFromSessions:
    mockCreateTransactionsHistoryFromSessions
} = jest.requireMock('../helpers/createTransactionsHistoryFromSessions') as {
  createTransactionsHistoryFromSessions: jest.Mock;
};

const {
  mapServerTransactionsToListItems: mockMapServerTransactionsToListItems
} = jest.requireMock('../helpers/mapServerTransactionsToListItems') as {
  mapServerTransactionsToListItems: jest.Mock;
};

const mockTransactionsSessions = {
  '1': { transactions: [{ hash: 'hash1' } as SignedTransactionType] }
};

const mockTransactionListItems = [
  { hash: 'hash-1', transactionIcon: TransactionIconTypeEnum.ASSET }
] as any;

describe('getTransactionsHistory tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns empty array when sessions object is empty', async () => {
    const result = await getTransactionsHistory({ transactionsSessions: {} });

    expect(result).toEqual([]);
    expect(mockCreateTransactionsHistoryFromSessions).not.toHaveBeenCalled();
    expect(mockMapServerTransactionsToListItems).not.toHaveBeenCalled();
  });

  it('processes non-empty sessions through helpers', async () => {
    const signedTransactions = [{ hash: 'hash1' }] as SignedTransactionType[];
    mockCreateTransactionsHistoryFromSessions.mockReturnValue(
      signedTransactions
    );
    mockMapServerTransactionsToListItems.mockResolvedValue(
      mockTransactionListItems
    );

    const result = await getTransactionsHistory({
      transactionsSessions: mockTransactionsSessions
    });

    expect(mockCreateTransactionsHistoryFromSessions).toHaveBeenCalledWith(
      mockTransactionsSessions
    );
    expect(mockMapServerTransactionsToListItems).toHaveBeenCalledWith({
      transactions: signedTransactions
    });
    expect(result).toBe(mockTransactionListItems);
  });
});
