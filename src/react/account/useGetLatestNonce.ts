import { getLatestNonce } from 'methods/account/getLatestNonce';
import { accountSelector } from 'store/selectors/accountSelectors';
import { useSelector } from '../store/useSelector';

export const useGetLatestNonce = () => {
  const account = useSelector(accountSelector);
  return getLatestNonce(account);
};
