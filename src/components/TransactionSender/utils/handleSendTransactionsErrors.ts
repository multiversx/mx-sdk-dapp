import { updateSignedTransactions } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { TransactionBatchStatusesEnum } from 'types';

export const handleSendTransactionsErrors = ({
  errorMessage,
  sessionId,
  clearSignInfo
}: {
  errorMessage: string;
  sessionId: string;
  clearSignInfo?: () => void;
}) => {
  console.error('Unable to send transactions', errorMessage);
  store.dispatch(
    updateSignedTransactions({
      sessionId,
      status: TransactionBatchStatusesEnum.fail,
      errorMessage
    })
  );
  clearSignInfo?.();
};
