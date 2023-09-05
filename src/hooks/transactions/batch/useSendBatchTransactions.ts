import { useCallback, useState } from 'react';
import {
  sendSignedBatchTransactions,
  SendBatchTransactionsPropsType
} from 'apiCalls/transactions/sendSignedBatchTransactions';
import { useDispatch } from 'reduxStore/DappProviderContext';
import {
  setBatchTransactions,
  setTxSubmittedModal,
  updateSignedTransactions
} from 'reduxStore/slices';
import { removeBatchTransactions } from 'services/transactions';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { BatchTransactionStatus } from 'types/serverTransactions.types';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';

export const useSendBatchTransactions = () => {
  const dispatch = useDispatch();
  const [batchId, setBatchId] = useState<string>();

  const send = useCallback(
    async (params: SendBatchTransactionsPropsType) => {
      const response = await sendSignedBatchTransactions(params);
      const error = response?.error;
      const data = response?.data;

      if (data) {
        dispatch(setBatchTransactions(data));

        const submittedModalPayload = {
          sessionId: params.sessionId,
          submittedMessage: 'submitted'
        };

        dispatch(setTxSubmittedModal(submittedModalPayload));

        const transactions = sequentialToFlatArray({
          transactions: params.transactions
        }).map((transaction) => ({
          ...transaction,
          status: TransactionServerStatusesEnum.pending
        }));

        dispatch(
          updateSignedTransactions({
            sessionId: params.sessionId,
            status: TransactionBatchStatusesEnum.sent,
            transactions
          })
        );
      }
      setBatchId(data?.id);

      const isBatchSentSuccessful =
        data?.status === BatchTransactionStatus.success;
      const isBatchStatusValid =
        isBatchSentSuccessful ||
        data?.status !== BatchTransactionStatus.invalid;

      if (Boolean(error) || !isBatchStatusValid) {
        console.error('Unable to send batch transactions');
        removeBatchTransactions(data?.id ?? '');
      }

      return response;
    },
    [dispatch]
  );

  return {
    send,
    batchId
  };
};
