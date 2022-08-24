import { DECIMALS } from 'constants/index';
import { parseAmount } from './parseAmount';

/**
 * !!! This function is deprecated. Please use parseAmount instead.
 * */
export function nominate(amount: string, numDecimals: number = DECIMALS) {
  console.warn(
    '!!! Be aware !!! The "nominate" function is deprecated. Please use "parseAmount" instead.'
  );

  return parseAmount(amount, numDecimals);
}
