import BigNumber from 'bignumber.js';
import { DECIMALS, DIGITS } from 'constants/index';
import { formatAmount } from './formatAmount';

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_FLOOR });

/**
 * !!! This function is deprecated. Please use formatAmount instead.
 * */
export function denominate({
  input,
  denomination = DECIMALS,
  decimals = DIGITS,
  showLastNonZeroDecimal = true,
  showIsLessThanDecimalsLabel = false,
  addCommas = false
}: {
  input: string;
  denomination?: number;
  decimals?: number;
  showIsLessThanDecimalsLabel?: boolean;
  showLastNonZeroDecimal?: boolean;
  addCommas?: boolean;
}) {
  console.warn(
    '!!! Be aware !!! The "denominate" function is deprecated. Please use "formatAmount" instead.'
  );

  return formatAmount({
    input,
    decimals: denomination,
    addCommas,
    digits: decimals,
    showIsLessThanDecimalsLabel,
    showLastNonZeroDecimal
  });
}
