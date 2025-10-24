import { getTransactionsByHashes } from 'apiCalls/transactions/getTransactionsByHashes';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { updateSessionStatus } from 'store/actions/transactions/transactionsActions';
import { getState } from 'store/store';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { SignedTransactionType } from 'types/transactions.types';

import { refreshAccount } from 'utils';
import { getPendingTransactions } from '../getPendingTransactions';
import { runTransactionStatusUpdate } from './helpers/runTransactionStatusUpdate';

export interface TransactionStatusTrackerPropsType {
  sessionId: string;
  transactionBatch: SignedTransactionType[];
  isSequential?: boolean;
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

    const isLoggedIn = getIsLoggedIn();

    const pendingTransactions = getPendingTransactions(transactions);

    const serverTransactions =
      await getTransactionsByHashes(pendingTransactions);

    for (const serverTransaction of serverTransactions) {
      await runTransactionStatusUpdate({
        serverTransaction,
        sessionId,
        isSequential
      });
    }

    const hasCompleted = serverTransactions.every(
      (tx) => tx.status !== TransactionServerStatusesEnum.pending
    );

    if (!hasCompleted) {
      return;
    }

    if (isLoggedIn) {
      await refreshAccount();
    }

    // Call the onSuccess or onFail callback only if the transactions are sent normally (not using batch transactions mechanism).
    // The batch transactions mechanism will call the callbacks separately.

    const { transactions: sessions } = getState();
    const session = sessions?.[sessionId];

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
