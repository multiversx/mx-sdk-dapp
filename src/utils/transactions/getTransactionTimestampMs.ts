import { ServerTransactionType } from 'types/serverTransactions.types';
import { isValidTimestampMs } from './isValidTimestampMs';

export type GetTransactionTimestampMsType = Partial<
  Pick<ServerTransactionType, 'timestamp' | 'timestampMs'>
>;

/**
 * Returns the transaction timestamp in milliseconds, preferring the
 * sub-second-accurate `timestampMs` when the API provides a usable one and
 * falling back to the seconds-based `timestamp`.
 */
export const getTransactionTimestampMs = ({
  timestamp,
  timestampMs
}: GetTransactionTimestampMsType): number | undefined => {
  if (isValidTimestampMs(timestampMs, timestamp)) {
    return timestampMs;
  }

  if (
    typeof timestamp === 'number' &&
    Number.isFinite(timestamp) &&
    timestamp > 0
  ) {
    return timestamp * 1000;
  }

  return undefined;
};
