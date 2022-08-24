import { DECIMALS, DIGITS } from 'constants/index';
import { formatAmount } from './formatAmount';

let deprecationMessageDisplayed = false;

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
  if (!deprecationMessageDisplayed) {
    console.warn(
      '!!! Be aware !!! The "denominate" function is deprecated. Please use "formatAmount" instead.'
    );

    deprecationMessageDisplayed = true;
  }

  return formatAmount({
    input,
    decimals: denomination,
    addCommas,
    digits: decimals,
    showIsLessThanDecimalsLabel,
    showLastNonZeroDecimal
  });
}
