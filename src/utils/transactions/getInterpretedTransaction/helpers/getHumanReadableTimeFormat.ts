import moment from 'moment';

interface GetHumanReadableTimeFormatType {
  value: number;
  noSeconds?: boolean;
  utc?: boolean;
}

/**
 * @param value - UNIX timestamp
 * */
export function getHumanReadableTimeFormat({
  value,
  noSeconds,
  utc
}: GetHumanReadableTimeFormatType) {
  if (utc) {
    return moment
      .utc(value * 1000)
      .format(`MMM DD, YYYY HH:mm${noSeconds ? '' : ':ss'} A UTC`);
  }
  return moment(value * 1000).format(
    `MMM DD, YYYY HH:mm${noSeconds ? '' : ':ss'} A`
  );
}
