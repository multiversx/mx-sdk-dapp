import { transactionsSliceSelector } from '../../store/selectors/transactionsSelector';
import { useSelector } from '../store/useSelector';

export function useGetTransactionSessions() {
  const sessions = useSelector(transactionsSliceSelector);
  return sessions;
}
