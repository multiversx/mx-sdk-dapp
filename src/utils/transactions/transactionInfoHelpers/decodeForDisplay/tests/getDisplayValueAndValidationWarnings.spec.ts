import { DecodeMethodEnum, DecodedDisplayType } from 'types';
import {
  decodeByMethod,
  getHexValidationWarnings,
  getSmartDecodedParts,
  getDisplayValueAndValidationWarnings
} from '../helpers';

jest.mock('../helpers/decodeByMethod');
jest.mock('../helpers/getHexValidationWarnings');
jest.mock('../helpers/getSmartDecodedParts');

describe('getDisplayValueAndValidationWarnings', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const createMockDisplay = (): DecodedDisplayType => ({
    displayValue: '',
    validationWarnings: []
  });

  it('should handle encoded display value in first two parts', () => {
    const mockParts = ['short', 'test@123'];
    const mockDisplay = createMockDisplay();
    (decodeByMethod as jest.Mock).mockReturnValue('decoded');

    const result = getDisplayValueAndValidationWarnings({
      parts: mockParts,
      decodeMethod: DecodeMethodEnum.text,
      display: mockDisplay
    });

    expect(decodeByMethod).toHaveBeenCalledWith(
      'test@123',
      DecodeMethodEnum.text
    );

    expect(result).toEqual(['short', 'decoded']);
  });

  it('should pass through non-encoded values in first two parts', () => {
    const mockParts = ['short', 'test123'];
    const mockDisplay = createMockDisplay();

    const result = getDisplayValueAndValidationWarnings({
      parts: mockParts,
      decodeMethod: DecodeMethodEnum.text,
      display: mockDisplay
    });

    expect(decodeByMethod).toHaveBeenCalledWith(
      'test123',
      DecodeMethodEnum.text
    );

    expect(result).toEqual(['short', 'decoded']);
  });

  it('should handle hex validation warnings', () => {
    const mockParts = ['a'.repeat(64), 'value2'];
    const mockWarnings = ['warning1'];
    const mockDisplay = createMockDisplay();
    mockDisplay.validationWarnings = ['existing'];

    (getHexValidationWarnings as jest.Mock).mockReturnValue(mockWarnings);
    (decodeByMethod as jest.Mock).mockReturnValue('decoded');

    const result = getDisplayValueAndValidationWarnings({
      parts: mockParts,
      decodeMethod: DecodeMethodEnum.text,
      display: mockDisplay
    });

    expect(getHexValidationWarnings).toHaveBeenCalledWith('a'.repeat(64));
    expect(mockDisplay.validationWarnings).toEqual(['existing', 'warning1']);
    expect(result).toEqual(['decoded', 'decoded']);
  });

  it('should use smart decoding when decodeMethod is smart', () => {
    const mockParts = ['value1', 'value2'];
    const mockInitialDecoded = ['value1', 'decoded1'];
    const mockSmartDecoded = ['smart1', 'smart2'];
    const mockDisplay = createMockDisplay();

    (decodeByMethod as jest.Mock)
      .mockReturnValueOnce('decoded1')
      .mockReturnValueOnce('decoded2');
    (getSmartDecodedParts as jest.Mock).mockReturnValue(mockSmartDecoded);

    const result = getDisplayValueAndValidationWarnings({
      parts: mockParts,
      decodeMethod: DecodeMethodEnum.smart,
      identifier: 'test',
      display: mockDisplay
    });

    expect(getSmartDecodedParts).toHaveBeenCalledWith({
      parts: mockParts,
      decodedParts: mockInitialDecoded,
      identifier: 'test'
    });

    expect(result).toEqual(mockSmartDecoded);
  });

  it('should handle empty parts array', () => {
    const mockDisplay = createMockDisplay();

    const result = getDisplayValueAndValidationWarnings({
      parts: [],
      decodeMethod: DecodeMethodEnum.text,
      display: mockDisplay
    });

    expect(result).toEqual([]);
    expect(decodeByMethod).not.toHaveBeenCalled();
  });

  it('should deduplicate validation warnings', () => {
    const mockParts = ['value1', 'value2'];
    const mockWarnings = ['warning1', 'warning1', 'warning2'];
    const mockDisplay = createMockDisplay();
    mockDisplay.validationWarnings = ['warning1'];

    (getHexValidationWarnings as jest.Mock).mockReturnValue(mockWarnings);
    (decodeByMethod as jest.Mock).mockReturnValue('decoded');

    getDisplayValueAndValidationWarnings({
      parts: mockParts,
      decodeMethod: DecodeMethodEnum.text,
      display: mockDisplay
    });

    expect(mockDisplay.validationWarnings).toEqual(['warning1', 'warning2']);
  });

  it('should preserve displayValue in display object', () => {
    const mockParts = ['value1', 'value2'];
    const mockDisplay = createMockDisplay();
    mockDisplay.displayValue = 'initial value';

    getDisplayValueAndValidationWarnings({
      parts: mockParts,
      decodeMethod: DecodeMethodEnum.text,
      display: mockDisplay
    });

    expect(mockDisplay.displayValue).toBe('initial value');
  });

  it('should handle hex validation and decoding for non-special parts', () => {
    const mockParts = ['short', 'xyz123'];
    const mockDisplay = createMockDisplay();
    (decodeByMethod as jest.Mock).mockReturnValue('decoded');
    (getHexValidationWarnings as jest.Mock).mockReturnValue([
      'Invalid Hex characters on argument @xyz123'
    ]);

    const result = getDisplayValueAndValidationWarnings({
      parts: mockParts,
      decodeMethod: DecodeMethodEnum.text,
      display: mockDisplay
    });

    expect(getHexValidationWarnings).toHaveBeenCalledWith('xyz123');
    expect(decodeByMethod).toHaveBeenCalledWith(
      'xyz123',
      DecodeMethodEnum.text
    );
    expect(mockDisplay.validationWarnings).toContain(
      'Invalid Hex characters on argument @xyz123'
    );
    expect(result).toEqual(['short', 'decoded']);
  });

  it('should not add duplicate validation warnings', () => {
    const mockParts = ['short', 'xyz123'];
    const mockDisplay = createMockDisplay();
    mockDisplay.validationWarnings = [
      'Invalid Hex characters on argument @xyz123'
    ];
    (decodeByMethod as jest.Mock).mockReturnValue('decoded');
    (getHexValidationWarnings as jest.Mock).mockReturnValue([
      'Invalid Hex characters on argument @xyz123'
    ]);

    getDisplayValueAndValidationWarnings({
      parts: mockParts,
      decodeMethod: DecodeMethodEnum.text,
      display: mockDisplay
    });

    expect(mockDisplay.validationWarnings).toHaveLength(1);
    expect(mockDisplay.validationWarnings).toEqual([
      'Invalid Hex characters on argument @xyz123'
    ]);
  });
});
