import {
  getHexValidationWarnings,
  isHexValidCharacters,
  isHexValidLength
} from '../helpers';

describe('Hex Validation Functions', () => {
  describe('isHexValidCharacters', () => {
    it('should return match for valid hex characters', () => {
      expect(isHexValidCharacters('123abc')).toBeTruthy();
      expect(isHexValidCharacters('ABCDEF')).toBeTruthy();
    });

    it('should return null for invalid hex characters', () => {
      expect(isHexValidCharacters('xyz')).toBeNull();
      expect(isHexValidCharacters('123g')).toBeNull();
    });
  });

  describe('isHexValidLength', () => {
    it('should return true for even length strings', () => {
      expect(isHexValidLength('1234')).toBeTruthy();
      expect(isHexValidLength('ab')).toBeTruthy();
    });

    it('should return false for odd length strings', () => {
      expect(isHexValidLength('123')).toBeFalsy();
      expect(isHexValidLength('a')).toBeFalsy();
    });
  });

  describe('getHexValidationWarnings', () => {
    it('should return empty array for valid hex string', () => {
      expect(getHexValidationWarnings('1234ab')).toEqual([]);
    });

    it('should return warning for invalid hex characters', () => {
      const result = getHexValidationWarnings('xyz123');

      expect(result).toContain('Invalid Hex characters on argument @xyz123');
    });

    it('should return warning for odd length', () => {
      const result = getHexValidationWarnings('123');
      expect(result).toContain('Odd number of Hex characters on argument @123');
    });

    it('should return both warnings when both conditions fail', () => {
      const result = getHexValidationWarnings('xyz');
      expect(result).toHaveLength(2);
      expect(result).toContain('Invalid Hex characters on argument @xyz');
      expect(result).toContain('Odd number of Hex characters on argument @xyz');
    });

    it('should return empty array for empty string', () => {
      expect(getHexValidationWarnings('')).toEqual([]);
    });
  });
});
