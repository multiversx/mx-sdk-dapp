import React from 'react';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';
import { ScResultsList } from '../../ScResultsList/ScResultsList';

interface TransactionInfoScResultsPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoScResults = (
  props: TransactionInfoScResultsPropsTypes
) => {
  const { transaction } = props;
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
