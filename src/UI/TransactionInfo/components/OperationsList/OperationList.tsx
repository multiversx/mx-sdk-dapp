import * as React from 'react';
import {
  InterpretedTransactionType,
  OperationType,
  TransactionOperationActionTypeEnum
} from 'types/serverTransactions.types';

export const OperationsList = ({
  transaction,
  operations
}: {
  transaction: InterpretedTransactionType;
  operations: OperationType[];
}) => {
  const initialDisplay = 25;
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
    importantOperations.length > initialDisplay
      ? importantOperations.slice(0, initialDisplay)
      : importantOperations;

  const collapsedOperations =
    importantOperations.length > initialDisplay
      ? importantOperations.slice(initialDisplay, importantOperations.length)
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
