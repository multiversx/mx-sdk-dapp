import BigNumber from 'bignumber.js';
import { ZERO } from 'constants/index';

export const stringIsFloat = (amount: string) => {
  if (isNaN(amount as any)) {
    return false;
  }
  if (amount == null) {
    return false;
  }
  if (String(amount).includes('Infinity')) {
    return false;
  }

  // eslint-disable-next-line
  let [wholes, decimals] = amount.split('.');
  const LocalBigNumber = BigNumber.clone();

  if (decimals) {
    const areAllNumbers = decimals
      .split('')
      .every((digit) => !isNaN(parseInt(digit)));

    LocalBigNumber.set({
      DECIMAL_PLACES: areAllNumbers
        ? decimals.length
        : BigNumber.config().DECIMAL_PLACES
    });

    while (decimals.charAt(decimals.length - 1) === ZERO) {
      decimals = decimals.slice(0, -1);
    }
  }
  const number = decimals ? [wholes, decimals].join('.') : wholes;
  const bNparsed = LocalBigNumber(number);

  const output =
    bNparsed.toString(10) === number && bNparsed.isGreaterThanOrEqualTo(0);

  return output;
};
