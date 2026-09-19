import { takeCallbacks } from 'managers/TransactionManager/helpers/sessionCallbacks';
import { TransactionBatchStatusesEnum } from 'types/enums.types';

interface RunSessionCallbacksPropsType {
  sessionId: string;
  status?: TransactionBatchStatusesEnum | null;
}

const getCallbackName = (status: TransactionBatchStatusesEnum) => {
  switch (status) {
    case TransactionBatchStatusesEnum.success:
      return 'onSuccess';
    case TransactionBatchStatusesEnum.fail:
    case TransactionBatchStatusesEnum.cancelled:
    case TransactionBatchStatusesEnum.timedOut:
    case TransactionBatchStatusesEnum.invalid:
      return 'onFail';
    default:
      return null;
  }
};

export async function runSessionCallbacks({
  sessionId,
  status
}: RunSessionCallbacksPropsType) {
  if (status == null) {
    return;
  }

  const callbackName = getCallbackName(status);

  if (callbackName == null) {
    return;
  }

  const callbacks = takeCallbacks(sessionId);

  try {
    await callbacks?.[callbackName]?.(sessionId);
  } catch (error) {
    console.error(`Error in ${callbackName} callback:`, error);
  }
}
