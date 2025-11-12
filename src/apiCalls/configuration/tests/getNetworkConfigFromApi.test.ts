import { testNetwork } from '__mocks__/accountConfig';
import { networkConfig } from '__mocks__/data/networkConfig';
import { NETWORK_CONFIG_ENDPOINT } from 'apiCalls/endpoints';
import { getNetworkConfigFromApi } from '../getNetworkConfigFromApi';

describe('getNetworkConfigFromApi tests', () => {
  it('returns network config from API when url is valid', async () => {
    const result = await getNetworkConfigFromApi(testNetwork.apiAddress);
    expect(result).toEqual(networkConfig.data.config);
  });

  it('returns null and logs an error when the request fails', async () => {
    const apiAddress = 'htttps://invalid-api.com';
    const configUrl = `${apiAddress}/${NETWORK_CONFIG_ENDPOINT}`;
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const result = await getNetworkConfigFromApi(apiAddress);

    expect(consoleSpy).toHaveBeenCalledWith(
      'error fetching configuration for ',
      configUrl
    );
    expect(result).toBeNull();

    consoleSpy.mockRestore();
  });
});
