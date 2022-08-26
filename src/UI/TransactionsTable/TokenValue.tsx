import React from 'react';
import { ExtendedTransactionType } from 'components/TransactionsInterpreter/helpers/types';

export const TokenValue = ({
  transaction
}: {
  transaction: ExtendedTransactionType;
}) => {
  return (
    <span>{`${transaction.amountInfo.formattedValue} ${transaction.tokenLabel}`}</span>
  );
};
