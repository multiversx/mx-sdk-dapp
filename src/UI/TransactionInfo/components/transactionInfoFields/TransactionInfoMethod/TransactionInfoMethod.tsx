import React from 'react';

import { TransactionActionCategoryEnum } from 'types/serverTransactions.types';
import { getTransactionMethod } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionMethod';

import {
  WithClassnameType,
  WithTransactionType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';
import { TransactionAction } from '../../TransactionAction';

export const TransactionInfoMethod = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => {
  const showMethod = transaction.action && transaction.action.category;
  const showAction =
    transaction.action?.category !== TransactionActionCategoryEnum.scCall;

  if (!showMethod) {
    return null;
  }

  return (
    <>
      <DetailItem className={className} title='Method'>
        {getTransactionMethod(transaction)}
      </DetailItem>

      {showAction && (
        <DetailItem className={className} title='Transaction Action'>
          <TransactionAction transaction={transaction} />
        </DetailItem>
      )}
    </>
  );
};
