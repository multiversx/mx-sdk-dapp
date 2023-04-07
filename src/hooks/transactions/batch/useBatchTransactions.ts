import { useCallback, useState } from 'react';
import {
  sendBatchTransactions,
  SendBatchTransactionsPropsType
} from 'services/transactions/sendBatchTransactions';
import { BatchTransactionStatus } from 'types';
import { IPlainTransactionObject } from '@multiversx/sdk-core/out/interface';
import { removeSignedTransaction } from 'services';
import { useDispatch } from 'reduxStore/DappProviderContext';
import {
  clearBatchTransactions,
  updateBatchTransactions
} from 'reduxStore/slices';

export const useBatchTransactions = () => {
  const dispatch = useDispatch();

  const [transactions, setTransactions] = useState<IPlainTransactionObject[]>(
    []
  );
  const [batchId, setBatchId] = useState<string>();

  const send = useCallback(async (params: SendBatchTransactionsPropsType) => {
    const response = await sendBatchTransactions(params);
    const error = response?.error;
    const data = response?.data;

    if (data) {
      dispatch(updateBatchTransactions(data));
    }

    setBatchId(data?.id);
    setTransactions(data?.transactions ?? []);

    const isBatchSentSuccessful =
      data?.status === BatchTransactionStatus.success;
    const isBatchStatusValid =
      isBatchSentSuccessful || data?.status !== BatchTransactionStatus.invalid;

    console.log({
      error,
      data,
      isBatchSentSuccessful,
      isBatchStatusValid
    });

    if (Boolean(error) || !isBatchStatusValid) {
      console.error('Unable to send batch transactions');
      const sessionId = params?.sessionId;
      const batchId = data?.id ?? '';

      removeSignedTransaction(sessionId);
      dispatch(
        clearBatchTransactions({
          batchId
        })
      );
    }
  }, []);

  return {
    send,
    batchId,
    transactions
  };
};
