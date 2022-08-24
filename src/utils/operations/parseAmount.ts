import { DECIMALS } from 'constants/index';
import { nominate } from './nominate';

export function parseAmount(amount: string, numDecimals: number = DECIMALS) {
  console.warn();
  return nominate(amount, numDecimals);
}
