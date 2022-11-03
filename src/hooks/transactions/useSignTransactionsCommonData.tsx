import { useState } from 'react';

import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider';
import { TRANSACTION_STATUS_TOAST_ID } from 'constants/index';
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

export const useSignTransactionsCommonData = () => {
  const dispatch = useDispatch();
  const { provider } = useGetAccountProvider();
  const [error, setError] = useState<string | null>(null);

  const transactionsToSign = useSelector(transactionsToSignSelector);
  const signTransactionsCancelMessage = useSelector(
    signTransactionsCancelMessageSelector
  );
  console.log(112, signTransactionsCancelMessage);

  const hasTransactions = Boolean(transactionsToSign?.transactions);

  const clearTransactionStatusMessage = () => {
    console.log('\x1b[42m%s\x1b[0m', 'this is clearTransactionStatusMessage');

    setError(null);
    dispatch(setSignTransactionsCancelMessage(null));
  };

  const onAbort = (sessionId?: string) => {
    console.log('\x1b[42m%s\x1b[0m', 'this is abort');

    clearTransactionStatusMessage();
    clearSignInfo(sessionId);
  };

  useParseSignedTransactions(onAbort);

  function clearSignInfo(sessionId?: string) {
    const isExtensionProvider = provider instanceof ExtensionProvider;
    console.log('\x1b[42m%s\x1b[0m', 'this is clearSignInfo');

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
    transactionsToSign
  };
};
