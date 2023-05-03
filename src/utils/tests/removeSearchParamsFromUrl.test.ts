import { removeSearchParamsFromUrl } from '../removeSearchParamsFromUrl';

describe('removeSearchParamsFromUrl tests', () => {
  it('removes all params from URL', () => {
    const search = '?signature=123&sessionId=asd&status=1';
    const removeParams = ['signature', 'sessionId', 'status'];

    const result = removeSearchParamsFromUrl({ removeParams, search });

    expect(result).toStrictEqual({});
  });

  it('removes the provided data from URL', () => {
    const search = '?signature=123&sessionId=asd&status=1';
    const removeParams = ['signature', 'sessionId'];

    const result = removeSearchParamsFromUrl({ removeParams, search });

    expect(result).toStrictEqual({
      status: '1'
    });
  });

  it('preserves the URL when no removeData is provided', () => {
    const search = '?testParam=123&searchParam=asd';
    const result = removeSearchParamsFromUrl({ removeParams: [], search });

    expect(result).toStrictEqual({
      testParam: '123',
      searchParam: 'asd'
    });
  });

  it('does nothing when search is missing', () => {
    const result = removeSearchParamsFromUrl({
      removeParams: ['test'],
      search: ''
    });

    expect(result).toStrictEqual({});
  });
});
