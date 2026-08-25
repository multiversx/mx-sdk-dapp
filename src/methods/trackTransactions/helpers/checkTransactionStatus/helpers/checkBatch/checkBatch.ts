import { getTransactionsByHashes } from 'apiCalls/transactions/getTransactionsByHashes';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { updateSessionStatus } from 'store/actions/transactions/transactionsActions';
import { getIsTransactionPending } from 'store/actions/transactions/transactionStateByStatus';
import { getState } from 'store/store';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { SignedTransactionType } from 'types/transactions.types';

import { refreshAccount } from 'utils/account/refreshAccount';
import { getPendingTransactions } from '../getPendingTransactions';
import { runTransactionStatusUpdate } from './helpers/runTransactionStatusUpdate';

export interface TransactionStatusTrackerPropsType {
  sessionId: string;
  transactionBatch: SignedTransactionType[];
  isSequential?: boolean;
  hashes?: string[];
}

export async function checkBatch({
  sessionId,
  transactionBatch: transactions,
  isSequential,
  hashes
}: TransactionStatusTrackerPropsType) {
  try {
    if (transactions == null) {
      return;
    }

    const isLoggedIn = getIsLoggedIn();

    const pendingTransactions = getPendingTransactions(transactions);

    const transactionsToCheck =
      hashes == null
        ? pendingTransactions
        : pendingTransactions.filter(({ hash }) => hashes.includes(hash));

    if (transactionsToCheck.length === 0) {
      return;
    }

    const serverTransactions =
      await getTransactionsByHashes(transactionsToCheck);

    for (const serverTransaction of serverTransactions) {
      await runTransactionStatusUpdate({
        serverTransaction,
        sessionId,
        isSequential
      });
    }

    const { transactions: sessions } = getState();
    const session = sessions?.[sessionId];

    if (session == null) {
      return;
    }

    const hasPendingTransactions = session.transactions.some(({ status }) =>
      getIsTransactionPending(status)
    );

    if (hasPendingTransactions) {
      return;
    }

    if (isLoggedIn) {
      await refreshAccount();
    }

    // Call the onSuccess or onFail callback only if the transactions are sent normally (not using batch transactions mechanism).
    // The batch transactions mechanism will call the callbacks separately.

    const isSuccessful = session.transactions.every(
      (tx) => tx.status === TransactionServerStatusesEnum.success
    );

    if (isSuccessful) {
      return updateSessionStatus({
        sessionId,
        status: TransactionBatchStatusesEnum.success
      });
    }

    const isFailed = session.transactions.some(
      (tx) => tx.status === TransactionServerStatusesEnum.fail
    );

    if (isFailed) {
      return updateSessionStatus({
        sessionId,
        status: TransactionBatchStatusesEnum.fail
      });
    }

    const isInvalid = session.transactions.every(
      (tx) => tx.status === TransactionServerStatusesEnum.notExecuted
    );

    if (isInvalid) {
      return updateSessionStatus({
        sessionId,
        status: TransactionBatchStatusesEnum.invalid
      });
    }
  } catch (error) {
    console.error(error);
  }
}
