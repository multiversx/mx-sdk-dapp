import { useCallback, useEffect, useRef } from 'react';
import { AxiosError } from 'axios';
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
import { setNonce } from 'utils/account/setNonce';
import { safeRedirect } from 'utils/redirect';
import { removeTransactionParamsFromUrl } from 'utils/transactions/removeTransactionParamsFromUrl';
import { handleSendBatchTransactionsErrors } from './utils/handleSendBatchTransactionsErrors';
import { handleSendTransactionsErrors } from './utils/handleSendTransactionsErrors';
import { invokeSendTransactions } from './utils/invokeSendTransactions';

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
  const sentSessionIds = useRef<string[]>([]);

  const clearSignInfo = () => {
    dispatch(clearAllTransactionsToSign());
    sendingRef.current = false;
  };

  const handleSendTransactions = useCallback(async () => {
    const sessionIds = Object.keys(signedTransactions);

    for (const sessionId of sessionIds) {
      const session = signedTransactions[sessionId];
      const skipSending =
        session?.customTransactionInformation?.signWithoutSending;

      if (!session || !sessionId || skipSending) {
        optionalRedirect(session);
        continue;
      }

      if (sentSessionIds.current.includes(sessionId)) {
        continue;
      }

      const { transactions } = session;
      if (!transactions) {
        continue;
      }

      const grouping = session.customTransactionInformation?.grouping;

      try {
        const isSessionIdSigned =
          session.status === TransactionBatchStatusesEnum.signed;
        const shouldSendCurrentSession =
          isSessionIdSigned && !sendingRef.current;

        if (!shouldSendCurrentSession) {
          continue;
        }

        sendingRef.current = true;
        sentSessionIds.current.push(sessionId);

        const responseHashes = await invokeSendTransactions({
          session,
          sessionId,
          address,
          clearSignInfo
        });

        const newStatus = TransactionServerStatusesEnum.pending;
        const newTransactions = transactions.map((transaction) => {
          if (responseHashes?.includes(transaction.hash)) {
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
        if (grouping) {
          handleSendBatchTransactionsErrors({
            errorMessage: (error as any).message,
            sessionId,
            transactions
          });
        } else {
          handleSendTransactionsErrors({
            errorMessage:
              (error as AxiosError).response?.data?.message ??
              (error as any).message,
            sessionId,
            clearSignInfo
          });
        }
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
