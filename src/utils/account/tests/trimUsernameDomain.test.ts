import { trimUsernameDomain } from '../trimUsernameDomain';

describe('trimUsernameDomain tests', () => {
  it('should return undefined when username is undefined or empty', () => {
    expect(trimUsernameDomain(undefined)).toBeUndefined();
    expect(trimUsernameDomain('')).toBeUndefined();
  });

  it('should trim .elrond suffix from username', () => {
    expect(trimUsernameDomain('alice.elrond')).toBe('alice');
    expect(trimUsernameDomain('bob.elrond')).toBe('bob');
    expect(trimUsernameDomain('charlie.test.elrond')).toBe('charlie.test');
  });

  it('should return username as-is when .elrond suffix does not exist', () => {
    expect(trimUsernameDomain('alice')).toBe('alice');
    expect(trimUsernameDomain('bob.multiversx')).toBe('bob.multiversx');
  });
});
