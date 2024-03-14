import { InterpretedTransactionType, OperationType } from 'types';
import { getVisibleOperations } from 'utils/transactions';

export type OperationDetailsPropsType = {
  transaction: InterpretedTransactionType;
  filterBy?: {
    action?: OperationType['action'];
    sender?: OperationType['sender'];
    receiver?: OperationType['receiver'];
  };
};

export const getOperationsDetails = ({
  transaction,
  filterBy
}: OperationDetailsPropsType): OperationType[] => {
  if (!transaction.operations) {
    return [];
  }

  const operations = getVisibleOperations(transaction);

  if (operations.length === 0) {
    return [];
  }

  if (!filterBy) {
    return operations;
  }

  const { action, receiver, sender } = filterBy;

  const filteredOperations = operations.filter((operation) => {
    if (action && operation.action !== action) {
      return false;
    }

    if (sender && operation.sender !== sender) {
      return false;
    }

    if (receiver && operation.receiver !== receiver) {
      return false;
    }

    return true;
  });

  return filteredOperations;
};
