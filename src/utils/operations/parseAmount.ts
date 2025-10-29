import { TokenTransfer, Token } from '@multiversx/sdk-core';
import BigNumber from 'bignumber.js';
import { DECIMALS } from 'constants/index';

export function parseAmount(amount: string, numDecimals: number = DECIMALS) {
  return new TokenTransfer({
    token: new Token({ identifier: '' }),
    amount: BigInt(
      new BigNumber(amount).shiftedBy(numDecimals).decimalPlaces(0).toFixed(0)
    )
  }).toString();
}
