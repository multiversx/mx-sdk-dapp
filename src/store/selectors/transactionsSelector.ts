import { StoreType } from 'store/store.types';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import {
  SignedTransactionType,
  SessionTransactionType
} from 'types/transactions.types';

export const transactionsSliceSelector = ({ transactions }: StoreType) =>
  transactions;

export const pendingTransactionsSessionsSelector = ({
  transactions: state
}: StoreType): Record<string, SessionTransactionType> => {
  const pendingSessions: Record<string, SessionTransactionType> = {};

  Object.entries(state).forEach(([sessionId, data]) => {
    const hasPendingTransactions = data.transactions.some(
      ({ status }) => status === TransactionServerStatusesEnum.pending
    );
    if (hasPendingTransactions && data.status === 'sent') {
      pendingSessions[sessionId] = data;
    }
  });

  return pendingSessions;
};

export const pendingTransactionsSelector = ({
  transactions: state
}: StoreType): SignedTransactionType[] => {
  const pendingTransactions: SignedTransactionType[] = [];

  Object.values(state).forEach(({ transactions }) => {
    transactions.forEach((transaction) => {
      if (
        transaction.status &&
        [
          TransactionServerStatusesEnum.pending,
          TransactionBatchStatusesEnum.sent
        ].includes(transaction.status)
      ) {
        pendingTransactions.push(transaction);
      }
    });
  });

  return pendingTransactions;
};

export const successfulTransactionsSelector = ({
  transactions: state
}: StoreType) => {
  const successfulTransactions: SignedTransactionType[] = [];

  Object.values(state).forEach(({ transactions }) => {
    transactions.forEach((transaction) => {
      if (transaction.status === TransactionServerStatusesEnum.success) {
        successfulTransactions.push(transaction);
      }
    });
  });

  return successfulTransactions;
};

export const failedTransactionsSelector = ({
  transactions: state
}: StoreType) => {
  const failedTransactions: SignedTransactionType[] = [];

  Object.values(state).forEach(({ transactions }) => {
    transactions.forEach((transaction) => {
      if (
        transaction.status &&
        [
          TransactionServerStatusesEnum.fail,
          TransactionServerStatusesEnum.invalid,
          TransactionBatchStatusesEnum.cancelled,
          TransactionBatchStatusesEnum.timedOut
        ].includes(transaction.status)
      ) {
        failedTransactions.push(transaction);
      }
    });
  });

  return failedTransactions;
};

export const timedOutTransactionsSelector = ({
  transactions: state
}: StoreType) => {
  const timedOutTransactions: SignedTransactionType[] = [];

  Object.values(state).forEach(({ transactions }) => {
    transactions.forEach((transaction) => {
      if (transaction.status === TransactionBatchStatusesEnum.timedOut) {
        timedOutTransactions.push(transaction);
      }
    });
  });

  return timedOutTransactions;
};
