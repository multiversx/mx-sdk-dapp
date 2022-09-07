import * as React from 'react';
import {
  internalTransactionActions,
  OPERATION_LIST_DISPLAY_LENGTH
} from 'constants/transactions';
import {
  InterpretedTransactionType,
  OperationType
} from 'types/serverTransactions.types';
import { OperationRow } from './components/OperationRow';

export const OperationsList = ({
  transaction,
  operations
}: {
  transaction: InterpretedTransactionType;
  operations: OperationType[];
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleCollapseClick = () => {
    setExpanded(!expanded);
  };

  const filteredOperations = operations.filter(
    (operation) =>
      !internalTransactionActions.includes(operation.action) &&
      (operation.sender === transaction.sender ||
        operation.receiver === transaction.sender)
  );

  const importantOperations =
    filteredOperations.length > 0 ? filteredOperations : operations;

  const displayOperations =
    importantOperations.length > OPERATION_LIST_DISPLAY_LENGTH
      ? importantOperations.slice(0, OPERATION_LIST_DISPLAY_LENGTH)
      : importantOperations;

  const collapsedOperations =
    importantOperations.length > OPERATION_LIST_DISPLAY_LENGTH
      ? importantOperations.slice(
          OPERATION_LIST_DISPLAY_LENGTH,
          importantOperations.length
        )
      : [];

  const buttonText = expanded
    ? filteredOperations.length > 0
      ? 'Show in/out operations'
      : 'Show fewer operations'
    : 'Show all operations';

  return (
    <div className='mb-n2'>
      <div className='operations-list d-flex flex-column'>
        {expanded ? (
          <>
            {operations.map((operation: OperationType, index) => (
              <div key={`display-${index}`}>
                <OperationRow operation={operation} transaction={transaction} />
              </div>
            ))}
          </>
        ) : (
          <>
            {displayOperations.map((operation: OperationType, index) => (
              <div key={`display-${index}`}>
                <OperationRow operation={operation} transaction={transaction} />
              </div>
            ))}
          </>
        )}
      </div>
      {(displayOperations.length !== operations.length ||
        collapsedOperations.length > 0) && (
        <button
          className='btn btn-link btn-link-base'
          type='button'
          onClick={toggleCollapseClick}
          aria-controls='operations-list'
          aria-expanded={expanded}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};
