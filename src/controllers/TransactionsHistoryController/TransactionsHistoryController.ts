import { IGetHistoricalTransactionsParams } from 'types/transaction-list-item.types';
import { getTransactionsHistory } from 'utils/transactions';

// TODO: Will replace TransactionsTableController in the future
export const TransactionsHistoryController = {
  async getTransactionsHistory(params: IGetHistoricalTransactionsParams) {
    const transactions = await getTransactionsHistory(params);
    return transactions;
  }
};
