import { addressIsValid } from '../addressIsValid';

const validUserAddress =
  'erd1a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax';
const validContractAddress =
  'erd1qqqqqqqqqqqqqpgqv9gxgq8nurz754spjfck6rdwlg9etpcp0n4sjg2dhc';
const anotherValidUserAddress =
  'erd1k2s324ww2g0yj38qn2ch2jwctdy8mnfxep94q9arncc6xecg3xaq6mjse8';

describe('addressIsValid tests', () => {
  describe('Valid addresses', () => {
    it('returns true for a valid user address', () => {
      const result = addressIsValid(validUserAddress);
      expect(result).toBe(true);
    });

    it('returns true for a valid contract address', () => {
      const result = addressIsValid(validContractAddress);
      expect(result).toBe(true);
    });

    it('returns true for another valid user address', () => {
      const result = addressIsValid(anotherValidUserAddress);
      expect(result).toBe(true);
    });
  });

  describe('Invalid addresses - format issues', () => {
    it('returns false for empty string', () => {
      const result = addressIsValid('');
      expect(result).toBe(false);
    });

    it('returns false for address with spaces', () => {
      const result = addressIsValid(
        'erd1a07ey0xj28u90 mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
      );
      expect(result).toBe(false);
    });

    it('returns false for address with special characters', () => {
      const result = addressIsValid(
        'erd1a07ey0xj28u90@mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
      );
      expect(result).toBe(false);
    });

    it('returns false for address with hyphens', () => {
      const result = addressIsValid(
        'erd1a07ey0xj28u90-mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
      );
      expect(result).toBe(false);
    });

    it('returns false for address with dots', () => {
      const result = addressIsValid(
        'erd1a07ey0xj28u90.mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
      );
      expect(result).toBe(false);
    });

    it('returns false for address with plus signs', () => {
      const result = addressIsValid(
        'erd1a07ey0xj28u90+mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
      );
      expect(result).toBe(false);
    });

    it('returns false for address with forward slashes', () => {
      const result = addressIsValid(
        'erd1a07ey0xj28u90/mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
      );
      expect(result).toBe(false);
    });

    it('returns false for address with backslashes', () => {
      const result = addressIsValid(
        'erd1a07ey0xj28u90\\mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
      );
      expect(result).toBe(false);
    });
  });

  describe('Invalid addresses - wrong length', () => {
    it('returns false for too short address', () => {
      const result = addressIsValid('erd1a07ey0xj28u90mtk8858zsavs0cj7s3cy74');
      expect(result).toBe(false);
    });

    it('returns false for too long address', () => {
      const result = addressIsValid(
        'erd1a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaaxtoolong'
      );
      expect(result).toBe(false);
    });

    it('returns false for extremely short string', () => {
      const result = addressIsValid('erd1');
      expect(result).toBe(false);
    });
  });

  describe('Invalid addresses - wrong prefix', () => {
    it('returns false for address with wrong prefix', () => {
      const result = addressIsValid(
        'moa1a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
      );
      expect(result).toBe(false);
    });

    it('returns false for address without prefix', () => {
      const result = addressIsValid(
        'a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
      );
      expect(result).toBe(false);
    });

    it('returns false for uppercase prefix', () => {
      const result = addressIsValid(
        'ERD1a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
      );
      expect(result).toBe(false);
    });
  });

  describe('Invalid addresses - wrong checksum', () => {
    it('returns false for address with invalid checksum', () => {
      // Modified the last few characters to make checksum invalid
      const result = addressIsValid(
        'erd1a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaay'
      );
      expect(result).toBe(false);
    });

    it('returns false for contract address with invalid checksum', () => {
      // Modified the last few characters to make checksum invalid
      const result = addressIsValid(
        'erd1qqqqqqqqqqqqqpgqv9gxgq8nurz754spjfck6rdwlg9etpcp0n4sjg2dhy'
      );
      expect(result).toBe(false);
    });
  });

  describe('Edge cases and type coercion', () => {
    it('returns false for numeric input as string', () => {
      const result = addressIsValid('123456789');
      expect(result).toBe(false);
    });

    it('returns false for boolean true as string', () => {
      const result = addressIsValid('true');
      expect(result).toBe(false);
    });

    it('returns false for boolean false as string', () => {
      const result = addressIsValid('false');
      expect(result).toBe(false);
    });

    it('returns false for string with only whitespace', () => {
      const result = addressIsValid('   ');
      expect(result).toBe(false);
    });

    it('returns false for string with newlines', () => {
      const result =
        addressIsValid(`erd1a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax
      `);
      expect(result).toBe(false);
    });

    it('returns false for string with tabs', () => {
      const result = addressIsValid(
        'erd1a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax\t'
      );
      expect(result).toBe(false);
    });
  });

  describe('Regex pattern validation (/^\\w+$/)', () => {
    it('returns true for string containing only word characters (letters, digits, underscores)', () => {
      // This tests the regex but will fail Address.isValid validation
      const result = addressIsValid('abc123_DEF456');
      expect(result).toBe(false); // False because it's not a valid MultiversX address
    });

    it('returns false for string with non-word characters', () => {
      const result = addressIsValid('abc-123');
      expect(result).toBe(false);
    });

    it('returns false for string starting with non-word character', () => {
      const result = addressIsValid(
        '!erd1a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax'
      );
      expect(result).toBe(false);
    });

    it('returns false for string ending with non-word character', () => {
      const result = addressIsValid(
        'erd1a07ey0xj28u90mtk8858zsavs0cj7s3cy74ufgxdmcq3nslr0y2st2aaax!'
      );
      expect(result).toBe(false);
    });
  });

  describe('Integration with Address.isValid()', () => {
    it('passes regex but fails Address.isValid validation', () => {
      // This string passes the regex test (/^\w+$/) but should fail Address.isValid()
      const result = addressIsValid(
        'erd1invalidaddresswithvalidcharacters123456789abcdef'
      );
      expect(result).toBe(false);
    });

    it('correctly validates addresses that pass both regex and Address.isValid', () => {
      const result = addressIsValid(validUserAddress);
      expect(result).toBe(true);
    });
  });

  describe('Real-world invalid address examples', () => {
    it('returns false for malformed address missing characters', () => {
      const result = addressIsValid('erd1qqqqqqqqqqqqqpgq');
      expect(result).toBe(false);
    });

    it('returns false for address with wrong character encoding', () => {
      const result = addressIsValid('erd1ğğğğğğğğşşşşıııı');
      expect(result).toBe(false);
    });

    it('returns false for hex string without proper prefix', () => {
      const result = addressIsValid('0123456789abcdef0123456789abcdef01234567');
      expect(result).toBe(false);
    });
  });
});
