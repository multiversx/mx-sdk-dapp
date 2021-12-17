import * as React from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import { Signature } from '@elrondnetwork/erdjs/out/signature';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';

import { useDispatch, useSelector } from 'react-redux';
import newTransaction from 'models/newTransaction';
import { signedTransactionsSelector } from 'redux/selectors';
import { accountSelector, proxySelector } from 'redux/selectors';
import {
  addToast,
  setTxSubmittedModal,
  clearSignTransactions,
  updateSignedTransactionStatus
} from 'redux/slices';
import { TransactionStatusesEnum } from 'types/enums';
import { setNonce } from 'utils';

const failedToast = {
  id: 'batch-failed',
  title: 'Unable to send',
  description: 'Failed sending transactions. Please refresh the page.',
  icon: faExclamationTriangle,
  iconClassName: 'bg-warning',
  expires: false
};

const TransactionSender = () => {
  const proxy = useSelector(proxySelector);
  const account = useSelector(accountSelector);
  const signedTransactions = useSelector(signedTransactionsSelector);
  const [sending, setSending] = React.useState<boolean>();

  const dispatch = useDispatch();

  const clearSignInfo = () => {
    dispatch(clearSignTransactions());
    setSending(false);
  };
  async function handleSendTransactions() {
    const sessionIds = Object.keys(signedTransactions);
    for (const sessionId of sessionIds) {
      if (!sessionId) {
        continue;
      }

      try {
        const isSessionIdSigned =
          signedTransactions[sessionId].status ===
          TransactionStatusesEnum.signed;
        const shouldSendCurrentSession = isSessionIdSigned && !sending;
        const shouldClearSignedTransactions =
          signedTransactions[sessionId].status ===
            TransactionStatusesEnum.cancelled ||
          signedTransactions[sessionId].status ===
            TransactionStatusesEnum.failed;
        if (shouldClearSignedTransactions) {
          dispatch(clearSignTransactions());
        }
        console.log(
          shouldSendCurrentSession,
          isSessionIdSigned,
          sending,
          signedTransactions[sessionId].status
        );

        if (!shouldSendCurrentSession) {
          continue;
        }

        const { transactions } = signedTransactions[sessionId];

        if (!transactions) {
          continue;
        }

        setSending(true);
        const transactionsPromises = transactions.map((tx) => {
          const address = new Address(tx.sender);
          const transactionObject = newTransaction(tx);
          const signature = new Signature(tx.signature);

          transactionObject.applySignature(signature, address);
          return proxy.sendTransaction(transactionObject);
        });
        const responseHashes = (await Promise.all(transactionsPromises)).map(
          (txHash) => Buffer.from(txHash.hash).toString('hex')
        );

        setNonce(account.nonce.value + transactions.length);

        const newStatus = TransactionStatusesEnum.pending;
        const newTransactions = transactions.map((transaction) => {
          if (responseHashes.includes(transaction.hash)) {
            return { ...transaction, status: newStatus };
          }

          return transaction;
        });

        const submittedModalPayload = {
          sessionId,
          submittedMessage: 'submitted'
        };

        dispatch(setTxSubmittedModal(submittedModalPayload));
        dispatch(
          updateSignedTransactionStatus({
            sessionId,
            status: TransactionStatusesEnum.sent,
            transactions: newTransactions
          })
        );
        clearSignInfo();

        history.pushState({}, document.title, '?');
      } catch (error) {
        console.error('Unable to send transactions', error);
        dispatch(addToast(failedToast));
        clearSignInfo();
      } finally {
        setSending(false);
      }
    }
  }

  React.useEffect(() => {
    handleSendTransactions();
  }, [signedTransactions, account]);

  return null;
};

export default TransactionSender;
