import { useCallback } from 'react';
import { useGetAccount } from 'hooks/account';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateSignedTransactionStatus } from 'reduxStore/slices';
import { getTransactionsDetails } from 'services/transactions/getTransactionsDetails';
import {
  ServerTransactionType,
  SignedTransactionType,
  TransactionServerStatusesEnum
} from 'types';
import { refreshAccount } from 'utils/account/refreshAccount';

// TODO: This function seems duplicate to the manageTransaction from checkBatch.ts file
export function useUpdateTrackedTransactions() {
  const dispatch = useDispatch();
  const { address } = useGetAccount();

  const handleSuccess = useCallback(
    ({
      sessionId,
      dropUnprocessedTransactions,
      serverTransactions,
      signedTransactions
    }: {
      sessionId: string;
      dropUnprocessedTransactions?: boolean;
      serverTransactions: ServerTransactionType[];
      signedTransactions: SignedTransactionType[];
    }) => {
      for (const transaction of signedTransactions) {
        const apiTx = serverTransactions.find(
          (tx) => tx.txHash === transaction.hash
        );

        if (!apiTx) {
          if (dropUnprocessedTransactions) {
            dispatch(
              updateSignedTransactionStatus({
                sessionId,
                status: TransactionServerStatusesEnum.fail,
                transactionHash: transaction.hash
              })
            );
          }
          continue;
        }

        dispatch(
          updateSignedTransactionStatus({
            sessionId,
            status: apiTx.status as TransactionServerStatusesEnum,
            transactionHash: transaction.hash,
            serverTransaction: apiTx
          })
        );
      }
    },
    [dispatch]
  );

  return useCallback(
    async (props?: {
      sessionId: string;
      isFailed?: boolean;
      dropUnprocessedTransactions?: boolean;
      shouldRefreshBalance?: boolean;
      transactions?: SignedTransactionType[];
    }) => {
      if (!props) {
        return;
      }

      const { transactions, isFailed, sessionId } = props;

      if (!transactions || transactions.length === 0) {
        return;
      }

      if (isFailed) {
        for (const transaction of transactions) {
          dispatch(
            updateSignedTransactionStatus({
              sessionId,
              status: TransactionServerStatusesEnum.fail,
              transactionHash: transaction.hash
            })
          );
        }
        return;
      }

      const { data, success } = await getTransactionsDetails(
        transactions.map(({ hash }) => hash).filter((hash) => Boolean(hash))
      );

      if (success && data) {
        handleSuccess({
          sessionId,
          dropUnprocessedTransactions: props.dropUnprocessedTransactions,
          serverTransactions: data,
          signedTransactions: transactions
        });
      }

      if (props.shouldRefreshBalance) {
        await refreshAccount();
      }
    },
    [dispatch, address, handleSuccess]
  );
}
