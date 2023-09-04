import {
  SendBatchTransactionsPropsType,
  SendSignedBatchTransactionsReturnType,
  sendSignedTransactions
} from 'apiCalls/transactions';
import { sendSignedBatchTransactions } from 'apiCalls/transactions/sendSignedBatchTransactions';
import { newTransaction } from 'models/newTransaction';
import { setBatchTransactions } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { SignedTransactionsBodyType, SimpleTransactionType } from 'types';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';
import { TransactionSenderType } from '../types/transactionSender.types';
import { handleSendBatchTransactionsErrors } from './handleSendBatchTransactionsErrors';

const handleBatchSending = async ({
  session,
  sessionId,
  address,
  clearSignInfo,
  sendSignedBatchTransactionsAsync
}: {
  session: SignedTransactionsBodyType;
  sessionId: string;
  address: string;
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

  const regroupedTransactions = transactions.reduce((acc, tx, index) => {
    const groupIndex = grouping.findIndex((group) => group.includes(index));
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(tx as SimpleTransactionType);
    return acc;
  }, [] as SimpleTransactionType[][]);

  console.log('regroupedTransactions', regroupedTransactions);

  const groupedTransactions = grouping?.map((item: number[]) =>
    item
      .map((index) => transactions[index])
      .filter((transaction) => Boolean(transaction))
  );

  console.log('groupedTransactions', groupedTransactions);

  if (!groupedTransactions) {
    return;
  }

  const response = await sendSignedBatchTransactionsAsync({
    transactions: groupedTransactions,
    sessionId,
    address
  });

  if (response?.error || !response?.data) {
    handleSendBatchTransactionsErrors({
      errorMessage: response?.error ?? 'Send batch error',
      sessionId,
      transactions,
      clearSignInfo
    });
    return;
  }

  store.dispatch(setBatchTransactions(response.data));

  return sequentialToFlatArray({
    transactions: response?.data.transactions
  }).map((tx) => tx.hash);
};

export const invokeSendTransactions = async ({
  session,
  sessionId,
  address,
  clearSignInfo,
  sendSignedBatchTransactionsAsync = sendSignedBatchTransactions,
  sendSignedTransactionsAsync = sendSignedTransactions
}: {
  session: SignedTransactionsBodyType;
  sessionId: string;
  address: string;
  clearSignInfo?: () => void;
} & TransactionSenderType) => {
  const { transactions } = session;
  if (!transactions) {
    return;
  }

  const grouping = session.customTransactionInformation?.grouping;

  if (grouping) {
    return await handleBatchSending({
      session,
      sessionId,
      address,
      clearSignInfo,
      sendSignedBatchTransactionsAsync
    });
  }

  const transactionsToSend = transactions.map((tx) => newTransaction(tx));
  return await sendSignedTransactionsAsync(transactionsToSend);
};
