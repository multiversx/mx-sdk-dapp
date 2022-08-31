import React from 'react';
import { ExtendedTransactionType } from 'utils/transactions/interpreter';

export const TokenValue = ({
  transaction
}: {
  transaction: ExtendedTransactionType;
}) => {
  return (
    <span>{`${transaction.amountInfo.formattedValue} ${transaction.tokenLabel}`}</span>
  );
};
