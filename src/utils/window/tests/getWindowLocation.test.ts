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

    const { search } = getWindowLocation();
    expect(search).toStrictEqual('');
  });

  it('window should return search', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        search: searchMock
      }
    }));

    const { search } = getWindowLocation();
    expect(search).toStrictEqual(searchMock);
  });

  it('Window should return pathname', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        pathname: pathnameMock
      }
    }));

    const { pathname } = getWindowLocation();
    expect(pathname).toStrictEqual(pathnameMock);
  });

  it('Window should return origin', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        origin: originMock
      }
    }));

    const { origin } = getWindowLocation();
    expect(origin).toStrictEqual(originMock);
  });

  it('Window should return hash', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        hash: hashMock
      }
    }));

    const { hash } = getWindowLocation();
    expect(hash).toStrictEqual(hashMock);
  });

  it('Window should return href', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        href: hrefMock
      }
    }));

    const { href } = getWindowLocation();
    expect(href).toStrictEqual(hrefMock);
  });
});
