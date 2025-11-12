import { getUnixTimestamp } from '../getUnixTimestamp';

describe('getUnixTimestamp tests', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2000-01-01T00:00:00.000Z'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns current UNIX timestamp in seconds', () => {
    const ts = getUnixTimestamp();
    expect(ts).toBe(946684800);
  });
});
