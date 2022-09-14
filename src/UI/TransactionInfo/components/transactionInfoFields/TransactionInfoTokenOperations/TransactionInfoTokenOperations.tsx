import React from 'react';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { getVisibleOperations } from 'utils/transactions/transactionInfoHelpers/getVisibleOperations';
import { DetailItem } from '../../DetailItem';
import { OperationsList } from '../../OperationsList/OperationList';

export const TransactionInfoTokenOperations = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  const visibleOperations = getVisibleOperations(transaction);

  const showOperations = visibleOperations.length > 0;

  if (!showOperations) {
    return null;
  }

  return (
    <DetailItem
      title={
        <>
          <span className='mr-2'>Token Operations</span>
          <span className='badge badge-secondary badge-pill font-weight-light'>
            {visibleOperations.length}
          </span>
        </>
      }
    >
      <OperationsList
        transaction={transaction}
        operations={visibleOperations}
      />
    </DetailItem>
  );
};
