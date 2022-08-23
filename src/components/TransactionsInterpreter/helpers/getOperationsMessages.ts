import { ServerTransactionType } from 'types/server-transactions';

export function getOperationsMessages(transaction: ServerTransactionType) {
  return (
    transaction?.operations
      ?.map((operation) => operation.message)
      .filter((messages): messages is string => Boolean(messages)) ?? []
  );
}
