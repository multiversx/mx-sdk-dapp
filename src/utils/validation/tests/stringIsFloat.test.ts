import { stringIsFloat } from '../stringIsFloat';

describe('stringIsFloat tests', () => {
  it('rejects undefined', () => {
    expect(stringIsFloat(undefined as any)).toBe(false);
  });

  it('rejects object', () => {
    expect(stringIsFloat({} as any)).toBe(false);
  });

  it('rejects null', () => {
    expect(stringIsFloat(null as any)).toBe(false);
  });

  it('allows valid numbers', () => {
    expect(stringIsFloat('1')).toBe(true);
  });

  it('allows decimal numbers with zeros', () => {
    expect(stringIsFloat('0.1')).toBe(true);
    expect(stringIsFloat('0.001')).toBe(true);
  });

  it('allows large decimal places', () => {
    expect(stringIsFloat('999999999999999999999.123456789012345678')).toBe(
      true
    );

    expect(stringIsFloat('0.111111111111111111')).toBe(true);
  });

  it('allows trailing 0', () => {
    expect(stringIsFloat('0.10')).toBe(true);
    expect(stringIsFloat('10')).toBe(true);
  });

  it('denies negative numbers', () => {
    expect(stringIsFloat('-1')).toBe(false);
  });

  it('denies explicit positive', () => {
    expect(stringIsFloat('+1')).toBe(false);
  });

  it('denies leading 0', () => {
    expect(stringIsFloat('01')).toBe(false);
  });

  it('denies string', () => {
    expect(stringIsFloat('null')).toBe(false);
  });

  it('denies hexadecimal', () => {
    expect(stringIsFloat('0x2')).toBe(false);
  });

  it('denies exponential', () => {
    expect(stringIsFloat('1e2')).toBe(false);
  });

  it('denies caret separation', () => {
    expect(stringIsFloat('100_200')).toBe(false);
  });

  it('denies NaN', () => {
    expect(stringIsFloat(NaN as any)).toBe(false);
  });

  it('denies caret separation', () => {
    expect(stringIsFloat(Infinity as any)).toBe(false);
  });

  it('allows large numbers', () => {
    expect(stringIsFloat('0.0000000011231723871623178236182376123')).toBe(true);
  });

  it('allows large numbers with single comma', () => {
    expect(stringIsFloat('0,0000000011231723871623178236182376123')).toBe(
      false
    );
  });

  it('allows large numbers with multiple commas', () => {
    expect(stringIsFloat('0,0000000011231723,87,162.317,8236182376123')).toBe(
      false
    );
  });
});
