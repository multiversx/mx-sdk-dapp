import isString from 'lodash.isstring';

export const secondsToTimeString = (seconds: number) => {
  if (seconds <= 0 || isNaN(seconds) || !seconds || isString(seconds)) {
    return 'N/A time';
  }

  if (seconds >= 86400) {
    return 'more than one day';
  }

  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const remainingSecondsAfterMinutes = remainingSeconds % 60;

  const parts = [];
  if (hours > 0) {
    parts.push(`${hours}h`);
  }
  if (minutes > 0) {
    parts.push(`${minutes}min`);
  }
  if (remainingSecondsAfterMinutes > 0) {
    parts.push(`${remainingSecondsAfterMinutes}sec`);
  }

  return parts.join(' ');
};
