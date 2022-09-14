import React from 'react';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DataField } from '../../DataField';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoInputData = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <DetailItem title='Input Data' className='data-field'>
      <DataField data={transaction.data} scamInfo={transaction.scamInfo} />
    </DetailItem>
  );
};
