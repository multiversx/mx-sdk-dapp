import { DIGITS, DECIMALS } from 'constants/index';

import { formatAmount } from './formatAmount';
import { getUsdValue } from './getUsdValue';

export interface CalculateFeeInFiatType {
  feeLimit: string;
  egldPriceInUsd: number;
  hideEqualSign?: boolean;
}

export const calculateFeeInFiat = ({
  feeLimit,
  egldPriceInUsd,
  hideEqualSign
}: CalculateFeeInFiatType) => {
  const amount = formatAmount({
    input: feeLimit,
    decimals: DECIMALS,
    digits: DIGITS,
    showLastNonZeroDecimal: true
  });

  const feeAsUsdValue = getUsdValue({
    amount,
    usd: egldPriceInUsd,
    decimals: DIGITS
  });

  if (hideEqualSign) {
    return feeAsUsdValue;
  }

  return `≈ ${feeAsUsdValue}`;
};
