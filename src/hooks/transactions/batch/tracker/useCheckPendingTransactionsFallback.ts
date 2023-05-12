import { useCallback, useEffect } from 'react';
import { useCheckTransactionStatus } from 'hooks/transactions/useCheckTransactionStatus';
import { checkBatch } from 'hooks/transactions/useCheckTransactionStatus/checkBatch';
import { refreshAccount } from 'utils/account/refreshAccount';
import { getTransactionsStatus } from 'utils/transactions/batch/getTransactionsStatus';
import { useGetSignedTransactions } from '../../useGetSignedTransactions';

/**
 * Fallback mechanism to check pending transactions in case of no batch transactions found
 * Resolves the toast
 * */
export const useCheckPendingTransactionsFallback = (props?: {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
}) => {
  const { signedTransactionsArray } = useGetSignedTransactions();
  const checkTransactionsStatuses = useCheckTransactionStatus();

  const onSuccess = props?.onSuccess;
  const onFail = props?.onFail;

  const checkTransactions = useCallback(async () => {
    for (const [sessionId, session] of signedTransactionsArray) {
      const { isPending, isSuccessful, isFailed } = getTransactionsStatus({
        transactions: session.transactions ?? []
      });
      const completed = !isPending;

      if (completed) {
        if (isSuccessful) {
          onSuccess?.(null);
        }

        if (isFailed) {
          onFail?.(null, 'Error processing batch transactions. Status: failed');
        }
      } else {
        await checkBatch({
          sessionId,
          transactionBatch: session
        });
      }
    }

    await refreshAccount();
  }, [signedTransactionsArray, checkTransactionsStatuses, onSuccess, onFail]);

  useEffect(() => {
    console.log({
      signedTransactionsArray
    });
    checkTransactions();
  }, [signedTransactionsArray, checkTransactions]);
};
