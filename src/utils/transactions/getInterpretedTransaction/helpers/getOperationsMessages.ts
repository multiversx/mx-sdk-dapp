import { ServerTransactionType } from 'types/serverTransactions.types';

export function getOperationsMessages(transaction: ServerTransactionType) {
  return (
    transaction?.operations
      ?.map((operation) => operation.message)
      .filter((messages): messages is string => Boolean(messages)) ?? []
  );
}
