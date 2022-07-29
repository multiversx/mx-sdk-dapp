import { UITransactionType } from 'components/TransactionsInterpreter/helpers/types';
import React from 'react';
import getTransactionMethod from 'components/TransactionsInterpreter/helpers/getTransactionMethod';

export const TransactionMethod = ({
  transaction
}: {
  transaction: UITransactionType;
}) => {
  return (
    <span
      title={transaction.action?.description}
      className='badge badge-secondary badge-pill font-weight-light'
    >
      <div className='transaction-function-badge text-truncate text-capitalize'>
        {getTransactionMethod(transaction)}
      </div>
    </span>
  );
};
