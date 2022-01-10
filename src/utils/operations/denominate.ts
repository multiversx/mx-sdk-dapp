import { validation } from '@elrondnetwork/dapp-utils';
import { Balance, Token } from '@elrondnetwork/erdjs';
import BigNumber from 'bignumber.js';
import {
  denomination as configDenomination,
  decimals as configDecimals
} from 'constants/index';
import pipe from './pipe';

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_FLOOR });

export default function denominate({
  input,
  denomination = configDenomination,
  decimals = configDecimals,
  showLastNonZeroDecimal = true,
  addCommas = false
}: {
  input: string | Balance;
  denomination?: number;
  decimals?: number;
  showLastNonZeroDecimal?: boolean;
  addCommas?: boolean;
}) {
  const token = new Token({ decimals: denomination });

  if (typeof input === 'string' && !validation.stringIsInteger(input, false)) {
    throw new Error('Invalid input');
  }

  return (
    pipe(input as string)
      // denominate
      .if(typeof input === 'string')
      .then(() =>
        new Balance(token, 0, new BigNumber(input as string)).toDenominated()
      )

      .if(input.constructor === Balance)
      .then(() => (input as Balance).toDenominated())

      // format
      .then((current) => {
        const bnBalance = new BigNumber(current);

        if (bnBalance.isZero()) {
          return '0';
        }
        const balance = bnBalance.toString(10);
        const [integerPart, decimalPart] = balance.split('.');
        const bNdecimalPart = new BigNumber(decimalPart || 0);

        const decimalPlaces = pipe(0)
          .if(Boolean(decimalPart && showLastNonZeroDecimal))
          .then(() => Math.max(decimalPart.length, decimals))

          .if(bNdecimalPart.isZero() && !showLastNonZeroDecimal)
          .then(0)

          .if(Boolean(decimalPart && !showLastNonZeroDecimal))
          .then(() => Math.min(decimalPart.length, decimals))

          .valueOf();

        const shownDecimalsAreZero =
          decimalPart &&
          decimals >= 1 &&
          decimals <= decimalPart.length &&
          bNdecimalPart.isGreaterThan(0) &&
          new BigNumber(decimalPart.substring(0, decimals)).isZero();

        const formatted = bnBalance.toFormat(decimalPlaces);

        const formattedBalance = pipe(balance)
          .if(addCommas)
          .then(formatted)

          .if(Boolean(shownDecimalsAreZero))
          .then((current) => {
            const integerPartZero = new BigNumber(integerPart).isZero();
            const [numericPart] = current.split('.');

            const zeroPlaceholders = new Array(decimals - 1).fill(0);
            const zeros = [...zeroPlaceholders, 0].join('');
            const minAmount = [...zeroPlaceholders, 1].join(''); // 00..1

            if (integerPartZero) {
              return `<${numericPart}.${minAmount}`;
            } else {
              return `${numericPart}.${zeros}`;
            }
          })

          .valueOf();

        return formattedBalance;
      })

      .valueOf()
  );
}
