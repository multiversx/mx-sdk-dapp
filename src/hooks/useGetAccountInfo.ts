import { useSelector } from 'redux/store';
import { accountInfoSelector } from 'redux/selectors';
import { AccountInfoSliceType } from 'redux/slices';

export const useGetAccountInfo = (): AccountInfoSliceType => {
  const accountInfo = useSelector(accountInfoSelector);
  return accountInfo;
};

export default useGetAccountInfo;
