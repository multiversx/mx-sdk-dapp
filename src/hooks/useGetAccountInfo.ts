import { accountInfoSelector } from 'redux/selectors';
import { AccountInfoSliceType } from 'redux/slices';
import { useSelector } from 'redux/store';

export const useGetAccountInfo = (): AccountInfoSliceType => {
  const accountInfo = useSelector(accountInfoSelector);
  return accountInfo;
};

export default useGetAccountInfo;
