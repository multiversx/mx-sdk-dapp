import nominate from './../nominate';
// file.only

describe('nominate tests', () => {
  it('adds 18 zeros', () => {
    expect(nominate('10')).toBe('10000000000000000000');
  });
  it('works with custom denomination', () => {
    expect(nominate('10', 6)).toBe('10000000');
  });
  it('works with floating numbers', () => {
    expect(nominate('0.1')).toBe('100000000000000000');
  });
  it('removes zero at end and start', () => {
    expect(nominate('000.100')).toBe('100000000000000000');
  });
  it('works with 0', () => {
    expect(nominate('0')).toBe('0');
  });
  it('works with prepended 0', () => {
    expect(nominate('010')).toBe('10000000000000000000');
  });
});
