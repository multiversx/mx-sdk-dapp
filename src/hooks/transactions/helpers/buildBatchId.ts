import { BATCH_TRANSACTIONS_ID_SEPARATOR } from 'constants/index';

export const buildBatchId = (sessionId: string | number, address: string) => {
  return `${sessionId}${BATCH_TRANSACTIONS_ID_SEPARATOR}${address}`;
};
