import { ServerTransactionType } from 'types/serverTransactions';

export function getOperationsMessages(transaction: ServerTransactionType) {
  return (
    transaction?.operations
      ?.map((operation) => operation.message)
      .filter((messages): messages is string => Boolean(messages)) ?? []
  );
}
