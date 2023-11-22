import React from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { CopyButton } from 'UI/CopyButton';
import {
  WithClassnameType,
  WithTransactionType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

const TransactionInfoHashComponent = ({
  className,
  transaction,
  styles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => (
  <DetailItem className={className} title='Hash'>
    <div className={styles?.hash}>
      {transaction.txHash}

      <CopyButton text={transaction.txHash} className={styles?.copy} />
    </div>
  </DetailItem>
);

export const TransactionInfoHash = withStyles(TransactionInfoHashComponent, {
  local: () =>
    import(
      'UI/TransactionInfo/components/transactionInfoFields/TransactionInfoHash/styles.scss'
    )
});
