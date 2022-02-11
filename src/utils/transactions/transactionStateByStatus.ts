import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums';

export const pendingBatchTransactionsStates = [
  TransactionBatchStatusesEnum.sent,
  TransactionBatchStatusesEnum.signed
];
export const successBatchTransactionsStates = [
  TransactionBatchStatusesEnum.success
];

export const failedBatchTransactionsStates = [
  TransactionBatchStatusesEnum.fail,
  TransactionBatchStatusesEnum.cancelled,
  TransactionBatchStatusesEnum.timedOut
];

export const timedOutBatchTransactionsStates = [
  TransactionBatchStatusesEnum.timedOut
];

export const pendingServerTransactionsStatuses = [
  TransactionServerStatusesEnum.pending
];

export const successServerTransactionsStates = [
  TransactionServerStatusesEnum.success
];

export const completedServerTransactionsStates = [
  TransactionServerStatusesEnum.completed
];

export const failedServerTransactionsStates = [
  TransactionServerStatusesEnum.fail,
  TransactionServerStatusesEnum.invalid
];

export function getIsTransactionCompleted(
  status?: TransactionServerStatusesEnum | TransactionBatchStatusesEnum
) {
  return completedServerTransactionsStates.includes(
    status as TransactionServerStatusesEnum
  );
}

export function getIsTransactionPending(
  status?: TransactionServerStatusesEnum | TransactionBatchStatusesEnum,
  isScCall = false
) {
  const isPending =
    status != null &&
    (isBatchTransactionPending(status as TransactionBatchStatusesEnum) ||
      isServerTransactionPending(status as TransactionServerStatusesEnum));
  return isScCall
    ? isPending ||
        (getIsTransactionSuccessful(status) &&
          !getIsTransactionCompleted(status))
    : isPending;
}

export function getIsTransactionSuccessful(
  status?: TransactionServerStatusesEnum | TransactionBatchStatusesEnum
) {
  return (
    status != null &&
    (isBatchTransactionSuccessful(status as TransactionBatchStatusesEnum) ||
      isServerTransactionSuccessful(status as TransactionServerStatusesEnum))
  );
}

export function getIsTransactionFailed(
  status?: TransactionServerStatusesEnum | TransactionBatchStatusesEnum
) {
  return (
    status != null &&
    (isBatchTransactionFailed(status as TransactionBatchStatusesEnum) ||
      isServerTransactionFailed(status as TransactionServerStatusesEnum))
  );
}

export function getIsTransactionTimedOut(
  status?: TransactionServerStatusesEnum | TransactionBatchStatusesEnum
) {
  return (
    status != null &&
    isBatchTransactionTimedOut(status as TransactionBatchStatusesEnum)
  );
}

export function isBatchTransactionPending(
  status?: TransactionBatchStatusesEnum
) {
  return status != null && pendingBatchTransactionsStates.includes(status);
}

export function isBatchTransactionSuccessful(
  status: TransactionBatchStatusesEnum
) {
  return status != null && successBatchTransactionsStates.includes(status);
}

export function isBatchTransactionFailed(status: TransactionBatchStatusesEnum) {
  return status != null && failedBatchTransactionsStates.includes(status);
}

export function isBatchTransactionTimedOut(
  status?: TransactionBatchStatusesEnum
) {
  return status != null && timedOutBatchTransactionsStates.includes(status);
}

export function isServerTransactionPending(
  status?: TransactionServerStatusesEnum
) {
  return status != null && pendingServerTransactionsStatuses.includes(status);
}
export function isServerTransactionSuccessful(
  status: TransactionServerStatusesEnum
) {
  return status != null && successServerTransactionsStates.includes(status);
}

export function isServerTransactionFailed(
  status: TransactionServerStatusesEnum
) {
  return status != null && failedServerTransactionsStates.includes(status);
}
