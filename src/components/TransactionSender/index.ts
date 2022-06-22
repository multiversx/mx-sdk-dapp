import React, { useRef } from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { Signature } from '@elrondnetwork/erdjs/out/signature';

import { sendSignedTransactions as defaultSendSignedTxs } from 'apiCalls/transactions';
import { SendSignedTransactionsAsyncType } from 'contexts/types';
import newTransaction from 'models/newTransaction';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { signedTransactionsSelector } from 'reduxStore/selectors';
import { accountSelector } from 'reduxStore/selectors';
import {
  setTxSubmittedModal,
  clearAllTransactionsToSign,
  updateSignedTransactions
} from 'reduxStore/slices';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums';
import { setNonce } from 'utils';

export interface TransactionSenderType {
  sendSignedTransactionsAsync?: SendSignedTransactionsAsyncType;
}

export const TransactionSender = ({
  sendSignedTransactionsAsync = defaultSendSignedTxs
}: TransactionSenderType) => {
  const account = useSelector(accountSelector);
  const signedTransactions = useSelector(signedTransactionsSelector);

  const sendingRef = useRef(false);

  const dispatch = useDispatch();

  const clearSignInfo = () => {
    dispatch(clearAllTransactionsToSign());
    sendingRef.current = false;
  };
  async function handleSendTransactions() {
    const sessionIds = Object.keys(signedTransactions);
    for (const sessionId of sessionIds) {
      const skipSending =
        signedTransactions?.[sessionId]?.customTransactionInformation
          ?.signWithoutSending;

      if (!sessionId || skipSending) {
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
            status: TransactionBatchStatusesEnum.fail,
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
