import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { updateSignedTransactionStatus } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import {
  CustomTransactionInformation,
  GetTransactionsByHashesReturnType,
  ServerTransactionType,
  SignedTransactionsBodyType
} from 'types';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { refreshAccount } from 'utils/account';
import {
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful
} from 'utils/transactions';
import { getPendingTransactions } from './getPendingTransactions';
import { manageFailedTransactions } from './manageFailedTransactions';
import { manageTimedOutTransactions } from './manageTimedOutTransactions';

export interface TransactionStatusTrackerPropsType
  extends TransactionsTrackerType {
  sessionId: string;
  transactionBatch: SignedTransactionsBodyType;
  shouldRefreshBalance?: boolean;
  isSequential?: boolean;
}

interface RetriesType {
  [hash: string]: number;
}

const retries: RetriesType = {};
const timeouts: string[] = [];

interface ManageTransactionType {
  serverTransaction: GetTransactionsByHashesReturnType[0];
  sessionId: string;
  customTransactionInformation?: CustomTransactionInformation;
  shouldRefreshBalance?: boolean;
  isSequential?: boolean;
}

function manageTransaction({
  serverTransaction,
  sessionId,
  customTransactionInformation,
  shouldRefreshBalance,
  isSequential
}: ManageTransactionType) {
  const {
    hash,
    status,
    inTransit,
    results,
    invalidTransaction,
    hasStatusChanged
  } = serverTransaction;
  try {
    if (timeouts.includes(hash)) {
      return;
    }

    const retriesForThisHash = retries[hash];
    if (retriesForThisHash > 30) {
      // consider transaction as stuck after 1 minute
      manageTimedOutTransactions(sessionId);
      return;
    }

    if (
      (invalidTransaction && !isSequential) ||
      getIsTransactionPending(status)
    ) {
      retries[hash] = retries[hash] ? retries[hash] + 1 : 1;
      return;
    }

    // The tx is from a sequential batch.
    // If the transactions before this are not successful then it means that no other tx will be processed
    if (isSequential && !status) {
      store.dispatch(
        updateSignedTransactionStatus({
          sessionId,
          status,
          transactionHash: hash,
          inTransit,
          serverTransaction:
            serverTransaction as unknown as ServerTransactionType
        })
      );
      return;
    }

    if (hasStatusChanged) {
      if (
        getIsTransactionSuccessful(status) &&
        customTransactionInformation?.completedTransactionsDelay != null
      ) {
        //if the transaction is successful and the success status should be updated with a delay
        //it will enter a timeout and then change the status
        timeouts.push(hash);
        setTimeout(
          () =>
            store.dispatch(
              updateSignedTransactionStatus({
                sessionId,
                status: TransactionServerStatusesEnum.success,
                transactionHash: hash,
                inTransit,
                serverTransaction:
                  serverTransaction as unknown as ServerTransactionType
              })
            ),
          customTransactionInformation?.completedTransactionsDelay
        );
      } else {
        //otherwise, it will just trigger the change of status
        store.dispatch(
          updateSignedTransactionStatus({
            sessionId,
            status,
            transactionHash: hash,
            inTransit,
            serverTransaction:
              serverTransaction as unknown as ServerTransactionType
          })
        );
      }
    }

    // if set to true will trigger a balance refresh after each iteration
    if (!shouldRefreshBalance) {
      refreshAccount();
    }

    if (getIsTransactionFailed(status)) {
      manageFailedTransactions({ sessionId, hash, results });
    }
  } catch (error) {
    console.error(error);
    manageTimedOutTransactions(sessionId);
  }
}

export async function checkBatch({
  sessionId,
  transactionBatch: { transactions, customTransactionInformation },
  getTransactionsByHash = defaultGetTxByHash,
  shouldRefreshBalance,
  isSequential,
  onSuccess,
  onFail
}: TransactionStatusTrackerPropsType) {
  try {
    if (transactions == null) {
      return;
    }

    const pendingTransactions = getPendingTransactions(transactions, timeouts);

    const serverTransactions = await getTransactionsByHash(pendingTransactions);

    for (const serverTransaction of serverTransactions) {
      manageTransaction({
        serverTransaction,
        sessionId,
        customTransactionInformation,
        shouldRefreshBalance,
        isSequential
      });
    }

    const hasCompleted = serverTransactions.every(
      (tx) => tx.status !== TransactionServerStatusesEnum.pending
    );

    // Call the onSuccess or onFail callback only if the transactions are sent normally (not using batch transactions mechanism).
    // The batch transactions mechanism will call the callbacks separately.
    if (hasCompleted && !customTransactionInformation?.grouping) {
      const isSuccessful = serverTransactions.every(
        (tx) => tx.status === TransactionServerStatusesEnum.success
      );

      if (isSuccessful) {
        return onSuccess?.(sessionId);
      }

      const isFailed = serverTransactions.some(
        (tx) => tx.status === TransactionServerStatusesEnum.fail
      );

      if (isFailed) {
        return onFail?.(sessionId);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
