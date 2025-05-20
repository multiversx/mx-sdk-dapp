import { FormatAmountController } from '../FormatAmountController';

describe('FormatAmountController', () => {
  describe('getData', () => {
    it('handles empty input with default decimals', () => {
      const result = FormatAmountController.getData({
        input: '',
        egldLabel: 'EGLD'
      });

      expect(result).toEqual({
        isValid: false,
        label: ' EGLD',
        valueInteger: '0',
        valueDecimal: '.00'
      });
    });

    it('handles empty input with custom decimals and digits', () => {
      const result = FormatAmountController.getData({
        input: '',
        decimals: 4,
        digits: 3,
        egldLabel: 'EGLD'
      });

      expect(result).toEqual({
        isValid: false,
        label: ' EGLD',
        valueInteger: '0',
        valueDecimal: '.000'
      });
    });

    it('handles empty input with token label', () => {
      const result = FormatAmountController.getData({
        input: '',
        token: 'TEST'
      });

      expect(result).toEqual({
        isValid: false,
        label: ' TEST',
        valueInteger: '0',
        valueDecimal: '.00'
      });
    });

    it('formats valid EGLD amount', () => {
      const result = FormatAmountController.getData({
        input: '1000000000000000000', // 1 EGLD
        decimals: 18,
        digits: 2,
        egldLabel: 'EGLD'
      });

      expect(result).toEqual({
        isValid: true,
        label: ' EGLD',
        valueInteger: '1',
        valueDecimal: '.00'
      });
    });

    it('handles partial decimal values', () => {
      const result = FormatAmountController.getData({
        input: '12345',
        decimals: 3,
        digits: 2
      });

      expect(result).toEqual({
        isValid: true,
        label: '',
        valueInteger: '12',
        valueDecimal: '.34'
      });
    });

    it('shows less than decimals label when needed', () => {
      const result = FormatAmountController.getData({
        input: '1',
        decimals: 18,
        digits: 2,
        showIsLessThanDecimalsLabel: true
      });

      expect(result.valueDecimal).toEqual('.01');
    });
  });

  it('handles non-integer input', () => {
    const result = FormatAmountController.getData({
      input: 'abc123',
      egldLabel: 'EGLD'
    });

    expect(result).toEqual({
      isValid: false,
      label: ' EGLD',
      valueInteger: '0',
      valueDecimal: '.00'
    });
  });
});
