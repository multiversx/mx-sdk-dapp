import React from 'react';

import {
  WithClassnameType,
  WithTransactionType
} from '../../../../../UI/types';
import { DataField } from '../../DataField';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoInputData = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => (
  <DetailItem className={className} title='Input Data'>
    <DataField data={transaction.data} scamInfo={transaction.scamInfo} />
  </DetailItem>
);
