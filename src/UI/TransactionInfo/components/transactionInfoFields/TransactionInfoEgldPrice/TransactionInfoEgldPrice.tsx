import React from 'react';
import { N_A } from 'constants/index';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoEgldPrice = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <DetailItem title='EGLD Price'>
      {transaction.price != null ? (
        <>
          {`$${Number(transaction.price).toLocaleString('en', {
            minimumFractionDigits: 2
          })}`}
        </>
      ) : (
        <span className='text-secondary'>{N_A}</span>
      )}
    </DetailItem>
  );
};
