import { useEffect, useRef, useState } from 'react';
import { Transaction } from '@elrondnetwork/erdjs';

import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider';
import {
  ERROR_SIGNING,
  ERROR_SIGNING_TX,
  MISSING_PROVIDER_MESSAGE,
  PROVIDER_NOT_INITIALIZED,
  TRANSACTION_CANCELLED,
  TRANSACTION_STATUS_TOAST_ID,
  WALLET_SIGN_SESSION
} from 'constants/index';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useParseSignedTransactions } from 'hooks/transactions/useParseSignedTransactions';

import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  addressSelector,
  signTransactionsCancelMessageSelector,
  transactionsToSignSelector
} from 'reduxStore/selectors';
import {
  clearAllTransactionsToSign,
  clearTransactionsInfoForSessionId,
  moveTransactionsToSignedState,
  MoveTransactionsToSignedStatePayloadType,
  removeCustomToast,
  setSignTransactionsCancelMessage
} from 'reduxStore/slices';
import {
  LoginMethodsEnum,
  TransactionBatchStatusesEnum
} from 'types/enums.types';
import { getProviderType } from 'utils';
import {
  builtCallbackUrl,
  getLatestNonce,
  parseTransactionAfterSigning
} from 'utils';
import { getAccount } from 'utils/account/getAccount';
import { getShouldMoveTransactionsToSignedState } from './helpers/getShouldMoveTransactionsToSignedState';

const setTransactionNonces = (
  latestNonce: number,
  transactions: Array<Transaction>
): Array<Transaction> => {
  return transactions.map((tx: Transaction, index: number) => {
    tx.setNonce(latestNonce + index);

    return tx;
  });
};
export const useSignTransactions = () => {
  const dispatch = useDispatch();
  const savedCallback = useRef('/');
  const address = useSelector(addressSelector);
  const { provider } = useGetAccountProvider();
  const providerType = getProviderType(provider);
  const [error, setError] = useState<string | null>(null);

  const transactionsToSign = useSelector(transactionsToSignSelector);
  const signTransactionsCancelMessage = useSelector(
    signTransactionsCancelMessageSelector
  );
  const hasTransactions = Boolean(transactionsToSign?.transactions);

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

  const onCancel = (errorMessage: string, sessionId?: string) => {
    const isTxCancelled = errorMessage.includes(TRANSACTION_CANCELLED);

    clearSignInfo(sessionId);

    /*
     * this is triggered by abort action,
     * so no need to show error
     */
    if (isTxCancelled) {
      dispatch(setSignTransactionsCancelMessage(TRANSACTION_CANCELLED));
      return;
    }

    setError(errorMessage);
  };

  const signWithWallet = (
    transactions: Array<Transaction>,
    sessionId: string,
    callbackRoute = ''
  ) => {
    const urlParams = { [WALLET_SIGN_SESSION]: sessionId };
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
      const isProviderInitialized = await provider?.init?.();
      if (!isProviderInitialized) {
        return;
      }
    } catch (error) {
      const errorMessage =
        (error as Error)?.message ||
        (error as string) ||
        PROVIDER_NOT_INITIALIZED;
      console.error(errorMessage);

      onCancel(errorMessage);
      return;
    }

    try {
      const signedTransactions: Transaction[] = await provider.signTransactions(
        transactions
      );

      const shouldMoveTransactionsToSignedState = getShouldMoveTransactionsToSignedState(
        signedTransactions
      );

      if (!shouldMoveTransactionsToSignedState) {
        return;
      }

      const signedTransactionsArray = Object.values(
        signedTransactions
      ).map((tx) => parseTransactionAfterSigning(tx));

      const payload: MoveTransactionsToSignedStatePayloadType = {
        sessionId,
        transactions: signedTransactionsArray,
        status: TransactionBatchStatusesEnum.signed
      };

      // redirect is delegated to optionalRedirect in TransactionSender
      if (shouldRedirectAfterSign) {
        payload.redirectRoute = redirectRoute;
      }

      dispatch(moveTransactionsToSignedState(payload));
    } catch (error) {
      const errorMessage =
        (error as Error)?.message || (error as string) || ERROR_SIGNING_TX;
      console.error(errorMessage);

      dispatch(
        moveTransactionsToSignedState({
          sessionId,
          status: TransactionBatchStatusesEnum.cancelled
        })
      );
      onCancel(
        errorMessage.includes('cancel') ? TRANSACTION_CANCELLED : errorMessage,
        sessionId
      );
    }
  };

  const signTransactions = async () => {
    if (!transactionsToSign) {
      return;
    }

    clearTransactionStatusMessage();

    const { sessionId, transactions, callbackRoute } = transactionsToSign;

    if (!provider) {
      console.error(MISSING_PROVIDER_MESSAGE);
      return;
    }

    /*
     * if the transaction is cancelled
     * the callback will go to undefined,
     * we save the most recent one for a valid transaction
     */
    savedCallback.current = callbackRoute || window.location.pathname;

    try {
      const account = await getAccount(address);
      if (account == null) {
        return;
      }
      const isSigningWithWebWallet = providerType === LoginMethodsEnum.wallet;

      const isSigningWithProvider = ![
        LoginMethodsEnum.wallet,
        LoginMethodsEnum.ledger
      ].includes(providerType);

      const latestNonce = getLatestNonce(account);
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
      const defaultErrorMessage = (err as Error)?.message;
      const errorMessage = defaultErrorMessage || ERROR_SIGNING;
      console.error(errorMessage);

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
    canceledTransactionsMessage: signTransactionsCancelMessage,
    onAbort,
    hasTransactions,
    callbackRoute: savedCallback.current,
    sessionId: transactionsToSign?.sessionId,
    transactions: transactionsToSign?.transactions
  };
};
