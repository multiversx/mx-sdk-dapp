import {
  InterpretedTransactionType,
  VisibleTransactionOperationType
} from 'types/serverTransactions.types';

export const getVisibleOperations = (
  transaction: InterpretedTransactionType
) => {
  const operations =
    transaction?.operations?.filter((operation) =>
      Object.values<string>(VisibleTransactionOperationType).includes(
        operation.type
      )
    ) ?? [];

  return operations;
};
