import { GetTransactionsByHashesType } from 'contexts/types';
import { getIsTransactionPending } from 'utils';
import { useGetPendingTransactions } from '../../../services/transactions/hooks';
import checkBatch from './checkBatch';

export function useCheckTransactionStatus() {
  const { pendingTransactionsArray } = useGetPendingTransactions();

  function checkTransactionStatus(
    getTransactionsByHash?: GetTransactionsByHashesType
  ) {
    const pendingBatches = pendingTransactionsArray.filter(
      ([sessionId, transactionBatch]) => {
        const isPending =
          sessionId != null && getIsTransactionPending(transactionBatch.status);
        return isPending;
      }
    );
    if (pendingBatches.length > 0) {
      pendingBatches.forEach(([sessionId, transactionBatch]) => {
        checkBatch({
          sessionId,
          transactionBatch,
          getTransactionsByHash
        });
      });
    }
  }

  return checkTransactionStatus;
}

export default useCheckTransactionStatus;
