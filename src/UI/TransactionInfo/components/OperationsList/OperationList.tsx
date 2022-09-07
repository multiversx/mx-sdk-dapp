import React from 'react';
import { OperationType } from 'types/serverTransactions.types';
import {
  useGetOperationList,
  OperationListType
} from 'utils/transactions/transactionDetailsHelpers/useGetOperationList';
import { OperationRow } from './components/OperationRow';

export const OperationsList = (props: OperationListType) => {
  const {
    isExpanded,
    displayedOperations,
    showToggleButton,
    toggleButtonText,
    onToggleButtonClick
  } = useGetOperationList(props);

  return (
    <div className='mb-n2'>
      <div className='operations-list d-flex flex-column'>
        {displayedOperations.map((operation: OperationType, index) => (
          <div key={`display-${index}`}>
            <OperationRow
              operation={operation}
              transaction={props.transaction}
            />
          </div>
        ))}
      </div>
      {showToggleButton && (
        <button
          className='btn btn-link btn-link-base'
          type='button'
          onClick={onToggleButtonClick}
          aria-controls='operations-list'
          aria-expanded={isExpanded}
        >
          {toggleButtonText}
        </button>
      )}
    </div>
  );
};
