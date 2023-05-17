export const extractSessionId = (batchId: string) => {
  if (!batchId) {
    return null;
  }

  const timestamp = batchId.split('-')[0];

  if (/^\d+$/.test(timestamp)) {
    return parseInt(timestamp, 10);
  }

  return null;
};
