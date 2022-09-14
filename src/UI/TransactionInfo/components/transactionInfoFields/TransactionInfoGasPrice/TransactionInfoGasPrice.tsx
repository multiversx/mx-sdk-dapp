import React from 'react';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoGasUsed = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <DetailItem title='Gas Used'>
      {transaction.gasUsed != null ? (
        <>{transaction.gasUsed.toLocaleString('en')}</>
      ) : (
        <span className='text-secondary'>N/A</span>
      )}
    </DetailItem>
  );
};
