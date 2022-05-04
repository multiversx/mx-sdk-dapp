import {
  useSignTransactionsWithDevice,
  UseSignTransactionsWithDevicePropsType,
  UseSignTransactionsWithDeviceReturnType
} from './useSignTransactionsWithDevice';

export function useSignTransactionsWithLedger(
  props: UseSignTransactionsWithDevicePropsType
): UseSignTransactionsWithDeviceReturnType {
  return useSignTransactionsWithDevice(props);
}

export default useSignTransactionsWithLedger;
