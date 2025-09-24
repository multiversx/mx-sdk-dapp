import { getCallbacks } from 'managers/TransactionManager/helpers/sessionCallbacks';
import { TransactionBatchStatusesEnum } from 'types/enums.types';

interface RunSessionCallbacksPropsType {
  sessionId: string;
  status?: TransactionBatchStatusesEnum | null;
}

export async function runSessionCallbacks({
  sessionId,
  status
}: RunSessionCallbacksPropsType) {
  const callbacks = getCallbacks(sessionId);

  if (!callbacks.onSuccess || !callbacks.onFail || status == null) {
    return;
  }

  switch (status) {
    case TransactionBatchStatusesEnum.success:
      await callbacks?.onSuccess?.(sessionId);
      break;
    case TransactionBatchStatusesEnum.fail:
    case TransactionBatchStatusesEnum.cancelled:
    case TransactionBatchStatusesEnum.timedOut:
    case TransactionBatchStatusesEnum.invalid:
      await callbacks?.onFail?.(sessionId);
      break;
  }
}
