import { TokenPayment } from '@elrondnetwork/erdjs';
import { DECIMALS } from 'constants/index';

export function parseAmount(amount: string, numDecimals: number = DECIMALS) {
  return TokenPayment.fungibleFromAmount('', amount, numDecimals).toString();
}
