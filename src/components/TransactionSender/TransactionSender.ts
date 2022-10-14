import { useEffect, useRef } from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { Transaction } from '@elrondnetwork/erdjs/out';
import { Signature } from '@elrondnetwork/erdjs/out/signature';

import {
  sendSignedTransactions as defaultSendSignedTxs,
  SendSignedTransactionsReturnType
} from 'apiCalls/transactions';
import { newTransaction } from 'models/newTransaction';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  accountSelector,
  signedTransactionsSelector
} from 'reduxStore/selectors';
import {
  clearAllTransactionsToSign,
  setTxSubmittedModal,
  updateSignedTransactions
} from 'reduxStore/slices';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { SignedTransactionsBodyType } from 'types/transactions.types';

import { safeRedirect } from 'utils/redirect';
import { setNonce } from 'utils/account/setNonce';

export interface TransactionSenderType {
  sendSignedTransactionsAsync?: (
    signedTransactions: Transaction[]
  ) => Promise<SendSignedTransactionsReturnType>;
}

/**
 * Function used to redirect after sending because of Safari cancelling async requests on page change
 */
const optionalRedirect = (sessionInformation: SignedTransactionsBodyType) => {
  const redirectRoute = sessionInformation.redirectRoute;
  if (redirectRoute) {
    safeRedirect(redirectRoute);
  }
};

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
      const sessionInformation = signedTransactions?.[sessionId];
      const skipSending =
        sessionInformation?.customTransactionInformation?.signWithoutSending;

      if (!sessionId || skipSending) {
        optionalRedirect(sessionInformation);
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

        optionalRedirect(sessionInformation);

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

  useEffect(() => {
    handleSendTransactions();
  }, [signedTransactions, account]);

  return null;
};
