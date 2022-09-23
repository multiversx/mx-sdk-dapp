import React from 'react';

import { N_A } from 'constants/index';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';

import globalStyles from 'assets/sass/main.scss';

interface TransactionInfoGasPricePropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoGasPrice = (
  props: TransactionInfoGasPricePropsTypes
) => {
  const { transaction } = props;

  return (
    <DetailItem title='Gas Used'>
      {transaction.gasUsed != null ? (
        <>{transaction.gasUsed.toLocaleString('en')}</>
      ) : (
        <span className={globalStyles.textSecondary}>{N_A}</span>
      )}
    </DetailItem>
  );
};
