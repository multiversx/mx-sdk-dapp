import React from 'react';
import { N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import {
  WithTransactionType,
  WithClassnameType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

const TransactionInfoGasPriceComponent = ({
  className,
  transaction,
  styles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => (
  <DetailItem className={className} title='Gas Used'>
    {transaction.gasUsed != null ? (
      transaction.gasUsed.toLocaleString('en')
    ) : (
      <span className={styles?.gas}>{N_A}</span>
    )}
  </DetailItem>
);

export const TransactionInfoGasPrice = withStyles(
  TransactionInfoGasPriceComponent,
  {
    local: () =>
      import(
        'UI/TransactionInfo/components/transactionInfoFields/TransactionInfoGasPrice/styles.scss'
      )
  }
);
