import { TokenTransfer } from '@multiversx/sdk-core';
import BigNumber from 'bignumber.js';
import { DECIMALS } from 'constants/index';

export function parseAmount(amount: string, numDecimals: number = DECIMALS) {
  return new TokenTransfer({
    tokenIdentifier: '',
    nonce: 0,
    amountAsBigInteger: new BigNumber(amount)
      .shiftedBy(numDecimals)
      .decimalPlaces(0),
    numDecimals
  });
}
