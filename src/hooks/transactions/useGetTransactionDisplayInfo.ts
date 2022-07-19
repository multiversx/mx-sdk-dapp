import { useSelector } from 'reduxStore/DappProviderContext';
import { transactionDisplayInfoSelector } from 'reduxStore/selectors';
import { RootState } from 'reduxStore/store';

export function useGetTransactionDisplayInfo(toastId: string | null) {
  return useSelector((state: RootState) =>
    transactionDisplayInfoSelector(state, toastId)
  );
}
