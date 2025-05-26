import { pendingTransactionsSessionsSelector } from '../../store/selectors/transactionsSelector';
import { useSelector } from '../store/useSelector';

export function useGetPendingTransactions() {
  const pendingSessions = useSelector(pendingTransactionsSessionsSelector);
  return pendingSessions;
}
