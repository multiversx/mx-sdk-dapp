/**
 * Above this value a UNIX timestamp can only be milliseconds: seconds-based
 * timestamps stay well below it for the next few millennia.
 */
const MILLISECONDS_SCALE_THRESHOLD = 1e11;

/** Tolerated drift between the two fields, in milliseconds. */
const MAX_DRIFT_MS = 1000;

export const isValidTimestampMs = (
  timestampMs?: number,
  timestamp?: number
): timestampMs is number => {
  if (typeof timestampMs !== 'number' || !Number.isFinite(timestampMs)) {
    return false;
  }

  if (timestampMs <= 0) {
    return false;
  }

  const hasReferenceTimestamp =
    typeof timestamp === 'number' &&
    Number.isFinite(timestamp) &&
    timestamp > 0;

  if (!hasReferenceTimestamp) {
    return timestampMs >= MILLISECONDS_SCALE_THRESHOLD;
  }

  return Math.abs(timestampMs - timestamp * 1000) < MAX_DRIFT_MS;
};
