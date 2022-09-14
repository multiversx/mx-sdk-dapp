import React from 'react';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoStatus = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <DetailItem title='Hash'>
      <div className='d-flex align-items-center text-break-all'>
        {transaction.txHash}
        <CopyButton text={transaction.txHash} />
      </div>
    </DetailItem>
  );
};
