import BigNumber from 'bignumber.js';
import {
  decimals as configDecimals
} from 'constants/index';
import { stringIsInteger } from 'utils/validation';
import pipe from './pipe';
import { TokenPayment } from '@elrondnetwork/erdjs/out';

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_FLOOR });

export function denominate({
  input,
  decimals = configDecimals,
  showLastNonZeroDecimal = true,
  showIsLessThanDecimalsLabel = false,
  addCommas = false
}: {
  input: string;
  denomination?: number;
  decimals?: number;
  showIsLessThanDecimalsLabel?: boolean;
  showLastNonZeroDecimal?: boolean;
  addCommas?: boolean;
}) {
  if (typeof input === 'string' && !stringIsInteger(input, false)) {
    throw new Error('Invalid input');
  }

  return (
    pipe(input as string)
      // denominate
      .if(typeof input === 'string')
      .then(() =>
        TokenPayment.fungibleFromBigInteger("", new BigNumber(input as string), decimals).toString()
        // new Balance(token, 0, new BigNumber(input as string)).toDenominated()
      )

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
            const [numericPart, decimalSide] = current.split('.');

            const zeroPlaceholders = new Array(decimals - 1).fill(0);
            const zeros = [...zeroPlaceholders, 0].join('');
            const minAmount = [...zeroPlaceholders, 1].join(''); // 00..1

            if (!integerPartZero) {
              return `${numericPart}.${zeros}`;
            }

            if (showIsLessThanDecimalsLabel) {
              return `<${numericPart}.${minAmount}`;
            }

            return `${numericPart}.${decimalSide}`;
          })

          .if(Boolean(!shownDecimalsAreZero && decimalPart))
          .then((current) => {
            if (showLastNonZeroDecimal) {
              return current;
            }

            const [numericPart] = current.split('.');
            const decimalSide = decimalPart.substring(0, decimalPlaces);

            if (!decimalSide) {
              return numericPart;
            }

            return `${numericPart}.${decimalSide}`;
          })

          .valueOf();

        return formattedBalance;
      })

      .valueOf()
  );
}
export default denominate;
