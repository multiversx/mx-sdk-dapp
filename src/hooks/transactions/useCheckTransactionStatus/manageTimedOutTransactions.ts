import { updateSignedTransactions } from 'reduxStore/slices';
import { getStore } from 'reduxStore/store';
import { TransactionBatchStatusesEnum } from 'types';

export function manageTimedOutTransactions(sessionId: string) {
  getStore().dispatch(
    updateSignedTransactions({
      sessionId,
      status: TransactionBatchStatusesEnum.timedOut
    })
  );
}
