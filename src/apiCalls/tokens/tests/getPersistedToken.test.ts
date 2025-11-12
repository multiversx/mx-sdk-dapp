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

const mockedAxiosGet = axiosInstance.get as jest.MockedFunction<
  typeof axiosInstance.get
>;

describe('getPersistedToken tests', () => {
  const url = network.apiAddress;
  const expectedConfig = { timeout: TIMEOUT };

  beforeEach(async () => {
    jest.clearAllMocks();
    await tokenDataStorage.clear();
  });

  it('returns cached token without calling axios when available', async () => {
    await tokenDataStorage.setItem(url, testToken);

    const result = await getPersistedToken<typeof testToken>(url);

    expect(result).toEqual(testToken);
    expect(mockedAxiosGet).not.toHaveBeenCalled();
  });

  it('fetches token from API, stores it, and returns it when not cached', async () => {
    mockedAxiosGet.mockResolvedValueOnce({
      data: testToken
    } as any);

    const result = await getPersistedToken<typeof testToken>(url);

    expect(mockedAxiosGet).toHaveBeenCalledWith(url, expectedConfig);
    expect(result).toEqual(testToken);

    // Verify it was actually stored
    const cached = await tokenDataStorage.getItem(url);
    expect(cached).toEqual(testToken);
  });
});
