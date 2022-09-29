import React from 'react';

import { N_A } from 'constants/index';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

interface TransactionInfoGasLimitPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoGasLimit = (
  props: TransactionInfoGasLimitPropsTypes
) => {
  const { transaction } = props;

  return (
    <DetailItem title='Gas Limit'>
      {transaction.gasLimit != null ? (
        transaction.gasLimit.toLocaleString('en')
      ) : (
        <span className={styles.gas}>{N_A}</span>
      )}
    </DetailItem>
  );
};
