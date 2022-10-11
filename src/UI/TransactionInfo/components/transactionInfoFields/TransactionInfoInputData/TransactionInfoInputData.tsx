import React from 'react';

import { WithTransactionType } from 'UI/types';

import { DataField } from '../../DataField';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoInputData = ({
  transaction
}: WithTransactionType) => (
  <DetailItem title='Input Data'>
    <DataField data={transaction.data} scamInfo={transaction.scamInfo} />
  </DetailItem>
);
