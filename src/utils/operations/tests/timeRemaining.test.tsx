import { timeRemaining } from './../timeRemaining';

describe('timeRemaining tests', () => {
  const entries: [number, string][] = [
    [1076, '17 mins'],
    [3976, '1 hr'],
    [5286, '1 hr']
  ];

  for (let i = 0; i < entries.length; i++) {
    const [input, output] = entries[i];
    test(`parse ${input} -> ${output}`, () => {
      const result = timeRemaining(input);
      expect(result).toStrictEqual(output);
    });
  }
});
