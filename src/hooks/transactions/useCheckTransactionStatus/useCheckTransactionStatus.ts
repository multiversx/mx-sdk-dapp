import { useGetPendingTransactions } from 'hooks/transactions/useGetPendingTransactions';
import { GetTransactionsByHashesType } from 'types/transactions.types';
import { refreshAccount } from 'utils/account/refreshAccount';
import { getIsTransactionPending } from 'utils/transactions/transactionStateByStatus';
import { checkBatch } from './checkBatch';

export function useCheckTransactionStatus() {
  const { pendingTransactionsArray } = useGetPendingTransactions();

  async function checkTransactionStatus(props: {
    getTransactionsByHash?: GetTransactionsByHashesType;
    shouldRefreshBalance?: boolean;
  }) {
    const pendingBatches = pendingTransactionsArray
      .filter(
        ([_, session]) => !session?.customTransactionInformation?.grouping
      )
      .filter(([sessionId, transactionBatch]) => {
        const isPending =
          sessionId != null && getIsTransactionPending(transactionBatch.status);
        return isPending;
      });
    if (pendingBatches.length > 0) {
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
