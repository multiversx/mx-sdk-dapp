import BigNumber from 'bignumber.js';

import { ZERO } from 'lib/sdkDappUtils';

interface TrimPriceAmountType {
  amount: string;
  minimumPositiveDecimals: number;
}

export const trimAmountDecimals = ({
  amount,
  minimumPositiveDecimals
}: TrimPriceAmountType): string => {
  const [mainPrice, decimalPrice] = amount.split('.');

  const decimalPriceArray = decimalPrice ? decimalPrice.split('') : [];
  const trimmedDecimals = decimalPriceArray.reduce((total, decimal, index) => {
    const decimalAboveZero = new BigNumber(total).isGreaterThan(ZERO);
    const minimumDecimalsReached = index > minimumPositiveDecimals - 1;

    const shouldReturnTotal =
      decimalAboveZero && minimumDecimalsReached && minimumPositiveDecimals > 0;

    if (shouldReturnTotal) {
      return total;
    }

    return total.concat(decimal);
  }, '');

  if (!trimmedDecimals) {
    return mainPrice;
  }

  return `${mainPrice}.${trimmedDecimals}`;
};
