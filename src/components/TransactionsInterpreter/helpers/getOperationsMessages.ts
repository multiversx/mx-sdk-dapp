import { TransactionType } from './types';

export function getOperationsMessages(transaction: TransactionType) {
  return transaction?.operations
    ?.map((operation) => operation.message)
    .filter((messages): messages is string => Boolean(messages));
}
