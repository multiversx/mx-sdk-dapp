import { getHumanReadableTimeFormat } from '../getHumanReadableTimeFormat';

describe('getHumanReadableTimeFormat', () => {
  it('returns full readable date, non-UTC', () => {
    const value = new Date(1993, 3, 23, 8, 33, 12).getTime() / 1000; // UNIX timestamp
    const noSeconds = false;
    const utc = false;

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc
    });

    expect(result).toEqual('Apr 23, 1993 08:33:12 AM');
  });

  it('returns readable date without seconds, non-UTC', () => {
    const value = new Date(1993, 3, 23, 8, 33, 12).getTime() / 1000; // UNIX timestamp
    const noSeconds = true;
    const utc = false;

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc
    });

    expect(result).toEqual('Apr 23, 1993 08:33 AM');
  });

  it('returns full readable date in UTC', () => {
    const value = new Date(1993, 3, 23, 8, 33, 12).getTime() / 1000; // UNIX timestamp
    const noSeconds = false;
    const utc = true;

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc
    });

    expect(result).toEqual('Apr 23, 1993 05:33:12 AM UTC');
  });

  it('returns full readable date without seconds in UTC', () => {
    const value = new Date(1993, 3, 23, 8, 33, 12).getTime() / 1000; // UNIX timestamp
    const noSeconds = true;
    const utc = true;

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc
    });

    expect(result).toEqual('Apr 23, 1993 05:33 AM UTC');
  });
});
