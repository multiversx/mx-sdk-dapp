import React from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import { Signature } from '@elrondnetwork/erdjs/out/signature';

import newTransaction from 'models/newTransaction';
import { signedTransactionsSelector } from 'redux/selectors';
import { accountSelector, proxySelector } from 'redux/selectors';
import {
  setTxSubmittedModal,
  clearSignTransactions,
  updateSignedTransactions
} from 'redux/slices';
import { useDispatch, useSelector } from 'redux/store';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums';
import { setNonce } from 'utils';

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
          TransactionBatchStatusesEnum.signed;
        const shouldSendCurrentSession = isSessionIdSigned && !sending;

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

        const newStatus = TransactionServerStatusesEnum.pending;
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
          updateSignedTransactions({
            sessionId,
            status: TransactionBatchStatusesEnum.sent,
            transactions: newTransactions
          })
        );
        clearSignInfo();

        history.pushState({}, document.title, '?');
      } catch (error) {
        console.error('Unable to send transactions', error);
        dispatch(
          updateSignedTransactions({
            sessionId,
            status: TransactionBatchStatusesEnum.failed,
            errorMessage: error.message
          })
        );
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
