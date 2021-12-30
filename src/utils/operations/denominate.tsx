import { validation } from '@elrondnetwork/dapp-utils';
import { Balance, Token } from '@elrondnetwork/erdjs';
import BigNumber from 'bignumber.js';
import { egldLabelSelector } from 'redux/selectors';
import { store } from 'redux/store';
import pipe from './pipe';

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_FLOOR });

export default function denominate({
  input,
  denomination = 18,
  decimals = 4,
  showLastNonZeroDecimal = false,
  addCommas = true,
  showTokenLabel
}: {
  showTokenLabel?: boolean;
  input: string | Balance;
  denomination?: number;
  decimals?: number;
  showLastNonZeroDecimal?: boolean;
  addCommas?: boolean;
}) {
  const egldLabel = egldLabelSelector(store.getState());
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
      .if(true)
      .then((current) => {
        const bnBalance = new BigNumber(current);
        if (bnBalance.isZero()) {
          return '0';
        }
        const balance = bnBalance.toString(10);
        const decimalPart = balance.split('.')[1];
        const decimalPlaces = pipe(0)
          .if(Boolean(decimalPart && showLastNonZeroDecimal))
          .then(() => Math.max(decimalPart.length, decimals))

          .if(
            Boolean(decimalPart) &&
              new BigNumber(decimalPart).isZero() &&
              !showLastNonZeroDecimal
          )
          .then(0)

          .if(Boolean(decimalPart && !showLastNonZeroDecimal))
          .then(() => Math.min(decimalPart.length, decimals))

          .valueOf();

        return addCommas ? bnBalance.toFormat(decimalPlaces) : balance;
      })

      // add label
      .if(Boolean(showTokenLabel))
      .then((current) => `${current} ${egldLabel}`)

      .valueOf()
  );
}
