import React from 'react';
import classNames from 'classnames';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { DetailItem } from '../../DetailItem';
import { TransactionStatus } from '../../TransactionStatus';

import globalStyles from 'assets/sass/main.scss';

interface TransactionInfoStatusPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoStatus = (
  props: TransactionInfoStatusPropsTypes
) => {
  const { transaction } = props;

  return (
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
};
