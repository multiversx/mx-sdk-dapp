import { useEffect } from 'react';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useSelector } from 'reduxStore/DappProviderContext';
import { transactionStatusSelector } from 'reduxStore/selectors';
import { RootState } from 'reduxStore/store';
import {
  removeAllSignedTransactions,
  removeAllTransactionsToSign
} from 'services';
import {
  LoginMethodsEnum,
  TransactionBatchStatusesEnum
} from 'types/enums.types';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import {
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful,
  getIsTransactionTimedOut
} from 'utils/transactions/transactionStateByStatus';

export interface UseTrackTransactionStatusArgsType {
  transactionId: string | null;
  onSuccess?: (transactionId: string | null) => void;
  onFail?: (transactionId: string | null, errorMessage?: string) => void;
  onTimedOut?: (transactionId: string | null) => void;
  onCancelled?: (transactionId: string | null) => void;
}

// TODO: Seems unused and replaced by useCheckTransactionStatus
export function useTrackTransactionStatus({
  transactionId: txId,
  onSuccess,
  onFail,
  onCancelled,
  onTimedOut
}: UseTrackTransactionStatusArgsType) {
  const { signedTransactionsArray } = useGetSignedTransactions();
  const isWalletProvider = getIsProviderEqualTo(LoginMethodsEnum.wallet);

  const [lastSessionId] =
    signedTransactionsArray.length > 0
      ? signedTransactionsArray[signedTransactionsArray.length - 1]
      : [];

  /**
   * Web wallet restores sessionId, which is lost when redirecting,
   * so we extract it from signedTransactions
   */
  const walletSessionId = txId ?? lastSessionId ?? null;

  const transactionId = isWalletProvider ? walletSessionId : txId;

  const transactionsBatch = useSelector((state: RootState) =>
    transactionStatusSelector(state, transactionId)
  );

  const { status, transactions, errorMessage } = transactionsBatch;

  const isPending = getIsTransactionPending(status);
  const isFailed = getIsTransactionFailed(status);
  const isTimedOut = getIsTransactionTimedOut(status);
  const isSuccessful = getIsTransactionSuccessful(status);

  const isCancelled = status === TransactionBatchStatusesEnum.cancelled;

  /**
   * Because wallet restores the session upon return,
   * we make sure to execute the callback actions
   * once, and then clear all transactions from store to
   * prevent re-execution
   */
  function preventWalletDoubleCallback() {
    if (isWalletProvider) {
      removeAllSignedTransactions();
      removeAllTransactionsToSign();
    }
  }

  useEffect(() => {
    if (isSuccessful && onSuccess) {
      onSuccess(transactionId);
    }
  }, [isSuccessful]);

  useEffect(() => {
    if (isFailed && onFail) {
      onFail(transactionId, errorMessage);
      preventWalletDoubleCallback();
    }
  }, [isFailed]);

  useEffect(() => {
    if (isCancelled && onCancelled) {
      onCancelled(transactionId);
      preventWalletDoubleCallback();
    }
  }, [isCancelled]);

  useEffect(() => {
    if (isTimedOut) {
      if (onTimedOut) {
        onTimedOut(transactionId);
      } else {
        onFail?.(transactionId, 'timeout');
      }
    }
  }, [isTimedOut]);

  if (transactionId == null) {
    return {};
  }

  if (transactionsBatch == null) {
    return { errorMessage: 'No transaction to track' };
  }

  return {
    isPending,
    isSuccessful,
    isFailed,
    isCancelled,
    errorMessage,
    status,
    transactions
  };
}
