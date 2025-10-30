import { Address } from '@multiversx/sdk-core';
import { DecodeMethodEnum } from 'types';
import { addressIsValid } from 'utils/account/addressIsValid';
import { isUtf8 } from 'utils/decoders';
import {
  unicodeText,
  textWithEmDash,
  textWithApostrophe,
  textWithBullet
} from 'utils/testConstants/unicodeSamples';
import { decodeByMethod } from '../helpers';

jest.mock('@multiversx/sdk-core', () => ({
  Address: {
    newFromHex: jest.fn()
  }
}));

jest.mock('utils/account/addressIsValid');
jest.mock('utils/decoders');

describe('decodeByMethod', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('text decode method', () => {
    it('should decode hex to utf8 text', () => {
      const hexString = Buffer.from('Hello').toString('hex');
      const result = decodeByMethod(hexString, DecodeMethodEnum.text);
      expect(result).toBe('Hello');
    });

    it('should return empty string if the hex is invalid', () => {
      const invalidHex = '{test: test}';
      const result = decodeByMethod(invalidHex, DecodeMethodEnum.text);
      expect(result).toBe('');
    });
  });

  describe('decimal decode method', () => {
    it('should convert hex to decimal', () => {
      const result = decodeByMethod('a', DecodeMethodEnum.decimal);
      expect(result).toBe('10');
    });

    it('should return empty string for empty input', () => {
      const result = decodeByMethod('', DecodeMethodEnum.decimal);
      expect(result).toBe('');
    });
  });

  describe('smart decode method', () => {
    it('should return bech32 address when valid', () => {
      const mockAddress =
        'erd1zwq3qaa3vk5suenlkj4cf0ullwefa6h3n2394k25pxv4sz0pwhhsj9u9vk';

      (Address.newFromHex as jest.Mock).mockReturnValue({
        toBech32: () => mockAddress
      });

      (addressIsValid as jest.Mock).mockReturnValue(true);

      const result = decodeByMethod('validHex', DecodeMethodEnum.smart);
      expect(result).toBe(mockAddress);
    });

    it('should decode to utf8 when possible and valid', () => {
      (Address.newFromHex as jest.Mock).mockImplementation(() => {
        throw new Error();
      });
      (isUtf8 as jest.Mock).mockReturnValue(true);

      const hexString = Buffer.from('ValidText').toString('hex');
      const result = decodeByMethod(hexString, DecodeMethodEnum.smart);
      expect(result).toBe('ValidText');
    });

    it('should check for tokens when utf8 decoded but invalid', () => {
      const mockTokens = {
        esdts: ['token1'],
        nfts: ['nft1']
      };

      (Address.newFromHex as jest.Mock).mockImplementation(() => {
        throw new Error();
      });

      (isUtf8 as jest.Mock).mockReturnValue(false);

      const hexString = Buffer.from('token1').toString('hex');
      const result = decodeByMethod(
        hexString,
        DecodeMethodEnum.smart,
        mockTokens
      );
      expect(result).toBe('token1');
    });

    it('should convert to decimal when no other conditions met', () => {
      (Address.newFromHex as jest.Mock).mockImplementation(() => {
        throw new Error();
      });
      (isUtf8 as jest.Mock).mockReturnValue(false);

      const result = decodeByMethod('a', DecodeMethodEnum.smart);
      expect(result).toBe('10');
    });

    it('should return original part when all decoding fails', () => {
      (Address.newFromHex as jest.Mock).mockImplementation(() => {
        throw new Error();
      });

      const invalidInput = 'invalid';
      const result = decodeByMethod(invalidInput, DecodeMethodEnum.smart);
      expect(result).toBe(invalidInput);
    });
  });

  describe('raw decode method', () => {
    it('should return original part', () => {
      const part = 'rawData';
      const result = decodeByMethod(part, DecodeMethodEnum.raw);
      expect(result).toBe(part);
    });
  });

  describe('Unicode character handling', () => {
    describe('text decode method with Unicode', () => {
      it('should decode hex to utf8 text with em dash', () => {
        const hexString = Buffer.from(textWithEmDash).toString('hex');
        const result = decodeByMethod(hexString, DecodeMethodEnum.text);
        expect(result).toBe(textWithEmDash);
        expect(result).toContain('—');
      });

      it('should decode hex to utf8 text with curly apostrophe', () => {
        const hexString = Buffer.from(textWithApostrophe).toString('hex');
        const result = decodeByMethod(hexString, DecodeMethodEnum.text);
        expect(result).toBe(textWithApostrophe);
        expect(result).toContain("'");
      });

      it('should decode hex to utf8 text with bullet points', () => {
        const hexString = Buffer.from(textWithBullet).toString('hex');
        const result = decodeByMethod(hexString, DecodeMethodEnum.text);
        expect(result).toBe(textWithBullet);
        expect(result).toContain('•');
      });

      it('should decode full problematic text with Unicode characters', () => {
        const hexString = Buffer.from(unicodeText).toString('hex');
        const result = decodeByMethod(hexString, DecodeMethodEnum.text);
        expect(result).toBe(unicodeText);
        expect(result).toContain('—');
        expect(result).toContain("'");
        expect(result).toContain('•');
        expect(result).toContain("attacker's");
      });

      it('should preserve all special Unicode characters', () => {
        const hexString = Buffer.from(unicodeText).toString('hex');
        const result = decodeByMethod(hexString, DecodeMethodEnum.text);
        const emDashCount = (result.match(/—/g) || []).length;
        const apostropheCount = (result.match(/'/g) || []).length;
        const bulletCount = (result.match(/•/g) || []).length;

        expect(emDashCount).toBeGreaterThan(0);
        expect(apostropheCount).toBeGreaterThan(0);
        expect(bulletCount).toBeGreaterThan(0);
      });
    });

    describe('smart decode method with Unicode', () => {
      beforeEach(() => {
        (Address.newFromHex as jest.Mock).mockImplementation(() => {
          throw new Error();
        });
        (isUtf8 as jest.Mock).mockReturnValue(true);
      });

      it('should decode hex to utf8 with em dash using smart method', () => {
        const hexString = Buffer.from(textWithEmDash).toString('hex');
        const result = decodeByMethod(hexString, DecodeMethodEnum.smart);
        expect(result).toBe(textWithEmDash);
        expect(result).toContain('—');
      });

      it('should decode hex to utf8 with curly apostrophe using smart method', () => {
        const hexString = Buffer.from(textWithApostrophe).toString('hex');
        const result = decodeByMethod(hexString, DecodeMethodEnum.smart);
        expect(result).toBe(textWithApostrophe);
        expect(result).toContain("'");
      });

      it('should decode hex to utf8 with bullet points using smart method', () => {
        const hexString = Buffer.from(textWithBullet).toString('hex');
        const result = decodeByMethod(hexString, DecodeMethodEnum.smart);
        expect(result).toBe(textWithBullet);
        expect(result).toContain('•');
      });

      it('should decode full problematic text with smart method', () => {
        const hexString = Buffer.from(unicodeText).toString('hex');
        const result = decodeByMethod(hexString, DecodeMethodEnum.smart);
        expect(result).toBe(unicodeText);
        expect(result).toContain('—');
        expect(result).toContain("'");
        expect(result).toContain('•');
      });
    });

    describe('raw decode method with Unicode', () => {
      it('should return original hex string with Unicode characters', () => {
        const hexString = Buffer.from(unicodeText).toString('hex');
        const result = decodeByMethod(hexString, DecodeMethodEnum.raw);
        expect(result).toBe(hexString);
      });
    });
  });
});
