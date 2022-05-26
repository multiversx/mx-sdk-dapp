import { TokenPayment } from '@elrondnetwork/erdjs';
import { denomination as configDenomination } from 'constants/index';

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

export default nominate;
