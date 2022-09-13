import { formatAmount } from '../formatAmount';

describe('format with 4,4', () => {
  const numbers: { [key: string]: string } = {
    '9999999999999999999999990000': '999,999,999,999,999,999,999,999',
    '0': '0'
  };
  const decimals = 4;
  const digits = 4;
  for (let i = 0; i < Object.keys(numbers).length; i++) {
    const input = Object.keys(numbers)[i];
    const output = numbers[input];
    it(`format ${input} -> ${output}`, () => {
      const withCommas = formatAmount({
        input,
        decimals,
        digits,
        showLastNonZeroDecimal: false,
        addCommas: true
      });
      expect(withCommas).toBe(output);
    });
  }
});

describe('format with 8,4', () => {
  const numbers: { [key: string]: string } = {
    '9999999999999999999899996000': '99,999,999,999,999,999,998.9999',
    '0': '0',
    '10000': '0.0001'
  };
  const decimals = 8;
  const digits = 4;
  for (let i = 0; i < Object.keys(numbers).length; i++) {
    const input = Object.keys(numbers)[i];
    const output = numbers[input];
    it(`format ${input} -> ${output}`, () => {
      const withCommas = formatAmount({
        input,
        decimals,
        digits,
        showLastNonZeroDecimal: false,
        addCommas: true
      });
      expect(withCommas).toBe(output);
    });
  }
});

describe('format with 0,0', () => {
  const numbers: { [key: string]: string } = {
    '350': '350'
  };
  const decimals = 0;
  const digits = 0;
  for (let i = 0; i < Object.keys(numbers).length; i++) {
    const input = Object.keys(numbers)[i];
    const output = numbers[input];
    it(`format ${input} -> ${output}`, () => {
      const withCommas = formatAmount({
        input,
        decimals,
        digits,
        showLastNonZeroDecimal: false
      });
      expect(withCommas).toBe(output);
    });
  }
});

describe('format with 4,8,true', () => {
  const numbers: { [key: string]: string } = {
    '12345678901234567890123': '123,456,789,012,345.67890123'
  };
  const decimals = 8;
  const digits = 4;
  for (let i = 0; i < Object.keys(numbers).length; i++) {
    const input = Object.keys(numbers)[i];
    const output = numbers[input];
    it(`format ${input} -> ${output}`, () => {
      const withCommas = formatAmount({
        input,
        decimals,
        digits,
        showLastNonZeroDecimal: true,
        addCommas: true
      });
      expect(withCommas).toBe(output);
    });
  }
});

describe('format with 18,0,true', () => {
  const numbers: { [key: string]: string } = {
    '102000000000000000': '0.102',
    '100000000000000000': '0.1',
    '1000000000000000000': '1'
  };
  const decimals = 18;
  const digits = 0;
  for (let i = 0; i < Object.keys(numbers).length; i++) {
    const input = Object.keys(numbers)[i];
    const output = numbers[input];
    it(`format ${input} -> ${output}`, () => {
      const withCommas = formatAmount({
        input,
        decimals,
        digits,
        showLastNonZeroDecimal: true
      });
      expect(withCommas).toBe(output);
    });
  }
});

describe('format with float throws error', () => {
  const numbers: { [key: string]: string } = {
    '0.015': 'Throws error',
    '01000000000000000000': 'Throws error'
  };
  const decimals = 18;
  const digits = 4;
  for (let i = 0; i < Object.keys(numbers).length; i++) {
    const input = Object.keys(numbers)[i];
    const output = numbers[input];
    it(`format ${input} -> ${output}`, () => {
      let err = '';
      try {
        formatAmount({
          input,
          decimals,
          digits,
          addCommas: false,
          showLastNonZeroDecimal: true
        });
        expect(err).toBeInstanceOf(Error);
      } catch (error) {
        err = error as any;
        expect(err).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid input');
      }
    });
  }
});

describe('format with negative', () => {
  const numbers: { [key: string]: string } = {
    '-922506751086064008': '-0.922506751086064008',
    '-578345000000000000000': '-578.3450',
    '-1578345000000000000000': '-1,578.3450',
    '-3456000000000000000': '-3.4560'
  };
  const decimals = 18;
  const digits = 4;
  for (let i = 0; i < Object.keys(numbers).length; i++) {
    const input = Object.keys(numbers)[i];
    const output = numbers[input];
    it(`format ${input} -> ${output}`, () => {
      const withCommas = formatAmount({
        input,
        decimals,
        digits,
        showLastNonZeroDecimal: true,
        addCommas: true
      });
      expect(withCommas).toBe(output);
    });
  }
});

describe('format with single tests', () => {
  it('should show less than if decimal amount is too low', () => {
    const result = formatAmount({
      input: (100_000_000_000_000).toString(),
      digits: 2,
      showIsLessThanDecimalsLabel: true,
      showLastNonZeroDecimal: false
    });
    expect(result).toBe('<0.01');
  });
  it('should not show digits when result is below 1', () => {
    const result = formatAmount({
      input: (100_000_000_000_000).toString(),
      showLastNonZeroDecimal: false,
      digits: 2
    });
    expect(result).toBe('0');
  });
  it('should show zero digits for integers with decimal amount too low', () => {
    const result = formatAmount({
      input: ['1', '000', '000', '001', '000', '000', '000', '000'].join(''),
      digits: 2,
      showLastNonZeroDecimal: false
    });
    expect(result).toBe('1000.00');
  });
  it('should show a valid number if showLastNonZeroDecimal is set', () => {
    const result = formatAmount({
      input: (1_000_000_000).toString(),
      digits: 4,
      showLastNonZeroDecimal: true
    });
    expect(result).toBe('0.000000001');
  });

  it('should show remove digits and not add commas', () => {
    const result = formatAmount({
      input: '369884288127092846270928',
      digits: 4,
      showLastNonZeroDecimal: false,
      addCommas: false
    });
    expect(result).toBe('369884.2881');
  });

  it('should not add . at the end for 0 digits', () => {
    const result = formatAmount({
      input: '369884288127092846270928',
      digits: 0,
      showLastNonZeroDecimal: false,
      addCommas: false
    });
    expect(result).toBe('369884');
  });

  describe('should show all 4 digits', () => {
    const numbers: { [key: string]: string } = {
      '995000000000000000': '0.9950'
    };
    const decimals = 18;
    const digits = 4;
    for (let i = 0; i < Object.keys(numbers).length; i++) {
      const input = Object.keys(numbers)[i];
      const output = numbers[input];
      it(`format ${input} -> ${output}`, () => {
        const withCommas = formatAmount({
          input,
          decimals,
          digits,
          showLastNonZeroDecimal: true,
          addCommas: true
        });
        expect(withCommas).toBe(output);
      });
    }
  });
});
