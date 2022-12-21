import React from 'react';

import {
  WithClassnameType,
  WithTransactionType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';
import { ScResultsList } from '../../ScResultsList/ScResultsList';

export const TransactionInfoScResults = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => {
  const showResults = transaction.results && transaction.results?.length > 0;

  if (!showResults) {
    return null;
  }

  return (
    <DetailItem className={className} title='Smart Contract Results'>
      <ScResultsList results={transaction.results ?? []} />
    </DetailItem>
  );
};
