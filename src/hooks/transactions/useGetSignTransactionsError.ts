import { useSelector } from 'reduxStore/DappProviderContext';
import { signTransactionsErrorSelector } from 'reduxStore/selectors';

export const useGetSignTransactionsError = () => {
  return useSelector(signTransactionsErrorSelector);
};

export default useGetSignTransactionsError;
