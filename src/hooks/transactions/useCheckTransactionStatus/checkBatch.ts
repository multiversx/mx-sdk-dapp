import {
  getTransactionsByHashes as defaultGetTxByHash,
  GetTransactionsByHashesReturnType
} from 'apiCalls/transactions';
import { GetTransactionsByHashesType } from 'contexts/types';
import { updateSignedTransactionStatus } from 'redux/slices';
import { store } from 'redux/store';
import { TransactionServerStatusesEnum } from 'types/enums';
import {
  CustomTransactionInformation,
  SignedTransactionsBodyType
} from 'types/transactions';
import { getIsTransactionFailed, getIsTransactionPending } from 'utils';
import { refreshAccount } from 'utils/account';
import getPendingTransactions from './getPendingTransactions';
import manageFailedTransactions from './manageFailedTransactions';
import manageTimedOutTransactions from './manageTimedOutTransactions';

interface TransactionStatusTrackerPropsType {
  sessionId: string;
  transactionBatch: SignedTransactionsBodyType;
  getTransactionsByHash?: GetTransactionsByHashesType;
  shouldRefrehsBalance?: boolean;
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
  shouldRefrehsBalance?: boolean;
}

function manageTransaction({
  serverTransaction,
  sessionId,
  customTransactionInformation,
  shouldRefrehsBalance
}: ManageTransactionType) {
  const {
    hash,
    status,
    results,
    invalidTransaction,
    pendingResults,
    hasStatusChanged
  } = serverTransaction;
  try {
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

    if (!pendingResults) {
      timeouts.push(hash);

      const transitionToCompletedDelay =
        customTransactionInformation?.completedTransactionsDelay || 0;
      setTimeout(
        () =>
          store.dispatch(
            updateSignedTransactionStatus({
              sessionId,
              status: TransactionServerStatusesEnum.completed,
              transactionHash: hash
            })
          ),
        transitionToCompletedDelay
      );
    }

    if (hasStatusChanged) {
      store.dispatch(
        updateSignedTransactionStatus({
          sessionId,
          status,
          transactionHash: hash
        })
      );
    }

    // if set to true will trigger a balance refresh after each iteration
    if (!shouldRefrehsBalance) {
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
  transactionBatch: { transactions, status, customTransactionInformation },
  getTransactionsByHash = defaultGetTxByHash,
  shouldRefrehsBalance
}: TransactionStatusTrackerPropsType) {
  const isBatchPending = sessionId != null && getIsTransactionPending(status);
  try {
    if (!isBatchPending || transactions == null) {
      return;
    }

    const pendingTransactions = getPendingTransactions(transactions, timeouts);

    if (pendingTransactions?.length === 0) {
      return;
    }
    const serverTransactions = await getTransactionsByHash(pendingTransactions);

    for (const serverTransaction of serverTransactions) {
      manageTransaction({
        serverTransaction,
        sessionId,
        customTransactionInformation,
        shouldRefrehsBalance
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export default checkBatch;
