import React from 'react';

import { N_A } from 'constants/index';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';

import {
  WithTransactionType,
  WithClassnameType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

export const TransactionInfoGasUsed = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => (
  <DetailItem className={className} title='Gas Price'>
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
