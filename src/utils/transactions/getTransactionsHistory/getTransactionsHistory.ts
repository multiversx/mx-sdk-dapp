import isEmpty from 'lodash.isempty';
import { ITransactionListItem } from 'lib/sdkDappUi';
import type { IGetHistoricalTransactionsParams } from 'types/transaction-list-item.types';
import {
  createTransactionsHistoryFromSessions,
  mapServerTransactionsToListItems
} from './helpers';

export const getTransactionsHistory = async ({
  transactionsSessions
}: IGetHistoricalTransactionsParams): Promise<ITransactionListItem[]> => {
  if (isEmpty(transactionsSessions)) {
    return [];
  }

  const signedTransactions =
    createTransactionsHistoryFromSessions(transactionsSessions);

  return mapServerTransactionsToListItems({
    transactions: signedTransactions
  });
};
