import { useSelector } from 'redux/DappProviderContext';
import { transactionDisplayInfoSelector } from 'redux/selectors';
import { RootState } from 'redux/store';

export function useGetTransactionDisplayInfo(toastId: string | null) {
  return useSelector((state: RootState) =>
    transactionDisplayInfoSelector(state, toastId)
  );
}
