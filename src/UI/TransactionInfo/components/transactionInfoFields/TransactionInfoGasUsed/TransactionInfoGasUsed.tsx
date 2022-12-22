import React from 'react';

import { N_A } from 'constants/index';

import {
  WithTransactionType,
  WithClassnameType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

export const TransactionInfoGasPrice = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => (
  <DetailItem className={className} title='Gas Used'>
    {transaction.gasUsed != null ? (
      transaction.gasUsed.toLocaleString('en')
    ) : (
      <span className={styles.gas}>{N_A}</span>
    )}
  </DetailItem>
);
