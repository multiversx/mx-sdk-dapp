import { getUnixTimestampMs } from '../getUnixTimestampMs';

describe('getUnixTimestampMs tests', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2000-01-01T00:00:00.500Z'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns current UNIX timestamp in milliseconds', () => {
    expect(getUnixTimestampMs()).toBe(946684800500);
  });
});
