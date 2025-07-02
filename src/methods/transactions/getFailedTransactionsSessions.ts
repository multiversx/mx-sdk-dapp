import { getState } from 'store/store';
import { failedTransactionsSessionsSelector } from '../../store/selectors/transactionsSelector';

export function getFailedTransactionsSessions(state = getState()) {
  return failedTransactionsSessionsSelector(state);
}
