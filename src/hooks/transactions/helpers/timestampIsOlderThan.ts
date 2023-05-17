export const timestampIsOlderThan = (
  timestamp: number,
  olderThanMs: number
) => {
  const diff = new Date().getTime() - timestamp;
  return diff > olderThanMs;
};
