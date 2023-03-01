import BigNumber from 'bignumber.js';

export const getHumanReadableTokenExpirationTime = (milliseconds: number) => {
  const seconds = new BigNumber(milliseconds)
    .dividedBy(1000)
    .integerValue(BigNumber.ROUND_FLOOR);

  const minutes = new BigNumber(seconds)
    .dividedBy(60)
    .integerValue(BigNumber.ROUND_FLOOR);

  const hours = new BigNumber(minutes)
    .dividedBy(60)
    .integerValue(BigNumber.ROUND_FLOOR);

  const overOneHour = hours.modulo(60).isGreaterThan(1);
  const overOneMinute = minutes.modulo(60).isGreaterThan(1);
  const underOneMinute = minutes.modulo(60).isLessThan(1);

  if (overOneHour) {
    return `${hours} hours`;
  }

  if (overOneMinute) {
    return `${minutes} minutes`;
  }

  if (underOneMinute) {
    return 'less than 1 minute';
  }

  return `${minutes} minute`;
};
