import { getDefaultCallbackUrl } from '../getDefaultCallbackUrl';

const searchMock = '?search=mock';
const pathnameMock = '/unlock';
const originMock = 'https://multiversx.com';
const hashMock = '#main';
const hrefMock = 'https://multiversx.com/technology';
const urlMock = '/unlock?search=mock#main';

let windowSpy: jest.SpyInstance;

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get');
});
afterEach(() => {
  windowSpy.mockRestore();
});

describe('Get window location', () => {
  it('getDefaultCallbackUrl should be undefined', () => {
    windowSpy.mockImplementation(() => undefined);

    const callbackUrl = getDefaultCallbackUrl();
    expect(callbackUrl).toStrictEqual('');
  });

  it('window should return search', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        search: searchMock
      }
    }));

    const callbackUrl = getDefaultCallbackUrl();
    expect(callbackUrl).toStrictEqual(searchMock);
  });

  it('getDefaultCallbackUrl should return pathname', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        pathname: pathnameMock
      }
    }));

    const callbackUrl = getDefaultCallbackUrl();
    expect(callbackUrl).toStrictEqual(pathnameMock);
  });

  it('getDefaultCallbackUrl should return empty string when only origin is specified', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        origin: originMock
      }
    }));

    const callbackUrl = getDefaultCallbackUrl();
    expect(callbackUrl).toStrictEqual('');
  });

  it('getDefaultCallbackUrl should return hash', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        hash: hashMock
      }
    }));

    const callbackUrl = getDefaultCallbackUrl();
    expect(callbackUrl).toStrictEqual(hashMock);
  });

  it('getDefaultCallbackUrl should return empty', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        href: hrefMock
      }
    }));

    const callbackUrl = getDefaultCallbackUrl();
    expect(callbackUrl).toStrictEqual('');
  });

  it('getDefaultCallbackUrl should return complete URL without origin', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        pathname: pathnameMock,
        origin: originMock,
        hash: hashMock,
        href: hrefMock,
        search: searchMock
      }
    }));

    const callbackUrl = getDefaultCallbackUrl();
    expect(callbackUrl).toStrictEqual(urlMock);
  });
});
