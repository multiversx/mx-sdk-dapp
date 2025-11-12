import { network } from '__mocks__/data/storeData/network';
import { networkSelector } from 'store/selectors';
import { getState } from 'store/store';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { getDefaultNativeAuthConfig } from '../getDefaultNativeAuthConfig';

jest.mock('store/store');
jest.mock('store/selectors');
jest.mock('utils/window/getWindowLocation');

describe('getDefaultNativeAuthConfig tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();

    (getState as jest.Mock).mockReturnValue({});
    (networkSelector as jest.Mock).mockReturnValue({
      apiAddress: network.apiAddress
    });
    (getWindowLocation as jest.Mock).mockReturnValue({
      origin: 'https://test-origin.com'
    });
  });

  it('should return default config with network apiAddress and window origin', () => {
    const result = getDefaultNativeAuthConfig();

    expect(result).toEqual({
      origin: 'https://test-origin.com',
      apiAddress: network.apiAddress,
      expirySeconds: 86400,
      tokenExpirationToastWarningSeconds: 300
    });
  });
});
