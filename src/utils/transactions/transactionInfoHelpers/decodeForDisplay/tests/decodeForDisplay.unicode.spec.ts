import { DecodeMethodEnum } from 'types/serverTransactions.types';
import {
  unicodeText,
  textWithEmDash,
  textWithApostrophe,
  textWithBullet,
  unicodeParts,
  atSeparatedString
} from 'utils/testConstants/unicodeSamples';
import { decodeForDisplay } from '../decodeForDisplay';

describe('decodeForDisplay with Unicode characters (integration)', () => {
  describe('simple input with Unicode characters', () => {
    it('should decode simple Unicode text input with text method', () => {
      const hexInput = Buffer.from(textWithEmDash).toString('hex');

      const result = decodeForDisplay({
        input: hexInput,
        decodeMethod: DecodeMethodEnum.text,
        identifier: 'test'
      });

      expect(result.displayValue).toBe(textWithEmDash);
      expect(result.displayValue).toContain('—');
    });

    it('should decode simple Unicode text input with smart method', () => {
      const hexInput = Buffer.from(textWithApostrophe).toString('hex');

      const result = decodeForDisplay({
        input: hexInput,
        decodeMethod: DecodeMethodEnum.smart,
        identifier: 'test'
      });

      expect(result.displayValue).toBe(textWithApostrophe);
      expect(result.displayValue).toContain("'");
    });

    it('should return raw hex for Unicode text with raw method', () => {
      const hexInput = Buffer.from(textWithBullet).toString('hex');

      const result = decodeForDisplay({
        input: hexInput,
        decodeMethod: DecodeMethodEnum.raw,
        identifier: 'test'
      });

      expect(result.displayValue).toBe(hexInput);
    });
  });

  describe('newline-separated base64 encoding scenario', () => {
    it('should decode base64-encoded newline-separated parts with text method', () => {
      const parts = unicodeText.split('\n\n');
      const base64Parts = parts.map((part) =>
        Buffer.from(part).toString('base64')
      );
      const inputWithNewlines = base64Parts.join('\n');

      const result = decodeForDisplay({
        input: inputWithNewlines,
        decodeMethod: DecodeMethodEnum.text,
        identifier: 'data'
      });

      expect(result.displayValue).toContain('—');
      expect(result.displayValue).toContain("'");
      expect(result.displayValue).toContain('•');
      expect(result.displayValue).toContain("attacker's");

      const resultParts = result.displayValue.split('\n');
      expect(resultParts.length).toBe(base64Parts.length);
    });

    it('should decode base64-encoded newline-separated parts with smart method', () => {
      const parts = unicodeText.split('\n\n');
      const base64Parts = parts.map((part) =>
        Buffer.from(part).toString('base64')
      );
      const inputWithNewlines = base64Parts.join('\n');

      const result = decodeForDisplay({
        input: inputWithNewlines,
        decodeMethod: DecodeMethodEnum.smart,
        identifier: 'data'
      });

      expect(result.displayValue).toBeDefined();
      expect(typeof result.displayValue).toBe('string');
      expect(result.displayValue).not.toContain('b<0x14>');
      expect(result.displayValue).not.toContain('b<0x19>');
      expect(result.displayValue).not.toContain('b"');
    });

    it('should preserve special characters in each base64-encoded part', () => {
      const base64Parts = unicodeParts.map((part) =>
        Buffer.from(part).toString('base64')
      );
      const inputWithNewlines = base64Parts.join('\n');

      const result = decodeForDisplay({
        input: inputWithNewlines,
        decodeMethod: DecodeMethodEnum.text,
        identifier: 'data'
      });

      expect(result.displayValue).toContain('—');
      expect(result.displayValue).toContain("'");
      expect(result.displayValue).toContain('•');
    });
  });

  describe('input with @ symbols and Unicode', () => {
    it('should handle @-separated inputs with Unicode text', () => {
      const part1 = atSeparatedString;
      const part2 = Buffer.from(textWithApostrophe).toString('hex');
      const input = `${part1}@${part2}`;

      const result = decodeForDisplay({
        input,
        decodeMethod: DecodeMethodEnum.text,
        identifier: 'test'
      });

      expect(result.displayValue).toContain("'");
      expect(result.displayValue).toContain('@');
    });
  });

  describe('round-trip encoding verification', () => {
    it('should handle full problematic text without corruption', () => {
      const hexInput = Buffer.from(unicodeText).toString('hex');

      const result = decodeForDisplay({
        input: hexInput,
        decodeMethod: DecodeMethodEnum.text,
        identifier: 'test'
      });

      expect(result.displayValue).not.toContain('b<0x14>');
      expect(result.displayValue).not.toContain('b<0x19>');
      expect(result.displayValue).not.toContain('b"');
      expect(result.displayValue).toContain('—');
      expect(result.displayValue).toContain("'");
      expect(result.displayValue).toContain('•');
    });
  });
});
