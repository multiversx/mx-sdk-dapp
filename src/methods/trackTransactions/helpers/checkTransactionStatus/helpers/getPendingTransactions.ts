import { getIsTransactionPending } from 'store/actions/transactions/transactionStateByStatus';
import { SignedTransactionType } from 'types/transactions.types';

export function getPendingTransactions(
  transactions: SignedTransactionType[]
): SignedTransactionType[] {
  const pendingTransactions = transactions.reduce(
    (acc: SignedTransactionType[], transaction) => {
      if (
        transaction.hash != null &&
        getIsTransactionPending(transaction.status)
      ) {
        acc.push(transaction);
      }
      return acc;
    },
    []
  );
  return pendingTransactions;
}
