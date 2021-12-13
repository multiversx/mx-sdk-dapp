import BigNumber from 'bignumber.js';

const stringIsFloat = (amount: string) => {
  if (amount.match(/^[0-9]*\.?[0-9]*$/) === null) {
    return false;
  }

  if (isNaN(parseFloat(amount))) {
    return false;
  }

  // eslint-disable-next-line prefer-const
  let [wholes, decimals] = amount.split('.');

  if (decimals) {
    while (decimals.charAt(decimals.length - 1) === '0') {
      decimals = decimals.slice(0, -1);
    }
  }

  const number = decimals ? [wholes, decimals].join('.') : wholes;

  const bNparsed = new BigNumber(number);
  return bNparsed.toString(10) === number && bNparsed.comparedTo(0) >= 0;
};

export default stringIsFloat;
