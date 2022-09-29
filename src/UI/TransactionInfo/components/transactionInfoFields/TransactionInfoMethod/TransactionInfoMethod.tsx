import React, { Fragment } from 'react';

import {
  InterpretedTransactionType,
  TransactionActionCategoryEnum
} from 'types/serverTransactions.types';
import { getTransactionMethod } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionMethod';

import { DetailItem } from '../../DetailItem';
import { TransactionAction } from '../../TransactionAction';

interface TransactionInfoMethodPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoMethod = (
  props: TransactionInfoMethodPropsTypes
) => {
  const { transaction } = props;

  const showMethod = transaction.action && transaction.action.category;
  const showAction =
    transaction.action?.category !== TransactionActionCategoryEnum.scCall;

  if (!showMethod) {
    return null;
  }

  return (
    <Fragment>
      <DetailItem title='Method'>
        {getTransactionMethod(transaction)}
      </DetailItem>

      {showAction && (
        <DetailItem title='Transaction Action'>
          <TransactionAction transaction={transaction} />
        </DetailItem>
      )}
    </Fragment>
  );
};
