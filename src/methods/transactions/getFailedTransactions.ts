import { getState } from 'store/store';
import { failedTransactionsSelector } from '../../store/selectors/transactionsSelector';

export function getFailedTransactions(state = getState()) {
  return failedTransactionsSelector(state);
}
