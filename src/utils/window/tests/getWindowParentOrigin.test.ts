// Mock the safeWindow constant
jest.mock('constants/window.constants', () => {
  let mockSafeWindow = window;
  return {
    get safeWindow() {
      return mockSafeWindow;
    },
    set safeWindow(value) {
      mockSafeWindow = value;
    }
  };
});

describe('getWindowParentOrigin', () => {
  let constants: any;

  beforeEach(() => {
    // Import the mocked constants module
    constants = require('constants/window.constants');
    // Reset to default window
    constants.safeWindow = window;
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('should return origin from document.referrer when available', () => {
    const mockReferrer = 'https://example.com/some/path';
    Object.defineProperty(document, 'referrer', {
      configurable: true,
      value: mockReferrer
    });

    const { getWindowParentOrigin } = require('../getWindowParentOrigin');
    expect(getWindowParentOrigin()).toBe('https://example.com');
  });

  it('should not return origin from ancestorOrigins when referrer is not available', () => {
    Object.defineProperty(document, 'referrer', {
      configurable: true,
      value: ''
    });

    const mockAncestorOrigins = {
      length: 2,
      0: 'https://first.com',
      1: 'https://second.com'
    };

    const mockWindow = {
      document: {
        referrer: ''
      },
      location: {
        ancestorOrigins: mockAncestorOrigins
      }
    };

    // Set the mock safeWindow
    constants.safeWindow = mockWindow;

    const { getWindowParentOrigin } = require('../getWindowParentOrigin');
    expect(getWindowParentOrigin()).toBe('');
  });

  it('should return empty string when no ancestorOrigins are available', () => {
    Object.defineProperty(document, 'referrer', {
      configurable: true,
      value: ''
    });

    const mockWindow = {
      document: {
        referrer: ''
      },
      location: {
        ancestorOrigins: { length: 0 }
      }
    };

    // Set the mock safeWindow
    constants.safeWindow = mockWindow;

    const { getWindowParentOrigin } = require('../getWindowParentOrigin');
    expect(getWindowParentOrigin()).toBe('');
  });

  it('should return empty string and log error when URL is invalid', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    Object.defineProperty(document, 'referrer', {
      configurable: true,
      value: 'invalid-url'
    });

    const { getWindowParentOrigin } = require('../getWindowParentOrigin');
    expect(getWindowParentOrigin()).toBe('');
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
