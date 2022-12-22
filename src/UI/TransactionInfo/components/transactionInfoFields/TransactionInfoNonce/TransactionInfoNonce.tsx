import React from 'react';

import {
  WithClassnameType,
  WithTransactionType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';
import { NonceMessage } from '../../NonceMessage/NonceMessage';

export const TransactionInfoNonce = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => (
  <DetailItem className={className} title='Nonce'>
    <>
      {transaction.nonce}

      <NonceMessage transaction={transaction} />
    </>
  </DetailItem>
);
