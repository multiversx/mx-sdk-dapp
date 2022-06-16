import { useSelector } from 'redux/DappProviderContext';
import { customToastsSelector } from 'redux/selectors';

export const useGetCustomToasts = () => {
  const customToasts = useSelector(customToastsSelector);

  return {
    customToasts
  };
};
