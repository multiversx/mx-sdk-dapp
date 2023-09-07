import { secondsToTimeString } from '../secondsToTimeString';

describe('secondsToTimeString tests', () => {
  it('converts 0 seconds to "0 sec"', () => {
    expect(secondsToTimeString(0)).toBe('N/A time');
  });

  it('converts seconds less than a minute correctly', () => {
    expect(secondsToTimeString(45)).toBe('45sec');
    expect(secondsToTimeString(59)).toBe('59sec');
  });

  it('converts seconds to minutes and seconds correctly', () => {
    expect(secondsToTimeString(60)).toBe('1min');
    expect(secondsToTimeString(123)).toBe('2min 3sec');
    expect(secondsToTimeString(599)).toBe('9min 59sec');
  });

  it('converts seconds to hours, minutes, and seconds correctly', () => {
    expect(secondsToTimeString(3600)).toBe('1h');
    expect(secondsToTimeString(3666)).toBe('1h 1min 6sec');
    expect(secondsToTimeString(7200)).toBe('2h');
    expect(secondsToTimeString(7323)).toBe('2h 2min 3sec');
  });

  it('handles more than 24 hours', () => {
    expect(secondsToTimeString(86400)).toBe('more than one day');
    expect(secondsToTimeString(100000)).toBe('more than one day');
  });
});
