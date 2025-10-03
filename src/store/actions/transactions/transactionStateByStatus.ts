import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';

export const pendingBatchTransactionsStates: string[] = [
  TransactionBatchStatusesEnum.sent
];

export const successBatchTransactionsStates: string[] = [
  TransactionBatchStatusesEnum.success
];

export const failBatchTransactionsStates: string[] = [
  TransactionBatchStatusesEnum.fail,
  TransactionBatchStatusesEnum.cancelled,
  TransactionBatchStatusesEnum.timedOut
];

export const invalidBatchTransactionsStates: string[] = [
  TransactionBatchStatusesEnum.invalid
];

export const timedOutBatchTransactionsStates: string[] = [
  TransactionBatchStatusesEnum.timedOut
];

export const pendingServerTransactionsStatuses: string[] = [
  TransactionServerStatusesEnum.pending
];

export const successServerTransactionsStates: string[] = [
  TransactionServerStatusesEnum.success
];

export const failServerTransactionsStates: string[] = [
  TransactionServerStatusesEnum.fail,
  TransactionServerStatusesEnum.invalid
];

export const notExecutedServerTransactionsStates: string[] = [
  TransactionServerStatusesEnum.notExecuted
];

export function getIsTransactionPending(status?: string) {
  return (
    status != null &&
    (isBatchTransactionPending(status) || isServerTransactionPending(status))
  );
}

export function getIsTransactionSuccessful(status?: string) {
  return (
    status != null &&
    (isBatchTransactionSuccessful(status) ||
      isServerTransactionSuccessful(status))
  );
}

export function getIsTransactionFailed(status?: string) {
  return (
    status != null &&
    (isBatchTransactionFailed(status) || isServerTransactionFailed(status))
  );
}

export function getIsTransactionNotExecuted(status?: string) {
  return (
    status != null &&
    (isBatchTransactionInvalid(status) ||
      isServerTransactionNotExecuted(status))
  );
}

export function getIsTransactionTimedOut(status?: string) {
  return status != null && isBatchTransactionTimedOut(status);
}

export function isBatchTransactionPending(status?: string) {
  return status != null && pendingBatchTransactionsStates.includes(status);
}

export function isBatchTransactionSuccessful(status?: string) {
  return status != null && successBatchTransactionsStates.includes(status);
}

export function isBatchTransactionFailed(status?: string) {
  return status != null && failBatchTransactionsStates.includes(status);
}

export function isBatchTransactionInvalid(status?: string) {
  return status != null && invalidBatchTransactionsStates.includes(status);
}

export function isBatchTransactionTimedOut(status?: string) {
  return status != null && timedOutBatchTransactionsStates.includes(status);
}

export function isServerTransactionPending(status?: string) {
  return status != null && pendingServerTransactionsStatuses.includes(status);
}
export function isServerTransactionSuccessful(status?: string) {
  return status != null && successServerTransactionsStates.includes(status);
}

export function isServerTransactionFailed(status?: string) {
  return status != null && failServerTransactionsStates.includes(status);
}

export function isServerTransactionNotExecuted(status?: string) {
  return status != null && notExecutedServerTransactionsStates.includes(status);
}
