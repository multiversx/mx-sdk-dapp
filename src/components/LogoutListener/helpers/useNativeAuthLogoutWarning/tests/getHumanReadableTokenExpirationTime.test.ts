import BigNumber from 'bignumber.js';

import { getHumanReadableTokenExpirationTime } from '../helpers';

describe('Test the "getHumanReadableTokenExpirationTime" helper function.', () => {
  test('The given input is extremely small.', () => {
    const input = new BigNumber(14);
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('less than 1 minute');
  });

  test('The given input is negative.', () => {
    const input = new BigNumber(-14);
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('less than 1 minute');
  });

  test('The given input is zero.', () => {
    const input = new BigNumber(0);
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('less than 1 minute');
  });

  test('The remaining time is under one minute.', () => {
    const input = new BigNumber(45000);
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('less than 1 minute');
  });

  test('The remaining time is exactly one minute.', () => {
    const input = new BigNumber(60000);
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('1 minute');
  });

  test('The remaining time is exactly one minute.', () => {
    const input = new BigNumber(1242000);
    const output = getHumanReadableTokenExpirationTime(input);

    expect(typeof output).toBe('string');
    expect(output).toBe('20 minutes');
  });
});
