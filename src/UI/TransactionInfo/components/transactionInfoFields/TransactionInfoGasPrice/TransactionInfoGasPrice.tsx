import React from 'react';

import { N_A } from 'constants/index';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';

import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

interface TransactionInfoGasUsedPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoGasUsed = (
  props: TransactionInfoGasUsedPropsTypes
) => {
  const { transaction } = props;

  return (
    <DetailItem title='Gas Price'>
      {transaction.gasPrice != null ? (
        <FormatAmount
          value={transaction.gasPrice.toString()}
          showLastNonZeroDecimal
        />
      ) : (
        <span className={styles.gas}>{N_A}</span>
      )}
    </DetailItem>
  );
};
