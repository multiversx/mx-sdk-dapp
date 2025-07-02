import { getHumanReadableTokenExpirationTime } from '../getHumanReadableTokenExpirationTime';

describe('Test the "getHumanReadableTokenExpirationTime" helper functionality.', () => {
  test('The given input is extremely small.', () => {
    const input = 14;
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('less than 1 minute');
  });

  test('The given input is negative.', () => {
    const input = -14;
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('less than 1 minute');
  });

  test('The given input is zero.', () => {
    const input = 0;
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('less than 1 minute');
  });

  test('The remaining time is under one minute.', () => {
    const input = 45000;
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('less than 1 minute');
  });

  test('The remaining time is exactly one minute.', () => {
    const input = 60000;
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('1 minute');
  });

  test('The remaining time is exactly 20 minutes.', () => {
    const input = 1242000;
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('20 minutes');
  });

  test('The remaining time is exactly 3 hours.', () => {
    const input = 11178000;
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('3 hours');
  });
});
