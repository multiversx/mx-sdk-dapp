import { useSelector } from 'redux/DappProviderContext';
import { signedTransactionsSelector } from 'redux/selectors';

export function useGetSignedTransactions() {
  return useSelector(signedTransactionsSelector);
}

export default useGetSignedTransactions;
