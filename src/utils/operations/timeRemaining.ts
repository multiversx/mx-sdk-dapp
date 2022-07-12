import moment from 'moment';

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
    secsString = secs + ' secs';
  }
  if (mins > 1) {
    minsString = mins + ' mins';
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

export function timeRemaining(duration: number) {
  const startDate = moment.utc();
  const endDate = moment.utc().add(duration, 'seconds');
  const diffInMs = Math.max(endDate.diff(startDate), 0);
  let remaning = getRemainingTime(diffInMs);

  const parts = remaning.split(' ');
  if (parts.length > 1) {
    remaning = `${parts[0]} ${parts[1]}`;
  }

  return remaning;
}
