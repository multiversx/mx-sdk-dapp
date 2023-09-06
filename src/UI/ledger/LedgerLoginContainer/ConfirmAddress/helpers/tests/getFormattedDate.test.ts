import { getFormattedDate } from '../getFormattedDate';

describe('getFormattedDate tests', () => {
  const testData: [number, string][] = [
    [60 * 60 * 2 + 60 * 8 + 3, '2h 8min 3'],
    [60 * 8 + 3, '8min 3sec']
  ];
  testData.forEach(([seconds, expected]) => {
    it(`returns ${expected} for ${seconds}`, () => {
      const text = getFormattedDate(seconds);
      expect(text).toBe(expected);
    });
  });
});
