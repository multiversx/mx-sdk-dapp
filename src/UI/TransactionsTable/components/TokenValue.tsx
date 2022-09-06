import React from 'react';
import { InterpretedTransactionType } from 'types/serverTransactions.types';

export const TokenValue = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <span>{`${transaction.amountInfo.formattedValue} ${transaction.tokenLabel}`}</span>
  );
};
