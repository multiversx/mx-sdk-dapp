import { TokenPayment } from '@elrondnetwork/erdjs';
import { BigNumber } from 'bignumber.js';
import { DECIMALS } from 'constants/index';
import { stringIsFloat, stringIsInteger } from 'utils/validation';

export const parseAmount = (
  amount: string,
  numDecimals: number = DECIMALS
): string => {
  if (!amount) {
    return '';
  }

  const isNumber =
    stringIsFloat(amount) ||
    stringIsInteger(amount) ||
    new BigNumber(amount).isFinite();

  if (!isNumber) {
    return '';
  }

  return TokenPayment.fungibleFromAmount('', amount, numDecimals).toString();
};
