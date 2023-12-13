import React from 'react';
import { N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import {
  WithTransactionType,
  WithClassnameType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

const TransactionInfoGasUsedComponent = ({
  className,
  transaction,
  styles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => (
  <DetailItem className={className} title='Gas Price'>
    {transaction.gasPrice != null ? (
      <FormatAmount
        value={transaction.gasPrice.toString()}
        showLastNonZeroDecimal
      />
    ) : (
      <span className={styles?.gas}>{N_A}</span>
    )}
  </DetailItem>
);

export const TransactionInfoGasUsed = withStyles(
  TransactionInfoGasUsedComponent,
  {
    ssrStyles: () =>
      import(
        'UI/TransactionInfo/components/transactionInfoFields/TransactionInfoGasUsed/styles.scss'
      ),
    clientStyles: () =>
      require('UI/TransactionInfo/components/transactionInfoFields/TransactionInfoGasUsed/styles.scss')
        .default
  }
);
