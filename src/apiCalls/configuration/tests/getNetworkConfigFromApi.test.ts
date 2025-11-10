import { testNetwork } from '__mocks__/accountConfig';
import { networkConfig } from '__mocks__/data/networkConfig';
import { getNetworkConfigFromApi } from '../getNetworkConfigFromApi';

describe('getNetworkConfigFromApi tests', () => {
  it('returns network config from API when url is valid', async () => {
    const result = await getNetworkConfigFromApi(testNetwork.apiAddress);
    expect(result).toEqual(networkConfig.data.config);
  });
});
