import React, { useContext, useRef } from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { Signature } from '@elrondnetwork/erdjs/out/signature';

import OverrideDefaultBehaviourContext from 'contexts/OverrideDefaultBehaviourContext';
import newTransaction from 'models/newTransaction';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import { signedTransactionsSelector } from 'redux/selectors';
import { accountSelector } from 'redux/selectors';
import {
  setTxSubmittedModal,
  clearSignTransactions,
  updateSignedTransactions
} from 'redux/slices';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums';
import { setNonce } from 'utils';

const TransactionSender = () => {
  const account = useSelector(accountSelector);
  const signedTransactions = useSelector(signedTransactionsSelector);
  const { sendSignedTransactionsAsync } = useContext(
    OverrideDefaultBehaviourContext
  );
  const sendingRef = useRef(false);

  const dispatch = useDispatch();

  const clearSignInfo = () => {
    dispatch(clearSignTransactions());
    sendingRef.current = false;
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
        const shouldSendCurrentSession =
          isSessionIdSigned && !sendingRef.current;
        if (!shouldSendCurrentSession) {
          continue;
        }
        const { transactions } = signedTransactions[sessionId];

        if (!transactions) {
          continue;
        }
        sendingRef.current = true;
        const transactionsToSend = transactions.map((tx) => {
          const address = new Address(tx.sender);
          const transactionObject = newTransaction(tx);
          const signature = new Signature(tx.signature);

          transactionObject.applySignature(signature, address);
          return transactionObject;
        });
        const responseHashes = await sendSignedTransactionsAsync(
          transactionsToSend
        );

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
        setNonce(account.nonce + transactions.length);

        history.pushState({}, document.title, '?');
      } catch (error) {
        console.error('Unable to send transactions', error);
        dispatch(
          updateSignedTransactions({
            sessionId,
            status: TransactionBatchStatusesEnum.failed,
            errorMessage: (error as any).message
          })
        );
        clearSignInfo();
      } finally {
        sendingRef.current = false;
      }
    }
  }

  React.useEffect(() => {
    handleSendTransactions();
  }, [signedTransactions, account]);

  return null;
};

export default TransactionSender;
