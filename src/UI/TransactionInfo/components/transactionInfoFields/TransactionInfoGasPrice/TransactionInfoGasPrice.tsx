import React from 'react';
import { N_A } from 'constants/index';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { DetailItem } from '../../DetailItem';

import globalStyles from 'assets/sass/main.scss';

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
        <span className={globalStyles.textSecondary}>{N_A}</span>
      )}
    </DetailItem>
  );
};
