import { useEffect, useRef, useState } from 'react';
import {
  Address,
  Nonce,
  Transaction,
  ExtensionProvider
} from '@elrondnetwork/erdjs';
import { walletSignSession } from 'constants/index';
import { useParseSignedTransactions } from 'hooks/transactions/useParseSignedTransactions';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import {
  addressSelector,
  providerSelector,
  proxySelector
} from 'redux/selectors';
import { transactionsToSignSelector } from 'redux/selectors';
import { clearSignTransactions, updateSignedTransaction } from 'redux/slices';
import { LoginMethodsEnum, TransactionBatchStatusesEnum } from 'types/enums';
import { getLatestNonce, getProviderType } from 'utils';
import { buildReplyUrl } from 'utils';
import { parseTransactionAfterSigning } from 'utils';

export function useSignTransactions() {
  const provider = useSelector(providerSelector);
  const proxy = useSelector(proxySelector);
  const address = useSelector(addressSelector);
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const savedCallback = useRef('/');
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  useParseSignedTransactions();

  const providerType = getProviderType(provider);

  function onCancel(e: string) {
    setError(e);
    dispatch(clearSignTransactions());
  }

  function onAbort() {
    dispatch(clearSignTransactions());
    setError(null);
    if (provider instanceof ExtensionProvider) {
      provider?.cancelAction?.();
    }
  }

  const signTransactions = async () => {
    if (transactionsToSign) {
      const { sessionId, transactions, callbackRoute } = transactionsToSign;
      //the callback will go to undefined if the transaction is cancelled, so we save the most recent one for a valid transaction
      savedCallback.current = callbackRoute;
      try {
        if (provider == null) {
          console.error(
            'You need a signer/valid signer to send a transaction, use either WalletProvider, LedgerProvider or WalletConnect'
          );
          return;
        }

        const proxyAccount = await proxy.getAccount(new Address(address));
        const latestNonce = getLatestNonce(proxyAccount);

        transactions.forEach((tx: Transaction, i: number) => {
          tx.setNonce(new Nonce(latestNonce + i));
        });

        switch (providerType) {
          case LoginMethodsEnum.wallet:
            const callbackUrl = buildReplyUrl({
              callbackUrl: `${window.location.origin}${callbackRoute}`,
              urlParams: { [walletSignSession]: sessionId }
            });

            dispatch(clearSignTransactions());
            // TODO: eslint warning
            provider.signTransactions(transactions, {
              callbackUrl: encodeURIComponent(callbackUrl)
            });

            break;
          case LoginMethodsEnum.extension:
          case LoginMethodsEnum.walletconnect:
            signTransactionsWithProvider();
            break;
        }
      } catch (err) {
        console.error('error when signing', err);
        onCancel('error when signing');
        dispatch(
          updateSignedTransaction({
            [sessionId]: {
              status: TransactionBatchStatusesEnum.cancelled
            }
          })
        );
      }
    }
  };

  async function signTransactionsWithProvider() {
    try {
      const { sessionId, transactions, callbackRoute } = transactionsToSign!;
      if (transactions?.length) {
        const initialized = await provider.init();
        if (!initialized) {
          return;
        }
        try {
          const signedTransactions: Transaction[] =
            await provider.signTransactions(transactions);
          const signingDisabled =
            !signedTransactions ||
            (signedTransactions &&
              Object.keys(signedTransactions).length !== transactions?.length);

          if (!signingDisabled && signedTransactions) {
            dispatch(
              updateSignedTransaction({
                [sessionId]: {
                  status: TransactionBatchStatusesEnum.signed,
                  transactions: Object.values(signedTransactions).map((tx) =>
                    parseTransactionAfterSigning(tx)
                  )
                }
              })
            );
            if (!window.location.pathname.includes(callbackRoute)) {
              window.location.href = callbackRoute;
            }
          }
        } catch (err) {
          console.error('error signing transaction', err);
          onCancel('error when signing');
        }
      }
    } catch (err) {
      console.error('error signing transaction', err);
      onCancel('error when signing');
    }
  }

  useEffect(() => {
    if (transactionsToSign?.sessionId) {
      signTransactions();
    }
  }, [transactionsToSign?.sessionId]);
  const hasTransactions = transactionsToSign?.transactions;
  return {
    onAbort,
    error,
    hasTransactions,
    transactions: transactionsToSign?.transactions,
    sessionId: transactionsToSign?.sessionId,
    callbackRoute: savedCallback.current
  };
}

export default useSignTransactions;
