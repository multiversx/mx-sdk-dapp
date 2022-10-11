import React from 'react';

import { WithTransactionType } from 'UI/types';

import { DetailItem } from '../../DetailItem';
import { ScResultsList } from '../../ScResultsList/ScResultsList';

export const TransactionInfoScResults = ({
  transaction
}: WithTransactionType) => {
  const showResults = transaction.results && transaction.results?.length > 0;

  if (!showResults) {
    return null;
  }

  return (
    <DetailItem title='Smart Contract Results'>
      <ScResultsList results={transaction.results ?? []} />
    </DetailItem>
  );
};
