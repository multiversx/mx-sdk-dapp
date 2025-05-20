import { timeRemaining } from '../timeRemaining';

describe('timeRemaining tests - short time format', () => {
  const entries: [number, string][] = [
    [1076, '17 min'],
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

describe('timeRemaining tests - long time format', () => {
  const entries: [number, string][] = [
    [1076, '17 min 56 sec'],
    [3976, '1 hr 6 min'],
    [5286, '1 hr 28 min']
  ];

  for (let i = 0; i < entries.length; i++) {
    const [input, output] = entries[i];
    test(`parse ${input} -> ${output}`, () => {
      const result = timeRemaining(input, false);
      expect(result).toStrictEqual(output);
    });
  }
});
