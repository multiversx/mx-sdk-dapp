import * as React from 'react';
import { Transaction, Address, Nonce } from '@elrondnetwork/erdjs';
import { useDispatch, useSelector } from 'react-redux';
import {
  accountSelector,
  addressSelector,
  providerSelector,
  proxySelector
} from 'redux/selectors';
import { transactionsToSignSelector } from 'redux/selectors/transactionsSelector';
import { updateSignStatus } from 'redux/slices/transactionsSlice';
import newTransaction from '../../models/newTransaction';
import { loginMethodsEnum, transactionStatuses } from '../../types/enums';
import { replyUrl, useParseSignedTransactions } from './helpers';
import { walletSignSession } from './helpers/constants';

import getProviderType from './helpers/getProviderType';
import SignWithExtensionModal from './SignWithExtensionModal';
import SignWithLedgerModal from './SignWithLedgerModal';
import SignWithWalletConnectModal from './SignWithWalletConnectModal';

interface SignTransactionsType {
  transactions: Transaction[];
  callbackRoute: string;
  sessionId: string;
}

export default function SignTransactions() {
  const [showSignModal, setShowSignModal] = React.useState(false);
  const [newTransactions, setNewTransactions] = React.useState<Transaction[]>();
  const [newCallbackRoute, setNewCallbackRoute] = React.useState('');
  const [newSessionId, setNewSessionId] = React.useState('');
  const [error, setError] = React.useState('');

  const provider = useSelector(providerSelector);
  const proxy = useSelector(proxySelector);
  const address = useSelector(addressSelector);
  const account = useSelector(accountSelector);
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const dispatch = useDispatch();

  useParseSignedTransactions();

  const providerType = getProviderType(provider);

  React.useEffect(() => {
    if (transactionsToSign?.sessionId) {
      signTransactions({
        ...transactionsToSign,
        transactions: transactionsToSign.transactions.map((tx) =>
          newTransaction(tx)
        )
      });
    }
  }, [transactionsToSign]);

  const handleClose = () => {
    setNewTransactions(undefined);
    setNewCallbackRoute('');
    setError('');
    setShowSignModal(false);
  };

  const showError = (e: string) => {
    setShowSignModal(true);
    setError(e);
  };

  const signTransactions = async ({
    sessionId,
    transactions,
    callbackRoute
  }: SignTransactionsType) => {
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

      transactions.forEach((tx, i) => {
        tx.setNonce(new Nonce(latestNonce + i));
      });

      switch (providerType) {
        case loginMethodsEnum.wallet:
          const callbackUrl = replyUrl({
            callbackUrl: `${window.location.origin}${callbackRoute}`,
            urlParams: { [walletSignSession]: sessionId }
          });

          provider.signTransactions(transactions, {
            callbackUrl: encodeURIComponent(callbackUrl)
          });

          break;
        case loginMethodsEnum.extension:
        case loginMethodsEnum.ledger:
        case loginMethodsEnum.walletconnect:
          setNewTransactions(transactions);
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
    show: showSignModal,
    transactions: newTransactions || [],
    providerType,
    callbackRoute: newCallbackRoute
  };

  return (
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
  );
}
