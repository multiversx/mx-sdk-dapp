import { signerAddressSelector } from '../../store/selectors/accountSelectors';
import { useSelector } from '../store/useSelector';

export const useGetSignerAddress = () => {
  return useSelector(signerAddressSelector);
};
