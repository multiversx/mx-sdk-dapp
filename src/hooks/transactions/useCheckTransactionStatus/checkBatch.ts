import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { updateSignedTransactionStatus } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import {
  GetTransactionsByHashesReturnType,
  GetTransactionsByHashesType
} from 'types';
import {
  CustomTransactionInformation,
  SignedTransactionsBodyType
} from 'types';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { refreshAccount } from 'utils/account';
import {
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful
} from 'utils/transactions';

import { getPendingTransactions } from './getPendingTransactions';
import { manageFailedTransactions } from './manageFailedTransactions';
import { manageTimedOutTransactions } from './manageTimedOutTransactions';

export interface TransactionStatusTrackerPropsType {
  sessionId: string;
  transactionBatch: SignedTransactionsBodyType;
  getTransactionsByHash?: GetTransactionsByHashesType;
  shouldRefreshBalance?: boolean;
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
}

function manageTransaction({
  serverTransaction,
  sessionId,
  customTransactionInformation,
  shouldRefreshBalance
}: ManageTransactionType) {
  const { hash, status, results, invalidTransaction, hasStatusChanged } =
    serverTransaction;
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

    if (invalidTransaction || getIsTransactionPending(status)) {
      retries[hash] = retries[hash] ? retries[hash] + 1 : 1;
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
                transactionHash: hash
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
            transactionHash: hash
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
  shouldRefreshBalance
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
        shouldRefreshBalance
      });
    }
  } catch (error) {
    console.error(error);
  }
}
