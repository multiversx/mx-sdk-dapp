import {
  NotificationTypesEnum,
  SendTransactionReturnType,
  SignedTransactionType,
  TrackTransactionsPropsType,
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types';
import { chainIDSelector } from '../../reduxStore/selectors';
import {
  moveTransactionsToSignedState,
  setNotificationModal,
  setTransactionsDisplayInfo,
  updateSignedTransactions
} from '../../reduxStore/slices';
import { store } from '../../reduxStore/store';

export async function trackServerTransactions({
  transactions,
  transactionsDisplayInfo,
  redirectAfterSign = true,
  completedTransactionsDelay,
  sessionInformation
}: TrackTransactionsPropsType): Promise<SendTransactionReturnType> {
  const appState = store.getState();
  const sessionId = Date.now().toString();
  const storeChainId = chainIDSelector(appState);
  try {
    const transactionsPayload = Array.isArray(transactions)
      ? transactions
      : [transactions];

    const signedTransactions = transactionsPayload.filter(
      (transaction) => transaction.signature
    );

    if (!signedTransactions) {
      const notificationPayload = {
        type: NotificationTypesEnum.warning,
        iconClassName: 'text-warning',
        title: 'No pre-signed transaction sent',
        description:
          'The application tried to send transactions without signature'
      };
      store.dispatch(setNotificationModal(notificationPayload));
      return { error: 'Missing Transactions Signatures', sessionId: null };
    }

    const transactionsToTrack: SignedTransactionType[] = [];

    for (const tx of signedTransactions) {
      const signedTx: SignedTransactionType = {
        hash: tx.txHash,
        status: TransactionServerStatusesEnum.pending,
        inTransit: tx.inTransit,
        nonce: tx.nonce,
        value: tx.value,
        receiver: tx.receiver,
        sender: tx.sender,
        gasPrice: tx.gasPrice,
        gasLimit: tx.gasLimit,
        data: tx.data,
        chainID: storeChainId,
        version: 1,
        signature: tx.signature
      };

      transactionsToTrack.push({
        ...signedTx,
        status: TransactionServerStatusesEnum.pending,
        customTransactionInformation: {
          redirectAfterSign,
          completedTransactionsDelay,
          sessionInformation,
          skipGuardian: true,
          signWithoutSending: false
        }
      });
    }

    store.dispatch(
      moveTransactionsToSignedState({
        sessionId,
        status: TransactionBatchStatusesEnum.sent,
        transactions: transactionsToTrack
      })
    );

    store.dispatch(
      updateSignedTransactions({
        sessionId,
        status: TransactionBatchStatusesEnum.sent,
        transactions: transactionsToTrack
      })
    );
    store.dispatch(
      setTransactionsDisplayInfo({ sessionId, transactionsDisplayInfo })
    );
  } catch (error) {
    console.error('error tracking transaction', error as any);
    return { error: error as any, sessionId: null };
  }

  return { sessionId };
}
