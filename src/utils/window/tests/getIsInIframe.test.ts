import { getIsInIframe } from '../getIsInIframe';
import { getWindowParentOrigin } from '../getWindowParentOrigin';
import { isWindowAvailable } from '../isWindowAvailable';
jest.mock('../getWindowParentOrigin');
jest.mock('../isWindowAvailable');

describe('getIsInIframe', () => {
  let windowSpy: jest.SpyInstance;

  const mockGetWindowParentOrigin =
    getWindowParentOrigin as jest.MockedFunction<typeof getWindowParentOrigin>;

  const mockIsWindowAvailable = isWindowAvailable as jest.MockedFunction<
    typeof isWindowAvailable
  >;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
    jest.clearAllMocks();
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should return true when window is in iframe', () => {
    mockGetWindowParentOrigin.mockReturnValue('https://parent.com');
    mockIsWindowAvailable.mockReturnValue(true);
    windowSpy.mockImplementation(() => ({
      self: {},
      top: { different: true }
    }));

    expect(getIsInIframe()).toBe(true);
  });

  // it('should return false when window is not in iframe', () => {
  //   mockGetWindowParentOrigin.mockReturnValue('');
  //   const mockWindow = {
  //     self: {},
  //     top: {}
  //   };
  //   windowSpy.mockImplementation(() => mockWindow);
  //   mockWindow.self = mockWindow;
  //   mockWindow.top = mockWindow;

  //   expect(getIsInIframe()).toBe(false);
  // });

  // it('should return false when no parent origin is found', () => {
  //   mockGetWindowParentOrigin.mockReturnValue('');

  //   expect(getIsInIframe()).toBe(false);
  // });

  // it('should return true when security error occurs (cross-origin iframe)', () => {
  //   mockGetWindowParentOrigin.mockReturnValue('https://parent.com');
  //   windowSpy.mockImplementation(() => ({
  //     self: {},
  //     get top() {
  //       throw new Error('Security Error');
  //     }
  //   }));

  //   expect(getIsInIframe()).toBe(true);
  // });
});
