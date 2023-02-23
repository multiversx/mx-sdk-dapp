export const getUnixTimestampWithAddedSeconds = (addedSeconds: number) => {
  return new Date().setSeconds(new Date().getSeconds() + addedSeconds);
};
