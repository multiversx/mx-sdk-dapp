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

export const pendingSessionsByHashesSelector =
  (hashes: string[]) =>
  (state: StoreType): Record<string, SessionTransactionType> => {
    const pendingSessions = pendingTransactionsSessionsSelector(state);
    const lookup = new Set(hashes);
    const matchingSessions: Record<string, SessionTransactionType> = {};

    Object.entries(pendingSessions).forEach(([sessionId, data]) => {
      const hasMatchingTransaction = data.transactions.some(
        ({ hash }) => hash != null && lookup.has(hash)
      );

      if (hasMatchingTransaction) {
        matchingSessions[sessionId] = data;
      }
    });

    return matchingSessions;
  };

export const successfulTransactionsSessionsSelector = ({
  transactions: state
}: StoreType): Record<string, SessionTransactionType> => {
  const successfulSessions: Record<string, SessionTransactionType> = {};

  Object.entries(state).forEach(([sessionId, data]) => {
    const hasSuccessfulTransactions = data.transactions.some(
      ({ status }) => status === TransactionServerStatusesEnum.success
    );

    const isSessionSettled = [
      TransactionBatchStatusesEnum.sent,
      TransactionBatchStatusesEnum.success
    ]
      .map((el) => String(el))
      .includes(String(data.status));

    if (hasSuccessfulTransactions && isSessionSettled) {
      successfulSessions[sessionId] = data;
    }
  });

  return successfulSessions;
};

export const failedTransactionsSessionsSelector = ({
  transactions: state
}: StoreType): Record<string, SessionTransactionType> => {
  const failedSessions: Record<string, SessionTransactionType> = {};

  Object.entries(state).forEach(([sessionId, data]) => {
    const hasFailedTransactions = data.transactions.some(
      ({ status }) =>
        status &&
        [
          TransactionServerStatusesEnum.fail,
          TransactionServerStatusesEnum.invalid,
          TransactionBatchStatusesEnum.cancelled,
          TransactionBatchStatusesEnum.timedOut
        ]
          .map((el) => String(el))
          .includes(status)
    );
    const isSessionSettled = [
      TransactionBatchStatusesEnum.sent,
      TransactionBatchStatusesEnum.fail,
      TransactionBatchStatusesEnum.invalid,
      TransactionBatchStatusesEnum.timedOut,
      TransactionBatchStatusesEnum.cancelled
    ]
      .map((el) => String(el))
      .includes(String(data.status));

    if (hasFailedTransactions && isSessionSettled) {
      failedSessions[sessionId] = data;
    }
  });

  return failedSessions;
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
        ]
          .map((el) => String(el))
          .includes(transaction.status)
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
        ]
          .map((el) => String(el))
          .includes(transaction.status)
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
