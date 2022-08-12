import BigNumber from 'bignumber.js';

export const stringIsFloat = (amount: string) => {
  if (isNaN(amount as any)) {
    return false;
  }

  // tslint:disable-next-line
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
