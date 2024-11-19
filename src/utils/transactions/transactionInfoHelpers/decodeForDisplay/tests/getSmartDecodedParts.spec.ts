import { DecodeMethodEnum, TransactionTypesEnum } from 'types';
import { decodeByMethod, getSmartDecodedParts } from '../helpers';

jest.mock('../helpers/decodeByMethod');

describe('getSmartDecodedParts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return unchanged decodedParts when no conditions are met', () => {
    const input = {
      parts: ['someType'],
      decodedParts: ['decodedValue']
    };

    const result = getSmartDecodedParts(input);
    expect(result).toEqual(['decodedValue']);
    expect(decodeByMethod).not.toHaveBeenCalled();
  });

  it('should decode parts[2] when first part is ESDTNFTTransfer', () => {
    const mockDecodedValue = '123';
    (decodeByMethod as jest.Mock).mockReturnValue(mockDecodedValue);

    const input = {
      parts: [TransactionTypesEnum.ESDTNFTTransfer, 'value1', 'hexValue'],
      decodedParts: ['decoded1', 'decoded2', 'decoded3']
    };

    const result = getSmartDecodedParts(input);

    expect(decodeByMethod).toHaveBeenCalledWith(
      'hexValue',
      DecodeMethodEnum.decimal
    );
    expect(result).toEqual(['decoded1', 'decoded2', mockDecodedValue]);
  });

  it('should decode parts[1] when identifier is ESDTNFTTransfer', () => {
    const mockDecodedValue = '456';
    (decodeByMethod as jest.Mock).mockReturnValue(mockDecodedValue);

    const base64Value = Buffer.from('test').toString('base64');
    const expectedHexValue = Buffer.from('test').toString('hex');

    const input = {
      parts: ['someType', base64Value],
      decodedParts: ['decoded1', 'decoded2'],
      identifier: TransactionTypesEnum.ESDTNFTTransfer
    };

    const result = getSmartDecodedParts(input);

    expect(decodeByMethod).toHaveBeenCalledWith(
      expectedHexValue,
      DecodeMethodEnum.decimal
    );
    expect(result).toEqual(['decoded1', mockDecodedValue]);
  });

  it('should handle both conditions simultaneously', () => {
    const mockDecodedValues = ['123', '456'];
    (decodeByMethod as jest.Mock)
      .mockReturnValueOnce(mockDecodedValues[0])
      .mockReturnValueOnce(mockDecodedValues[1]);

    const base64Value = Buffer.from('test').toString('base64');
    const expectedHexValue = Buffer.from('test').toString('hex');

    const input = {
      parts: [TransactionTypesEnum.ESDTNFTTransfer, base64Value, 'hexValue'],
      decodedParts: ['decoded1', 'decoded2', 'decoded3'],
      identifier: TransactionTypesEnum.ESDTNFTTransfer
    };

    const result = getSmartDecodedParts(input);

    expect(decodeByMethod).toHaveBeenCalledWith(
      'hexValue',
      DecodeMethodEnum.decimal
    );
    expect(decodeByMethod).toHaveBeenCalledWith(
      expectedHexValue,
      DecodeMethodEnum.decimal
    );
    expect(result).toEqual([
      'decoded1',
      mockDecodedValues[1],
      mockDecodedValues[0]
    ]);
  });
});
