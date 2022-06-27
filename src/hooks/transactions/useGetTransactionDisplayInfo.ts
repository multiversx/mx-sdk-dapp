import { useSelector } from 'reduxStore/DappProviderContext';
import { transactionDisplayInfoSelector } from 'reduxStore/selectors';

export function useGetTransactionDisplayInfo(toastId: string | null) {
  return useSelector((state) => transactionDisplayInfoSelector(state, toastId));
}
