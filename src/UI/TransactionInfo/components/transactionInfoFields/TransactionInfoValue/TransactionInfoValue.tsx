import React from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum, N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType, WithTransactionType } from 'UI/types';
import { getEgldLabel } from 'utils/network/getEgldLabel';
import { formatAmount } from 'utils/operations/formatAmount';
import { getUsdValue } from 'utils/operations/getUsdValue';
import { DetailItem } from '../../DetailItem';

const TransactionInfoValueComponent = ({
  className,
  transaction,
  styles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => {
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
    <DetailItem title='Value' className={classNames(styles?.value, className)}>
      <span data-testid={DataTestIdsEnum.transactionInfoValue}>
        {formattedTxValue} {egldLabel}{' '}
        <span className={styles?.price}>
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

export const TransactionInfoValue = withStyles(TransactionInfoValueComponent, {
  ssrStyles: () =>
    import(
      'UI/TransactionInfo/components/transactionInfoFields/TransactionInfoValue/styles.scss'
    ),
  clientStyles: () =>
    require('UI/TransactionInfo/components/transactionInfoFields/TransactionInfoValue/styles.scss')
      .default
});
