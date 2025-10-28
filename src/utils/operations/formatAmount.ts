import BigNumber from 'bignumber.js';
import { DECIMALS, DIGITS, ZERO } from 'constants/index';
import { stringIsInteger } from 'utils/validation/stringIsInteger';
import { pipe } from './pipe';

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_FLOOR });

export interface FormatAmountType {
  input: string;
  decimals?: number;
  digits?: number;
  showIsLessThanDecimalsLabel?: boolean;
  showLastNonZeroDecimal?: boolean;
  addCommas?: boolean;
}

export function formatAmount({
  input,
  decimals = DECIMALS,
  digits = DIGITS,
  showLastNonZeroDecimal = true,
  showIsLessThanDecimalsLabel = false,
  addCommas = false
}: FormatAmountType) {
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
      // format
      .then(() =>
        new BigNumber(modInput as string).shiftedBy(-decimals).toFixed(decimals)
      )

      // format
      .then((current) => {
        const bnBalance = new BigNumber(current);

        if (bnBalance.isZero()) {
          return ZERO;
        }
        const balance = bnBalance.toString(10);
        const [integerPart, decimalPart] = balance.split('.');
        const bNdecimalPart = new BigNumber(decimalPart || 0);

        const decimalPlaces = pipe(0)
          .if(Boolean(decimalPart && showLastNonZeroDecimal))
          .then(() => Math.max(decimalPart.length, digits))

          .if(bNdecimalPart.isZero() && !showLastNonZeroDecimal)
          .then(0)

          .if(Boolean(decimalPart && !showLastNonZeroDecimal))
          .then(() => Math.min(decimalPart.length, digits))

          .valueOf();

        const shownDecimalsAreZero =
          decimalPart &&
          digits >= 1 &&
          digits <= decimalPart.length &&
          bNdecimalPart.isGreaterThan(0) &&
          new BigNumber(decimalPart.substring(0, digits)).isZero();

        const formatted = bnBalance.toFormat(decimalPlaces);

        const formattedBalance = pipe(balance)
          .if(addCommas)
          .then(formatted)

          .if(Boolean(shownDecimalsAreZero))
          .then((current) => {
            const integerPartZero = new BigNumber(integerPart).isZero();
            const [numericPart, decimalSide] = current.split('.');

            const zeroPlaceholders = new Array(digits - 1).fill(0);
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
            const [numericPart] = current.split('.');
            let decimalSide = decimalPart.substring(0, decimalPlaces);

            if (showLastNonZeroDecimal) {
              const noOfZerosAtEnd = digits - decimalSide.length;

              if (noOfZerosAtEnd > 0) {
                const zeroPadding = Array(noOfZerosAtEnd).fill(0).join('');
                decimalSide = `${decimalSide}${zeroPadding}`;
                return `${numericPart}.${decimalSide}`;
              }

              return current;
            }

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
