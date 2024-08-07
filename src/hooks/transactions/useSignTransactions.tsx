import { useEffect, useRef } from 'react';
import {
  Transaction,
  TransactionOptions,
  TransactionVersion
} from '@multiversx/sdk-core';

import { ExtensionProvider } from '@multiversx/sdk-extension-provider';
import { MetamaskProvider } from '@multiversx/sdk-metamask-provider/out/metamaskProvider';

import uniq from 'lodash/uniq';
import { useGetAccountFromApi } from 'apiCalls/accounts/useGetAccountFromApi';
import {
  ERROR_SIGNING,
  ERROR_SIGNING_TX,
  MISSING_PROVIDER_MESSAGE,
  PROVIDER_NOT_INITIALIZED,
  SENDER_DIFFERENT_THAN_LOGGED_IN_ADDRESS,
  TRANSACTION_CANCELLED,
  WALLET_SIGN_SESSION
} from 'constants/index';
import { useGetAccount } from 'hooks/account';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useParseSignedTransactions } from 'hooks/transactions/useParseSignedTransactions';
import {
  CrossWindowProvider,
  IFrameProvider
} from 'lib/sdkWebWalletCrossWindowProvider';
import { ExperimentalWebviewProvider } from 'providers/experimentalWebViewProvider';
import { getProviderType } from 'providers/utils';

import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  signTransactionsCancelMessageSelector,
  walletAddressSelector
} from 'reduxStore/selectors';
import {
  clearAllTransactionsToSign,
  clearTransactionsInfoForSessionId,
  moveTransactionsToSignedState,
  MoveTransactionsToSignedStatePayloadType,
  setSignTransactionsCancelMessage
} from 'reduxStore/slices';
import {
  LoginMethodsEnum,
  TransactionBatchStatusesEnum
} from 'types/enums.types';
import { builtCallbackUrl } from 'utils/transactions/builtCallbackUrl';
import { parseTransactionAfterSigning } from 'utils/transactions/parseTransactionAfterSigning';
import { getDefaultCallbackUrl } from 'utils/window';
import { getWindowLocation } from 'utils/window/getWindowLocation';

import {
  useSetTransactionNonces,
  getShouldMoveTransactionsToSignedState,
  checkNeedsGuardianSigning,
  checkIsValidSender
} from './helpers';
import { useSignTransactionsCommonData } from './useSignTransactionsCommonData';

