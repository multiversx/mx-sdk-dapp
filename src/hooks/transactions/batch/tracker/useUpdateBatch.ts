import { useCallback } from 'react';
import { useGetAccount } from 'hooks/account';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateSignedTransactionStatus } from 'reduxStore/slices';
import { getTransactionsDetails } from 'services/transactions/getTransactionsDetails';
import {
  ServerTransactionType,
  SignedTransactionType,
  TransactionServerStatusesEnum
} from 'types';
import { refreshAccount } from 'utils/account/refreshAccount';

export function useUpdateBatch() {
  const dispatch = useDispatch();
  const { signedTransactions, signedTransactionsArray } =
    useGetSignedTransactions();
  const { address } = useGetAccount();

  // const handleBatchErrors = useCallback(
  //   ({
  //     sessionId,
  //     batchTransactions
  //   }: {
  //     sessionId: string;
  //     batchTransactions: SignedTransactionType[];
  //   }) => {
  //     for (const transaction of batchTransactions) {
  //       if (!signedTransactions) {
  //         continue;
  //       }
  //
  //       const signedTransaction = signedTransactions[
  //         sessionId
  //       ]?.transactions?.find((tx) => tx.hash === transaction.hash);
  //
  //       if (!signedTransaction) {
  //         continue;
  //       }
  //
  //       dispatch(
  //         updateSignedTransactionStatus({
  //           sessionId,
  //           status: TransactionServerStatusesEnum.notExecuted,
  //           transactionHash: signedTransaction.hash
  //         })
  //       );
  //     }
  //   },
  //   [dispatch, signedTransactions]
  // );

  const handleBatchSuccess = useCallback(
    ({
      sessionId,
      dropUnprocessedTransactions,
      serverTransactions,
      batchTransactions
    }: {
      sessionId: string;
      dropUnprocessedTransactions?: boolean;
      serverTransactions: ServerTransactionType[];
      batchTransactions: SignedTransactionType[];
    }) => {
      for (const transaction of batchTransactions) {
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
            transactionHash: transaction.hash
          })
        );
      }
    },
    [dispatch]
  );

  return useCallback(
    async (props?: {
      batchId: string;
      isBatchFailed?: boolean;
      dropUnprocessedTransactions?: boolean;
      shouldRefreshBalance?: boolean;
    }) => {
      if (!props) {
        return;
      }

      const sessionId = props.batchId.split('-')[0];
      const session = signedTransactions[sessionId];

      if (!session) {
        return;
      }

      const { transactions } = session;

      if (!transactions || transactions.length === 0) {
        return;
      }

      if (props.isBatchFailed) {
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
        handleBatchSuccess({
          sessionId,
          dropUnprocessedTransactions: props.dropUnprocessedTransactions,
          serverTransactions: data,
          batchTransactions: transactions
        });
      }
      // else {
      //   handleBatchErrors({
      //     sessionId,
      //     batchTransactions: transactions
      //   });
      // }

      if (props.shouldRefreshBalance) {
        await refreshAccount();
      }
    },
    [
      dispatch,
      signedTransactionsArray,
      address,
      // handleBatchErrors,
      handleBatchSuccess
    ]
  );
}
