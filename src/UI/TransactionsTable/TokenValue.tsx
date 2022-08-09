import { ExtendedTransactionType } from 'components/TransactionsInterpreter/helpers/types';
import React from 'react';

export const TokenValue = ({
  transaction
}: {
  transaction: ExtendedTransactionType;
}) => {
  return (
    <span>{`${transaction.denomination.denominatedValue} ${transaction.tokenLabel}`}</span>
  );
};
