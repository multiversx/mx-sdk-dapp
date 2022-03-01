import { useEffect, useRef, useState } from 'react';
import {
  Address,
  Nonce,
  Transaction,
  ExtensionProvider
} from '@elrondnetwork/erdjs';

import { errorsMessages, walletSignSession } from 'constants/index';
import { useParseSignedTransactions } from 'hooks/transactions/useParseSignedTransactions';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import {
  addressSelector,
  providerSelector,
  proxySelector,
  transactionsToSignSelector
} from 'redux/selectors';
import {
  clearAllTransactionsToSign,
  clearTransactionsInfoForSessionId,
  moveTransactionsToSignedState
} from 'redux/slices';
import { LoginMethodsEnum, TransactionBatchStatusesEnum } from 'types/enums';
import {
  getLatestNonce,
  getProviderType,
  builtCallbackUrl,
  parseTransactionAfterSigning
} from 'utils';

export const useSignTransactions = () => {
  const dispatch = useDispatch();
  const savedCallback = useRef('/');
  const proxy = useSelector(proxySelector);
  const address = useSelector(addressSelector);
  const provider = useSelector(providerSelector);
  const providerType = getProviderType(provider);
  const [error, setError] = useState<string | null>(null);
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const hasTransactions = Boolean(transactionsToSign?.transactions);

  useParseSignedTransactions();

  const onAbort = (sessionId?: string) => {
    setError(null);
    clearSignInfo(sessionId);
  };

  const clearSignInfo = (sessionId?: string) => {
    const isExtensionProvider = provider instanceof ExtensionProvider;

    dispatch(clearAllTransactionsToSign());
    dispatch(clearTransactionsInfoForSessionId(sessionId));

    if (!isExtensionProvider) {
      return;
    }

    ExtensionProvider.getInstance()?.cancelAction?.();
  };

  const onCancel = (errorMessage: string, sessionId?: string) => {
    const isTxCancelled = errorMessage !== errorsMessages.TRANSACTION_CANCELLED;

    clearSignInfo(sessionId);

    /*
     * this is triggered by abort action,
     * so no need to show error again
     */
    if (!isTxCancelled) {
      return;
    }

    setError(errorMessage);
  };

  const signWithWallet = (
    transactions: Array<Transaction>,
    sessionId: string,
    callbackRoute = ''
  ) => {
    const urlParams = { [walletSignSession]: sessionId };
    const callbackUrl = `${window.location.origin}${callbackRoute}`;
    const buildedCallbackUrl = builtCallbackUrl({ callbackUrl, urlParams });

    provider.signTransactions(transactions, {
      callbackUrl: encodeURIComponent(buildedCallbackUrl)
    });
  };

  const signTransactionsWithProvider = async () => {
    const {
      sessionId,
      transactions,
      callbackRoute,
      customTransactionInformation
    } = transactionsToSign!;
    const { redirectAfterSign } = customTransactionInformation;
    const redirectRoute = callbackRoute || window.location.pathname;
    const isCurrentRoute = window.location.pathname.includes(redirectRoute);
    const shouldRedirectAfterSign = redirectAfterSign && !isCurrentRoute;

    try {
      const isProviderInitialized = await provider.init();

      if (!isProviderInitialized) {
        return;
      }
    } catch (error) {
      const errorMessage =
        (error as unknown as Error)?.message ||
        (error as string) ||
        errorsMessages.PROVIDER_NOT_INTIALIZED;
      console.error(errorsMessages.PROVIDER_NOT_INTIALIZED, errorMessage);
      onCancel(errorMessage);
      return;
    }

    try {
      const signedTransactions = await provider.signTransactions(transactions);
      const hasSameTransactions =
        Object.keys(signedTransactions).length === transactions.length;
      const hasAllTransactionsSigned =
        signedTransactions && hasSameTransactions;
      const shouldMoveTransactionsToSignedState =
        signedTransactions && hasAllTransactionsSigned;

      if (!shouldMoveTransactionsToSignedState) {
        return;
      }

      const signedTransactionsArray = Object.values(signedTransactions).map(
        (tx: any) => parseTransactionAfterSigning(tx)
      );

      dispatch(
        moveTransactionsToSignedState({
          sessionId,
          transactions: signedTransactionsArray,
          status: TransactionBatchStatusesEnum.signed
        })
      );

      if (shouldRedirectAfterSign) {
        window.location.href = redirectRoute;
      }
    } catch (err) {
      const errorMessage =
        (error as unknown as Error)?.message ||
        (error as string) ||
        errorsMessages.ERROR_SIGNING_TX;
      console.error(errorsMessages.ERROR_SIGNING_TX, errorMessage);
      onCancel(errorMessage, sessionId);
    }
  };

  const signTransactions = async () => {
    if (!transactionsToSign) {
      return;
    }

    const { sessionId, transactions, callbackRoute } = transactionsToSign;

    if (!provider) {
      console.error(errorsMessages.MISSING_PROVIDER_MESSAGE);
      return;
    }

    /*
     * if the transaction is cancelled
     * the callback will go to undefined,
     * we save the most recent one for a valid transaction
     */
    savedCallback.current = callbackRoute || window.location.pathname;

    const setTransactionNonces = (
      latestNonce: number,
      transactions: Array<Transaction>
    ): Array<Transaction> => {
      return transactions.map((tx: Transaction, index: number) => {
        tx.setNonce(new Nonce(latestNonce + index));

        return tx;
      });
    };

    try {
      const proxyAccount = await proxy.getAccount(new Address(address));
      const isSigningWithWebWallet = providerType === LoginMethodsEnum.wallet;

      const isSigningWithProvider =
        provider === LoginMethodsEnum.extension ||
        provider === LoginMethodsEnum.walletconnect;

      const latestNonce = getLatestNonce(proxyAccount);
      const mappedTransactions = setTransactionNonces(
        latestNonce,
        transactions
      );

      if (isSigningWithWebWallet) {
        signWithWallet(mappedTransactions, sessionId, callbackRoute);
      }
      if (isSigningWithProvider) {
        signTransactionsWithProvider();
      }
    } catch (err) {
      const defaultErrorMessage = (error as unknown as Error)?.message;
      const errorMessage = defaultErrorMessage || errorsMessages.ERROR_SIGNING;
      onCancel(errorMessage, sessionId);

      dispatch(
        moveTransactionsToSignedState({
          sessionId,
          status: TransactionBatchStatusesEnum.cancelled
        })
      );

      console.error(errorMessage, err);
    }
  };

  useEffect(() => {
    signTransactions();
  }, [transactionsToSign]);

  return {
    error,
    onAbort,
    hasTransactions,
    callbackRoute: savedCallback.current,
    sessionId: transactionsToSign?.sessionId,
    transactions: transactionsToSign?.transactions
  };
};

export default useSignTransactions;
