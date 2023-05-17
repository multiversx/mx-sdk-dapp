export const extractSessionId = (batchId: string) => {
  const timestamp = batchId.split('-')[0];

  if (/^\d+$/.test(timestamp)) {
    return parseInt(timestamp, 10);
  }

  return null;
};
