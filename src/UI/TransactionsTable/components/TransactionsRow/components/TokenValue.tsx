import React from 'react';
import { ExtendedTransactionType } from 'types/serverTransactions.types';

export const TokenValue = ({
  transaction
}: {
  transaction: ExtendedTransactionType;
}) => {
  return (
    <span>{`${transaction.amountInfo.formattedValue} ${transaction.tokenLabel}`}</span>
  );
};
