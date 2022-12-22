import React from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import {
  WithClassnameType,
  WithTransactionType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';
import { TransactionStatus } from '../../TransactionStatus';

export const TransactionInfoStatus = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => (
  <DetailItem className={className} title='Status'>
    <div
      className={classNames(
        globalStyles.dFlex,
        globalStyles.alignItemsCenter,
        globalStyles.flexWrap
      )}
    >
      <TransactionStatus transaction={transaction} />
    </div>
  </DetailItem>
);
