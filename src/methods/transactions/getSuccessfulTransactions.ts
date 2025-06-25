import { getState } from 'store/store';
import { successfulTransactionsSelector } from '../../store/selectors/transactionsSelector';

export function getSuccessfulTransactions(state = getState()) {
  return successfulTransactionsSelector(state);
}
