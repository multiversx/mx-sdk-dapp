import React from 'react';

import { CopyButton } from 'UI/CopyButton';
import { WithTransactionType } from 'UI/types';

import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

export const TransactionInfoHash = ({ transaction }: WithTransactionType) => (
  <DetailItem title='Hash'>
    <div className={styles.hash}>
      {transaction.txHash}

      <CopyButton text={transaction.txHash} className={styles.copy} />
    </div>
  </DetailItem>
);
