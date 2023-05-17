import { timestampIsOlderThan } from '../helpers/timestampIsOlderThan';

describe('timestampIsOlderThan', () => {
  test('should return true if the timestamp is older than the specified duration', () => {
    const timestamp = new Date().getTime() - 10000; // 10 seconds ago
    const olderThanMs = 5000; // 5 seconds

    const result = timestampIsOlderThan(timestamp, olderThanMs);

    expect(result).toBe(true);
  });

  test('should return false if the timestamp is not older than the specified duration', () => {
    const timestamp = new Date().getTime(); // Current timestamp
    const olderThanMs = 5000; // 5 seconds

    const result = timestampIsOlderThan(timestamp, olderThanMs);

    expect(result).toBe(false);
  });
});
