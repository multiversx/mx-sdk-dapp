import { getLatestNonce } from 'core/methods/account/getLatestNonce';
import { accountSelector } from 'store/selectors/accountSelectors';
import { useSelector } from '../useSelector';

export const useGetLatestNonce = () => {
  const account = useSelector(accountSelector);
  return getLatestNonce(account);
};
