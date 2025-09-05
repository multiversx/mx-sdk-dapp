// Mock the entire getWindowLocation module
jest.mock('../getWindowLocation', () => ({
  getWindowLocation: jest.fn()
}));

import { getWindowLocation } from '../getWindowLocation';

const searchMock = '?search=mock';
const pathnameMock = '/unlock';
const originMock = 'https://multiversx.com';
const hashMock = '#main';
const hrefMock = 'https://multiversx.com/technology';

const mockGetWindowLocation = getWindowLocation as jest.MockedFunction<
  typeof getWindowLocation
>;

// Helper function to create mock return value
const createMockLocation = (
  overrides: Partial<ReturnType<typeof getWindowLocation>> = {}
) => ({
  search: '',
  pathname: '',
  hash: '',
  origin: '',
  href: '',
  ...overrides
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Get window location', () => {
  it('Window should be undefined', () => {
    mockGetWindowLocation.mockReturnValue(createMockLocation());

    const { search } = getWindowLocation();
    expect(search).toStrictEqual('');
  });

  it('window should return search', () => {
    mockGetWindowLocation.mockReturnValue(
      createMockLocation({ search: searchMock })
    );

    const { search } = getWindowLocation();
    expect(search).toStrictEqual(searchMock);
  });

  it('Window should return pathname', () => {
    mockGetWindowLocation.mockReturnValue(
      createMockLocation({ pathname: pathnameMock })
    );

    const { pathname } = getWindowLocation();
    expect(pathname).toStrictEqual(pathnameMock);
  });

  it('Window should return origin', () => {
    mockGetWindowLocation.mockReturnValue(
      createMockLocation({ origin: originMock })
    );

    const { origin } = getWindowLocation();
    expect(origin).toStrictEqual(originMock);
  });

  it('Window should return hash', () => {
    mockGetWindowLocation.mockReturnValue(
      createMockLocation({ hash: hashMock })
    );

    const { hash } = getWindowLocation();
    expect(hash).toStrictEqual(hashMock);
  });

  it('Window should return href', () => {
    mockGetWindowLocation.mockReturnValue(
      createMockLocation({ href: hrefMock })
    );

    const { href } = getWindowLocation();
    expect(href).toStrictEqual(hrefMock);
  });
});
