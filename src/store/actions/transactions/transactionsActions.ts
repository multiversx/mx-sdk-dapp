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

export const createTransactionsSession = ({
  transactions,
  transactionsDisplayInfo,
  status
}: {
  transactions: SignedTransactionType[];
  transactionsDisplayInfo?: TransactionsDisplayInfoType;
  status: TransactionBatchStatusesEnum | TransactionServerStatusesEnum;
}) => {
  const sessionId = Date.now().toString();
  getStore().setState(
    ({ transactions: state }) => {
      state[sessionId] = {
        transactions,
        status,
        transactionsDisplayInfo,
        interpretedTransactions: {}
      };
    },
    false,
    'createTransactionsSession'
  );
  return sessionId;
};

export const updateTransactionsSession = ({
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
      state[sessionId].status = status;
      state[sessionId].errorMessage = errorMessage;
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
}) => {
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

        const status = getTransactionsSessionStatus(transactions);
        if (status) {
          state[sessionId].status = status;
        }
      }
    },
    false,
    'updateTransactionStatus'
  );
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
