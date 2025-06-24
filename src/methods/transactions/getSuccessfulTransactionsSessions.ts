import { getState } from 'store/store';
import { successfulTransactionsSessionsSelector } from '../../store/selectors/transactionsSelector';

export function getSuccessfulTransactionsSessions(state = getState()) {
  return successfulTransactionsSessionsSelector(state);
}
