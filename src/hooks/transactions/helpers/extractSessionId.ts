import { stringIsInteger } from 'utils/validation/stringIsInteger';

export const extractSessionId = (batchId: string) => {
  if (!batchId) {
    return null;
  }

  const timestamp = batchId.split('-')[0];

  if (stringIsInteger(timestamp)) {
    return parseInt(timestamp, 10);
  }

  return null;
};
