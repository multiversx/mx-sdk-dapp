import { getState } from 'store/store';
import { pendingTransactionsSessionsSelector } from '../../store/selectors/transactionsSelector';

export function getPendingTransactionsSessions(state = getState()) {
  return pendingTransactionsSessionsSelector(state);
}
