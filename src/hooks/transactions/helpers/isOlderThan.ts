export const isOlderThan = (batchId: string, olderThanMs: number) => {
  const sessionTimestamp = parseInt(batchId.split('-')[0]);

  const diff = new Date().getTime() - sessionTimestamp;

  return diff > olderThanMs;
};
