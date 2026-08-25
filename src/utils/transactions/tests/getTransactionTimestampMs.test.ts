import { getTransactionTimestampMs } from '../getTransactionTimestampMs';

const timestamp = 1760956682;

describe('getTransactionTimestampMs tests', () => {
  it('prefers a valid timestampMs', () => {
    expect(
      getTransactionTimestampMs({ timestamp, timestampMs: 1760956682_500 })
    ).toBe(1760956682_500);
  });

  it('falls back to the seconds timestamp when timestampMs is missing', () => {
    expect(getTransactionTimestampMs({ timestamp })).toBe(timestamp * 1000);
  });

  it('returns undefined when no usable timestamp is present', () => {
    expect(getTransactionTimestampMs({})).toBeUndefined();
    expect(getTransactionTimestampMs({ timestamp: 0 })).toBeUndefined();
    expect(getTransactionTimestampMs({ timestamp: NaN })).toBeUndefined();
    expect(getTransactionTimestampMs({ timestampMs: 1760956682_500 })).toBe(
      1760956682_500
    );
  });

  it('falls back to the seconds timestamp when timestampMs is not usable', () => {
    expect(
      getTransactionTimestampMs({ timestamp, timestampMs: timestamp })
    ).toBe(timestamp * 1000);

    expect(getTransactionTimestampMs({ timestamp, timestampMs: NaN })).toBe(
      timestamp * 1000
    );
  });
});
