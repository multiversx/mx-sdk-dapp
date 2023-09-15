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
import { updateSignedTransactionsCustomTransactionInformationState } from 'services/transactions/updateSignedTransactions';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { BatchTransactionStatus } from 'types/serverTransactions.types';
import { generateBatchTransactionsGrouping } from 'utils/transactions/batch/generateBatchTransactionsGrouping';
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

        // Ensure the transaction custom information is updated with the desired values from the dApp when the transactions are send on demand
        const grouping = generateBatchTransactionsGrouping(params.transactions);

        updateSignedTransactionsCustomTransactionInformationState({
          sessionId: params.sessionId,
          customTransactionInformationOverrides: {
            ...(params.customTransactionInformationOverrides ?? {}),
            // Mandatory override. Otherwise, the transactions will not be grouped and the transaction tracker will not work properly (doesn't know to differentiate between transactions sent in batch and the transactions sent using normal flow)
            grouping
          }
        });

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
