import { sessionCallbacksMap } from 'managers/TransactionManager/helpers/sessionCallbacks';
import { TransactionBatchStatusesEnum } from 'types/enums.types';

interface runSessionCallbacksPropsType {
  sessionId: string;
  status?: TransactionBatchStatusesEnum | null;
}

export async function runSessionCallbacks({
  sessionId,
  status
}: runSessionCallbacksPropsType) {
  const { onSuccess, onFail } = sessionCallbacksMap;

  if (!onSuccess || !onFail || status == null) {
    return;
  }

  switch (status) {
    case TransactionBatchStatusesEnum.success:
      await onSuccess?.(sessionId);
      break;
    case TransactionBatchStatusesEnum.fail:
    case TransactionBatchStatusesEnum.cancelled:
    case TransactionBatchStatusesEnum.timedOut:
    case TransactionBatchStatusesEnum.invalid:
      await onFail?.(sessionId);
      break;
  }
}
