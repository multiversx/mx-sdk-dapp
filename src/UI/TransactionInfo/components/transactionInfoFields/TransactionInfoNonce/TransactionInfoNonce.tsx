import React from 'react';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';
import { NonceMessage } from '../../NonceMessage/NonceMessage';

export const TransactionInfoNonce = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <DetailItem title='Nonce'>
      <>
        {transaction.nonce}
        <NonceMessage transaction={transaction} />
      </>
    </DetailItem>
  );
};
