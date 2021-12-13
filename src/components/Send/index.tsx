import React from 'react';
import { Address, Transaction, TransactionHash } from '@elrondnetwork/erdjs';
import { useSelector } from 'react-redux';
import { ledgerErrorCodes } from '../../constants';
import {
  addressSelector,
  providerSelector,
  proxySelector
} from '../../redux/selectors';
import { LoginMethodsEnum } from '../../types';
import { getLatestNonce, getProviderType, refreshAccount } from '../../utils';
import SendModal from './SendModal';

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
  const address = useSelector(addressSelector);
  const provider = useSelector(providerSelector);
  const proxy = useSelector(proxySelector);

  const providerType = getProviderType(provider);

  const handleClose = () => {
    setNewTransaction(undefined);
    setNewCallbackRoute('');
    setShowStatus(false);
    setError('');
    setShowSendModal(false);
  };

  const send = (e: any) => {
    if ('transaction' in e?.detail && 'callbackRoute' in e?.detail) {
      const { transaction, callbackRoute } = e.detail;
      sendTransaction({ transaction, callbackRoute });
    }
  };

  React.useEffect(() => {
    document.addEventListener('transaction', send);
    return () => {
      document.removeEventListener('transaction', send);
    };
  }, []);

  const showError = (e: string) => {
    setShowSendModal(true);
    setError(e);
  };

  const sendTransaction = ({
    transaction,
    callbackRoute
  }: SendTransactionType) => {
    if (provider) {
      switch (providerType) {
        case LoginMethodsEnum.wallet:
          proxy
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

        case LoginMethodsEnum.ledger:
          setShowSendModal(true);
          setNewTransaction(transaction);
          proxy
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

        case LoginMethodsEnum.walletconnect:
          setShowSendModal(true);
          setNewTransaction(transaction);
          proxy
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

        case LoginMethodsEnum.extension:
          setShowSendModal(true);
          setNewTransaction(transaction);
          proxy
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
