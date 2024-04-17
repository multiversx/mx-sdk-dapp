import { cleanup } from '@testing-library/react';
import { testAddress } from '__mocks__';
import { getSearchParamAddress } from '../getSearchParamAddress';

const createMockLocation = (search: string) => {
  if (!global.window) {
    global.window = Object.create(window);
  }

  Object.defineProperty(window, 'location', {
    value: {
      search
    },
    writable: true
  });
};

describe('getSearchParamAddress', () => {
  afterEach(cleanup);
  it('should return the address if it is valid', () => {
    createMockLocation(`?address=${testAddress}`);

    const result = getSearchParamAddress();

    expect(result).toBe(testAddress);
  });

  it('should return null if the address is invalid', () => {
    createMockLocation('?address=invalidAddress');

    const result = getSearchParamAddress();

    expect(result).toBeNull();
  });

  it('should return null if the address parameter is not provided', () => {
    createMockLocation('');

    const result = getSearchParamAddress();

    expect(result).toBeNull();
  });
});
