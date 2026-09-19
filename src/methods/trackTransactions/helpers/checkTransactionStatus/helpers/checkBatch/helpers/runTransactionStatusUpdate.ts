import {
  updateSessionStatus,
  updateTransactionStatus
} from 'store/actions/transactions/transactionsActions';
import {
  getIsTransactionFailed,
  getIsTransactionPending,
  isServerTransactionFailed
} from 'store/actions/transactions/transactionStateByStatus';
import { getState } from 'store/store';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import {
  TrackedTransactionResultType,
  SignedTransactionType
} from 'types/transactions.types';
import { runSessionCallbacks } from './runSessionCallbacks';
import { manageFailedTransactions } from './runTransactionFailure';
import { updateTransactionAndSessionStatus } from './updateTransactionAndSessionStatus';

export interface TransactionStatusTrackerPropsType {
  sessionId: string;
  transactionBatch: SignedTransactionType[];
  isSequential?: boolean;
}

interface RetriesType {
  [hash: string]: number;
}

const retries: RetriesType = {};

interface RunTransactionStatusUpdateType {
  serverTransaction: TrackedTransactionResultType;
  sessionId: string;
  isSequential?: boolean;
}

const getIsSessionTracked = (sessionId: string) => {
  const session = getState()?.transactions?.[sessionId];
  return session == null || getIsTransactionPending(session.status);
};

const markTransactionAsTimedOut = async ({
  sessionId,
  transaction
}: {
  sessionId: string;
  transaction: TrackedTransactionResultType;
}) => {
  updateTransactionStatus({
    sessionId,
    transaction: {
      ...transaction,
      status: TransactionBatchStatusesEnum.timedOut
    }
  });

  const sessionTransactions =
    getState()?.transactions?.[sessionId]?.transactions ?? [];

  const hasPendingTransactions = sessionTransactions.some(({ status }) =>
    getIsTransactionPending(status)
  );

  if (hasPendingTransactions) {
    return;
  }

  const hasFailedTransactions = sessionTransactions.some(({ status }) =>
    isServerTransactionFailed(status)
  );

  const sessionStatus = hasFailedTransactions
    ? TransactionBatchStatusesEnum.fail
    : TransactionBatchStatusesEnum.timedOut;

  updateSessionStatus({
    sessionId,
    status: sessionStatus
  });

  await runSessionCallbacks({
    sessionId,
    status: sessionStatus
  });
};

export async function runTransactionStatusUpdate({
  serverTransaction: transaction,
  sessionId,
  isSequential
}: RunTransactionStatusUpdateType) {
  const { hash, status, invalidTransaction, hasStatusChanged } = transaction;

  try {
    const retriesForThisHash = retries[hash];
    if (retriesForThisHash > 30) {
      // consider transaction as stuck after 1 minute
      delete retries[hash];
      await markTransactionAsTimedOut({ sessionId, transaction });
      return;
    }

    if (
      (invalidTransaction && !isSequential) ||
      status === TransactionBatchStatusesEnum.sent
    ) {
      retries[hash] = retries[hash] ? retries[hash] + 1 : 1;
      return;
    }

    delete retries[hash];

    // The tx is from a sequential batch.
    // If the transactions before this are not successful then it means that no other tx will be processed
    if (isSequential && !status) {
      const newStatus = updateTransactionAndSessionStatus({
        sessionId,
        transaction
      });
      await runSessionCallbacks({
        sessionId,
        status: newStatus
      });
      return;
    }

    if (getIsTransactionFailed(status)) {
      await manageFailedTransactions({ sessionId, transaction });
      return;
    }

    if (hasStatusChanged) {
      const newStatus = updateTransactionAndSessionStatus({
        sessionId,
        transaction
      });

      await runSessionCallbacks({
        sessionId,
        status: newStatus
      });
    }
  } catch (error) {
    console.error(error);

    if (!getIsSessionTracked(sessionId)) {
      return;
    }

    updateSessionStatus({
      sessionId,
      status: TransactionBatchStatusesEnum.timedOut
    });
    await runSessionCallbacks({
      sessionId,
      status: TransactionBatchStatusesEnum.timedOut
    });
  }
}
