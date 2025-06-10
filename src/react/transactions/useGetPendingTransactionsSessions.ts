import { pendingTransactionsSessionsSelector } from '../../store/selectors/transactionsSelector';
import { useSelector } from '../store/useSelector';

export function useGetPendingTransactionsSessions() {
  const pendingSessions = useSelector(pendingTransactionsSessionsSelector);
  return pendingSessions;
}
