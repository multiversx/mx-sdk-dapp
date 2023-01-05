import { useEffect, useRef } from 'react';
import { Transaction } from '@elrondnetwork/erdjs';

import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider';
import { WalletConnectV2ProviderErrorMessagesEnum } from '@elrondnetwork/erdjs-wallet-connect-provider';
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
import { signTransactionsCancelMessageSelector } from 'reduxStore/selectors';
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
import { builtCallbackUrl } from 'utils/transactions/builtCallbackUrl';
import { parseTransactionAfterSigning } from 'utils/transactions/parseTransactionAfterSigning';

import { useSetTransactionNonces } from './helpers';
import { getShouldMoveTransactionsToSignedState } from './helpers/getShouldMoveTransactionsToSignedState';
import { useSignTransactionsCommonData } from './useSignTransactionsCommonData';

export const useSignTransactions = () => {
  const dispatch = useDispatch();
  const savedCallback = useRef('/');
  const { provider } = useGetAccountProvider();
  const providerType = getProviderType(provider);
  const isSigningRef = useRef(false);
  const setTransactionNonces = useSetTransactionNonces();

  const signTransactionsCancelMessage = useSelector(
    signTransactionsCancelMessageSelector
  );

  const {
    transactionsToSign,
    error,
    setError,
    hasTransactions,
    onAbort,
    clearTransactionStatusMessage
  } = useSignTransactionsCommonData();

  useParseSignedTransactions(onAbort);

  function clearSignInfo(sessionId?: string) {
    const isExtensionProvider = provider instanceof ExtensionProvider;

    dispatch(clearAllTransactionsToSign());
    dispatch(clearTransactionsInfoForSessionId(sessionId));
    dispatch(removeCustomToast(TRANSACTION_STATUS_TOAST_ID));

    isSigningRef.current = false;

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

    const isSigningWithWalletConnectV2 =
      providerType === LoginMethodsEnum.walletconnectv2;
    const isNoKnownErrorAndWalletConnectV2 =
      isSigningWithWalletConnectV2 &&
      !Object.values(WalletConnectV2ProviderErrorMessagesEnum).includes(
        errorMessage as WalletConnectV2ProviderErrorMessagesEnum
      );

    if (isNoKnownErrorAndWalletConnectV2) {
      setError(WalletConnectV2ProviderErrorMessagesEnum.connectionError);
    } else {
      setError(errorMessage);
    }
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
    if (isSigningRef.current) {
      return;
    }
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
      isSigningRef.current = true;
      const signedTransactions: Transaction[] = await provider.signTransactions(
        transactions
      );
      isSigningRef.current = false;

      const shouldMoveTransactionsToSignedState =
        getShouldMoveTransactionsToSignedState(signedTransactions);

      if (!shouldMoveTransactionsToSignedState) {
        return;
      }

      const signedTransactionsArray = Object.values(signedTransactions).map(
        (tx) => parseTransactionAfterSigning(tx)
      );

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
      isSigningRef.current = false;

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
      const isSigningWithWebWallet = providerType === LoginMethodsEnum.wallet;

      const transactionsWithIncrementalNonces = await setTransactionNonces(
        transactions
      );

      if (isSigningWithWebWallet) {
        return signWithWallet(
          transactionsWithIncrementalNonces,
          sessionId,
          callbackRoute
        );
      }

      signTransactionsWithProvider();
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
    if (hasTransactions) {
      signTransactions();
    }
  }, [transactionsToSign, hasTransactions]);

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
