import { failedTransactionsSelector } from '../../store/selectors/transactionsSelector';
import { useSelector } from '../store/useSelector';

export function useGetFailedTransactions() {
  const failedTransactions = useSelector(failedTransactionsSelector);
  return failedTransactions;
}
