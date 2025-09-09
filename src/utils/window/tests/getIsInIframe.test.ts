import { getIsInIframe } from '../getIsInIframe';
import { getWindowParentOrigin } from '../getWindowParentOrigin';
import { isWindowAvailable } from '../isWindowAvailable';
jest.mock('../getWindowParentOrigin');
jest.mock('../isWindowAvailable');

describe('getIsInIframe', () => {
  const mockGetWindowParentOrigin =
    getWindowParentOrigin as jest.MockedFunction<typeof getWindowParentOrigin>;

  const mockIsWindowAvailable = isWindowAvailable as jest.MockedFunction<
    typeof isWindowAvailable
  >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return true when window is in iframe (cross-origin)', () => {
    mockIsWindowAvailable.mockReturnValue(true);
    // trigger catch branch by throwing on parent origin fetch
    mockGetWindowParentOrigin.mockImplementation(() => {
      throw new Error('Security Error');
    });
    expect(getIsInIframe()).toBe(true);
  });

  it('should return false when window is not in iframe', () => {
    mockIsWindowAvailable.mockReturnValue(true);
    mockGetWindowParentOrigin.mockReturnValue('');
    expect(getIsInIframe()).toBe(false);
  });

  it('should return false when no parent origin is found', () => {
    mockIsWindowAvailable.mockReturnValue(true);
    mockGetWindowParentOrigin.mockReturnValue('');

    expect(getIsInIframe()).toBe(false);
  });

  it('should return true when security error occurs (cross-origin iframe)', () => {
    mockIsWindowAvailable.mockReturnValue(true);
    mockGetWindowParentOrigin.mockImplementation(() => {
      throw new Error('Security Error');
    });
    expect(getIsInIframe()).toBe(true);
  });
});
