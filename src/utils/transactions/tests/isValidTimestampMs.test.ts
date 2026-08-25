import { isValidTimestampMs } from '../isValidTimestampMs';

const timestamp = 1760956682;
const timestampMs = 1760956682_500;

describe('isValidTimestampMs tests', () => {
  it('accepts a millisecond value matching the seconds timestamp', () => {
    expect(isValidTimestampMs(timestampMs, timestamp)).toBe(true);
    expect(isValidTimestampMs(timestamp * 1000, timestamp)).toBe(true);
  });

  it('rejects missing or non-numeric values', () => {
    expect(isValidTimestampMs(undefined, timestamp)).toBe(false);
    expect(isValidTimestampMs(NaN, timestamp)).toBe(false);
    expect(isValidTimestampMs(Infinity, timestamp)).toBe(false);
    expect(isValidTimestampMs(0, timestamp)).toBe(false);
    expect(isValidTimestampMs(-timestampMs, timestamp)).toBe(false);
  });

  it('rejects a seconds value sent in the milliseconds field', () => {
    expect(isValidTimestampMs(timestamp, timestamp)).toBe(false);
  });

  it('rejects a value that disagrees with the seconds timestamp', () => {
    expect(isValidTimestampMs(timestampMs + 60_000, timestamp)).toBe(false);
  });

  it('falls back to a scale check when no seconds timestamp is given', () => {
    expect(isValidTimestampMs(timestampMs)).toBe(true);
    expect(isValidTimestampMs(timestamp)).toBe(false);
    expect(isValidTimestampMs(timestampMs, 0)).toBe(true);
  });
});
