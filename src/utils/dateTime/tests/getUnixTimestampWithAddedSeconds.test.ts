import { getUnixTimestampWithAddedSeconds } from '../getUnixTimestampWithAddedSeconds';

describe('getUnixTimestampWithAddedSeconds tests', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(0));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns epoch milliseconds after adding seconds', () => {
    const ms = getUnixTimestampWithAddedSeconds(10);
    expect(ms).toBe(10000);
  });
});
