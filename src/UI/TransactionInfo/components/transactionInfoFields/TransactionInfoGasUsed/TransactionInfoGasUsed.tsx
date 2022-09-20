import React from 'react';
import { N_A } from 'constants/index';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoGasPrice = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <DetailItem title='Gas Used'>
      {transaction.gasUsed != null ? (
        <>{transaction.gasUsed.toLocaleString('en')}</>
      ) : (
        <span className='text-secondary'>{N_A}</span>
      )}
    </DetailItem>
  );
};
