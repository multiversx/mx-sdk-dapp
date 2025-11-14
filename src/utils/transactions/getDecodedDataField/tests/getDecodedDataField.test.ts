import { MAX_DECODE_TX_DATA_LENGTH } from 'constants/transactions.constants';
import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { getDecodedDataField } from '../getDecodedDataField';

describe('getDecodedDataField tests', () => {
  it('should return data unchanged when length exceeds MAX_DECODE_TX_DATA_LENGTH for decimal or smart decode methods', () => {
    const longData = 'a'.repeat(MAX_DECODE_TX_DATA_LENGTH + 1);

    // Test with decimal method
    const decimalResult = getDecodedDataField({
      data: longData,
      decodeMethod: DecodeMethodEnum.decimal
    });

    expect(decimalResult.displayValue).toBe(longData);
    expect(decimalResult.validationWarnings).toEqual([]);
    expect(decimalResult.highlight).toBeNull();

    // Test with smart method
    const smartResult = getDecodedDataField({
      data: longData,
      decodeMethod: DecodeMethodEnum.smart
    });

    expect(smartResult.displayValue).toBe(longData);
    expect(smartResult.validationWarnings).toEqual([]);
    expect(smartResult.highlight).toBeNull();

    // Test with highlight preserved
    const highlightValue = 'highlight';
    const resultWithHighlight = getDecodedDataField({
      data: longData,
      decodeMethod: DecodeMethodEnum.decimal,
      highlight: highlightValue
    });

    expect(resultWithHighlight.displayValue).toBe(longData);
    expect(resultWithHighlight.validationWarnings).toEqual([]);
    expect(resultWithHighlight.highlight).toBe(highlightValue);
  });

  it('should handle data with newlines using raw decode method', () => {
    const dataWithNewlines = 'part1\npart2\npart3';

    const result = getDecodedDataField({
      data: dataWithNewlines,
      decodeMethod: DecodeMethodEnum.raw
    });

    expect(result.displayValue).toBe(dataWithNewlines);
    expect(result.validationWarnings).toEqual([]);
  });

  it('should decode data with newlines and handle highlight', () => {
    // Base64 encoded data: "hello" = "aGVsbG8=", "world" = "d29ybGQ="
    const base64Data = 'aGVsbG8=\nd29ybGQ=';
    const highlight = 'aGVsbG8=\nd29ybGQ=';

    const result = getDecodedDataField({
      data: base64Data,
      decodeMethod: DecodeMethodEnum.text,
      highlight
    });

    expect(result.displayValue).toContain('\n');
    expect(result.validationWarnings).toEqual([]);
    expect(result.highlight).not.toBeNull();
  });
});
