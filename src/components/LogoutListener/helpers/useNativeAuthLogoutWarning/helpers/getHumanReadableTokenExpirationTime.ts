import BigNumber from 'bignumber.js';

export const getHumanReadableTokenExpirationTime = (
  milliseconds: BigNumber
) => {
  const seconds = new BigNumber(milliseconds)
    .dividedBy(1000)
    .integerValue(BigNumber.ROUND_FLOOR);

  const minutes = new BigNumber(seconds)
    .dividedBy(60)
    .integerValue(BigNumber.ROUND_FLOOR);

  const overOneMinute = minutes.modulo(60).gt(1);
  const underOneMinute = minutes.modulo(60).lt(1);

  if (overOneMinute) {
    return `${minutes} minutes`;
  }

  if (underOneMinute) {
    return 'less than 1 minute';
  }

  return `${minutes} minute`;
};
