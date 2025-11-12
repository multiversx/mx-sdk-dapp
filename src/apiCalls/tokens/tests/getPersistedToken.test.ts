import { network } from '__mocks__/data/storeData/network';
import { testToken } from '__mocks__/data/testToken';
import { axiosInstance } from 'apiCalls/utils/axiosInstance';
import { TIMEOUT } from 'constants/network.constants';

import { getPersistedToken } from '../getPersistedToken';
import { tokenDataStorage } from '../tokenDataStorage';

jest.mock('apiCalls/utils/axiosInstance', () => ({
  axiosInstance: {
    get: jest.fn()
  }
}));

jest.mock('../tokenDataStorage', () => ({
  tokenDataStorage: {
    getItem: jest.fn(),
    setItem: jest.fn()
  }
}));

const mockedAxiosGet = axiosInstance.get as jest.MockedFunction<
  typeof axiosInstance.get
>;
const mockedGetItem = tokenDataStorage.getItem as jest.MockedFunction<
  typeof tokenDataStorage.getItem
>;
const mockedSetItem = tokenDataStorage.setItem as jest.MockedFunction<
  typeof tokenDataStorage.setItem
>;

describe('getPersistedToken tests', () => {
  const url = network.apiAddress;
  const expectedConfig = { timeout: TIMEOUT };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns cached token without calling axios when available', async () => {
    mockedGetItem.mockResolvedValueOnce(testToken);

    const result = await getPersistedToken<typeof testToken>(url);

    expect(result).toBe(testToken);
    expect(mockedGetItem).toHaveBeenCalledWith(url);
    expect(mockedAxiosGet).not.toHaveBeenCalled();
    expect(mockedSetItem).not.toHaveBeenCalled();
  });

  it('fetches token from API, stores it, and returns it when not cached', async () => {
    mockedGetItem.mockResolvedValueOnce(null);
    mockedAxiosGet.mockResolvedValueOnce({
      data: testToken
    } as any);

    const result = await getPersistedToken<typeof testToken>(url);

    expect(mockedGetItem).toHaveBeenCalledWith(url);
    expect(mockedAxiosGet).toHaveBeenCalledWith(url, expectedConfig);
    expect(mockedSetItem).toHaveBeenCalledWith(url, testToken);
    expect(result).toEqual(testToken);
  });
});
