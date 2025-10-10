import { testAddress } from '__mocks__/accountConfig';
import { ITransactionListItem } from 'lib/sdkDappUi';
import { isServerTransactionPending } from 'store/actions/transactions/transactionStateByStatus';
import { TransactionServerStatusesEnum } from 'types';
import { getToastTransactionsStatus } from '../helpers/getToastTransactionsStatus';

jest.mock('store/actions/transactions/transactionStateByStatus');

describe('getToastTransactionsStatus', () => {
  const baseTransaction: ITransactionListItem = {
    status: TransactionServerStatusesEnum.success,
    asset: null,
    action: { name: 'Transfer' },
    link: 'https://explorer.example.com/tx/123',
    hash: '123',
    interactor: testAddress,
    directionLabel: 'To',
    amount: '1 EGLD',
    timestamp: Date.now()
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return "Transaction processed" for a single processed transaction', () => {
    const transactions: ITransactionListItem[] = [baseTransaction];
    (isServerTransactionPending as jest.Mock).mockReturnValue(false);

    const result = getToastTransactionsStatus(transactions);

    expect(result).toBe('Transaction processed');
  });

  it('should return "0 / 1 transactions processed" for a single pending transaction', () => {
    const transactions: ITransactionListItem[] = [
      { ...baseTransaction, status: TransactionServerStatusesEnum.pending }
    ];
    (isServerTransactionPending as jest.Mock).mockReturnValue(true);

    const result = getToastTransactionsStatus(transactions);

    expect(result).toBe('0 / 1 transactions processed');
  });

  it('should return "1 / 2 transactions processed" for multiple transactions with one processed', () => {
    const transactions: ITransactionListItem[] = [
      baseTransaction,
      {
        ...baseTransaction,
        status: TransactionServerStatusesEnum.pending,
        hash: '456',
        link: 'https://explorer.example.com/tx/456'
      }
    ];
    (isServerTransactionPending as jest.Mock).mockImplementation(
      (status) => status === TransactionServerStatusesEnum.pending
    );

    const result = getToastTransactionsStatus(transactions);

    expect(result).toBe('1 / 2 transactions processed');
  });

  it('should return "0 / 2 transactions processed" for multiple pending transactions', () => {
    const transactions: ITransactionListItem[] = [
      { ...baseTransaction, status: TransactionServerStatusesEnum.pending },
      {
        ...baseTransaction,
        status: TransactionServerStatusesEnum.pending,
        hash: '456',
        link: 'https://explorer.example.com/tx/456'
      }
    ];
    (isServerTransactionPending as jest.Mock).mockReturnValue(true);

    const result = getToastTransactionsStatus(transactions);

    expect(result).toBe('0 / 2 transactions processed');
  });

  it('should return "2 / 2 transactions processed" for multiple processed transactions', () => {
    const transactions: ITransactionListItem[] = [
      baseTransaction,
      {
        ...baseTransaction,
        hash: '456',
        link: 'https://explorer.example.com/tx/456'
      }
    ];
    (isServerTransactionPending as jest.Mock).mockReturnValue(false);

    const result = getToastTransactionsStatus(transactions);

    expect(result).toBe('2 / 2 transactions processed');
  });
});
