import { TokenPayment } from '@elrondnetwork/erdjs';
import { DECIMALS } from 'constants/index';

/**
 * !!! This function is deprecated. Please use parseAmount instead.
 * */
export function nominate(amount: string, numDecimals: number = DECIMALS) {
  console.warn(
    '!!! Be aware !!! The "nominate" function is deprecated. Please use "parseAmount" instead.'
  );

  return TokenPayment.fungibleFromAmount('', amount, numDecimals).toString();
}
