import * as React from 'react';
import {
  Transaction,
  IDappProvider,
  Address,
  TransactionHash
} from '@elrondnetwork/erdjs';
import { useContext } from 'context';
import SendModal from './SendModal';
import { getProviderType, refreshAccount, getLatestNonce } from '../../utils';
import { ledgerErrorCodes } from '../../constants';

interface SendTransactionType {
  transaction: Transaction;
  callbackRoute: string;
}

export default function Send() {
  const [showSendModal, setShowSendModal] = React.useState(false);
  const [showStatus, setShowStatus] = React.useState(false);
  const [txHash, setTxHash] = React.useState<TransactionHash>(
    new TransactionHash('')
  );
  const [newTransaction, setNewTransaction] = React.useState<Transaction>();
  const [newCallbackRoute, setNewCallbackRoute] = React.useState('');
  const [error, setError] = React.useState('');
  const context = useContext();
  const { dapp, address } = context;

  const provider: IDappProvider = dapp.provider;

  const providerType = getProviderType(provider);

  const handleClose = () => {
    setNewTransaction(undefined);
    setNewCallbackRoute('');
    setShowStatus(false);
    setError('');
    setShowSendModal(false);
  };

  const send = (e: CustomEvent) => {
    if (e.detail && 'transaction' in e.detail && 'callbackRoute' in e.detail) {
      const { transaction, callbackRoute } = e.detail;
      sendTransaction({ transaction, callbackRoute });
    }
  };

  React.useEffect(() => {
    document.addEventListener('transaction', send);
    return () => {
      document.removeEventListener('transaction', send);
    };
  }, [context]);

  const sendTransaction = ({
    transaction,
    callbackRoute
  }: SendTransactionType) => {
    const showError = (e: string) => {
      setShowSendModal(true);
      setError(e);
    };

    if (provider) {
      switch (providerType) {
        case 'wallet':
          dapp.proxy
            .getAccount(new Address(address))
            .then((account) => {
              transaction.setNonce(getLatestNonce(account));

              provider
                .sendTransaction(transaction, {
                  callbackUrl: encodeURIComponent(
                    `${window.location.origin}${callbackRoute}`
                  )
                })
                .catch((e) => {
                  showError(e);
                });
            })
            .catch((e) => {
              showError(e);
            });
          break;

        case 'ledger':
          setShowSendModal(true);
          setNewTransaction(transaction);
          dapp.proxy
            .getAccount(new Address(address))
            .then((account) => {
              transaction.setNonce(getLatestNonce(account));
              provider
                .sendTransaction(transaction)
                .then((transaction) => {
                  refreshAccount();
                  setTxHash(transaction.getHash());
                  setNewCallbackRoute(callbackRoute);
                  setShowStatus(true);
                })
                .catch((e) => {
                  if (e.statusCode in ledgerErrorCodes) {
                    const { message } = (ledgerErrorCodes as any)[e.statusCode];
                    showError(message);
                  } else if (
                    e.message === 'HWApp not initialised, call init() first'
                  ) {
                    showError('Your session has expired. Please login again');
                  } else {
                    showError(e.message);
                  }
                });
            })
            .catch((e) => {
              showError(e.message);
            });
          break;

        case 'walletconnect':
          setShowSendModal(true);
          setNewTransaction(transaction);
          dapp.proxy
            .getAccount(new Address(address))
            .then((account) => {
              transaction.setNonce(getLatestNonce(account));
              provider
                .sendTransaction(transaction)
                .then((transaction) => {
                  refreshAccount();
                  setTxHash(transaction.getHash());
                  setNewCallbackRoute(callbackRoute);
                  setShowStatus(true);
                })
                .catch((e) => {
                  showError(e.message);
                });
            })
            .catch((e) => {
              showError(e.message);
            });
          break;

        case 'extension':
          setShowSendModal(true);
          setNewTransaction(transaction);
          dapp.proxy
            .getAccount(new Address(address))
            .then((account) => {
              transaction.setNonce(getLatestNonce(account));
              provider
                .sendTransaction(transaction)
                .then((transaction) => {
                  refreshAccount();
                  setTxHash(transaction.getHash());
                  setNewCallbackRoute(callbackRoute);
                  setShowStatus(true);
                })
                .catch((e) => {
                  showError(e);
                });
            })
            .catch((e) => {
              showError(e);
            });
          break;
      }
    } else {
      setShowSendModal(true);
      setError(
        'You need a singer/valid signer to send a transaction, use either WalletProvider, LedgerProvider or WalletConnect'
      );
    }
  };

  const sendProps = {
    handleClose,
    error,
    show: showSendModal,
    transaction: newTransaction,
    providerType,
    txHash,
    callbackRoute: newCallbackRoute,
    showStatus
  };

  return <SendModal {...sendProps} />;
}
