import React from 'react';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';
import { TransactionStatus } from '../../TransactionStatus';

export const TransactionInfoStatus = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <DetailItem title='Status'>
      <div className='d-flex flex-wrap align-items-center'>
        <TransactionStatus transaction={transaction} />
      </div>
    </DetailItem>
  );
};
