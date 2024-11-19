import { Address } from '@multiversx/sdk-core/out';
import { DecodeMethodEnum } from 'types';
import { addressIsValid } from 'utils/account/addressIsValid';
import { isUtf8 } from 'utils/decoders';
import { decodeByMethod } from '../helpers';

jest.mock('@multiversx/sdk-core/out', () => ({
  Address: {
    fromHex: jest.fn()
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

      (Address.fromHex as jest.Mock).mockReturnValue({
        toString: () => mockAddress
      });

      (addressIsValid as jest.Mock).mockReturnValue(true);

      const result = decodeByMethod('validHex', DecodeMethodEnum.smart);
      expect(result).toBe(mockAddress);
    });

    it('should decode to utf8 when possible and valid', () => {
      (Address.fromHex as jest.Mock).mockImplementation(() => {
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

      (Address.fromHex as jest.Mock).mockImplementation(() => {
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
      (Address.fromHex as jest.Mock).mockImplementation(() => {
        throw new Error();
      });
      (isUtf8 as jest.Mock).mockReturnValue(false);

      const result = decodeByMethod('a', DecodeMethodEnum.smart);
      expect(result).toBe('10');
    });

    it('should return original part when all decoding fails', () => {
      (Address.fromHex as jest.Mock).mockImplementation(() => {
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
});
