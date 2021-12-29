import { operations, validation } from '@elrondnetwork/dapp-utils';

const defaultDecimals = 4;

export function denominateAmount({
  amount,
  denomination,
  decimals,
  showLastNonZeroDecimal,
  addCommas
}: {
  amount: string;
  denomination: number;
  decimals?: number;
  showLastNonZeroDecimal?: boolean;
  addCommas?: boolean;
}) {
  if (!validation.stringIsInteger(amount)) {
    console.error('denominateAmount: invalid amount', amount);
    return '0';
  }

  const decimalsToUse = decimals || defaultDecimals;
  const addCommasToUse = addCommas !== undefined ? addCommas : false;
  const showLastNonZeroDecimalToUse =
    showLastNonZeroDecimal !== undefined ? showLastNonZeroDecimal : false;

  let denominatedAmount = operations.denominate({
    input: amount,
    denomination,
    decimals: decimalsToUse,
    addCommas: addCommasToUse,
    showLastNonZeroDecimal: showLastNonZeroDecimalToUse
  });

  denominatedAmount =
    parseFloat(denominatedAmount) > 0
      ? denominatedAmount
      : operations.denominate({
          input: amount,
          denomination,
          decimals: decimalsToUse + 4,
          addCommas: addCommasToUse,
          showLastNonZeroDecimal: showLastNonZeroDecimalToUse
        });

  return parseFloat(denominatedAmount) > 0
    ? denominatedAmount
    : operations.denominate({
        input: amount,
        denomination,
        decimals: decimalsToUse + 9,
        addCommas: addCommasToUse,
        showLastNonZeroDecimal: showLastNonZeroDecimalToUse
      });
}

export default denominateAmount;
