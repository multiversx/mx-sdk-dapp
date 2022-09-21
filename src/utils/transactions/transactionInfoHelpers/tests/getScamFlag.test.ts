import { getScamFlag } from '../getScamFlag';

describe('scamDetect tests', () => {
  const output = '[Message hidden due to suspicious content - ';
  const strings: { [key: string]: string[] } = {
    '👉 link.com': ['👉 link.com', ''],
    'first-link.com or 🎉 second-link.com 🎉': [
      'first-link.com or 🎉 second-link.com 🎉',
      ''
    ],
    'http://google.com 🎉': ['http://google.com 🎉', ''],
    '👉 https://linkedin.com 🎉': ['👉 https://linkedin.com 🎉', ''],
    'http://google.com?asd=true': ['http://google.com?asd=true', ''],
    'http://www1.google.com': ['http://www1.google.com', ''],
    'http://www.google.ceva.com': ['http://www.google.ceva.com', ''],
    'access: 👉 www.lottery-elrond.com': [
      'access: 👉 www.lottery-elrond.com',
      ' - Scam report'
    ],
    '[...] 🅻🅾🆃🆃🅴🆁🆈': ['[...] 🅻🅾🆃🆃🅴🆁🆈', 'Lottery scam report']
  };
  for (let i = 0; i < Object.keys(strings).length; i++) {
    const input = Object.keys(strings)[i];
    const [msg, reason] = strings[input];
    test(`anonymize ${input} -> ${msg}`, () => {
      const { output: result, stringWithLinks } = getScamFlag(input, {
        info: reason,
        type: msg
      });
      expect(result).toEqual(output + reason + ']');
      expect(stringWithLinks).toEqual(msg);
    });
  }
});
