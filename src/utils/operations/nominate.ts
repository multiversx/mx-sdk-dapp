import { TokenPayment } from '@elrondnetwork/erdjs';
import { DENOMINATION as configDenomination } from 'constants/index';

export function nominate(
  input: string,
  customDenomination: number = configDenomination
) {
  return TokenPayment.fungibleFromAmount(
    '',
    input,
    customDenomination
  ).toString();
}
