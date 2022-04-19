import { useContext, useEffect, useRef } from 'react';
import OverrideDefaultBehaviourContext from 'contexts/OverrideDefaultBehaviourContext';
import { useDispatch } from 'redux/DappProviderContext';
import {
  updateSignedTransactions,
  updateSignedTransactionStatus
} from 'redux/slices';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums';
import {
  CustomTransactionInformation,
  SignedTransactionsBodyType
} from 'types/transactions';
import {
  getIsTransactionCompleted,
  getIsTransactionFailed,
  getIsTransactionPending
} from 'utils';
import { refreshAccount } from 'utils/account';

interface RetriesType {
  [hash: string]: number;
}

interface TransactionStatusTrackerPropsType {
  sessionId: string;
  transactionPayload: SignedTransactionsBodyType;
}

export function TransactionStatusTracker({
  sessionId,
  transactionPayload: { transactions, status }
}: TransactionStatusTrackerPropsType) {
  const dispatch = useDispatch();
  const intervalRef = useRef<any>(null);
  const isFetchingStatusRef = useRef(false);
  const retriesRef = useRef<RetriesType>({});
  const timeoutRefs = useRef<string[]>([]);
  const { getTransactionsByHash } = useContext(OverrideDefaultBehaviourContext);

  const isPending = sessionId != null && getIsTransactionPending(status);
  const manageTimedOutTransactions = () => {
    dispatch(
      updateSignedTransactions({
        sessionId,
        status: TransactionBatchStatusesEnum.timedOut
      })
    );
  };

  const checkTransactionStatus = async () => {
    try {
      if (!isPending || transactions == null) {
        return;
      }
      isFetchingStatusRef.current = true;

      const pendingTransactions = transactions.reduce(
        (
          acc: {
            hash: string;
            previousStatus: string;
            customTransactionInformation?: CustomTransactionInformation;
          }[],
          { status, hash, customTransactionInformation }
        ) => {
          if (
            hash != null &&
            !timeoutRefs.current.includes(hash) &&
            getIsTransactionPending(status)
          ) {
            acc.push({
              hash,
              previousStatus: status,
              customTransactionInformation
            });
          }
          return acc;
        },
        []
      );

      if (pendingTransactions?.length === 0) {
        isFetchingStatusRef.current = false;
        return;
      }
      const serverTransactions = await getTransactionsByHash(
        pendingTransactions
      );
      for (const {
        hash,
        status,
        results,
        invalidTransaction,
        pendingResults,
        hasStatusChanged
      } of serverTransactions) {
        try {
          const retriesForThisHash = retriesRef.current[hash];
          if (retriesForThisHash > 30) {
            // consider transaction as stuck after 1 minute
            manageTimedOutTransactions();
            return;
          }
          if (!invalidTransaction) {
            if (!getIsTransactionPending(status)) {
              if (!getIsTransactionCompleted(status)) {
                if (!pendingResults) {
                  timeoutRefs.current.push(hash);
                  const transactionInformation = transactions.find(
                    (tx) => tx.hash === hash
                  );
                  const txStatusChangeDelay =
                    transactionInformation?.customTransactionInformation
                      ?.completedTransactionsDelay || 0;
                  setTimeout(
                    () =>
                      dispatch(
                        updateSignedTransactionStatus({
                          sessionId,
                          status: TransactionServerStatusesEnum.completed,
                          transactionHash: hash
                        })
                      ),
                    txStatusChangeDelay
                  );
                }
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
              }
            } else {
              retriesRef.current[hash] = retriesRef.current[hash]
                ? retriesRef.current[hash] + 1
                : 1;
            }
          } else {
            retriesRef.current[hash] = retriesRef.current[hash]
              ? retriesRef.current[hash] + 1
              : 1;
          }
        } catch (error) {
          console.error(error);
          manageTimedOutTransactions();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isPending) {
      intervalRef.current = setInterval(() => {
        checkTransactionStatus();
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPending]);
  return null;
}

export default TransactionStatusTracker;
