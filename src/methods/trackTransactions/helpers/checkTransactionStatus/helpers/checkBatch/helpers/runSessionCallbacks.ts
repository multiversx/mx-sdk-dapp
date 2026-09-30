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

  const callback = takeCallbacks(sessionId)?.[callbackName];

  if (!callback) {
    return;
  }

  const logError = (error: unknown) =>
    console.error(`Error in ${callbackName} callback:`, error);

  try {
    Promise.resolve(callback(sessionId)).catch(logError);
  } catch (error) {
    logError(error);
  }
}
