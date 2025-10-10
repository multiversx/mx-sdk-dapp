import { current } from 'immer';
import { getTransactionsSessionStatus } from 'managers/TransactionManager/helpers/getTransactionsStatus';
import { getStore } from 'store/store';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import {
  TransactionsDisplayInfoType,
  SignedTransactionType
} from 'types/transactions.types';

export type CreateTransactionsSessionType = {
  transactions: SignedTransactionType[];
  transactionsDisplayInfo?: TransactionsDisplayInfoType;
  status: TransactionBatchStatusesEnum | TransactionServerStatusesEnum;
  sessionInformation?: any;
};

export const createTransactionsSession = ({
  transactions,
  transactionsDisplayInfo,
  status,
  sessionInformation
}: CreateTransactionsSessionType) => {
  const sessionId = Date.now().toString();
  getStore().setState(
    ({ transactions: state }) => {
      state[sessionId] = {
        transactions,
        status,
        transactionsDisplayInfo,
        interpretedTransactions: {},
        sessionInformation
      };
    },
    false,
    'createTransactionsSession'
  );
  return sessionId;
};

export const updateSessionStatus = ({
  sessionId,
  status,
  errorMessage
}: {
  sessionId: string;
  status: TransactionBatchStatusesEnum;
  errorMessage?: string;
}) => {
  getStore().setState(
    ({ transactions: state }) => {
      if (!state[sessionId]) {
        return;
      }
      const transactionsDisplayInfo =
        current(state[sessionId]).transactionsDisplayInfo ?? {};

      const newErrorMessage =
        errorMessage || transactionsDisplayInfo?.errorMessage;

      state[sessionId].status = status;
      state[sessionId].errorMessage = newErrorMessage;
      state[sessionId].transactionsDisplayInfo = {
        ...transactionsDisplayInfo,
        errorMessage: newErrorMessage
      };
    },
    false,
    'updateTransactionsSession'
  );
};

export const updateTransactionStatus = ({
  sessionId,
  transaction: updatedTransaction
}: {
  sessionId: string;
  transaction: SignedTransactionType;
}): TransactionBatchStatusesEnum | null => {
  let newStatus: TransactionBatchStatusesEnum | null = null;
  getStore().setState(
    ({ transactions: state }) => {
      const transactions = state[sessionId]?.transactions;
      if (transactions != null) {
        state[sessionId].transactions = transactions.map((transaction) => {
          if (transaction.hash === updatedTransaction.hash) {
            return {
              ...transaction,
              ...(updatedTransaction ?? {})
            };
          }
          return transaction;
        });

        const status = getTransactionsSessionStatus([
          ...state[sessionId].transactions // Create a copy of the transactions array to avoid Proxy issues
        ]);

        if (status) {
          updateSessionStatus({
            sessionId,
            status
          });
          newStatus = status;
        }
      }
    },
    false,
    'updateTransactionStatus'
  );

  return newStatus;
};

export const clearCompletedTransactions = () => {
  getStore().setState(
    ({ transactions: state, toasts: toastsState }) => {
      const sessionIds = Object.keys(state);

      const completedSessionIds = sessionIds.filter((sessionId) => {
        const session = state[sessionId];
        if (!session) {
          return false;
        }

        const { status } = session;

        const isPending =
          status === TransactionServerStatusesEnum.pending ||
          status === TransactionBatchStatusesEnum.signed ||
          status === TransactionBatchStatusesEnum.sent;

        return !isPending;
      });

      completedSessionIds.forEach((sessionId) => {
        delete state[sessionId];
      });

      const filteredTransactionToasts = toastsState.transactionToasts.filter(
        (toast) => !completedSessionIds.includes(toast.toastId)
      );

      toastsState.transactionToasts = filteredTransactionToasts;
    },
    false,
    'clearCompletedTransactions'
  );
};
