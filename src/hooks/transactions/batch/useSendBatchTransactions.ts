import { useCallback, useState } from 'react';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { setBatchTransactions } from 'reduxStore/slices';
import {
  removeBatchTransactions,
  removeSignedTransaction
} from 'services/transactions';
import {
  sendBatchTransactions,
  SendBatchTransactionsPropsType
} from 'services/transactions/sendBatchTransactions';
import { BatchTransactionStatus } from 'types/serverTransactions.types';

export const useSendBatchTransactions = () => {
  const dispatch = useDispatch();
  const [batchId, setBatchId] = useState<string>();

  const send = useCallback(
    async (params: SendBatchTransactionsPropsType) => {
      const response = await sendBatchTransactions(params);
      const error = response?.error;
      const data = response?.data;

      if (data) {
        dispatch(setBatchTransactions(data));
      }
      setBatchId(data?.id);

      const isBatchSentSuccessful =
        data?.status === BatchTransactionStatus.success;
      const isBatchStatusValid =
        isBatchSentSuccessful ||
        data?.status !== BatchTransactionStatus.invalid;

      if (Boolean(error) || !isBatchStatusValid) {
        console.error('Unable to send batch transactions');
        const sessionId = params?.sessionId;
        const batchId = data?.id ?? '';

        removeSignedTransaction(sessionId);
        removeBatchTransactions(batchId);
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
