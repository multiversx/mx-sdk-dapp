import { getUnixTimestampRangeMs } from '../getUnixTimestampRangeMs';

describe('getUnixTimestampRangeMs tests', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(1_234));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns start and end UNIX timestamps in milliseconds', () => {
    expect(getUnixTimestampRangeMs(1500)).toEqual({
      startTime: 1_234,
      endTime: 2_734
    });
  });

  it('spans exactly the given sub-second duration', () => {
    const { startTime, endTime } = getUnixTimestampRangeMs(600);

    expect(endTime - startTime).toBe(600);
  });
});
