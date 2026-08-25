import { getUnixTimestampMs } from './getUnixTimestampMs';

export const getUnixTimestampRangeMs = (durationMilliseconds: number) => {
  const startTime = getUnixTimestampMs();

  return {
    startTime,
    endTime: startTime + durationMilliseconds
  };
};
