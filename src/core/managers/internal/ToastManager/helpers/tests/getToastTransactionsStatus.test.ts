import { ITransactionListItem } from 'lib/sdkDappUi';
import { isServerTransactionPending } from 'store/actions/transactions/transactionStateByStatus';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { getToastTransactionsStatus } from '../getToastTransactionsStatus';
import { baseTransactionMock } from './baseTransactionMock';
jest.mock('store/actions/transactions/transactionStateByStatus', () => ({
  isServerTransactionPending: jest.fn()
}));

describe('getToastProceededStatus', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return correct message for single pending or completed transaction', () => {
    const pendingTx: ITransactionListItem = {
      ...baseTransactionMock,
      status: TransactionServerStatusesEnum.pending
    };

    const successTx: ITransactionListItem = {
      ...baseTransactionMock,
      status: TransactionServerStatusesEnum.success
    };

    (isServerTransactionPending as jest.Mock).mockImplementation(
      (status) => status === TransactionServerStatusesEnum.pending
    );

    expect(getToastTransactionsStatus([pendingTx])).toBe(
      '0 / 1 transactions processed'
    );

    expect(getToastTransactionsStatus([successTx])).toBe(
      'Transaction processed'
    );
  });

  it('should show fraction of completed transactions when handling multiple transactions with mixed states', () => {
    const transactions: ITransactionListItem[] = [
      {
        ...baseTransactionMock,
        status: TransactionServerStatusesEnum.success
      },
      {
        ...baseTransactionMock,
        status: TransactionServerStatusesEnum.pending,
        hash: '456',
        link: 'https://explorer.example.com/tx/456'
      },
      {
        ...baseTransactionMock,
        status: TransactionServerStatusesEnum.fail,
        hash: '789',
        link: 'https://explorer.example.com/tx/789'
      }
    ];

    (isServerTransactionPending as jest.Mock).mockImplementation(
      (status) => status === TransactionServerStatusesEnum.pending
    );

    expect(getToastTransactionsStatus(transactions)).toBe(
      '2 / 3 transactions processed'
    );
  });

  it('should handle empty array and transactions with undefined status', () => {
    const emptyTransactions: ITransactionListItem[] = [];
    const undefinedStatusTx: ITransactionListItem = {
      ...baseTransactionMock,
      status: undefined as unknown as TransactionServerStatusesEnum
    };

    (isServerTransactionPending as jest.Mock).mockReturnValue(true);

    expect(getToastTransactionsStatus(emptyTransactions)).toBe(
      '0 / 0 transactions processed'
    );

    expect(getToastTransactionsStatus([undefinedStatusTx])).toBe(
      '0 / 1 transactions processed'
    );
  });
});
