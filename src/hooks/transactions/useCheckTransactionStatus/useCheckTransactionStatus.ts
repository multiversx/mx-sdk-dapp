import { useRef } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { GetTransactionsByHashesType } from 'contexts/types';
import { useDispatch } from 'redux/DappProviderContext';
import {
  updateSignedTransactions,
  updateSignedTransactionStatus
} from 'redux/slices';
import { useGetPendingTransactions } from 'services';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums';
import {
  SignedTransactionsBodyType,
  SmartContractResult
} from 'types/transactions';
import { getIsTransactionFailed, getIsTransactionPending } from 'utils';
import { refreshAccount } from 'utils/account';
import getPendingTransactions from './getPendingTransactions';

interface TransactionStatusTrackerPropsType {
  sessionId: string;
  transactionBatch: SignedTransactionsBodyType;
  getTransactionsByHash?: GetTransactionsByHashesType;
  refetchTimestamp?: number;
}

interface RetriesType {
  [hash: string]: number;
}

function useManageFailed() {
  const dispatch = useDispatch();
  return ({
    results,
    hash,
    sessionId
  }: {
    results: SmartContractResult[];
    hash: string;
    sessionId: string;
  }) => {
    const resultWithError = results.find(
      (scResult) => scResult?.returnMessage !== ''
    );

    dispatch(
      updateSignedTransactionStatus({
        transactionHash: hash,
        sessionId,
        status: TransactionServerStatusesEnum.fail,
        errorMessage: resultWithError?.returnMessage
      })
    );
    dispatch(
      updateSignedTransactions({
        sessionId,
        status: TransactionBatchStatusesEnum.fail,
        errorMessage: resultWithError?.returnMessage
      })
    );
  };
}

function useManageFailedTransactions() {
  const dispatch = useDispatch();
  return (sessionId: string) => {
    dispatch(
      updateSignedTransactions({
        sessionId,
        status: TransactionBatchStatusesEnum.timedOut
      })
    );
  };
}

export function useCheckTransactionStatus() {
  const dispatch = useDispatch();
  const retriesRef = useRef<RetriesType>({});
  const timeoutRefs = useRef<string[]>([]);
  const manageFailedTransactions = useManageFailed();
  const manageTimedOutTransactions = useManageFailedTransactions();
  const { pendingTransactionsArray } = useGetPendingTransactions();

  function checkTransactionStatus(
    getTransactionsByHash?: GetTransactionsByHashesType
  ) {
    const pendingBatches = pendingTransactionsArray.filter(
      ([sessionId, transactionBatch]) => {
        const isPending =
          sessionId != null && getIsTransactionPending(transactionBatch.status);
        return isPending;
      }
    );
    console.log(pendingBatches);
    if (pendingBatches.length > 0) {
      pendingBatches.forEach(([sessionId, transactionBatch]) => {
        checkBatch({
          sessionId,
          transactionBatch,
          getTransactionsByHash
        });
      });
    }
  }

  async function checkBatch({
    sessionId,
    transactionBatch: { transactions, status, customTransactionInformation },
    getTransactionsByHash = defaultGetTxByHash
  }: TransactionStatusTrackerPropsType) {
    const isPending = sessionId != null && getIsTransactionPending(status);
    try {
      if (!isPending || transactions == null) {
        return;
      }

      const pendingTransactions = getPendingTransactions(
        transactions,
        timeoutRefs.current
      );

      if (pendingTransactions?.length === 0) {
        return;
      }
      const serverTransactions = await getTransactionsByHash(
        pendingTransactions
      );
      for (const serverTransaction of serverTransactions) {
        const {
          hash,
          status,
          results,
          invalidTransaction,
          pendingResults,
          hasStatusChanged
        } = serverTransaction;
        try {
          const retriesForThisHash = retriesRef.current[hash];
          if (retriesForThisHash > 30) {
            // consider transaction as stuck after 1 minute
            manageTimedOutTransactions(sessionId);
            return;
          }

          if (invalidTransaction || getIsTransactionPending(status)) {
            retriesRef.current[hash] = retriesRef.current[hash]
              ? retriesRef.current[hash] + 1
              : 1;
            return;
          }

          if (!pendingResults) {
            timeoutRefs.current.push(hash);

            const transitionToCompletedDelay =
              customTransactionInformation?.completedTransactionsDelay || 0;
            setTimeout(
              () =>
                dispatch(
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
            dispatch(
              updateSignedTransactionStatus({
                sessionId,
                status,
                transactionHash: hash
              })
            );
          }

          refreshAccount();

          if (getIsTransactionFailed(status)) {
            manageFailedTransactions({ sessionId, hash, results });
          }
        } catch (error) {
          console.error(error);
          manageTimedOutTransactions(sessionId);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return checkTransactionStatus;
}
