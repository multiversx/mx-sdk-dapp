import { addOriginToLocationPath } from '../addOriginToLocationPath';

let windowSpy: jest.SpyInstance;

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get');
});
afterEach(() => {
  windowSpy.mockRestore();
});

describe('Add window origin to pathname', () => {
  it('should leave the path unchanged if origin is not available', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        origin: ''
      }
    }));

    const path = addOriginToLocationPath('http://somesite/unlock');
    expect(path).toStrictEqual('http://somesite/unlock');
  });

  it('should leave the path unchanged if it contains origin', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        origin: 'https://multiversx.com'
      }
    }));

    const path = addOriginToLocationPath('http://somesite/unlock');
    expect(path).toStrictEqual('http://somesite/unlock');
  });

  it('should leave the path unchanged if it contains the same origin as current one', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        origin: 'http://somesite'
      }
    }));

    const path = addOriginToLocationPath('http://somesite/unlock');
    expect(path).toStrictEqual('http://somesite/unlock');
  });

  it('should add the current origin to the path', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        origin: 'https://multiversx.com'
      }
    }));

    const path = addOriginToLocationPath('/unlock');
    expect(path).toStrictEqual('https://multiversx.com/unlock');
  });
});
