import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  accountSelector,
  signedTransactionsSelector
} from 'reduxStore/selectors';
import { sendBatchTransactions } from 'services/transactions/sendBatchTransactions';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { SignedTransactionsBodyType } from 'types/transactions.types';
import {
  clearAllTransactionsToSign,
  setTxSubmittedModal,
  setBatchTransactions,
  updateSignedTransactions
} from 'reduxStore/slices';
import { setNonce } from 'utils/account/setNonce';
import { safeRedirect } from 'utils/redirect';
import { removeTransactionParamsFromUrl } from 'utils/transactions/removeTransactionParamsFromUrl';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';

/**
 * Function used to redirect after sending because of Safari cancelling async requests on page change
 */
const optionalRedirect = (sessionInformation: SignedTransactionsBodyType) => {
  const redirectRoute = sessionInformation.redirectRoute;
  if (redirectRoute) {
    safeRedirect(redirectRoute);
  }
};

export const BatchTransactionsSender = () => {
  const dispatch = useDispatch();

  const { address, nonce } = useSelector(accountSelector);
  const signedTransactions = useSelector(signedTransactionsSelector);

  const sendingRef = useRef(false);

  const clearSignInfo = () => {
    dispatch(clearAllTransactionsToSign());
    sendingRef.current = false;
  };

  const handleSendTransactions = useCallback(async () => {
    const sessionIds = Object.keys(signedTransactions);

    for (const sessionId of sessionIds) {
      const sessionInformation = signedTransactions?.[sessionId];

      if (!sessionId) {
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
        const indexes = [...Array(transactions.length).keys()];
        const defaultGrouping = [indexes];

        const grouping =
          sessionInformation?.customTransactionInformation?.sessionInformation
            ?.grouping ?? defaultGrouping;
        const groupedTransactions = grouping?.map((item: number[]) =>
          item.map((index) => transactions[index])
        );

        if (!groupedTransactions) {
          continue;
        }

        const response = await sendBatchTransactions({
          transactions: groupedTransactions,
          sessionId,
          address
        });

        if (!response?.data?.transactions) {
          continue;
        }

        dispatch(setBatchTransactions(response.data));

        const responseHashes = sequentialToFlatArray({
          transactions: response.data.transactions
        }).map((tx) => tx.hash);

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
        setNonce(nonce + transactions.length);

        optionalRedirect(sessionInformation);
        const [transaction] = transactions;
        removeTransactionParamsFromUrl({
          transaction
        });
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
  }, [signedTransactions, address, nonce]);

  useEffect(() => {
    handleSendTransactions();
  }, [signedTransactions, address, handleSendTransactions]);

  return null;
};
