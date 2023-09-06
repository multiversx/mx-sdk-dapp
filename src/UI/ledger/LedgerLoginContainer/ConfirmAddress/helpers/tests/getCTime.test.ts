import { getCTime } from '../getCTime';

describe('getCTime tests', () => {
  const testData: [number, string][] = [
    [60 * 60 * 2 + 60 * 8 + 3, '2h 8min 3']
    // [60 * 8 + 3, '8min 3sec']
  ];
  testData.forEach(([seconds, expected], i) => {
    it(`returns ${expected} for ${seconds}`, () => {
      console.log('\x1b[42m%s\x1b[0m', 'run', i);

      const text = getCTime(seconds.toString());
      expect(text).toBe(expected);
    });
  });
});
