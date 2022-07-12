import { updateSignedTransactions } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { TransactionBatchStatusesEnum } from 'types';

export function manageTimedOutTransactions(sessionId: string) {
  store.dispatch(
    updateSignedTransactions({
      sessionId,
      status: TransactionBatchStatusesEnum.timedOut
    })
  );
}
