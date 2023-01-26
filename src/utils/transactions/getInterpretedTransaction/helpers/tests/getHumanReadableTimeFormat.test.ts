import { getHumanReadableTimeFormat } from '../getHumanReadableTimeFormat';

describe('getHumanReadableTimeFormat', () => {
  it('returns full readable date, non-UTC', () => {
    const date = new Date(1993, 3, 23, 8, 33, 12);
    const value = date.getTime() / 1000; // UNIX timestamp
    const hours = date.getUTCHours();
    const noSeconds = false;
    const utc = false;

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc
    });

    expect(result).toEqual(`Apr 23, 1993 0${hours}:33:12 AM`);
  });

  it('returns readable date without seconds, non-UTC', () => {
    const date = new Date(1993, 3, 23, 8, 33, 12);
    const value = date.getTime() / 1000; // UNIX timestamp
    const hours = date.getUTCHours();
    const noSeconds = true;
    const utc = false;

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc
    });

    expect(result).toEqual(`Apr 23, 1993 0${hours}:33 AM`);
  });

  it('returns full readable date in UTC', () => {
    const date = new Date(1993, 3, 23, 8, 33, 12);
    const value = date.getTime() / 1000; // UNIX timestamp
    const noSeconds = false;
    const utc = true;
    const hours = date.getUTCHours();

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc
    });

    expect(result).toEqual(`Apr 23, 1993 0${hours}:33:12 AM UTC`);
  });

  it('returns full readable date without seconds in UTC', () => {
    const date = new Date(1993, 3, 23, 8, 33, 12);
    const value = date.getTime() / 1000; // UNIX timestamp
    const noSeconds = true;
    const utc = true;
    const hours = date.getUTCHours();

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc
    });

    expect(result).toEqual(`Apr 23, 1993 0${hours}:33 AM UTC`);
  });

  it('returns full readable date, non-UTC, without meridiem', () => {
    const date = new Date(1993, 3, 23, 8, 33, 12);
    const value = date.getTime() / 1000; // UNIX timestamp
    const hours = date.getUTCHours();
    const noSeconds = false;
    const utc = false;
    const meridiem = false;

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc,
      meridiem
    });

    expect(result).toEqual(`Apr 23, 1993 0${hours}:33:12`);
  });

  it('returns readable date without seconds, non-UTC, without meridiem', () => {
    const date = new Date(1993, 3, 23, 8, 33, 12);
    const value = date.getTime() / 1000; // UNIX timestamp
    const hours = date.getUTCHours();
    const noSeconds = true;
    const utc = false;
    const meridiem = false;

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc,
      meridiem
    });

    expect(result).toEqual(`Apr 23, 1993 0${hours}:33`);
  });

  it('returns full readable date in UTC, without meridiem', () => {
    const date = new Date(1993, 3, 23, 8, 33, 12);
    const value = date.getTime() / 1000; // UNIX timestamp
    const noSeconds = false;
    const utc = true;
    const hours = date.getUTCHours();
    const meridiem = false;

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc,
      meridiem
    });

    expect(result).toEqual(`Apr 23, 1993 0${hours}:33:12 UTC`);
  });

  it('returns full readable date without seconds in UTC, without meridiem', () => {
    const date = new Date(1993, 3, 23, 8, 33, 12);
    const value = date.getTime() / 1000; // UNIX timestamp
    const noSeconds = true;
    const utc = true;
    const hours = date.getUTCHours();
    const meridiem = false;

    const result = getHumanReadableTimeFormat({
      value,
      noSeconds,
      utc,
      meridiem
    });

    expect(result).toEqual(`Apr 23, 1993 0${hours}:33 UTC`);
  });
});
