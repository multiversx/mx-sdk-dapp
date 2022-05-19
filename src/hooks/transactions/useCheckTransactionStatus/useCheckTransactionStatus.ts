import { GetTransactionsByHashesType } from 'contexts/types';
import { getIsTransactionPending, refreshAccount } from 'utils';
import { useGetPendingTransactions } from '../../../services/transactions/hooks';
import checkBatch from './checkBatch';

export function useCheckTransactionStatus() {
  const { pendingTransactionsArray } = useGetPendingTransactions();

  async function checkTransactionStatus(props: {
    getTransactionsByHash?: GetTransactionsByHashesType;
    shouldRefrehsBalance?: boolean;
  }) {
    const pendingBatches = pendingTransactionsArray.filter(
      ([sessionId, transactionBatch]) => {
        const isPending =
          sessionId != null && getIsTransactionPending(transactionBatch.status);
        return isPending;
      }
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
    if (props.shouldRefrehsBalance) {
      refreshAccount();
    }
  }

  return checkTransactionStatus;
}

export default useCheckTransactionStatus;
