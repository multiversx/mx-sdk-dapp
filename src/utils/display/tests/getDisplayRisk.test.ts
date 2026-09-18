import {
  ascii,
  chineseText,
  emojiText,
  textWithEmDash,
  textWithHangulFiller,
  textWithZeroWidthSpace
} from '__mocks__/data/unicodeSamples';
import { DisplayRiskEnum } from 'types/displayRisk.types';
import { getDisplayRisk } from '../getDisplayRisk';

describe('getDisplayRisk', () => {
  it.each([
    ['a plain ticker', 'USDC'],
    ['a token identifier', 'USDC-c76f1f'],
    ['printable ascii', ascii],
    ['an em dash', textWithEmDash],
    ['a non-Latin name', chineseText],
    ['an emoji', emojiText],
    ['an all-Cyrillic name', '\u0422\u0435\u0441\u0442'],
    ['an empty string', '']
  ])('reports %s as clean', (_, value) => {
    expect(getDisplayRisk(value)).toBe(DisplayRiskEnum.clean);
  });

  it.each([
    ['a trailing zero-width space', 'USDC\u200B'],
    ['a zero-width space', textWithZeroWidthSpace],
    ['a Hangul filler', textWithHangulFiller],
    ['a zero-width joiner', 'US\u200DDC'],
    ['a byte order mark', '\uFEFFUSDC'],
    ['a combining grapheme joiner', 'US\u034FDC'],
    ['a Cyrillic look-alike mixed with Latin', 'USD\u0421'],
    ['a Greek look-alike mixed with Latin', '\u0391SHSWAP']
  ])('reports %s as suspicious', (_, value) => {
    expect(getDisplayRisk(value)).toBe(DisplayRiskEnum.suspicious);
  });

  it.each([
    ['a right-to-left override', 'USDC\u202Egnp.exe'],
    ['a bidi isolate', '\u2066USDC\u2069'],
    ['a null byte', 'USDC\u0000'],
    ['a newline', 'USDC\nWEGLD'],
    ['a C1 control character', 'USDC\u0085']
  ])('reports %s as blocked', (_, value) => {
    expect(getDisplayRisk(value)).toBe(DisplayRiskEnum.blocked);
  });

  it('returns the highest risk among the given values', () => {
    expect(getDisplayRisk('USDC', 'USDC\u200B')).toBe(
      DisplayRiskEnum.suspicious
    );
    expect(getDisplayRisk('USDC\u200B', 'USDC\u202E')).toBe(
      DisplayRiskEnum.blocked
    );
  });

  it('ignores missing values', () => {
    expect(getDisplayRisk(undefined, null, 'USDC')).toBe(DisplayRiskEnum.clean);
    expect(getDisplayRisk()).toBe(DisplayRiskEnum.clean);
  });
});
