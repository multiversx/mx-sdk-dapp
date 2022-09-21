import * as React from 'react';
import {
  InterpretedTransactionType,
  OperationType
} from 'types/serverTransactions.types';
import { OperationText } from './OperationText';

export const DetailedItem = ({
  children,
  operation,
  transaction
}: {
  children?: React.ReactNode;
  operation: OperationType;
  transaction: InterpretedTransactionType;
}) => {
  return (
    <div className='detailed-item d-flex row mb-3 mb-xl-2'>
      <OperationText operation={operation} transaction={transaction} />
      {children && (
        <div className='col-lg-6 col-xl-6 d-flex align-items-center'>
          <div className='d-flex text-truncate'>{children}</div>
        </div>
      )}
    </div>
  );
};
