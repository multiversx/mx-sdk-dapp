import React, { Fragment } from 'react';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';
import { NonceMessage } from '../../NonceMessage/NonceMessage';

interface TransactionInfoNoncePropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoNonce = (props: TransactionInfoNoncePropsTypes) => {
  const { transaction } = props;

  return (
    <DetailItem title='Nonce'>
      <Fragment>
        {transaction.nonce}

        <NonceMessage transaction={transaction} />
      </Fragment>
    </DetailItem>
  );
};
