import React from 'react';

import { N_A } from 'constants/index';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';

import globalStyles from 'assets/sass/main.scss';

interface TransactionInfoEgldPricePropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoEgldPrice = (
  props: TransactionInfoEgldPricePropsTypes
) => {
  const { transaction } = props;

  return (
    <DetailItem title='EGLD Price'>
      {transaction.price != null ? (
        `$${Number(transaction.price).toLocaleString('en', {
          minimumFractionDigits: 2
        })}`
      ) : (
        <span className={globalStyles.textSecondary}>{N_A}</span>
      )}
    </DetailItem>
  );
};
