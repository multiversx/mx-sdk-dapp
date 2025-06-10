import { pendingTransactionsSelector } from '../../store/selectors/transactionsSelector';
import { useSelector } from '../store/useSelector';

export function useGetPendingTransactions() {
  const pendingTransactions = useSelector(pendingTransactionsSelector);
  return pendingTransactions;
}
