import { DIGITS, DECIMALS } from 'constants/index';

import { formatAmount } from './formatAmount';
import { getUsdValue } from './getUsdValue';

export const calculateFeeInFiat = ({
  feeLimit,
  egldPriceInUsd
}: {
  feeLimit: string;
  egldPriceInUsd: number;
}) => {
  const amount = formatAmount({
    input: feeLimit,
    decimals: DECIMALS,
    digits: DIGITS,
    showLastNonZeroDecimal: true
  });

  const feeInFiat = `≈ ${getUsdValue({
    amount,
    usd: egldPriceInUsd,
    decimals: DIGITS
  })}`;

  return feeInFiat;
};
