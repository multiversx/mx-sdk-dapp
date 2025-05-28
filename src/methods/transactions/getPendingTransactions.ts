import { getState } from 'store/store';
import { pendingTransactionsSelector } from '../../store/selectors/transactionsSelector';

export function getPendingTransactions(state = getState()) {
  return pendingTransactionsSelector(state);
}
