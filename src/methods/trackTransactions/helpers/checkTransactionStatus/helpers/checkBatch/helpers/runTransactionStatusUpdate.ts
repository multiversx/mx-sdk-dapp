import { TRANSACTIONS_STATUS_NOT_FOUND_TIMEOUT_MS } from 'constants/transactions.constants';
import { getTransactionsSessionStatus } from 'managers/TransactionManager/helpers/getTransactionsStatus';
import {
  updateSessionStatus,
  updateTransactionStatus
} from 'store/actions/transactions/transactionsActions';
import {
  getIsTransactionFailed,
  getIsTransactionPending
} from 'store/actions/transactions/transactionStateByStatus';
import { getState } from 'store/store';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import {
  TrackedTransactionResultType,
  SignedTransactionType
} from 'types/transactions.types';
import { reserveNonces } from 'utils/account/nonceReservations';
import { runSessionCallbacks } from './runSessionCallbacks';
import { manageFailedTransactions } from './runTransactionFailure';
import { updateTransactionAndSessionStatus } from './updateTransactionAndSessionStatus';

export interface TransactionStatusTrackerPropsType {
  sessionId: string;
  transactionBatch: SignedTransactionType[];
  isSequential?: boolean;
}

// when each hash was first reported as not found
const notFoundSince: Record<string, number> = {};

interface RunTransactionStatusUpdateType {
  serverTransaction: TrackedTransactionResultType;
  sessionId: string;
  isSequential?: boolean;
}

const getSession = (sessionId: string) => getState()?.transactions?.[sessionId];

const getIsSessionTracked = (sessionId: string) => {
  const session = getSession(sessionId);
  return session != null && getIsTransactionPending(session.status);
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

  // it may still execute, so its nonce stays taken
  reserveNonces(transaction.sender, [Number(transaction.nonce)]);

  const sessionStatus = getTransactionsSessionStatus(
    getSession(sessionId)?.transactions ?? []
  );

  if (!sessionStatus) {
    return;
  }

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

  if (getSession(sessionId) == null) {
    delete notFoundSince[hash];
    return;
  }

  try {
    const isNotFound =
      (invalidTransaction && !isSequential) ||
      status === TransactionBatchStatusesEnum.sent;

    if (isNotFound) {
      const now = Date.now();
      notFoundSince[hash] = notFoundSince[hash] ?? now;

      const isStuck =
        now - notFoundSince[hash] >= TRANSACTIONS_STATUS_NOT_FOUND_TIMEOUT_MS;

      if (isStuck) {
        delete notFoundSince[hash];
        await markTransactionAsTimedOut({ sessionId, transaction });
      }

      return;
    }

    delete notFoundSince[hash];

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
