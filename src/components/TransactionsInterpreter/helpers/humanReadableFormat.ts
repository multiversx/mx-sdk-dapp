import moment from 'moment';

export function humanReadableFormat(
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
