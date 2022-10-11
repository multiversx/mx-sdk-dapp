import React from 'react';

import { N_A } from 'constants/index';
import { WithTransactionType } from 'UI/types';

import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';
import { getUsdValue } from 'utils';

export const TransactionInfoEgldPrice = ({
  transaction
}: WithTransactionType) => (
  <DetailItem title='EGLD Price'>
    {transaction.price != null ? (
      getUsdValue({ amount: '1', usd: transaction.price })
    ) : (
      <span className={styles.price}>{N_A}</span>
    )}
  </DetailItem>
);
