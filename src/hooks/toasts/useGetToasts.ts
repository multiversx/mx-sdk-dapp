import { useSelector } from 'reduxStore/DappProviderContext';
import {
  customToastsSelector,
  failTransactionToastSelector,
  transactionToastsSelector
} from 'reduxStore/selectors';

export const useGetToasts = () => {
  const customToasts = useSelector(customToastsSelector);
  const transactionToasts = useSelector(transactionToastsSelector);
  const failTransactionToast = useSelector(failTransactionToastSelector);

  return {
    customToasts,
    transactionToasts,
    failTransactionToast
  };
};
