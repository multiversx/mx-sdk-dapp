import { failedTransactionsSessionsSelector } from '../../store/selectors/transactionsSelector';
import { useSelector } from '../store/useSelector';

export function useGetFailedTransactionsSessions() {
  const failedSessions = useSelector(failedTransactionsSessionsSelector);
  return failedSessions;
}
