import React from 'react';

import { N_A } from 'constants/index';

import { WithTransactionType } from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

export const TransactionInfoGasLimit = ({
  transaction
}: WithTransactionType) => (
  <DetailItem title='Gas Limit'>
    {transaction.gasLimit != null ? (
      transaction.gasLimit.toLocaleString('en')
    ) : (
      <span className={styles.gas}>{N_A}</span>
    )}
  </DetailItem>
);
