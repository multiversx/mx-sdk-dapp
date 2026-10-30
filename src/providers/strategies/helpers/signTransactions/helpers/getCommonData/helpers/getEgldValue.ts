import { BigNumber } from 'bignumber.js';
import { formatAmount } from 'lib/sdkDappUtils';
import { getUsdValue } from 'utils/operations/getUsdValue';

export const getEgldValue = ({
  isEgld,
  value,
  decimals,
  digits,
  price
}: {
  isEgld: boolean;
  value: string;
  decimals: number;
  digits: number;
  price?: number;
}) => {
  if (isEgld || !new BigNumber(value).isGreaterThan(0)) {
    return null;
  }

  const getFormattedValue = (addCommas: boolean) =>
    formatAmount({ input: value, decimals, digits, addCommas });

  return {
    amount: getFormattedValue(true),
    usdValue: getUsdValue({
      amount: getFormattedValue(false),
      usd: Number(price),
      addEqualSign: true
    })
  };
};
