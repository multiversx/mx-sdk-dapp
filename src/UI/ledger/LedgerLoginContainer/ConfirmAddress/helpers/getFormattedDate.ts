export const getFormattedDate = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsRemainder = seconds % 60;

  const formattedHours = hours > 0 ? `${hours}h ` : '';
  const formattedMinutes = minutes > 0 ? `${minutes}min ` : '';
  const formattedSeconds =
    secondsRemainder > 0 ? `${secondsRemainder.toString()}` : '';

  if (minutes === 0 && secondsRemainder === 0) {
    return formattedHours;
  }

  if (secondsRemainder === 0) {
    return `${formattedHours}${formattedMinutes}`;
  }

  return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
};
