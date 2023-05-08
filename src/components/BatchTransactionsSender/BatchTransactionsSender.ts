import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  accountSelector,
  signedTransactionsSelector
} from 'reduxStore/selectors';
import {
  clearAllTransactionsToSign,
  setTxSubmittedModal,
  setBatchTransactions,
  updateSignedTransactions
} from 'reduxStore/slices';
import { sendBatchTransactions } from 'services/transactions/sendBatchTransactions';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import {
  SignedTransactionsBodyType,
  SignedTransactionType
} from 'types/transactions.types';
import { setNonce } from 'utils/account/setNonce';
import { safeRedirect } from 'utils/redirect';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';
import { removeTransactionParamsFromUrl } from 'utils/transactions/removeTransactionParamsFromUrl';

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

  const handleBatchErrors = ({
    errorMessage,
    sessionId,
    transactions
  }: {
    errorMessage: string;
    sessionId: string;
    transactions: SignedTransactionType[];
  }) => {
    console.error('Unable to send transactions', errorMessage);
    dispatch(
      updateSignedTransactions({
        sessionId,
        status: TransactionBatchStatusesEnum.fail,
        errorMessage,
        transactions: transactions.map((transaction) => ({
          ...transaction,
          status: TransactionServerStatusesEnum.notExecuted
        }))
      })
    );
    clearSignInfo();
  };

  const handleSendTransactions = useCallback(async () => {
    const sessionIds = Object.keys(signedTransactions);

    for (const sessionId of sessionIds) {
      const session = signedTransactions[sessionId];

      if (!session || !sessionId) {
        optionalRedirect(session);
        continue;
      }

      const { transactions } = session;
      if (!transactions) {
        continue;
      }

      try {
        const isSessionIdSigned =
          session.status === TransactionBatchStatusesEnum.signed;
        const shouldSendCurrentSession =
          isSessionIdSigned && !sendingRef.current;

        if (!shouldSendCurrentSession) {
          continue;
        }

        sendingRef.current = true;
        const indexes = [...Array(transactions.length).keys()];
        const defaultGrouping = [indexes];

        const grouping =
          session.customTransactionInformation?.sessionInformation?.grouping ??
          defaultGrouping;
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

        if (response?.error || !response?.data) {
          handleBatchErrors({
            errorMessage: response?.error ?? 'Send batch error',
            sessionId,
            transactions
          });
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

        optionalRedirect(session);
        const [transaction] = transactions;
        removeTransactionParamsFromUrl({
          transaction
        });
      } catch (error) {
        handleBatchErrors({
          errorMessage: (error as any).message,
          sessionId,
          transactions
        });
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
