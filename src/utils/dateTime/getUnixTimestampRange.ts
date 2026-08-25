export const getUnixTimestampRange = (durationMilliseconds: number) => {
  const nowMilliseconds = Date.now();

  return {
    startTime: nowMilliseconds / 1000,
    endTime: (nowMilliseconds + durationMilliseconds) / 1000
  };
};
