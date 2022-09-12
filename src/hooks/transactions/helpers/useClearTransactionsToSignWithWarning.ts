import { TRANSACTION_CANCELLED } from 'constants/errorsMessages';
import { useDispatch } from 'reduxStore/DappProviderContext';
import {
  clearAllTransactionsToSign,
  clearTransactionsInfoForSessionId,
  setSignTransactionsCancelMessage
} from 'reduxStore/slices';

export function useClearTransactionsToSignWithWarning() {
  const dispatch = useDispatch();

  return (sessionId?: string) => {
    dispatch(clearAllTransactionsToSign());
    dispatch(clearTransactionsInfoForSessionId(sessionId));
    dispatch(setSignTransactionsCancelMessage(TRANSACTION_CANCELLED));
  };
}
