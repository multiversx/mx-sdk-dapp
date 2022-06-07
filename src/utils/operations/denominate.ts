import { TokenPayment } from '@elrondnetwork/erdjs';
import BigNumber from 'bignumber.js';
import {
  decimals as configDecimals,
  denomination as configDenomination
} from 'constants/index';
import { stringIsInteger } from 'utils/validation';
import pipe from './pipe';

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_FLOOR });

export function denominate({
  input,
  denomination = configDenomination,
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
  if (!stringIsInteger(input, false)) {
    throw new Error('Invalid input');
  }

  const isNegative = new BigNumber(input).isNegative();
  let modInput = input;

  if (isNegative) {
    // remove - at start of input
    modInput = input.substring(1);
  }

  return (
    pipe(modInput as string)
      // denominate
      .then(() =>
        TokenPayment.fungibleFromBigInteger(
          '',
          modInput as string,
          denomination
        ).toRationalNumber()
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

            if (!showLastNonZeroDecimal) {
              return numericPart;
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
      .if(isNegative)
      .then((current) => `-${current}`)

      .valueOf()
  );
}
export default denominate;
