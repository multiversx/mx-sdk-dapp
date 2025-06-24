import { successfulTransactionsSelector } from '../../store/selectors/transactionsSelector';
import { useSelector } from '../store/useSelector';

export function useGetSuccessfulTransactions() {
  const successfulTransactions = useSelector(successfulTransactionsSelector);
  return successfulTransactions;
}
