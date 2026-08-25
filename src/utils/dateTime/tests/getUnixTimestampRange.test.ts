import { getUnixTimestampRange } from '../getUnixTimestampRange';

describe('getUnixTimestampRange tests', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(0));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns start and end UNIX timestamps in seconds', () => {
    expect(getUnixTimestampRange(1500)).toEqual({
      startTime: 0,
      endTime: 1.5
    });
  });

  it('keeps the sub-second fractional part', () => {
    expect(getUnixTimestampRange(600)).toEqual({
      startTime: 0,
      endTime: 0.6
    });
  });

  it('spans exactly the given duration even if the clock advances', () => {
    jest.setSystemTime(new Date(1_234));

    const { startTime, endTime } = getUnixTimestampRange(600);

    expect(endTime - startTime).toBeCloseTo(0.6, 10);
  });
});
