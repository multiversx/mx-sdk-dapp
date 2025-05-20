import { ZERO } from 'lib/sdkDappUtils';
import { trimAmountDecimals } from '../trimAmountDecimals';

describe('Test the trim function of the given price decimals.', () => {
  test('a price that is zero, with no decimals.', () => {
    const actualResult = trimAmountDecimals({
      minimumPositiveDecimals: 0,
      amount: ZERO
    });

    expect(actualResult).toBe(ZERO);
  });

  test('a price that is zero, with three decimals.', () => {
    const expectedResult = '0.355';
    const actualResult = trimAmountDecimals({
      minimumPositiveDecimals: 0,
      amount: '0.355'
    });

    expect(actualResult).toBe(expectedResult);
  });

  test('a price above zero, with three decimals.', () => {
    const expectedResult = '45.355';
    const actualResult = trimAmountDecimals({
      minimumPositiveDecimals: 0,
      amount: '45.355'
    });

    expect(actualResult).toBe(expectedResult);
  });

  test('a price above zero, with no decimals.', () => {
    const expectedResult = '456';
    const actualResult = trimAmountDecimals({
      minimumPositiveDecimals: 0,
      amount: '456'
    });

    expect(actualResult).toBe(expectedResult);
  });

  test('a price above zero, with minimum three decimals, but input has more that three decimals.', () => {
    const expectedResult = '46.156';
    const actualResult = trimAmountDecimals({
      minimumPositiveDecimals: 3,
      amount: '46.1564'
    });

    expect(actualResult).toBe(expectedResult);
  });

  test('a price above zero, three decimals, but first three decimals are zero.', () => {
    const expectedResult = '46.0003';
    const actualResult = trimAmountDecimals({
      minimumPositiveDecimals: 3,
      amount: '46.00036123'
    });

    expect(actualResult).toBe(expectedResult);
  });

  test('a large price, with two decimals, and input has exactly two decimals.', () => {
    const expectedResult = '632,346.64';
    const actualResult = trimAmountDecimals({
      minimumPositiveDecimals: 2,
      amount: '632,346.64'
    });

    expect(actualResult).toBe(expectedResult);
  });

  test('a large price, with two decimals, and input has exactly two decimals, last one being zero.', () => {
    const expectedResult = '632,346.60';
    const actualResult = trimAmountDecimals({
      minimumPositiveDecimals: 2,
      amount: '632,346.60'
    });

    expect(actualResult).toBe(expectedResult);
  });

  test('a large price, with two decimals, and input has twenty decimals, last one being above zero.', () => {
    const expectedResult = '632,346.00000000000000000003';
    const actualResult = trimAmountDecimals({
      minimumPositiveDecimals: 2,
      amount: '632,346.00000000000000000003'
    });

    expect(actualResult).toBe(expectedResult);
  });

  test('a large price, with two decimals, and input has more than two decimals, last two being zero.', () => {
    const expectedResult = '632,346.60';
    const actualResult = trimAmountDecimals({
      minimumPositiveDecimals: 2,
      amount: '632,346.600'
    });

    expect(actualResult).toBe(expectedResult);
  });
});
