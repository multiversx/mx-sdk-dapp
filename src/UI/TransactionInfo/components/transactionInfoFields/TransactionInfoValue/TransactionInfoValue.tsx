import React from 'react';

import { N_A } from 'constants/index';
import { getEgldLabel } from 'utils/network/getEgldLabel';
import { formatAmount } from 'utils/operations/formatAmount';
import { getUsdValue } from 'utils/operations/getUsdValue';

import { WithTransactionType } from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

export const TransactionInfoValue = ({ transaction }: WithTransactionType) => {
  const egldLabel = getEgldLabel();
  const formattedTxValue = formatAmount({
    input: transaction.value,
    showLastNonZeroDecimal: true
  });

  const txValue = formatAmount({
    input: transaction.value,
    addCommas: false,
    showLastNonZeroDecimal: true
  });

  return (
    <DetailItem title='Value' className={styles.value}>
      <span data-testid='transactionInfoValue'>
        {formattedTxValue} {egldLabel}{' '}
        <span className={styles.price}>
          {transaction.price != null
            ? `(${getUsdValue({
                amount: txValue,
                usd: transaction.price,
                decimals: 2,
                addEqualSign: true
              })})`
            : N_A}
        </span>
      </span>
    </DetailItem>
  );
};
