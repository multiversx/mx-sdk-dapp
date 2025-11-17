import type { ITransactionListItem } from 'lib/sdkDappUi';
import {
  IGetHistoricalTransactionsParams,
  TransactionIconTypeEnum
} from 'types/transaction-list-item.types';
import { getTransactionsHistory as getTransactionsHistoryUtil } from 'utils/transactions/getTransactionsHistory';
import { TransactionsHistoryController } from '../TransactionsHistoryController';

jest.mock('utils/transactions/getTransactionsHistory');

describe('TransactionsHistoryController tests', () => {
  it('should call getTransactionsHistory util and return its response', async () => {
    const params: IGetHistoricalTransactionsParams = {
      transactionsSessions: {
        session1: {
          transactions: []
        }
      }
    };
    const mappedTransactions = [
      {
        hash: 'hash-1',
        transactionIcon: TransactionIconTypeEnum.ASSET
      }
    ] as unknown as ITransactionListItem[];

    jest
      .mocked(getTransactionsHistoryUtil)
      .mockResolvedValue(mappedTransactions);

    const result =
      await TransactionsHistoryController.getTransactionsHistory(params);

    expect(getTransactionsHistoryUtil).toHaveBeenCalledWith(params);
    expect(result).toBe(mappedTransactions);
  });
});
