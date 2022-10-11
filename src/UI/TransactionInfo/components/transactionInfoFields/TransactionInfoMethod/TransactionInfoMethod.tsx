import React from 'react';

import { TransactionActionCategoryEnum } from 'types/serverTransactions.types';
import { WithTransactionType } from 'UI/types';
import { getTransactionMethod } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionMethod';

import { DetailItem } from '../../DetailItem';
import { TransactionAction } from '../../TransactionAction';

export const TransactionInfoMethod = ({ transaction }: WithTransactionType) => {
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
