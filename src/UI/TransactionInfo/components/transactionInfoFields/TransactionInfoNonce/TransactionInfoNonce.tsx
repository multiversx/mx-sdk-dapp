import React from 'react';

import { WithTransactionType } from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';
import { NonceMessage } from '../../NonceMessage/NonceMessage';

export const TransactionInfoNonce = ({ transaction }: WithTransactionType) => (
  <DetailItem title='Nonce'>
    <>
      {transaction.nonce}

      <NonceMessage transaction={transaction} />
    </>
  </DetailItem>
);