export const useSignTransactions = () => {
  const dispatch = useDispatch();
  const savedCallback = useRef('/');
  const { provider } = useGetAccountProvider();
  const walletAddress = useSelector(walletAddressSelector);
  const providerType = getProviderType(provider);
  const isSigningRef = useRef(false);
  const setTransactionNonces = useSetTransactionNonces();
  const { isGuarded, address } = useGetAccount();

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

  const senderAddresses = uniq(
    transactionsToSign?.transactions
      .map((tx) => tx.getSender().toString())
      .filter((sender) => sender)
  ) as string[];

  const sender = senderAddresses?.[0];

  // Skip account fetching if the sender is missing or same as current account
  const { data: senderAccount } = useGetAccountFromApi(
    !sender || sender === address ? null : sender
  );

  const clearSignInfo = (sessionId?: string) => {
    const isExtensionProvider = provider instanceof ExtensionProvider;
    const isCrossWindowProvider = provider instanceof CrossWindowProvider;
    const isIFrameProvider = provider instanceof IFrameProvider;
    const isMetamaskProvider = provider instanceof MetamaskProvider;
    const isExperiementalWebviewProvider =
      provider instanceof ExperimentalWebviewProvider;

    dispatch(clearAllTransactionsToSign());
    dispatch(clearTransactionsInfoForSessionId(sessionId));

    isSigningRef.current = false;

    if (
      !isExtensionProvider &&
      !isCrossWindowProvider &&
      !isIFrameProvider &&
      !isMetamaskProvider
    ) {
      return;
    }

    clearTransactionStatusMessage();

    if (isExtensionProvider) {
      ExtensionProvider.getInstance()?.cancelAction?.();
    }
    if (isMetamaskProvider) {
      MetamaskProvider.getInstance()?.cancelAction?.();
    }
    if (isCrossWindowProvider) {
      CrossWindowProvider.getInstance()?.cancelAction?.();
    }
    if (isIFrameProvider) {
      IFrameProvider.getInstance()?.cancelAction?.();
    }
    if (isExperiementalWebviewProvider) {
      ExperimentalWebviewProvider.getInstance()?.cancelAction?.();
    }
  };

  const onCancel = (errorMessage: string, sessionId?: string) => {
    const isSigningWithWalletConnectV2 =
      providerType === LoginMethodsEnum.walletconnectv2;

    if (isSigningWithWalletConnectV2) {
      errorMessage = TRANSACTION_CANCELLED;
    }

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
    let callbackUrl = callbackRoute;

    if (window?.location) {
      const { search, origin } = getWindowLocation();
      const searchParams = new URLSearchParams(search);
      callbackUrl = `${origin}${callbackRoute}`;

      searchParams.forEach((value, key) => {
        urlParams[key] = value;
      });
    }

    const buildedCallbackUrl = builtCallbackUrl({ callbackUrl, urlParams });

    provider.signTransactions(transactions, {
      callbackUrl: encodeURIComponent(buildedCallbackUrl)
    });
  };

  const signTransactionsWithProvider = async () => {
    if (isSigningRef.current || !transactionsToSign) {
      return;
    }

    const {
      sessionId,
      transactions,
      callbackRoute,
      customTransactionInformation
    } = transactionsToSign;

    const { redirectAfterSign } = customTransactionInformation;
    const defaultCallbackUrl = getDefaultCallbackUrl();
    const redirectRoute = callbackRoute || defaultCallbackUrl;
    const isCurrentRoute = defaultCallbackUrl.includes(redirectRoute);
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

      onCancel(PROVIDER_NOT_INITIALIZED, sessionId);
      return;
    }

    const allowGuardian = !customTransactionInformation.skipGuardian;
    const hasConsentPopup = customTransactionInformation.hasConsentPopup;
    const isCrossWindowProvider = provider instanceof CrossWindowProvider;

    try {
      isSigningRef.current = true;

      if (isCrossWindowProvider && hasConsentPopup) {
        (provider as CrossWindowProvider).setShouldShowConsentPopup(true);
      }

      const signedTransactions: Transaction[] =
        (await provider.signTransactions(
          isGuarded && allowGuardian
            ? transactions?.map((transaction) => {
                transaction.setVersion(TransactionVersion.withTxOptions());
                transaction.setOptions(
                  TransactionOptions.withOptions({ guarded: true })
                );
                return transaction;
              })
            : transactions
        )) ?? [];

      isSigningRef.current = false;

      const shouldMoveTransactionsToSignedState =
        getShouldMoveTransactionsToSignedState(signedTransactions);

      if (!shouldMoveTransactionsToSignedState) {
        return;
      }

      const signedTransactionsArray = Object.values(signedTransactions).map(
        (tx) => parseTransactionAfterSigning(tx)
      );

      const { needs2FaSigning, sendTransactionsToGuardian } =
        checkNeedsGuardianSigning({
          transactions: signedTransactions,
          sessionId,
          callbackRoute,
          isGuarded: isGuarded && allowGuardian,
          walletAddress
        });

      if (needs2FaSigning) {
        return sendTransactionsToGuardian();
      }

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

    const {
      sessionId,
      transactions,
      callbackRoute,
      customTransactionInformation
    } = transactionsToSign;

    if (!provider) {
      console.error(MISSING_PROVIDER_MESSAGE);
      return;
    }

    if (senderAddresses.length > 1) {
      throw new Error('Multiple senders are not allowed');
    }

    if (sender && sender !== address) {
      const isValidSender = checkIsValidSender(senderAccount, address);

      if (!isValidSender) {
        console.error(SENDER_DIFFERENT_THAN_LOGGED_IN_ADDRESS);

        return onCancel(SENDER_DIFFERENT_THAN_LOGGED_IN_ADDRESS);
      }
    }

    /*
     * if the transaction is cancelled
     * the callback will go to undefined,
     * we save the most recent one for a valid transaction
     */
    savedCallback.current = callbackRoute || getWindowLocation().pathname;

    try {
      const isSigningWithWebWallet = providerType === LoginMethodsEnum.wallet;

      const transactionsWithIncrementalNonces =
        customTransactionInformation.skipUpdateNonces
          ? transactions
          : await setTransactionNonces(transactions);

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
    } else {
      isSigningRef.current = false;
    }
  }, [transactionsToSign, hasTransactions, senderAccount]);

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
