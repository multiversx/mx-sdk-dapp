import BigNumber from 'bignumber.js';

export const stringIsInteger = (value: string, positiveNumbersOnly = true) => {
  // Validate input is a non-empty string
  if (value == null || typeof value !== 'string' || value.trim() === '') {
    return false;
  }

  const stringInteger = String(value);

  if (!stringInteger.match(/^[-]?\d+$/)) {
    return false;
  }

  const bNparsed = new BigNumber(stringInteger);
  const comparison = !positiveNumbersOnly || bNparsed.isGreaterThanOrEqualTo(0);

  return bNparsed.toString(10) === stringInteger && comparison;
};
