export function getRemainingTime(ms: number) {
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hrs = Math.floor(daysms / (60 * 60 * 1000));
  const hrsms = daysms % (60 * 60 * 1000);
  const mins = Math.floor(hrsms / (60 * 1000));
  const minsms = hrsms % (60 * 1000);
  const secs = Math.floor(minsms / 1000);

  let secsString = secs + ' sec';
  let minsString = mins + ' min';
  let hrsString = hrs + ' hr';
  let daysString = days + ' day';

  if (secs > 1) {
    secsString = secs + ' sec';
  }
  if (mins > 1) {
    minsString = mins + ' min';
  }
  if (hrs > 1) {
    hrsString = hrs + ' hrs';
  }
  if (days > 1) {
    daysString = days + ' days';
  }

  if (days >= 1) {
    return daysString + ' ' + hrsString;
  }
  if (hrs >= 1) {
    const minutesString = mins === 0 ? '' : ' ' + minsString;
    return hrsString + minutesString;
  }
  if (mins >= 1) {
    const secString = secs === 0 ? '' : ' ' + secsString;
    return minsString + secString;
  }

  return secsString;
}

function getShortDateTimeFormat(datetime: string) {
  const parts = datetime.split(' ');
  if (parts.length > 1) {
    return `${parts[0]} ${parts[1]}`;
  }
  return datetime;
}

const getUTCDateNow = (date = new Date(), extendedSeconds = 0) =>
  Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds() + extendedSeconds,
    date.getUTCMilliseconds()
  );

function getUTCdiffInMs(duration: number) {
  const date = new Date();
  const startDate = getUTCDateNow(date);
  const endDate = getUTCDateNow(date, duration);
  const diffInMs = Math.max(endDate - startDate, 0);
  return diffInMs;
}

export function timeRemaining(duration: number, short = true) {
  const diffInMs = getUTCdiffInMs(duration);
  const remaining = getRemainingTime(diffInMs);
  return short ? getShortDateTimeFormat(remaining) : remaining;
}

export function getDifferenceInMs(timestamp: number) {
  const dateNow = new Date().getTime();
  const difference = dateNow - timestamp;
  const diffInMs = Math.max(difference, 0);

  return diffInMs;
}

export function timeAgo(timestamp: number, short = true) {
  const diffInMs = getDifferenceInMs(timestamp);
  const remaining = getRemainingTime(diffInMs);

  return short ? getShortDateTimeFormat(remaining) : remaining;
}
