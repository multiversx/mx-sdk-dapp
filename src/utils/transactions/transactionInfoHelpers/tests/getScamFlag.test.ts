import { getScamFlag } from '../getScamFlag';

describe('scamDetect tests', () => {
  const output = 'Message hidden due to suspicious content - ';
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
    '[...] 🅻🅾🆃🆃🅴🆁🆈': ['[...] 🅻🅾🆃🆃🅴🆁🆈', 'Lottery scam report'],
    'Cool nft': ['Cool nft', '', 'yes']
  };
  for (let i = 0; i < Object.keys(strings).length; i++) {
    const inputMessage = Object.keys(strings)[i];
    const [msg, reason, isNsfw] = strings[inputMessage];

    test(`anonymize ${inputMessage} -> ${msg}`, () => {
      const { message: result, textWithLinks } = getScamFlag({
        message: inputMessage,
        scamInfo: {
          info: reason,
          type: msg
        },
        isNsfw: Boolean(isNsfw)
      });
      expect(result).toEqual(`${output}${reason}`);
      expect(textWithLinks).toEqual(msg);
    });
  }
});
