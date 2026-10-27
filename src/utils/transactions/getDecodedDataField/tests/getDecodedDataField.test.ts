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

  describe('smart view of numeric arguments', () => {
    const tokenHex = Buffer.from('TKN-abcdef').toString('hex');
    const nftHex = Buffer.from('NFT-abcdef').toString('hex');
    const receiverHex = 'ab'.repeat(32);

    const getSmart = (data: string) =>
      getDecodedDataField({ data, decodeMethod: DecodeMethodEnum.smart })
        .displayValue;

    it.each([
      ['an ESDTTransfer amount with ASCII bytes', '31303030', '825241648'],
      ['an ESDTTransfer amount of 1', '01', '1'],
      [
        'a non-ASCII ESDTTransfer amount',
        '0de0b6b3a7640000',
        '1000000000000000000'
      ]
    ])('shows %s as a number', (_, amount, expected) => {
      expect(getSmart(`ESDTTransfer@${tokenHex}@${amount}`)).toBe(
        `ESDTTransfer@TKN-abcdef@${expected}`
      );
    });

    it('shows the ESDTNFTTransfer nonce and quantity as numbers', () => {
      expect(getSmart(`ESDTNFTTransfer@${nftHex}@31@31@${receiverHex}`)).toBe(
        `ESDTNFTTransfer@NFT-abcdef@49@49@${getSmart(receiverHex)}`
      );
    });

    it('shows every MultiESDTNFTTransfer count, nonce and amount as numbers', () => {
      const data = [
        'MultiESDTNFTTransfer',
        receiverHex,
        '02',
        tokenHex,
        '',
        '31303030',
        nftHex,
        '31',
        '01',
        Buffer.from('claim').toString('hex')
      ].join('@');

      const parts = getSmart(data).split('@');

      expect(parts[2]).toBe('2');
      expect(parts[3]).toBe('TKN-abcdef');
      expect(parts[5]).toBe('825241648');
      expect(parts[6]).toBe('NFT-abcdef');
      expect(parts[7]).toBe('49');
      expect(parts[8]).toBe('1');
      expect(parts[9]).toBe('claim');
    });

    it('does not show control characters as text', () => {
      expect(getSmart(`claim@${tokenHex}@0102`)).toBe('claim@TKN-abcdef@258');
    });
  });
});
