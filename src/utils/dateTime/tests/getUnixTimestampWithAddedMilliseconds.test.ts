import { getUnixTimestampWithAddedMilliseconds } from '../getUnixTimestampWithAddedMilliseconds';

describe('getUnixTimestampWithAddedMilliseconds tests', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(0));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns UNIX timestamp in seconds after adding milliseconds', () => {
    const ts = getUnixTimestampWithAddedMilliseconds(1500);
    expect(ts).toBe(1.5);
  });
});
