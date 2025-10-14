import { current } from 'immer';
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

export function createTransactionsSession({
  transactions,
  transactionsDisplayInfo,
  status,
  sessionInformation
}: CreateTransactionsSessionType) {
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
    {
      type: 'createTransactionsSession',
      // @ts-ignore
      payload: {
        value: {
          transactions,
          status,
          transactionsDisplayInfo,
          sessionInformation
        }
      }
    }
  );
  return sessionId;
}

export function updateSessionStatus({
  sessionId,
  status,
  errorMessage
}: {
  sessionId: string;
  status: TransactionBatchStatusesEnum;
  errorMessage?: string;
}) {
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
    {
      type: 'updateSessionStatus',
      // @ts-ignore
      payload: {
        value: { sessionId, status, errorMessage }
      }
    }
  );
}

export type UpdateTransactionStatusPropsType = {
  sessionId: string;
  transaction: SignedTransactionType;
};

export function updateTransactionStatus({
  sessionId,
  transaction: updatedTransaction
}: UpdateTransactionStatusPropsType) {
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
      }
    },
    false,
    {
      type: 'updateTransactionStatus',
      // @ts-ignore
      payload: {
        value: { sessionId, transaction: updatedTransaction }
      }
    }
  );
}

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
    {
      type: 'clearCompletedTransactions',
      // @ts-ignore
      payload: {
        value: null
      }
    }
  );
};
