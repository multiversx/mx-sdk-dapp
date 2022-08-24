import { TokenPayment } from '@elrondnetwork/erdjs';
import { DECIMALS } from 'constants/index';

export function nominate(amount: string, numDecimals: number = DECIMALS) {
  return TokenPayment.fungibleFromAmount('', amount, numDecimals).toString();
}
