import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import {
  WithClassnameType,
  WithTransactionType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';
import { TransactionStatus } from '../../TransactionStatus';

const TransactionInfoStatusComponents = ({
  className,
  transaction,
  globalStyles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => (
  <DetailItem className={className} title='Status'>
    <div
      className={classNames(
        globalStyles?.dFlex,
        globalStyles?.alignItemsCenter,
        globalStyles?.flexWrap
      )}
    >
      <TransactionStatus transaction={transaction} />
    </div>
  </DetailItem>
);

export const TransactionInfoStatus = withStyles(
  TransactionInfoStatusComponents,
  {}
);
