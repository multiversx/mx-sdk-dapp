import { successfulTransactionsSessionsSelector } from '../../store/selectors/transactionsSelector';
import { useSelector } from '../store/useSelector';

export function useGetSuccessfulTransactionsSessions() {
  const successfulSessions = useSelector(
    successfulTransactionsSessionsSelector
  );
  return successfulSessions;
}
