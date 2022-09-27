import React from 'react';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DataField } from '../../DataField';
import { DetailItem } from '../../DetailItem';

interface TransactionInfoInputDataPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoInputData = (
  props: TransactionInfoInputDataPropsTypes
) => {
  const { transaction } = props;

  return (
    <DetailItem title='Input Data'>
      <DataField data={transaction.data} scamInfo={transaction.scamInfo} />
    </DetailItem>
  );
};
