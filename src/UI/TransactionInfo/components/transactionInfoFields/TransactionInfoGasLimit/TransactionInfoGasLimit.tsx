import React from 'react';
import { N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import {
  WithTransactionType,
  WithClassnameType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

const TransactionInfoGasLimitComponent = ({
  className,
  transaction,
  styles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => (
  <DetailItem className={className} title='Gas Limit'>
    {transaction.gasLimit != null ? (
      transaction.gasLimit.toLocaleString('en')
    ) : (
      <span className={styles?.gas}>{N_A}</span>
    )}
  </DetailItem>
);

export const TransactionInfoGasLimit = withStyles(
  TransactionInfoGasLimitComponent,
  {
    ssrStyles: () =>
      import(
        'UI/TransactionInfo/components/transactionInfoFields/TransactionInfoGasLimit/styles.scss'
      ),
    clientStyles: () =>
      require('UI/TransactionInfo/components/transactionInfoFields/TransactionInfoGasLimit/styles.scss')
        .default
  }
);
