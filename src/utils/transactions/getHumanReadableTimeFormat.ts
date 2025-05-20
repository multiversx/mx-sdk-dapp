export interface GetHumanReadableTimeFormatType {
  value: number;
  noSeconds?: boolean;
  utc?: boolean;
  meridiem?: boolean;
}

/**
 * @param value - UNIX timestamp
 * */
export function getHumanReadableTimeFormat({
  value,
  noSeconds,
  utc,
  meridiem = true
}: GetHumanReadableTimeFormatType) {
  const utcDate = new Date(value * 1000);
  const [, AmPm] = utcDate
    .toLocaleString('en-US', { hour: 'numeric', hour12: meridiem })
    .split(' ');
  const formatted = utcDate.toUTCString();
  const [, date] = formatted.split(',');
  const [day, month, year, time] = date.trim().split(' ');
  const [hours, minutes, sec] = time.split(':');
  const seconds = `:${sec}`;
  const timeFormatted = `${hours}:${minutes}${noSeconds ? '' : seconds}`;
  const utcSuffix = utc ? 'UTC' : '';
  const meridiemSuffix = meridiem ? AmPm : '';
  const suffix = `${meridiemSuffix} ${utcSuffix}`.trim();

  return `${month} ${day}, ${year} ${timeFormatted} ${suffix}`.trim();
}
