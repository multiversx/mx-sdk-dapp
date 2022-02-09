import { useContext, useEffect, useRef } from 'react';
import { TypedResult } from '@elrondnetwork/erdjs';
import CustomBehaviourContext from 'contexts/CustomBehaviourContext';
import { useDispatch } from 'redux/DappProviderContext';
import {
  updateSignedTransactions,
  updateSignedTransactionStatus
} from 'redux/slices';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums';
import { SignedTransactionsBodyType } from 'types/transactions';
import {
  getIsTransactionCompleted,
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful
} from 'utils';
import { refreshAccount } from 'utils/account';
import { isContract, areScCallsSuccessful } from 'utils/smartContracts';

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
  const { getTransactionsByHash, completedTransactionsDelay } = useContext(
    CustomBehaviourContext
  );

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
          acc: { hash: string; previousStatus: string }[],
          { receiver, status, hash }
        ) => {
          const isScCall = isContract(receiver);
          if (
            hash != null &&
            !timeoutRefs.current.includes(hash) &&
            getIsTransactionPending(status, isScCall)
          ) {
            acc.push({ hash, previousStatus: status });
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
        receiver,
        hasStatusChanged
      } of serverTransactions) {
        try {
          const isScCall = isContract(receiver);
          const retriesForThisHash = retriesRef.current[hash];
          if (retriesForThisHash > 30) {
            // consider transaction as stuck after 1 minute
            manageTimedOutTransactions();
            return;
          }
          if (!invalidTransaction) {
            if (!getIsTransactionPending(status)) {
              if (
                isScCall &&
                getIsTransactionSuccessful(status) &&
                !getIsTransactionCompleted(status)
              ) {
                const isScCallCompleted = areScCallsSuccessful(results);
                if (isScCallCompleted) {
                  console.log('entered', hash);
                  timeoutRefs.current.push(hash);
                  setTimeout(
                    () =>
                      dispatch(
                        updateSignedTransactionStatus({
                          sessionId,
                          status: TransactionServerStatusesEnum.completed,
                          transactionHash: hash
                        })
                      ),
                    completedTransactionsDelay
                  );
                }
              }
              console.log(status, timeoutRefs.current);

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
                  (scResult: TypedResult) => scResult.getReturnMessage() !== ''
                );

                dispatch(
                  updateSignedTransactionStatus({
                    transactionHash: hash,
                    sessionId,
                    status: TransactionServerStatusesEnum.failed,
                    errorMessage: resultWithError?.getReturnMessage()
                  })
                );
                dispatch(
                  updateSignedTransactions({
                    sessionId,
                    status: TransactionBatchStatusesEnum.failed,
                    errorMessage: resultWithError?.getReturnMessage()
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
