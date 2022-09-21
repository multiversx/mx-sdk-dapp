import React from 'react';
import {
  InterpretedTransactionType,
  TransactionActionCategoryEnum
} from 'types/serverTransactions.types';
import { getTransactionMethod } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionMethod';
import { DetailItem } from '../../DetailItem';
import { TransactionAction } from '../../TransactionAction';

export const TransactionInfoMethod = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  const showMethod = transaction.action && transaction.action.category;
  const showAction =
    transaction.action?.category !== TransactionActionCategoryEnum.scCall;

  if (!showMethod) {
    return null;
  }
  return (
    <>
      <DetailItem title='Method'>
        {getTransactionMethod(transaction)}
      </DetailItem>
      {showAction && (
        <DetailItem title='Transaction Action'>
          <TransactionAction transaction={transaction} />
        </DetailItem>
      )}
    </>
  );
};
