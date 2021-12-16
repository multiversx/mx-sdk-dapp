import { useRef, useEffect } from 'react';
import { TransactionHash } from '@elrondnetwork/erdjs/out';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { useDispatch, useSelector } from 'react-redux';
import { getPlainTransactionStatus } from 'utils/index';
import { transactionToastsSelector } from 'redux/selectors/toastSelectors';
import { apiProviderSelector } from 'redux/selectors/networkConfigSelectors';
import {
  addToast,
  removeToast,
  removeTransactionToast,
  updateTransactionToastErrorMessage,
  updateTransactionToastTransactionStatus
} from 'redux/slices/toastsSlice';
import { TransactionToastTransactionsType } from 'types/toasts';

interface TransactionToastStatusUpdatePropsType {
  transactions: TransactionToastTransactionsType[];
  pending: boolean;
  toastSignSession: string;
}

interface RetriesType {
  [hash: string]: number;
}

export default function useTransactionToastStatusUpdate ({
  transactions,
  pending,
  toastSignSession
}: TransactionToastStatusUpdatePropsType) {
  
  const dispatch = useDispatch();
  const intervalRef = useRef<any>(null);
  const isFetchingStatusRef = useRef(false);
  const retriesRef = useRef<RetriesType>({});
  const transactionToasts = useSelector(transactionToastsSelector);
  const apiProvider = useSelector(apiProviderSelector);

  const manageStuckToasts = () => {
    dispatch(removeTransactionToast(toastSignSession));
    dispatch(removeToast(toastSignSession));

    const txStuckToast = {
      id: 'batch-stuck',
      title: 'Pending transactions',
      description:
        'Fetching the transactions status took too long. Please refresh the page.',
      icon: faExclamationTriangle,
      iconClassName: 'bg-warning',
      expires: false
    };
    dispatch(addToast(txStuckToast));
  };

  const checkTransactionStatus = async () => {
    try {
      if (transactions == null) {
        return;
      }
      const activeToast = transactionToasts.find(
        (toast) => toast.toastSignSession === toastSignSession
      );

      if (activeToast == null) {
        return;
      }
      isFetchingStatusRef.current = true;
      for (const { hash } of transactions) {
        try {
          const retriesForThisHash = retriesRef.current[hash];
          if (retriesForThisHash > 40) {
            //consider toast as stuck after 10 seconds
            manageStuckToasts();
            return;
          }
          const txOnNetwork = await apiProvider.getTransaction(
            new TransactionHash(hash)
          );
          if (txOnNetwork != null) {
            if (!txOnNetwork.status.isPending()) {
              const status = getPlainTransactionStatus(txOnNetwork.status);
              dispatch(
                updateTransactionToastTransactionStatus({
                  toastSignSession,
                  transactionHash: hash,
                  status
                })
              );

              if (txOnNetwork.status.isFailed()) {
                const scResults = txOnNetwork
                  .getSmartContractResults()
                  .getAllResults();
                const resultWithError = scResults.find(
                  (scResult) => scResult.getReturnMessage() !== ''
                );
                dispatch(
                  updateTransactionToastErrorMessage({
                    toastSignSession,
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
          manageStuckToasts();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (pending) {
      intervalRef.current = setInterval(() => {
        checkTransactionStatus();
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pending]);
  return null;
}
