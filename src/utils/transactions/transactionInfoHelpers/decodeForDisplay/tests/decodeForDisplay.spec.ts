import {
  DecodeMethodEnum,
  DecodeForDisplayPropsType
} from 'types/serverTransactions.types';
import { decodeForDisplay } from '../decodeForDisplay';
import {
  decodeByMethod,
  getDisplayValueAndValidationWarnings,
  getSmartDecodedParts
} from '../helpers';

jest.mock('../helpers/decodeByMethod');
jest.mock('../helpers/getDisplayValueAndValidationWarnings');
jest.mock('../helpers/getSmartDecodedParts');

describe('decodeForDisplay', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (decodeByMethod as jest.Mock).mockReturnValue('decoded');
    (getDisplayValueAndValidationWarnings as jest.Mock).mockReturnValue([
      'decodedPart1',
      'decodedPart2'
    ]);
    (getSmartDecodedParts as jest.Mock).mockReturnValue([
      'smartDecoded1',
      'smartDecoded2'
    ]);
  });

  it('should handle input with @ symbol', () => {
    const input = 'part1@part2';
    const props: DecodeForDisplayPropsType = {
      input,
      decodeMethod: DecodeMethodEnum.text,
      identifier: 'test'
    };

    const result = decodeForDisplay(props);

    expect(getDisplayValueAndValidationWarnings).toHaveBeenCalledWith({
      parts: ['part1', 'part2'],
      identifier: 'test',
      decodeMethod: DecodeMethodEnum.text,
      display: expect.any(Object)
    });
    expect(result.displayValue).toBe('decodedPart1@decodedPart2');
    expect(result.validationWarnings).toEqual([]);
  });

  it('should handle input with newline character using raw decode method', () => {
    const input = 'part1\npart2';

    const props: DecodeForDisplayPropsType = {
      input,
      decodeMethod: DecodeMethodEnum.raw,
      identifier: 'test'
    };

    const result = decodeForDisplay(props);

    expect(result.displayValue).toBe(input);
    expect(result.validationWarnings).toEqual([]);
  });

  it('should handle input with newline character using smart decode method', () => {
    const input = 'part1\npart2';
    const props: DecodeForDisplayPropsType = {
      input,
      decodeMethod: DecodeMethodEnum.smart,
      identifier: 'test'
    };

    const result = decodeForDisplay(props);

    expect(getSmartDecodedParts).toHaveBeenCalledWith({
      parts: ['part1', 'part2'],
      decodedParts: ['decoded', 'decoded'],
      identifier: 'test'
    });

    expect(result.displayValue).toBe('smartDecoded1\nsmartDecoded2');
    expect(result.validationWarnings).toEqual([]);
  });

  it('should handle input with both @ and newline characters', () => {
    const input = 'part1@part2\npart3';
    const props: DecodeForDisplayPropsType = {
      input,
      decodeMethod: DecodeMethodEnum.text,
      identifier: 'test'
    };

    const result = decodeForDisplay(props);

    expect(getDisplayValueAndValidationWarnings).toHaveBeenCalled();
    expect(decodeByMethod).toHaveBeenCalled();
    expect(result.validationWarnings).toEqual([]);
  });

  it('should handle simple input without @ or newline', () => {
    const input = 'simpleInput';
    const props: DecodeForDisplayPropsType = {
      input,
      decodeMethod: DecodeMethodEnum.text,
      identifier: 'test'
    };

    const result = decodeForDisplay(props);

    expect(decodeByMethod).toHaveBeenCalledWith(input, DecodeMethodEnum.text);
    expect(result.displayValue).toBe('decoded');
    expect(result.validationWarnings).toEqual([]);
  });

  it('should preserve validation warnings from getDisplayValueAndValidationWarnings', () => {
    const input = 'part1@part2';
    const mockWarnings = ['warning1'];
    (getDisplayValueAndValidationWarnings as jest.Mock).mockImplementation(
      ({ display }) => {
        display.validationWarnings = mockWarnings;
        return ['decodedPart1', 'decodedPart2'];
      }
    );

    const props: DecodeForDisplayPropsType = {
      input,
      decodeMethod: DecodeMethodEnum.text,
      identifier: 'test'
    };

    const result = decodeForDisplay(props);

    expect(result.validationWarnings).toEqual(mockWarnings);
  });

  it('should handle empty input', () => {
    const props: DecodeForDisplayPropsType = {
      input: '',
      decodeMethod: DecodeMethodEnum.text,
      identifier: 'test'
    };

    const result = decodeForDisplay(props);

    expect(decodeByMethod).toHaveBeenCalledWith('', DecodeMethodEnum.text);
    expect(result.displayValue).toBe('decoded');
    expect(result.validationWarnings).toEqual([]);
  });
});
