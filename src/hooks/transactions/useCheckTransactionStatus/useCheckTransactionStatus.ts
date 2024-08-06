import { useGetPendingTransactions } from 'hooks/transactions/useGetPendingTransactions';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { refreshAccount } from 'utils/account/refreshAccount';
import { getIsTransactionPending } from 'utils/transactions/transactionStateByStatus';
import { checkBatch } from './checkBatch';

export function useCheckTransactionStatus() {
  const { pendingTransactionsArray } = useGetPendingTransactions();

  async function checkTransactionStatus(
    props: TransactionsTrackerType & {
      shouldRefreshBalance?: boolean;
    }
  ) {
    const pendingBatches = pendingTransactionsArray
      .filter(([, session]) => !session?.customTransactionInformation?.grouping)
      .filter(
        ([sessionId, session]) =>
          sessionId != null && getIsTransactionPending(session.status)
      );

    if (pendingBatches.length > 0) {
      for (const [sessionId, transactionBatch] of pendingBatches) {
        await checkBatch({
          sessionId,
          transactionBatch,
          ...props
        });
      }
    }

    if (pendingTransactionsArray.length > 0 && props.shouldRefreshBalance) {
      // Refresh account only if we have pending transactions
      await refreshAccount();
    }
  }

  return checkTransactionStatus;
}
