import { stringIsInteger } from './../stringIsInteger';

describe('stringIsInteger tests', () => {
  it('allows valid numbers', () => {
    expect(stringIsInteger('1')).toBe(true);
    expect(stringIsInteger('999999999999999999999')).toBe(true);
  });
  it('allows valid integer numbers', () => {
    expect(stringIsInteger(1 as any)).toBe(true);
    expect(stringIsInteger(0 as any)).toBe(true);
    // eslint-disable-next-line
    expect(stringIsInteger(999999999999999999999 as any)).toBe(false);
  });
  it('rejects float numbers', () => {
    expect(stringIsInteger('1.1')).toBe(false);
  });
  it('rejects strings', () => {
    expect(stringIsInteger('1a')).toBe(false);
  });
  it('rejects undefined', () => {
    expect(stringIsInteger(undefined as any)).toBe(false);
  });
  it('rejects NaN', () => {
    expect(stringIsInteger(NaN as any)).toBe(false);
  });
  it('rejects null', () => {
    expect(stringIsInteger(null as any)).toBe(false);
  });
  it('rejects negative', () => {
    expect(stringIsInteger('-1')).toBe(false);
  });
  it('allows negative if specified', () => {
    expect(stringIsInteger('-1', false)).toBe(true);
    expect(stringIsInteger('-3456000000000000000', false)).toBe(true);
  });
  it('denies string', () => {
    expect(stringIsInteger('null')).toBe(false);
  });
  it('denies leading 0', () => {
    expect(stringIsInteger('01')).toBe(false);
  });
  it('rejects explicit positive', () => {
    expect(stringIsInteger('+1')).toBe(false);
  });
  it('rejects hexa', () => {
    expect(stringIsInteger('0x69859')).toBe(false);
  });
  it('rejects exponential string', () => {
    expect(stringIsInteger('1e20')).toBe(false);
  });
});
