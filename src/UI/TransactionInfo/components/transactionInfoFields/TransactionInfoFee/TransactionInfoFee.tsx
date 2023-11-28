import React from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum, N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType, WithTransactionType } from 'UI/types';
import { getEgldLabel } from 'utils/network/getEgldLabel';
import { formatAmount } from 'utils/operations/formatAmount';
import { getUsdValue } from 'utils/operations/getUsdValue';
import { getTransactionFee } from 'utils/transactions/transactionInfoHelpers/getTransactionFee';
import { stringIsInteger } from 'utils/validation/stringIsInteger';
import { DetailItem } from '../../DetailItem';

const TransactionInfoFeeComponent = ({
  className,
  transaction,
  styles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => {
  const egldLabel = getEgldLabel();
  const txFee = getTransactionFee(transaction);

  const transactionFee =
    txFee && stringIsInteger(txFee)
      ? formatAmount({
          input: txFee,
          showLastNonZeroDecimal: true
        })
      : N_A;

  const price =
    transaction.price != null
      ? getUsdValue({
          amount: transactionFee,
          usd: transaction.price,
          decimals: 4,
          addEqualSign: true
        })
      : N_A;

  const fee =
    transaction.gasUsed != null ? (
      <>
        {transactionFee} {egldLabel}{' '}
        <span className={styles?.price}>({price})</span>
      </>
    ) : (
      <span className={styles?.price}>{N_A}</span>
    );

  return (
    <DetailItem
      title='Transaction Fee'
      className={classNames(styles?.fee, className)}
    >
      <span data-testid={DataTestIdsEnum.transactionInfoFee}>{fee}</span>
    </DetailItem>
  );
};

export const TransactionInfoFee = withStyles(TransactionInfoFeeComponent, {
  local: () =>
    import(
      'UI/TransactionInfo/components/transactionInfoFields/TransactionInfoFee/styles.scss'
    )
});
