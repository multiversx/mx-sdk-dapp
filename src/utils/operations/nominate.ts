import { DECIMALS } from 'constants/index';
import { parseAmount } from './parseAmount';

let deprecationMessageDisplayed = false;

/**
 * !!! This function is deprecated. Please use parseAmount instead.
 * */
export function nominate(amount: string, numDecimals: number = DECIMALS) {
  if (!deprecationMessageDisplayed) {
    console.warn(
      '!!! Be aware !!! The "nominate" function is deprecated. Please use "parseAmount" instead.'
    );
    deprecationMessageDisplayed = true;
  }

  return parseAmount(amount, numDecimals);
}
