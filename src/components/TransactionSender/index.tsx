import * as React from 'react';
import { TransactionStatus } from '@elrondnetwork/erdjs';
import { Address, TransactionHash } from '@elrondnetwork/erdjs/out';
import { Signature } from '@elrondnetwork/erdjs/out/signature';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  toastSignSessionsSelector,
  transactionToastsSelector,
  signStatusSelector
} from 'redux/selectors';
import { accountSelector, proxySelector } from 'redux/selectors';
import {
  addToast,
  setTransactionToasts,
  setTxSubmittedModal,
  clearSignTransactions
} from 'redux/slices';
import { transactionStatuses } from 'types/enums';
import { PlainTransactionStatus } from 'types/toasts';
import newTransaction from '../../models/newTransaction';
import { setNonce, getPlainTransactionStatus } from '../../utils';
import Toast from './Toast';

const failedToast = {
  id: 'batch-failed',
  title: 'Unable to send',
  description: 'Failed sending transactions. Please refresh the page.',
  icon: faExclamationTriangle,
  iconClassName: 'bg-warning',
  expires: false
};

const TransactionSender = () => {
  const toastSignSessions = useSelector(toastSignSessionsSelector);
  const transactionToasts = useSelector(transactionToastsSelector);
  const proxy = useSelector(proxySelector);
  const account = useSelector(accountSelector);
  const signStatus = useSelector(signStatusSelector);
  const [sending, setSending] = React.useState<boolean>();

  const dispatch = useDispatch();

  const clearSignInfo = () => {
    dispatch(clearSignTransactions());
    setSending(false);
  };

  async function handleSendTransactions() {
    const [sessionId] = Object.keys(signStatus);

    if (!sessionId) {
      return;
    }

    try {
      const isSessionIdSigned =
        signStatus[sessionId].status === transactionStatuses.signed;
      const shouldSendCurrentSession = isSessionIdSigned && !sending;
      const shouldClearSignedTransations =
        signStatus[sessionId].status === transactionStatuses.cancelled ||
        signStatus[sessionId].status === transactionStatuses.failed;

      if (shouldClearSignedTransations) {
        dispatch(clearSignTransactions());
      }

      if (!shouldSendCurrentSession) {
        return;
      }

      const { transactions } = signStatus[sessionId];

      const hasSentBatch = transactionToasts.some(
        ({ toastSignSession }) => String(toastSignSession) === sessionId
      );

      if (hasSentBatch || !transactions) {
        return;
      }

      setSending(true);

      const transactionsPromises = transactions.map((tx) => {
        const address = new Address(tx.sender);
        const transactionObject = newTransaction(tx);
        const signature = new Signature(tx.signature);

        transactionObject.applySignature(signature, address);

        console.log('sending', transactionObject);
        console.log('createdFrom', tx, 'signarture', tx.signature);
        return proxy.sendTransaction(transactionObject);
      });

      const responseHashes = await Promise.all(transactionsPromises);

      setNonce(account.nonce.value + transactions.length);

      const restToasts = transactionToasts.filter(
        ({ toastSignSession }) => String(toastSignSession) !== sessionId
      );

      const newTransactions: {
        [hash: string]: PlainTransactionStatus;
      } = (responseHashes as TransactionHash[]).reduce((transactions, tx) => {
        const status = getPlainTransactionStatus(
          new TransactionStatus('pending')
        );
        const targetHash = Buffer.from(tx.hash).toString('hex');

        transactions[targetHash] = status;

        return transactions;
      }, {});

      const newToast = {
        toastSignSession: sessionId,
        processingMessage: 'Processing transaction',
        successMessage: 'Transaction successful',
        errorMessage: 'Transaction failed',
        submittedMessage: 'Transaction submitted',
        submittedMessageShown: true,
        transactions: newTransactions,
        startTime: moment().unix(),
        endTime: moment().add(10, 'seconds').unix()
      };

      const newToasts = [...restToasts, newToast];
      const submittedModalPayload = {
        sessionId,
        submittedMessage: 'submitted'
      };

      dispatch(setTxSubmittedModal(submittedModalPayload));
      dispatch(setTransactionToasts(newToasts));
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

  React.useEffect(() => {
    handleSendTransactions();
  }, [signStatus, account]);

  const addCancelToast = () => {
    if (signStatus) {
      const [sessionId] = Object.keys(signStatus);
      if (signStatus.status === transactionStatuses.failed) {
        dispatch(
          addToast({
            id: sessionId,
            title: 'Failed',
            description: 'Request was not successful.',
            iconClassName: 'bg-danger',
            icon: faTimes,
            expires: 6000
          })
        );
      }
    }
  };

  React.useEffect(addCancelToast, [signStatus, toastSignSessions]);
  return (
    <React.Fragment>
      {sending === false
        ? transactionToasts.map((props, i) => {
            const key = Object.values(props.transactions)
              .map((status) => status.toString())
              .join('');
            return <Toast key={props.toastSignSession + key + i} {...props} />;
          })
        : null}
    </React.Fragment>
  );
};

export default TransactionSender;
