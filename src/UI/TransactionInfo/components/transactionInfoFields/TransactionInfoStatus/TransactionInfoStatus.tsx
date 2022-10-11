import React from 'react';
import classNames from 'classnames';

import { WithTransactionType } from 'UI/types';

import { DetailItem } from '../../DetailItem';
import { TransactionStatus } from '../../TransactionStatus';

import globalStyles from 'assets/sass/main.scss';

export const TransactionInfoStatus = ({ transaction }: WithTransactionType) => (
  <DetailItem title='Status'>
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
