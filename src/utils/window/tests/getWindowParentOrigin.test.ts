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
    const mockWindow = {
      document: {
        referrer: mockReferrer
      }
    };

    // Set the mock safeWindow
    constants.safeWindow = mockWindow;

    const { getWindowParentOrigin } = require('../getWindowParentOrigin');
    expect(getWindowParentOrigin()).toBe('https://example.com');
  });

  it('should return empty string when referrer is not available', () => {
    const mockWindow = {
      document: {
        referrer: ''
      }
    };

    // Set the mock safeWindow
    constants.safeWindow = mockWindow;

    const { getWindowParentOrigin } = require('../getWindowParentOrigin');
    expect(getWindowParentOrigin()).toBe('');
  });

  it('should return empty string when safeWindow is not available', () => {
    // Set safeWindow to undefined
    constants.safeWindow = undefined;

    const { getWindowParentOrigin } = require('../getWindowParentOrigin');
    expect(getWindowParentOrigin()).toBe('');
  });

  it('should return empty string and log error when URL is invalid', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const mockWindow = {
      document: {
        referrer: 'invalid-url'
      }
    };

    // Set the mock safeWindow
    constants.safeWindow = mockWindow;

    const { getWindowParentOrigin } = require('../getWindowParentOrigin');
    expect(getWindowParentOrigin()).toBe('');
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
