import { updateSignedTransactions } from 'redux/slices';
import { store } from 'redux/store';
import { TransactionBatchStatusesEnum } from 'types';

export function manageTimedOutTransactions(sessionId: string) {
  store.dispatch(
    updateSignedTransactions({
      sessionId,
      status: TransactionBatchStatusesEnum.timedOut
    })
  );
}

export default manageTimedOutTransactions;
