import React from 'react';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { getEgldLabel } from 'utils/network/getEgldLabel';
import { formatAmount } from 'utils/operations/formatAmount';
import { getUsdValue } from 'utils/operations/getUsdValue';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoValue = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
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
    <DetailItem title='Value'>
      {formattedTxValue} {egldLabel}{' '}
      <span className='text-secondary'>
        {transaction.price !== undefined ? (
          <>
            (
            {getUsdValue({
              amount: txValue,
              usd: transaction.price,
              decimals: 2,
              addEqualSign: true
            })}
            )
          </>
        ) : (
          <>N/A</>
        )}
      </span>
    </DetailItem>
  );
};
