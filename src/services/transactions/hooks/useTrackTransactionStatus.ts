import { useEffect } from 'react';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useSelector } from 'redux/DappProviderContext';
import { transactionStatusSelector } from 'redux/selectors';
import { RootState } from 'redux/store';
import { LoginMethodsEnum, TransactionBatchStatusesEnum } from 'types/enums';
import {
  getIsProviderEqualTo,
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful,
  getIsTransactionTimedOut
} from 'utils';
import {
  removeAllSignedTransactions,
  removeAllTransactionsToSign
} from '../clearTransactions';

export interface UseTrackTransactionStatusArgsType {
  transactionId: string | null;
  onSuccess?: (transactionId: string | null) => void;
  onFail?: (transactionId: string | null, errorMessage?: string) => void;
  onTimedOut?: (transactionId: string | null) => void;
  onCancelled?: (transactionId: string | null) => void;
}

export function useTrackTransactionStatus({
  transactionId: txId,
  onSuccess,
  onFail,
  onCancelled,
  onTimedOut
}: UseTrackTransactionStatusArgsType) {
  const { signedTransactionsArray } = useGetSignedTransactions();
  const isWalletProvider = getIsProviderEqualTo(LoginMethodsEnum.wallet);

  const [sessionId] =
    signedTransactionsArray.length > 0
      ? signedTransactionsArray[signedTransactionsArray.length - 1]
      : [];

  /**
   * Web wallet restores sessionId
   */
  const walletSessionId = txId ?? sessionId ?? null;

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

export default useTrackTransactionStatus;
