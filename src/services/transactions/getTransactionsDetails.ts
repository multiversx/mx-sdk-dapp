import { getTransactionByHashPromise } from 'apiCalls';
import { TransactionStatus } from 'models/TransactionStatus';
import { ServerTransactionType } from 'types';
import { delayWithPromise } from 'utils/delayWithPromise';

export const getTransactionsDetails = async (txHashes: string[]) => {
  const delayMs = 3000;
  let retries = 4;
  let transactions: ServerTransactionType[] | undefined;

  if (txHashes.length === 0) {
    return { data: transactions, success: false };
  }

  while (transactions === undefined && retries > 0) {
    try {
      await delayWithPromise(delayMs);

      const promiseResponse = await Promise.allSettled(
        txHashes.map((hash) => getTransactionByHashPromise(hash))
      );

      const apiTransactions = promiseResponse
        .map((response) =>
          response.status === 'fulfilled' ? response.value.data : undefined
        )
        .filter((tx) => tx !== undefined) as ServerTransactionType[];

      const success = apiTransactions.length > 0;

      if (success) {
        const foundAll = apiTransactions.length === txHashes.length;

        const hasPendingTx = apiTransactions.some((tx) => {
          const status = new TransactionStatus(tx.status);
          return status.isPending();
        });

        if ((foundAll && !hasPendingTx) || retries === 1) {
          transactions = apiTransactions;
          retries = 0;
        } else {
          retries -= 1;
        }
      } else {
        retries -= 1;
      }
    } catch (e) {
      retries -= 1;
    }
  }

  return { data: transactions, success: transactions !== undefined };
};
