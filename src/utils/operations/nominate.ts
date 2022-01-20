import {
  createBalanceBuilder,
  Token,
  TokenType
} from '@elrondnetwork/erdjs/out';
import { denomination as configDenomination } from 'constants/index';

export function nominate(input: string, customDenomination?: number) {
  const balance = createBalanceBuilder(
    new Token({
      decimals: customDenomination || configDenomination,
      type: TokenType.Fungible
    })
  );
  return balance(input).toString();
}
