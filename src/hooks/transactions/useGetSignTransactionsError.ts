import { useSelector } from 'redux/DappProviderContext';
import { signTransactionsErrorSelector } from 'redux/selectors';

export const useGetSignTransactionsError = () => {
  return useSelector(signTransactionsErrorSelector);
};

export default useGetSignTransactionsError;
