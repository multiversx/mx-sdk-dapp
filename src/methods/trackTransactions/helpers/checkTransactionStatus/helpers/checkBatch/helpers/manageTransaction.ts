import { updateSessionStatus } from 'store/actions/transactions/transactionsActions';
import { getIsTransactionFailed } from 'store/actions/transactions/transactionStateByStatus';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import {
  TrackedTransactionResultType,
  SignedTransactionType
} from 'types/transactions.types';
import { manageFailedTransactions } from './manageFailedTransactions';
import { runSessionCallbacks } from './runSessionCallbacks';
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

interface ManageTransactionType {
  serverTransaction: TrackedTransactionResultType;
  sessionId: string;
  isSequential?: boolean;
}

export async function manageTransaction({
  serverTransaction: transaction,
  sessionId,
  isSequential
}: ManageTransactionType) {
  const { hash, status, results, invalidTransaction, hasStatusChanged } =
    transaction;
  try {
    const retriesForThisHash = retries[hash];
    if (retriesForThisHash > 30) {
      // consider transaction as stuck after 1 minute
      updateSessionStatus({
        sessionId,
        status: TransactionBatchStatusesEnum.timedOut
      });

      await runSessionCallbacks({
        sessionId,
        status: TransactionBatchStatusesEnum.timedOut
      });

      return;
    }

    if (
      (invalidTransaction && !isSequential) ||
      status === TransactionBatchStatusesEnum.sent
    ) {
      retries[hash] = retries[hash] ? retries[hash] + 1 : 1;
      return;
    }

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

    if (getIsTransactionFailed(status)) {
      await manageFailedTransactions({ sessionId, hash, results });
    }
  } catch (error) {
    console.error(error);
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
