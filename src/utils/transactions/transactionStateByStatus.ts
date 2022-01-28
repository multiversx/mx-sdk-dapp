import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from '../../types/enums';

export const pendingBatchTransactionsStates = [
  TransactionBatchStatusesEnum.sent,
  TransactionBatchStatusesEnum.signed
];
export const successBatchTransactionsStates = [
  TransactionBatchStatusesEnum.successful
];

export const failedBatchTransactionsStates = [
  TransactionBatchStatusesEnum.failed,
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
  TransactionServerStatusesEnum.successful,
  TransactionServerStatusesEnum.executed
];

export const failedServerTransactionsStates = [
  TransactionServerStatusesEnum.failed,
  TransactionServerStatusesEnum.invalid
];

export function getIsTransactionPending(
  status?: TransactionServerStatusesEnum | TransactionBatchStatusesEnum
) {
  return (
    status != null &&
    (isBatchTransactionPending(status as TransactionBatchStatusesEnum) ||
      isServerTransactionPending(status as TransactionServerStatusesEnum))
  );
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
  status: TransactionBatchStatusesEnum
) {
  return status != null && timedOutBatchTransactionsStates.includes(status);
}

export function isServerTransactionPending(
  status: TransactionServerStatusesEnum
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
