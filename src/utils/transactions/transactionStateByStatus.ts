import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';

export const pendingBatchTransactionsStates = [
  TransactionBatchStatusesEnum.sent
];
export const successBatchTransactionsStates = [
  TransactionBatchStatusesEnum.success
];

export const failBatchTransactionsStates = [
  TransactionBatchStatusesEnum.fail,
  TransactionBatchStatusesEnum.cancelled,
  TransactionBatchStatusesEnum.timedOut
];

export const invalidBatchTransactionsStates = [
  TransactionBatchStatusesEnum.invalid
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

export const failServerTransactionsStates = [
  TransactionServerStatusesEnum.fail,
  TransactionServerStatusesEnum.invalid
];

export const notExecutedServerTransactionsStates = [
  TransactionServerStatusesEnum.notExecuted
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

export function getIsTransactionNotExecuted(
  status?: TransactionServerStatusesEnum | TransactionBatchStatusesEnum
) {
  return (
    status != null &&
    (isBatchTransactionInvalid(status as TransactionBatchStatusesEnum) ||
      isServerTransactionNotExecuted(status as TransactionServerStatusesEnum))
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
  return status != null && failBatchTransactionsStates.includes(status);
}

export function isBatchTransactionInvalid(
  status: TransactionBatchStatusesEnum
) {
  return status != null && invalidBatchTransactionsStates.includes(status);
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
  return status != null && failServerTransactionsStates.includes(status);
}

export function isServerTransactionNotExecuted(
  status: TransactionServerStatusesEnum
) {
  return status != null && notExecutedServerTransactionsStates.includes(status);
}
