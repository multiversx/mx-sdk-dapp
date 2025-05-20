import { buildUrlParams } from '../buildUrlParams';

describe('buildUrlParams', () => {
  test('should combine search and urlParams correctly', () => {
    const search = 'foo=bar&baz=qux';
    const urlParams = { alpha: 'beta', gamma: 'delta' };

    const result = buildUrlParams(search, urlParams);

    expect(result).toEqual({
      nextUrlParams: 'foo=bar&baz=qux&alpha=beta&gamma=delta',
      params: { foo: 'bar', baz: 'qux' }
    });
  });

  test('should overwrite existing params with urlParams', () => {
    const search = 'foo=bar&baz=qux';
    const urlParams = { foo: 'newBar', gamma: 'delta' };

    const result = buildUrlParams(search, urlParams);

    expect(result).toEqual({
      nextUrlParams: 'foo=newBar&baz=qux&gamma=delta',
      params: { foo: 'bar', baz: 'qux' }
    });
  });

  test('should handle empty search string', () => {
    const search = '';
    const urlParams = { alpha: 'beta', gamma: 'delta' };

    const result = buildUrlParams(search, urlParams);

    expect(result).toEqual({
      nextUrlParams: 'alpha=beta&gamma=delta',
      params: {}
    });
  });

  test('should handle empty urlParams', () => {
    const search = 'foo=bar&baz=qux';
    const urlParams = {};

    const result = buildUrlParams(search, urlParams);

    expect(result).toEqual({
      nextUrlParams: 'foo=bar&baz=qux',
      params: { foo: 'bar', baz: 'qux' }
    });
  });

  test('should handle both empty search and urlParams', () => {
    const search = '';
    const urlParams = {};

    const result = buildUrlParams(search, urlParams);

    expect(result).toEqual({
      nextUrlParams: '',
      params: {}
    });
  });

  test('should handle special characters in params', () => {
    const search = 'foo=bar%20baz&baz=qux';
    const urlParams = { alpha: 'beta gamma', gamma: 'delta' };

    const result = buildUrlParams(search, urlParams);

    expect(result).toEqual({
      nextUrlParams: 'foo=bar+baz&baz=qux&alpha=beta+gamma&gamma=delta',
      params: { foo: 'bar baz', baz: 'qux' }
    });
  });
});
