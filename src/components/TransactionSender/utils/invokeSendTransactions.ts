import { AxiosError } from 'axios';
import {
  SendBatchTransactionsPropsType,
  SendSignedBatchTransactionsReturnType,
  sendSignedTransactions
} from 'apiCalls/transactions';
import { sendSignedBatchTransactions } from 'apiCalls/transactions/sendSignedBatchTransactions';
import { newTransaction } from 'models/newTransaction';
import { setBatchTransactions } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { SignedTransactionsBodyType, SignedTransactionType } from 'types';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';
import { TransactionSenderType } from '../types/transactionSender.types';
import { handleSendBatchTransactionsErrors } from './handleSendBatchTransactionsErrors';
import { handleSendTransactionsErrors } from './handleSendTransactionsErrors';

const handleBatchSending = async ({
  session,
  sessionId,
  clearSignInfo,
  sendSignedBatchTransactionsAsync
}: {
  session: SignedTransactionsBodyType;
  sessionId: string;
  clearSignInfo?: () => void;
  sendSignedBatchTransactionsAsync: (
    props: SendBatchTransactionsPropsType
  ) => Promise<SendSignedBatchTransactionsReturnType>;
}) => {
  const { transactions } = session;
  if (!transactions) {
    return;
  }

  const grouping = session.customTransactionInformation?.grouping;
  if (!grouping) {
    return;
  }

  const groupedTransactions = transactions.reduce((acc, tx, index) => {
    const groupIndex = grouping.findIndex((group) => group.includes(index));
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(tx);
    return acc;
  }, [] as SignedTransactionType[][]);

  if (groupedTransactions.length === 0) {
    return;
  }

  const response = await sendSignedBatchTransactionsAsync({
    transactions: groupedTransactions,
    sessionId
  });

  const data = response?.data;

  if (response?.error || !data) {
    handleSendBatchTransactionsErrors({
      errorMessage: response?.error ?? 'Send batch error',
      sessionId,
      transactions,
      clearSignInfo
    });
    return;
  }

  if (data) {
    store.dispatch(setBatchTransactions(data));
  }

  return sequentialToFlatArray({
    transactions: data?.transactions
  }).map((tx) => tx.hash);
};

export const invokeSendTransactions = async ({
  session,
  sessionId,
  clearSignInfo,
  sendSignedBatchTransactionsAsync = sendSignedBatchTransactions,
  sendSignedTransactionsAsync = sendSignedTransactions
}: {
  session: SignedTransactionsBodyType;
  sessionId: string;
  clearSignInfo?: () => void;
} & TransactionSenderType) => {
  const { transactions } = session;
  if (!transactions) {
    return;
  }

  const grouping = session.customTransactionInformation?.grouping;

  if (grouping) {
    try {
      return await handleBatchSending({
        session,
        sessionId,
        clearSignInfo,
        sendSignedBatchTransactionsAsync
      });
    } catch (error) {
      handleSendBatchTransactionsErrors({
        errorMessage: (error as any).message,
        sessionId,
        transactions
      });
      return null;
    }
  }

  try {
    const transactionsToSend = transactions.map((tx) => newTransaction(tx));
    return await sendSignedTransactionsAsync(transactionsToSend);
  } catch (error) {
    handleSendTransactionsErrors({
      errorMessage:
        (error as AxiosError).response?.data?.message ?? (error as any).message,
      sessionId,
      clearSignInfo
    });
    return null;
  }
};
