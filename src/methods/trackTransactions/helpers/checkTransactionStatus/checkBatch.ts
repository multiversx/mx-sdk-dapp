import { getTransactionsByHashes } from 'apiCalls/transactions/getTransactionsByHashes';
import {
  updateTransactionStatus,
  updateSessionStatus
} from 'store/actions/transactions/transactionsActions';
import { getIsTransactionFailed } from 'store/actions/transactions/transactionStateByStatus';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import {
  TrackedTransactionResultType,
  SignedTransactionType
} from 'types/transactions.types';

import { getPendingTransactions } from './getPendingTransactions';
import { manageFailedTransactions } from './manageFailedTransactions';
import { runSessionCallbacks } from './runSessionCallbacks';

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

async function manageTransaction({
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
      const newStatus = updateTransactionStatus({
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
      const newStatus = updateTransactionStatus({
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

export async function checkBatch({
  sessionId,
  transactionBatch: transactions,
  isSequential
}: TransactionStatusTrackerPropsType) {
  try {
    if (transactions == null) {
      return;
    }

    const pendingTransactions = getPendingTransactions(transactions);

    const serverTransactions =
      await getTransactionsByHashes(pendingTransactions);

    for (const serverTransaction of serverTransactions) {
      await manageTransaction({
        serverTransaction,
        sessionId,
        isSequential
      });
    }

    const hasCompleted = serverTransactions.every(
      (tx) => tx.status !== TransactionServerStatusesEnum.pending
    );

    // Call the onSuccess or onFail callback only if the transactions are sent normally (not using batch transactions mechanism).
    // The batch transactions mechanism will call the callbacks separately.

    if (hasCompleted) {
      const isSuccessful = transactions.every(
        (tx) => tx.status === TransactionServerStatusesEnum.success
      );

      if (isSuccessful) {
        return updateSessionStatus({
          sessionId,
          status: TransactionBatchStatusesEnum.success
        });
      }

      const isFailed = transactions.some(
        (tx) => tx.status === TransactionServerStatusesEnum.fail
      );
      if (isFailed) {
        return updateSessionStatus({
          sessionId,
          status: TransactionBatchStatusesEnum.fail
        });
      }

      const isInvalid = transactions.every(
        (tx) => tx.status === TransactionServerStatusesEnum.notExecuted
      );
      if (isInvalid) {
        return updateSessionStatus({
          sessionId,
          status: TransactionBatchStatusesEnum.invalid
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}
