import moment from 'moment';

/**
 * value - UNIX timestamp
 * */
export function getHumanReadableTimeFormat(
  value: number,
  noSeconds?: boolean,
  utc?: boolean
) {
  if (utc) {
    return moment
      .utc(value * 1000)
      .format(`MMM DD, YYYY HH:mm${noSeconds ? '' : ':ss'} A UTC`);
  }
  return moment(value * 1000).format(
    `MMM DD, YYYY HH:mm${noSeconds ? '' : ':ss'} A`
  );
}
