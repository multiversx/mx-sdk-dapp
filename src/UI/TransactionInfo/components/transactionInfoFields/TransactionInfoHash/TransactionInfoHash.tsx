import React from 'react';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

interface TransactionInfoHashPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoHash = (props: TransactionInfoHashPropsTypes) => {
  const { transaction } = props;

  return (
    <DetailItem title='Hash'>
      <div className={styles.hash}>
        {transaction.txHash}

        <CopyButton text={transaction.txHash} className={styles.copy} />
      </div>
    </DetailItem>
  );
};
