import { useState } from 'react';
import {
  InterpretedTransactionType,
  OperationType,
  TransactionOperationActionTypeEnum
} from 'types/serverTransactions.types';

const internalTransactionActions = [
  TransactionOperationActionTypeEnum.create,
  TransactionOperationActionTypeEnum.localMint,
  TransactionOperationActionTypeEnum.ESDTLocalMint,
  TransactionOperationActionTypeEnum.addQuantity,
  TransactionOperationActionTypeEnum.burn,
  TransactionOperationActionTypeEnum.localBurn,
  TransactionOperationActionTypeEnum.ESDTLocalBurn,
  TransactionOperationActionTypeEnum.wipe,
  TransactionOperationActionTypeEnum.writeLog,
  TransactionOperationActionTypeEnum.signalError
];

enum ButtonTextEnum {
  inOut = 'Show in/out operations',
  fewer = 'Show fewer operations',
  all = 'Show all operations'
}

export interface OperationListType {
  transaction: InterpretedTransactionType;
  operations: OperationType[];
  listLength?: number;
}

export function getOperationList({
  operations,
  transaction,
  isExpanded = false,
  listLength = 25
}: OperationListType & {
  isExpanded?: boolean;
}) {
  const filteredOperations = operations.filter(
    (operation) =>
      !internalTransactionActions.includes(operation.action) &&
      (operation.sender === transaction.sender ||
        operation.receiver === transaction.sender)
  );

  const importantOperations =
    filteredOperations.length > 0 ? filteredOperations : operations;

  const displayedOperations =
    importantOperations.length > listLength
      ? importantOperations.slice(0, listLength)
      : importantOperations;

  const collapsedOperations =
    importantOperations.length > listLength
      ? importantOperations.slice(listLength, importantOperations.length)
      : [];

  const toggleButtonText = isExpanded
    ? filteredOperations.length > 0
      ? ButtonTextEnum.inOut
      : ButtonTextEnum.fewer
    : ButtonTextEnum.all;

  const showToggleButton =
    displayedOperations.length !== operations.length ||
    collapsedOperations.length > 0;

  return {
    displayedOperations: isExpanded ? operations : displayedOperations,
    toggleButtonText,
    showToggleButton
  };
}

export function useGetOperationList(props: OperationListType) {
  const [isExpanded, setIsExpanded] = useState(false);
  const onToggleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const {
    displayedOperations,
    showToggleButton,
    toggleButtonText
  } = getOperationList(props);

  return {
    isExpanded,
    displayedOperations,
    showToggleButton,
    toggleButtonText,
    onToggleButtonClick
  };
}
