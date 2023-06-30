import { getWindowLocation } from '../getWindowLocation';

const searchMock = '?search=mock';
const pathnameMock = '/unlock';
const originMock = 'https://multiversx.com';
const hashMock = '#main';
const hrefMock = 'https://multiversx.com/technology';

let windowSpy: jest.SpyInstance;

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get');
});
afterEach(() => {
  windowSpy.mockRestore();
});

describe('Get window location', () => {
  it('Window should be undefined', () => {
    windowSpy.mockImplementation(() => undefined);

    const search = getWindowLocation('search');
    expect(search).toStrictEqual('');
  });

  it('window should return search', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        search: searchMock
      }
    }));

    const search = getWindowLocation('search');
    expect(search).toStrictEqual(searchMock);
  });

  it('Window should return pathname', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        pathname: pathnameMock
      }
    }));

    const search = getWindowLocation('pathname');
    expect(search).toStrictEqual(pathnameMock);
  });

  it('Window should return origin', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        origin: originMock
      }
    }));

    const search = getWindowLocation('origin');
    expect(search).toStrictEqual(originMock);
  });

  it('Window should return hash', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        hash: hashMock
      }
    }));

    const search = getWindowLocation('hash');
    expect(search).toStrictEqual(hashMock);
  });

  it('Window should return href', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        href: hrefMock
      }
    }));

    const search = getWindowLocation('href');
    expect(search).toStrictEqual(hrefMock);
  });
});
