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
    console.log('pendingTransactionsArray', pendingTransactionsArray);

    const pendingBatches = pendingTransactionsArray
      .filter(
        ([_, session]) => !session?.customTransactionInformation?.grouping
      )
      .filter(([sessionId, session]) => {
        const isPending =
          sessionId != null && getIsTransactionPending(session.status);
        return isPending;
      });

    console.log('pendingBatches', pendingBatches);

    if (pendingBatches.length > 0) {
      console.log('pendingBatches.length > 0', pendingBatches);
      for (const [sessionId, transactionBatch] of pendingBatches) {
        await checkBatch({
          sessionId,
          transactionBatch,
          ...props
        });
      }
    }
    if (props.shouldRefreshBalance) {
      refreshAccount();
    }
  }

  return checkTransactionStatus;
}
