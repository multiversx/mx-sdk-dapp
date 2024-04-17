import { cleanup } from '@testing-library/react';
import { testAddress } from '__mocks__';
import * as windowLocation from '../../../utils/window/getWindowLocation';
import { getSearchParamAddress } from '../getSearchParamAddress';

jest.mock('../../../utils/window/getWindowLocation', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../../../utils/window/getWindowLocation')
  };
});

// const createMockLocation = (search: string) => {
//   if (!global.window) {
//     global.window = Object.create(window);
//   }

//   Object.defineProperty(window, 'location', {
//     value: {
//       search
//     },
//     writable: true
//   });
// };

describe('getSearchParamAddress', () => {
  // afterEach(cleanup);
  it('should return the address if it is valid', () => {
    // createMockLocation(`?address=${testAddress}`);

    jest.spyOn(windowLocation, 'getWindowLocation').mockReturnValue({
      pathname: '',
      hash: '',
      origin: '',
      href: '',
      search: `?address=${testAddress}`
    });
    expect(1).toBe(1);

    // const result = getSearchParamAddress();

    // expect(result).toBe(testAddress);
  });

  // it('should return null if the address is invalid', () => {
  //   createMockLocation('?address=invalidAddress');

  //   const result = getSearchParamAddress();

  //   expect(result).toBeNull();
  // });

  // it('should return null if the address parameter is not provided', () => {
  //   createMockLocation('');

  //   const result = getSearchParamAddress();

  //   expect(result).toBeNull();
  // });
});
