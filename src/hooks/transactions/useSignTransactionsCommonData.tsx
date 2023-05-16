import { useEffect, useState } from 'react';

import { Transaction } from '@multiversx/sdk-core/out';
import { ExtensionProvider } from '@multiversx/sdk-extension-provider';
import { TRANSACTION_STATUS_TOAST_ID } from 'constants/index';
import { useGetAccount } from 'hooks/account';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useParseSignedTransactions } from 'hooks/transactions/useParseSignedTransactions';

import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  signTransactionsCancelMessageSelector,
  transactionsToSignSelector
} from 'reduxStore/selectors';
import {
  clearAllTransactionsToSign,
  clearTransactionsInfoForSessionId,
  removeCustomToast,
  setSignTransactionsCancelMessage
} from 'reduxStore/slices';
import { useSetTransactionNonces } from './helpers';

export const useSignTransactionsCommonData = () => {
  const dispatch = useDispatch();
  const { provider } = useGetAccountProvider();
  const { nonce } = useGetAccount();
  const [error, setError] = useState<string | null>(null);
  const [hasTransactions, setHasTransactions] = useState<boolean>();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const setTransactionNonces = useSetTransactionNonces();
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const signTransactionsCancelMessage = useSelector(
    signTransactionsCancelMessageSelector
  );

  const updateTransactionNonces = async () => {
    const hasTransactionsToSign = Boolean(transactionsToSign?.transactions);
    const transactionsWithFixedNonce = transactionsToSign?.transactions ?? [];

    if (hasTransactionsToSign) {
      if (transactionsToSign?.customTransactionInformation.preventNonceUpdate) {
        setHasTransactions(hasTransactionsToSign);
        setTransactions(transactionsWithFixedNonce);

        return;
      }

      const transactionsWithIncrementalNonces = await setTransactionNonces(
        transactionsWithFixedNonce
      );

      setTransactions(transactionsWithIncrementalNonces);
    }

    setHasTransactions(hasTransactionsToSign);
  };

  useEffect(() => {
    updateTransactionNonces();
  }, [transactionsToSign, nonce]);

  const clearTransactionStatusMessage = () => {
    setError(null);
    dispatch(setSignTransactionsCancelMessage(null));
  };

  const onAbort = (sessionId?: string) => {
    clearTransactionStatusMessage();
    clearSignInfo(sessionId);
  };

  useParseSignedTransactions(onAbort);

  function clearSignInfo(sessionId?: string) {
    const isExtensionProvider = provider instanceof ExtensionProvider;

    dispatch(clearAllTransactionsToSign());
    dispatch(clearTransactionsInfoForSessionId(sessionId));
    dispatch(removeCustomToast(TRANSACTION_STATUS_TOAST_ID));

    if (!isExtensionProvider) {
      return;
    }

    clearTransactionStatusMessage();
    ExtensionProvider.getInstance()?.cancelAction?.();
  }

  return {
    error,
    canceledTransactionsMessage: signTransactionsCancelMessage,
    clearTransactionStatusMessage,
    onAbort,
    setError,
    hasTransactions,
    transactionsToSign: transactionsToSign
      ? {
          ...transactionsToSign,
          transactions
        }
      : transactionsToSign
  };
};
