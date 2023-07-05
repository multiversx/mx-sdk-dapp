import { useSelector } from 'reduxStore/DappProviderContext';
import {
  customToastsSelector,
  transactionToastsSelector
} from 'reduxStore/selectors';

export const useGetToasts = () => {
  const customToasts = useSelector(customToastsSelector);
  const transactionToasts = useSelector(transactionToastsSelector);

  return {
    customToasts,
    transactionToasts
  };
};
