import { updateSignedTransactions } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import {
  SignedTransactionType,
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types';

export const handleSendBatchTransactionsErrors = ({
  errorMessage,
  sessionId,
  transactions,
  clearSignInfo
}: {
  errorMessage: string;
  sessionId: string;
  transactions: SignedTransactionType[];
  clearSignInfo?: () => void;
}) => {
  console.error('Unable to send transactions', errorMessage);
  store.dispatch(
    updateSignedTransactions({
      sessionId,
      status: TransactionBatchStatusesEnum.fail,
      errorMessage,
      transactions: transactions.map((transaction) => ({
        ...transaction,
        status: TransactionServerStatusesEnum.notExecuted
      }))
    })
  );
  clearSignInfo?.();
};
