import { TransactionType } from 'types/server-transations';

export function getOperationsMessages(transaction: TransactionType) {
  return (
    transaction?.operations
      ?.map((operation) => operation.message)
      .filter((messages): messages is string => Boolean(messages)) ?? []
  );
}
