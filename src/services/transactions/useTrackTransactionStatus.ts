import { useSelector } from 'react-redux';
import { transactionStatusSelector } from 'redux/selectors';
import { RootState } from 'redux/store';

export function useTrackTransactionStatus(transactionSessionId: string | null) {
  const transactionStatus = useSelector((state: RootState) =>
    transactionStatusSelector(state, transactionSessionId)
  );
  return transactionStatus;
}

export default useTrackTransactionStatus;
