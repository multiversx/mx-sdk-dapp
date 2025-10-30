import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { decodeForDisplay } from '../decodeForDisplay';

describe('decodeForDisplay with Unicode characters (integration)', () => {
  const unicodeText = `We are so back!

A short recap of the temporary account breach — what happened, how we responded, and what's being done to prevent this in the future:

• Despite having 2FA enabled, the hackers were able to gain access to the X account using a malicious link

• Upon detection, we immediately secured all associated account data and worked with X Support to limit the reach of the malicious post, identify the attacker's onchain and offchain traces, and ensure no user damage occurred

• Access to the account was then temporarily restricted while X removed the post and banned the offending accounts

• We also issued a takedown request for the fraudulent website

• No user wallets or funds were affected

• Additional security measures have now been implemented across xExchange and all connected accounts

Thank you for your patience and continued trust!`;

  describe('simple input with Unicode characters', () => {
    it('should decode simple Unicode text input with text method', () => {
      const textWithEmDash = 'Test — em dash';
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
      const textWithApostrophe = "We're back";
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
      const textWithBullet = '• First item';
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
      // Simulate a transaction data field: base64-encoded parts separated by newlines
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

      // Verify the result contains the special characters
      expect(result.displayValue).toContain('—');
      expect(result.displayValue).toContain("'");
      expect(result.displayValue).toContain('•');
      expect(result.displayValue).toContain("attacker's");

      // Verify structure is preserved
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

      // Smart method may convert parts to decimal if they look like numbers
      // So we verify it doesn't throw errors and produces output
      expect(result.displayValue).toBeDefined();
      expect(typeof result.displayValue).toBe('string');

      // Verify no corruption artifacts
      expect(result.displayValue).not.toContain('b<0x14>');
      expect(result.displayValue).not.toContain('b<0x19>');
      expect(result.displayValue).not.toContain('b"');
    });

    it('should preserve special characters in each base64-encoded part', () => {
      const parts = [
        'We are so back!',
        "A short recap — what's being done",
        '• Despite having 2FA'
      ];
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
    });
  });

  describe('input with @ symbols and Unicode', () => {
    it('should handle @-separated inputs with Unicode text', () => {
      const part1 = 'short';
      const part2 = Buffer.from("We're back").toString('hex');
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

      // Verify no corruption artifacts
      expect(result.displayValue).not.toContain('b<0x14>');
      expect(result.displayValue).not.toContain('b<0x19>');
      expect(result.displayValue).not.toContain('b"');

      // Verify correct characters
      expect(result.displayValue).toContain('—');
      expect(result.displayValue).toContain("'");
      expect(result.displayValue).toContain('•');
    });
  });
});
