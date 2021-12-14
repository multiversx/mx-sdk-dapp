import React, { useEffect, useState } from 'react';
import { Address, Nonce } from '@elrondnetwork/erdjs';
import { useDispatch, useSelector } from 'react-redux';
import {
  accountSelector,
  addressSelector,
  providerSelector,
  proxySelector
} from 'redux/selectors';
import { transactionsToSignSelector } from 'redux/selectors/transactionsSelectors';
import { updateSignStatus } from 'redux/slices/transactionsSlice';
import { loginMethodsEnum, transactionStatuses } from 'types/enums';
import { replyUrl, useParseSignedTransactions } from './helpers';
import { walletSignSession } from './helpers/constants';

import getProviderType from './helpers/getProviderType';
import SignWithExtensionModal from './SignWithExtensionModal';
import SignWithLedgerModal from './SignWithLedgerModal';
import SignWithWalletConnectModal from './SignWithWalletConnectModal';

export default function SignTransactions () {
  const [showSignModal, setShowSignModal] = useState<boolean>(false);
  const [newCallbackRoute, setNewCallbackRoute] = useState<string>('');
  const [newSessionId, setNewSessionId] = useState<string>('');
  const [error, setError] = useState<string>('');

  const provider = useSelector(providerSelector);
  const proxy = useSelector(proxySelector);
  const address = useSelector(addressSelector);
  const account = useSelector(accountSelector);
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const dispatch = useDispatch();

  useParseSignedTransactions();

  const providerType = getProviderType(provider);

  const handleClose = () => {
    setNewCallbackRoute('');
    setError('');
    setShowSignModal(false);
  };
  const showError = (e: string) => {
    setShowSignModal(true);
    setError(e);
  };

  const signTransactions = async () => {
    const { sessionId, transactions, callbackRoute } = transactionsToSign!;
    try {
      setNewCallbackRoute(callbackRoute);
      setNewSessionId(sessionId);

      if (provider == null) {
        setShowSignModal(true);
        setError(
          'You need a signer/valid signer to send a transaction, use either WalletProvider, LedgerProvider or WalletConnect'
        );
        return;
      }

      const proxyAccount = await proxy.getAccount(new Address(address));

      const latestNonce = Math.max(
        proxyAccount.nonce.valueOf(),
        account.nonce.valueOf()
      );

      transactions?.forEach((tx, i) => {
        tx.setNonce(new Nonce(latestNonce + i));
      });

      switch (providerType) {
        case loginMethodsEnum.wallet:
          const callbackUrl = replyUrl({
            callbackUrl: `${window.location.origin}${callbackRoute}`,
            urlParams: { [walletSignSession]: sessionId }
          });

          provider.signTransactions(transactions!, {
            callbackUrl: encodeURIComponent(callbackUrl)
          });

          break;
        case loginMethodsEnum.extension:
        case loginMethodsEnum.ledger:
        case loginMethodsEnum.walletconnect:
          setShowSignModal(true);
          break;
      }
    } catch (err) {
      console.error('error when signing', err);
      dispatch(
        updateSignStatus({
          [sessionId]: {
            status: transactionStatuses.cancelled
          }
        })
      );
      showError(err);
    }
  };

  const signProps = {
    handleClose,
    error,
    setError,
    sessionId: newSessionId,
    providerType,
    callbackRoute: newCallbackRoute
  };

  useEffect(() => {
    if (transactionsToSign) {
      signTransactions();
    }
  }, [transactionsToSign]);

  return showSignModal && transactionsToSign?.transactions != null ? (
    <React.Fragment>
      {providerType === loginMethodsEnum.ledger && (
        <SignWithLedgerModal {...signProps} />
      )}
      {providerType === loginMethodsEnum.walletconnect && (
        <SignWithWalletConnectModal {...signProps} />
      )}
      {providerType === loginMethodsEnum.extension && (
        <SignWithExtensionModal {...signProps} />
      )}
    </React.Fragment>
  ) : null;
}
