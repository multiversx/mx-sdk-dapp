import { getState } from 'store/store';
import { transactionsSliceSelector } from '../../store/selectors/transactionsSelector';

export function getTransactionSessions(state = getState()) {
  return transactionsSliceSelector(state);
}
