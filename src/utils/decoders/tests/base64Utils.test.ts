import {
  unicodeText,
  textWithEmDash,
  textWithApostrophe,
  textWithBullet,
  chineseText,
  emojiText,
  ascii,
  nonAsciiSample
} from '../../testConstants/unicodeSamples';
import { isStringBase64, encodeToBase64, decodeBase64 } from '../base64Utils';

describe('isStringBase64', () => {
  it('should return true for base64 encoding of emoji string', () => {
    const result = isStringBase64('dGVzdCB0cmFuc2FjdGlvbiDwn5mA');
    expect(result).toStrictEqual(true);
  });

  it('should return true for base64 encoding of another base64 encoding', () => {
    const result = isStringBase64('ZEdWemRDQjBjbUZ1YzJGamRHbHZiaUR3bjVtQQ==');
    expect(result).toStrictEqual(true);
  });

  it('should return true for base64 string of non-ASCII characters', () => {
    const result = isStringBase64(
      '8J+ZgCEiYWJjZDEyM3x9fu+/ve+/vfCfmYAxMzJkYXNk'
    );
    expect(result).toStrictEqual(true);
  });

  it('should return true for base64 encoding of @', () => {
    const result = isStringBase64('bGVuZGVnYXRlQDAx');
    expect(result).toStrictEqual(true);
  });

  it('should return true for base64 encoding of chinese characters', () => {
    const result = isStringBase64('5aeT5ZCN');
    expect(result).toStrictEqual(true);
  });

  it('should return false for simple uppercase letter word', () => {
    const result = isStringBase64('TEST');
    expect(result).toStrictEqual(false);
  });

  it('should return false for simple lowercase letter word', () => {
    const result = isStringBase64('test');
    expect(result).toStrictEqual(false);
  });

  it('should return false for number', () => {
    const result = isStringBase64('1231434');
    expect(result).toStrictEqual(false);
  });

  it('should return false for simple letter word', () => {
    const result = isStringBase64('TeSt');
    expect(result).toStrictEqual(false);
  });

  it('should return false for simple letter word with numbers', () => {
    const result = isStringBase64('TeSt123');
    expect(result).toStrictEqual(false);
  });

  it('should return false for non-ASCII chinese string', () => {
    const result = isStringBase64('姓名');
    expect(result).toStrictEqual(false);
  });

  it('should return false for non-ASCII string', () => {
    const result = isStringBase64(nonAsciiSample);
    expect(result).toStrictEqual(false);
  });

  it('should return false for atob equal to base64 conversion', () => {
    const result = isStringBase64('fd');
    expect(result).toStrictEqual(false);
  });

  it('should return false for strings containing em dash', () => {
    const result = isStringBase64('We are so back! — what happened');
    expect(result).toStrictEqual(false);
  });

  it('should return false for strings containing curly apostrophe', () => {
    const result = isStringBase64(textWithApostrophe);
    expect(result).toStrictEqual(false);
  });

  it('should return false for strings containing bullet points', () => {
    const result = isStringBase64(textWithBullet);
    expect(result).toStrictEqual(false);
  });

  it('should return false for the full problematic text', () => {
    const result = isStringBase64(unicodeText);
    expect(result).toStrictEqual(false);
  });

  it('should return false for empty string', () => {
    const result = isStringBase64('');
    expect(result).toStrictEqual(false);
  });

  it('should return false for strings with invalid base64 characters', () => {
    const result = isStringBase64('invalid@#$%');
    expect(result).toStrictEqual(false);
  });
});

describe('encodeToBase64 and decodeBase64 with Unicode characters', () => {
  it('should encode Unicode text to base64', () => {
    const encoded = encodeToBase64(unicodeText);
    expect(encoded).toBeDefined();
    expect(typeof encoded).toBe('string');
    expect(encoded.length).toBeGreaterThan(0);
    expect(isStringBase64(encoded)).toBe(true);
  });

  it('should decode base64 back to original Unicode text', () => {
    const encoded = encodeToBase64(unicodeText);
    const decoded = decodeBase64(encoded);
    expect(decoded).toBe(unicodeText);
  });

  it('should preserve special characters during round-trip encoding', () => {
    const encoded = encodeToBase64(unicodeText);
    const decoded = decodeBase64(encoded);
    expect(decoded).toContain('—');
    expect(decoded).toContain("'");
    expect(decoded).toContain('•');
    expect(decoded).toContain('temporary account breach');
    expect(decoded).toContain("attacker's");
  });

  it('should handle em dash encoding correctly', () => {
    const encoded = encodeToBase64(textWithEmDash);
    const decoded = decodeBase64(encoded);
    expect(decoded).toContain('—');
    expect(decoded).toBe(textWithEmDash);
  });

  it('should handle curly apostrophe encoding correctly', () => {
    const encoded = encodeToBase64(textWithApostrophe);
    const decoded = decodeBase64(encoded);
    expect(decoded).toContain("'");
    expect(decoded).toBe(textWithApostrophe);
  });

  it('should handle bullet point encoding correctly', () => {
    const encoded = encodeToBase64(textWithBullet);
    const decoded = decodeBase64(encoded);
    expect(decoded).toContain('•');
    expect(decoded).toBe(textWithBullet);
  });

  it('should handle emoji encoding correctly', () => {
    const encoded = encodeToBase64(emojiText);
    const decoded = decodeBase64(encoded);
    expect(decoded).toContain('🙀');
    expect(decoded).toBe(emojiText);
  });

  it('should handle Chinese characters encoding correctly', () => {
    const encoded = encodeToBase64(chineseText);
    const decoded = decodeBase64(encoded);
    expect(decoded).toBe(chineseText);
  });

  it('should handle mixed Unicode characters', () => {
    const mixedText = '🙀!"abcd123|}{~���🙀132dasd';
    const encoded = encodeToBase64(mixedText);
    const decoded = decodeBase64(encoded);
    expect(decoded).toBe(mixedText);
  });
});

describe('decodeBase64 with non-base64 strings', () => {
  it('should return original string when input is not base64', () => {
    const plainText = 'This is not base64';
    const result = decodeBase64(plainText);
    expect(result).toBe(plainText);
  });

  it('should return original string for simple words', () => {
    const word = 'test';
    const result = decodeBase64(word);
    expect(result).toBe(word);
  });

  it('should return original string for Unicode text', () => {
    const result = decodeBase64(unicodeText);
    expect(result).toBe(unicodeText);
  });

  it('should decode valid base64 strings', () => {
    const original = 'Hello World!';
    const base64 = encodeToBase64(original);
    const decoded = decodeBase64(base64);
    expect(decoded).toBe(original);
  });
});

describe('encodeToBase64 edge cases', () => {
  it('should encode empty string', () => {
    const encoded = encodeToBase64('');
    expect(encoded).toBe('');
  });

  it('should encode string with only whitespace', () => {
    const whitespace = '   \n\t  ';
    const encoded = encodeToBase64(whitespace);
    const decoded = decodeBase64(encoded);
    expect(decoded).toBe(whitespace);
  });

  it('should encode very long strings', () => {
    const longString = 'a'.repeat(10000);
    const encoded = encodeToBase64(longString);
    const decoded = decodeBase64(encoded);
    expect(decoded).toBe(longString);
  });

  it('should encode all printable ASCII characters', () => {
    const encoded = encodeToBase64(ascii);
    const decoded = decodeBase64(encoded);
    expect(decoded).toBe(ascii);
  });
});
