import React from 'react';

import { N_A } from 'constants/index';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

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
        <span className={styles.price}>{N_A}</span>
      )}
    </DetailItem>
  );
};
