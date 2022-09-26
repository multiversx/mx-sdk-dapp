import React from 'react';
import classNames from 'classnames';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { DetailItem } from '../../DetailItem';

import globalStyles from 'assets/sass/main.scss';

interface TransactionInfoHashPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoHash = (props: TransactionInfoHashPropsTypes) => {
  const { transaction } = props;

  return (
    <DetailItem title='Hash'>
      <div
        className={classNames(
          globalStyles.dFlex,
          globalStyles.alignItemsCenter
        )}
      >
        {transaction.txHash}

        <CopyButton text={transaction.txHash} />
      </div>
    </DetailItem>
  );
};
