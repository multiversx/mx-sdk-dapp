import { useEffect, useState } from 'react';

import { Transaction } from '@multiversx/sdk-core/out';
import { ExtensionProvider } from '@multiversx/sdk-extension-provider';
import { MetamaskProvider } from '@multiversx/sdk-metamask-provider/out/metamaskProvider';
import { PasskeyProvider } from '@multiversx/sdk-passkey-provider/out';
import { IframeProvider } from '@multiversx/sdk-web-wallet-iframe-provider/out';
import { useGetAccount } from 'hooks/account';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useParseSignedTransactions } from 'hooks/transactions/useParseSignedTransactions';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';

import { ExperimentalWebviewProvider } from 'providers/experimentalWebViewProvider';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  signTransactionsCancelMessageSelector,
  transactionsToSignSelector
} from 'reduxStore/selectors';
import {
  clearAllTransactionsToSign,
  clearTransactionsInfoForSessionId,
  setSignTransactionsCancelMessage
} from 'reduxStore/slices';
import { useSetTransactionNonces } from './helpers';

export const useSignTransactionsCommonData = () => {
  console.log('sdk-dapp useSignTransactionsCommonData start');

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
      const transactionsWithIncrementalNonces = transactionsToSign
        ?.customTransactionInformation?.skipUpdateNonces
        ? transactionsWithFixedNonce
        : await setTransactionNonces(transactionsWithFixedNonce);

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
    console.log('\x1b[42m%s\x1b[0m', 'sdk-dapp is aborting');

    clearTransactionStatusMessage();
    clearSignInfo(sessionId);
  };

  useParseSignedTransactions(onAbort);

  function clearSignInfo(sessionId?: string) {
    const isExtensionProvider = provider instanceof ExtensionProvider;
    const isPasskeyProvider = provider instanceof PasskeyProvider;
    const isCrossWindowProvider = provider instanceof CrossWindowProvider;
    const isIframeProvider = provider instanceof IframeProvider;
    const isMetamaskProvider = provider instanceof MetamaskProvider;
    const isExperimentalWebviewProvider =
      provider instanceof ExperimentalWebviewProvider;

    dispatch(clearAllTransactionsToSign());
    dispatch(clearTransactionsInfoForSessionId(sessionId));

    if (
      !isExtensionProvider &&
      !isCrossWindowProvider &&
      !isIframeProvider &&
      !isPasskeyProvider &&
      !isMetamaskProvider
    ) {
      return;
    }

    clearTransactionStatusMessage();

    if (isExtensionProvider) {
      ExtensionProvider.getInstance()?.cancelAction?.();
    }

    if (isPasskeyProvider) {
      PasskeyProvider.getInstance()?.cancelAction?.();
    }

    if (isMetamaskProvider) {
      MetamaskProvider.getInstance()?.cancelAction?.();
    }

    if (isCrossWindowProvider) {
      CrossWindowProvider.getInstance()?.cancelAction?.();
    }

    if (isIframeProvider) {
      IframeProvider.getInstance()?.cancelAction?.();
    }

    if (isExperimentalWebviewProvider) {
      ExperimentalWebviewProvider.getInstance()?.cancelAction?.();
    }
  }

  console.log(
    'in sdk-dapp useSignTransactionsCommonData transactionsToSign',
    transactionsToSign
  );

  console.log(
    'in sdk-dapp useSignTransactionsCommonData hasTransactions',
    hasTransactions
  );

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
