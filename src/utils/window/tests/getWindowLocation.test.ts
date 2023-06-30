import { getWindowLocation } from '../getWindowLocation';

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
        search: '?mock=test'
      }
    }));

    const search = getWindowLocation('search');
    expect(search).toStrictEqual('?mock=test');
  });

  it('Window should return pathname', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        pathname: '/mock/test'
      }
    }));

    const search = getWindowLocation('pathname');
    expect(search).toStrictEqual('/mock/test');
  });

  it('Window should return origin', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        origin: 'https://multiversx.com'
      }
    }));

    const search = getWindowLocation('origin');
    expect(search).toStrictEqual('https://multiversx.com');
  });
});
