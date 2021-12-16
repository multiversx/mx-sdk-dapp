import { useSelector } from 'react-redux';
import {
  transactionStatusSelector,
  transactionToastSelector
} from 'redux/selectors';
import { RootState } from 'redux/store';

export function useTrackTransactionStatus(transactionSessionId: string | null) {
  const transactionStatus = useSelector((state: RootState) =>
    transactionStatusSelector(state, transactionSessionId)
  );

  const transactionToast = useSelector((state: RootState) =>
    transactionToastSelector(state, transactionSessionId)
  );
  console.log(transactionToast);
  return transactionStatus;
}

export default useTrackTransactionStatus;
